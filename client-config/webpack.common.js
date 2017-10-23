const webpack = require('webpack');
const helpers = require('./helpers');
const path = require('path');

var CopyWebpackPlugin = (CopyWebpackPlugin = require('copy-webpack-plugin'), CopyWebpackPlugin.default || CopyWebpackPlugin);
const HtmlWebpackPlugin = require('html-webpack-plugin');

const ENV = process.env.NODE_ENV;
if (ENV !== 'local' && ENV !== 'local-server' && ENV !== 'dev' && ENV !== 'prod') {
  throw new Error('NODE_ENV must be specified (local or dev or prod)');
}

const PROXY = ENV === 'local-server' ? {"/api/v1/**": "http://localhost:8080"} : {};
const BASE_ENTRY_PATH = './src/main-web/';
const MAIN_ENTRY_PATH = ENV === 'local' ? BASE_ENTRY_PATH + 'main-local.ts' : BASE_ENTRY_PATH + 'main.ts';
const METADATA = {
  host: 'localhost',
  port: 3000,
  ENV: ENV
};

module.exports = {
  'metadata': METADATA,
  'core': {
    cache: true,
    entry: {
      'polyfills': BASE_ENTRY_PATH + 'polyfills.ts',
      'vendor': BASE_ENTRY_PATH + 'vendor.ts',
      'main': MAIN_ENTRY_PATH
    },
    performance: {
      hints: false
    },
    stats: {
      // colors: true,
      // modules: true,
      // reasons: true,
      // errorDetails: true,
      //
      // hash: true,
      // version: true,
      // timings: true,
      // assets: true,
      // chunks: true,
      // reasons: false,
      // children: false,
      // source: false,
      // errors: false,
      // warnings: false,
      // publicPath: false
    },
    resolve: {
      unsafeCache: true,
      extensions: ['.ts', '.js', '.css', '.scss', '.html'],
      modules: ['node_modules', path.resolve('./')]
    },
    module: {
      noParse: [
        /es6-shim/,
        /reflect-metadata/,
        /zone\.js(\/|\\)dist(\/|\\)zone-microtask/
      ],
      rules: [
        {
          test: /\.ts$/,
          use: 'tslint-loader',
          enforce: 'pre',
          exclude: [helpers.root('node_modules')]
        },
        {
          test: /\.ts$/,
          use: ['awesome-typescript-loader', 'angular2-template-loader', 'angular-router-loader'],
          exclude: [/\.(spec|e2e)\.ts$/, /node_modules\/(?!(ng2-.+))/]
        },
        {
          test: /\.json$/,
          use: 'json-loader'
        },
        {
          test: /\.scss$/, use: ['raw-loader', 'sass-loader']
        },
        {
          test: /\.html$/,
          use: 'raw-loader'
        }
      ]
    },
    devServer: {
      port: METADATA.port,
      host: METADATA.host,
      proxy: PROXY,
      historyApiFallback: true,
      stats: 'normal',
      watchOptions: {
        aggregateTimeout: 300,
        poll: 1000
      }
    },

    plugins: [
      new webpack.ContextReplacementPlugin(
        /angular(\\|\/)core(\\|\/)@angular/,
        helpers.root(BASE_ENTRY_PATH)
      ),
      new webpack.optimize.OccurrenceOrderPlugin(true),

      new webpack.optimize.CommonsChunkPlugin({
        name: ['polyfills', 'vendor'].reverse()
      }),

      new CopyWebpackPlugin([
        {from: 'src/assets', to: 'assets'}
      ]),
      new HtmlWebpackPlugin({
        template: 'src/views/index.html',
        chunksSortMode: 'dependency'
      })
    ],
    node: {
      global: true,
      process: true,
      crypto: 'empty',
      module: false,
      clearImmediate: false,
      setImmediate: false
    }
  }
};
