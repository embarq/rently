import 'zone.js/dist/zone-node';
(global as any).WebSocket = require('ws');
(global as any).XMLHttpRequest = require('xhr2');

import { provideModuleMap } from '@nguniversal/module-map-ngfactory-loader';
import { ngExpressEngine } from '@nguniversal/express-engine';
import * as express from 'express';
import {join} from 'path';
import { inspect } from 'util';

const universalApp = express();
const DIST_FOLDER = join(process.cwd(), 'dist/browser');
const {AppServerModuleNgFactory, LAZY_MODULE_MAP} = require('./dist/server/main');

function renderRequest(req, res) {
  const absoluteUrl = join(`${ req.protocol }://${ req.hostname }`, req.originalUrl);
  const reqConf = {
    host: req.hostname,
    path: req.path,
    url: req.url,
    origin: req.originalUrl
  };
  console.log(`[${ req.method }] ${absoluteUrl}`);
  console.log(inspect(reqConf, false, 5, true));

  const startTime = Date.now();
  const templateName = process.env.STANDALONE ? 'index' : 'index-template';

  req.originalUrl = req.originalUrl.replace('/dc-rently/us-central1/ssr', '');

  res.render(templateName, { req }, (err, html) => {
    if (err) {
      console.error('[rendering error]', req.path, err.message);
      console.error(err);
      return res.status(500).send(err.message);
    }
    console.log('[rendered]', req.path, 'in', Date.now() - startTime, 'ms');
    res.send(html);
  });
}

universalApp.engine('html', ngExpressEngine({
  bootstrap: AppServerModuleNgFactory,
  providers: [
    provideModuleMap(LAZY_MODULE_MAP)
  ]
}));

universalApp.set('view engine', 'html');
universalApp.set('views', DIST_FOLDER);

// Serve static files from /browser
console.log('[app]: using dir as static folder', DIST_FOLDER);
universalApp.use(
  express.static(DIST_FOLDER, { maxAge: '1y' })
);

// All regular routes use the Universal engine
universalApp.get('*', renderRequest);
universalApp.get('/', renderRequest);

export const app = universalApp;
