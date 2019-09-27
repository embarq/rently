const webpack = require('webpack');

module.exports = (config, options) => {
  console.log('base/process.env.SERVER', process.env.SERVER);
  config.plugins.push(
    new webpack.DefinePlugin({
      SERVER: process.env.SERVER ? "true" : "false"
    })
  );

  return config;
}
