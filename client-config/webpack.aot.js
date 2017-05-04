const webpack = require('webpack');
const WebpackMd5Hash = require('webpack-md5-hash');
const helpers = require('./helpers');
var CopyWebpackPlugin = (CopyWebpackPlugin = require('copy-webpack-plugin'), CopyWebpackPlugin.default || CopyWebpackPlugin);
const HtmlWebpackPlugin = require('html-webpack-plugin');
const commonConfig = require('./webpack.common.js'); // the settings that are common to prod and dev

const AotPlugin = require('@ngtools/webpack').AotPlugin;

const DefinePlugin = require('webpack/lib/DefinePlugin');
const UglifyJsPlugin = require('webpack/lib/optimize/UglifyJsPlugin');

module.exports = {
  entry: {
    polyfills: './src/main-web/polyfills-aot.ts',
    vendor: './src/main-web/vendor.ts',
    main: './src/main-web/main.ts'
  },
  output: {
    path: helpers.root('./dist'),
    filename: 'main-web/app/[name].[chunkhash].bundle.js',
    sourceMapFilename: 'main-web/app/[name].[chunkhash].bundle.map',
    chunkFilename: 'main-web/app/[id].[chunkhash].js'
  },
  resolve: {
    unsafeCache: true,
    extensions: ['.ts', '.js', '.css', '.scss', '.html'],
    modules: ['node_modules', helpers.root('./src/main-web')]
  },
  module: {
    noParse: [
      /es6-shim/,
      /reflect-metadata/,
      /zone\.js(\/|\\)dist(\/|\\)zone-microtask/
    ],
    rules: [
      {test: /\.ts$/, use: ['@ngtools/webpack'], exclude: [/\.(e2e|spec)\.ts$/]},
      {test: /\.html$/, use: 'raw-loader'},
      {test: /\.scss$/, use: ['raw-loader', 'sass-loader']}
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(commonConfig.metadata.ENV)
    }),
    new webpack.optimize.OccurrenceOrderPlugin(true),
    new webpack.optimize.CommonsChunkPlugin({
      name: ['polyfills', 'vendor'].reverse(),
      minChunks: Infinity
    }),
    new webpack.ProgressPlugin(),
    new webpack.LoaderOptionsPlugin({
      debug: false,
      minimise: true
    }),
    new WebpackMd5Hash(),
    new AotPlugin({
      tsConfigPath: './tsconfig.aot.json'
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
    }),
    new CopyWebpackPlugin([
      {from: 'src/imgs', to: 'imgs'},
      {from: 'src/o2osdk', to: 'o2osdk'}
    ]),
    new HtmlWebpackPlugin({
      template: 'src/views/index.html',
      chunksSortMode: 'dependency'
    })
  ],
  node: {
    global: true,
    process: true,
    Buffer: false,
    crypto: 'empty',
    module: false,
    clearImmediate: false,
    setImmediate: false,
    clearTimeout: true,
    setTimeout: true
  }
};
