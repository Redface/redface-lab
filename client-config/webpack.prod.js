const webpack = require('webpack');
const WebpackMd5Hash = require('webpack-md5-hash');
const path = require('path');
const helpers = require('./helpers');
const webpackMerge = require('webpack-merge'); // used to merge webpack configs
const commonConfig = require('./webpack.common.js'); // the settings that are common to prod and dev

const DefinePlugin = require('webpack/lib/DefinePlugin');
const UglifyJsPlugin = require('webpack/lib/optimize/UglifyJsPlugin');

module.exports = webpackMerge(commonConfig.core, {
  output: {
    path: helpers.root('./dist'),
    filename: 'main-web/app/[name].[chunkhash].bundle.js',
    sourceMapFilename: 'main-web/app/[name].[chunkhash].bundle.map',
    chunkFilename: 'main-web/app/[id].[chunkhash].chunk.js'
  },
  plugins: [
    new webpack.LoaderOptionsPlugin({
      debug: true,
      minimize: true
    }),
    new WebpackMd5Hash(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(commonConfig.metadata.ENV)
    }),

    new UglifyJsPlugin({
      beautify: false, //prod
      mangle: {
        screw_ie8: true,
        keep_fnames: true
      }, //prod
      compress: {
        warnings: false,
        screw_ie8: true
      }, //prod
      comments: false, //prod
      drop_debugger: true,
      drop_console: true,
      unsafe: true
    })
  ]
});
