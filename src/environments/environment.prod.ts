const { firebase_conf, rapid_api } = require('../../.runtimeconfig.json');

export const environment = {
  production: true,
  firebase: firebase_conf,
  remoteAssetsCdn: rapid_api.cdn_url
};
