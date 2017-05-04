var path = require('path');

module.exports = function (config) {
  var testWebpackConfig = require('./webpack.test.js');
  config.set({

    basePath: '',
    frameworks: ['jasmine'],
    exclude: [],
    // list of files / patterns to load in the browser
    // we are building the test environment in ./spec-bundle.js
    files: [{pattern: 'spec-bundle.js', watched: false}],

    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {'spec-bundle.js': ['webpack', 'sourcemap', 'coverage']},

    // Webpack Config at ./webpack.test.config.js
    webpack: testWebpackConfig,

    coverageReporter: {
      dir: 'coverage/',
      reporters: [
        {type: 'text-summary'},
        {type: 'html'}
      ]
    },

    // 웹팩 서버 실행시, 쓸때없는 정보가 많이뜨기 때문에 noInfo: true
    webpackServer: {noInfo: true},

    // 테스트 결과 리포팅 방법 결정
    reporters: ['progress', 'coverage'],
    port: 9876,
    colors: true,

    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,

    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,
    autoWatchBatchDelay: 300,

    browsers: ['Chrome'],
    plugins: [
      'karma-webpack',
      'karma-jasmine',
      'karma-coverage',
      'karma-chrome-launcher',
      'karma-sourcemap-loader'
    ],

    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false
  });
};
