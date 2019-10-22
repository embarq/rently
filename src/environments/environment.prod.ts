const remoteConf = require('../../.runtimeconfig.json');

export const environment = {
  production: true,
  firebase: {
    apiKey: remoteConf.webclient_conf.api_key,
    appId: remoteConf.webclient_conf.app_id,
    authDomain: remoteConf.webclient_conf.auth_domain,
    databaseUrl: remoteConf.webclient_conf.database_url,
    messagingSenderId: remoteConf.webclient_conf.messaging_sender_id,
    projectId: remoteConf.webclient_conf.project_id,
    storageBucket: remoteConf.webclient_conf.storage_bucket
  },
  remoteAssetsCdn: remoteConf.rapid_api.cdn_url
};
