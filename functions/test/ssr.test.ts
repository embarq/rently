import test, { ExecutionContext } from 'ava';
import * as request from 'request-promise-native';

const { app } = require(`${ process.cwd() }/dist/server.js`);
const SSR_SERVER_URL = `http://localhost:5003`;

/** Passes if response markup contains component tag */
async function assertRenderedPage(t: ExecutionContext, url: string, component: string) {
  const res = await request.get(`${ SSR_SERVER_URL }${ url }`);
  t.true(res.includes(component));
}

let server: any = null;

test.before(() => {
  server = app.listen(5003, () => console.log('SSR instance started'));
});

test.after(() => {
  if (server != null) {
    server.close(() => console.log('SSR instance stopped'));
  }
});

test(
  'should render home page', assertRenderedPage,
  `/`, 'rty-homepage'
);

test(
  'should render properties page', assertRenderedPage,
  `/properties`, 'rty-properties'
);

test(
  'should render 404', assertRenderedPage,
  `/missing-page-url`, 'rty-not-found'
);
