const remoteConf = require('../../.runtimeconfig.json');

export const environment = {
  production: true,
  firebase: remoteConf.webclient_conf,
  remoteAssetsCdn: remoteConf.rapid_api.cdn_url
};
