import * as functions from 'firebase-functions';
import * as firebase from 'firebase';

const conf = functions.config();

/** Fixes firebase imports override in webpack.server.config.js */
firebase.initializeApp({
  appId: conf.webclient_conf.app_id,
  authDomain: conf.webclient_conf.auth_domain,
  databaseUrl: conf.webclient_conf.database_url,
  messagingSenderId: conf.webclient_conf.messaging_sender_id,
  projectId: conf.webclient_conf.project_id,
  storageBucket: conf.webclient_conf.storage_bucket
});

const universal = require(`${ process.cwd() }/dist/server`);

export const ssr = functions
  .runWith({ memory: '512MB' })
  .https.onRequest(universal.app);
