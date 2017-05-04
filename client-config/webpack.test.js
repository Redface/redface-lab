const webpack = require('webpack');
const helpers = require('./helpers');

/**
 * Webpack Plugins
 */
const ProvidePlugin = require('webpack/lib/ProvidePlugin');
const DefinePlugin = require('webpack/lib/DefinePlugin');

module.exports = {

  devtool: 'inline-source-map',
  resolve: {
    extensions: ['.ts', '.js'],
    modules: ['node_modules', helpers.root('./src/main-web')]
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'tslint-loader',
        enforce: 'pre',
        exclude: [helpers.root('node_modules')]
      },
      {
        test: /\.ts$/,
        use: ['awesome-typescript-loader', 'angular2-template-loader'],
        exclude: [/\.e2e\.ts$/]
      },
      {test: /\.json$/, use: 'json-loader', exclude: [helpers.root('src/index.html')]},
      {test: /\.scss$/, use: ['raw-loader', 'sass-loader']},
      {test: /\.html$/, use: 'raw-loader', exclude: [helpers.root('src/index.html')]},
      {
        test: /\.(js|ts)$/, loader: 'istanbul-instrumenter-loader',
        query: {
          esModules: true
        },
        include: helpers.root('src/public/'),
        enforce: 'post',
        exclude: [
          /\.(e2e|spec)\.ts$/,
          /node_modules/
        ]
      }
    ]
  },

  plugins: [
    new webpack.ContextReplacementPlugin(
      // The (\\|\/) piece accounts for path separators in *nix and Windows
      /angular(\\|\/)core(\\|\/)(esm(\\|\/)src|src)(\\|\/)linker/,
      helpers.root('./src/main-web')
    )
  ],

  node: {
    global: true,
    process: true,
    crypto: 'empty',
    module: false,
    clearImmediate: false,
    setImmediate: false
  }

};
