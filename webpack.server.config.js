const path = require('path');
const webpack = require('webpack');

module.exports = {
  mode: 'none',
  entry: {
    server: './server.ts'
  },
  target: 'node',
  resolve: {
    extensions: ['.ts', '.js'],
    mainFields: ['main', 'module', 'browser'],
    alias: {
      ['firebase/app']: path.resolve(__dirname, 'node_modules/firebase/app/dist/index.cjs.js'),
      ['firebase/auth']: path.resolve(__dirname, 'node_modules/firebase/auth/dist/index.cjs.js'),
      ['firebase/storage']: path.resolve(__dirname, 'node_modules/firebase/storage/dist/index.cjs.js'),
      ['firebase/firestore']: path.resolve(__dirname, 'node_modules/firebase/firestore/dist/index.cjs.js')
    },
  },
  externals: [
    /node_modules/,
    (context, request, callback) => {
      const regex = new RegExp('^firebase(\/([\w\d]+))*');
      // exclude firebase products from being bundled
      // so they will be loaded using require() at runtime.
      if(regex.test(request)) {
        return callback(null, 'commonjs ' + request);
      }
      callback();
    }
  ],
  optimization: {
    minimize: false
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].js',
    library: 'app',
    libraryTarget: 'umd',
  },
  module: {
    noParse: /polyfills-.*\.js/,
    rules: [
      { test: /\.ts$/, loader: 'ts-loader' },
      {
        // Mark files inside `@angular/core` as using SystemJS style dynamic imports.
        // Removing this will cause deprecation warnings to appear.
        test: /(\\|\/)@angular(\\|\/)core(\\|\/).+\.js$/,
        parser: { system: true },
      },
    ]
  },
  plugins: [
    new webpack.ContextReplacementPlugin(
      // fixes WARNING Critical dependency: the request of a dependency is an expression
      /(.+)?angular(\\|\/)core(.+)?/,
      path.join(__dirname, 'src'), // location of your src
      {} // a map of your routes
    ),
    new webpack.ContextReplacementPlugin(
      // fixes WARNING Critical dependency: the request of a dependency is an expression
      /(.+)?express(\\|\/)(.+)?/,
      path.join(__dirname, 'src'),
      {}
    ),
    new webpack.DefinePlugin({
      SERVER: 'true'
    })
  ]
};
