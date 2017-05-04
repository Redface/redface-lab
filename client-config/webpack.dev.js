const webpack = require('webpack');
const webpackMerge = require('webpack-merge'); // used to merge webpack configs
const helpers = require('./helpers');

const commonConfig = require('./webpack.common.js'); // the settings that are common to prod and dev

module.exports = webpackMerge(commonConfig.core, {
  output: {
    path: helpers.root('./dist'),
    filename: 'main-web/app/[name].bundle.js',
    chunkFilename: 'main-web/app/[id].chunk.js'
  },
  devtool: 'eval',
  plugins: [
    new webpack.LoaderOptionsPlugin({
      debug: true
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(commonConfig.metadata.ENV)
    })
  ]
});
