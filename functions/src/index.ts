import * as functions from 'firebase-functions';
const universal = require(`${ process.cwd() }/dist/server`);

export const ssr = functions
  .runWith({ memory: '512MB' })
  .https.onRequest(universal.app);
