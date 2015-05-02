// Karma configuration
// Generated on Sat May 02 2015 21:34:44 GMT+0200 (CEST)

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',

    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],

    // list of files / patterns to load in the browser
    files: [
      'spec/spec_index.js'
    ],

    // list of files to exclude
    exclude: [
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
        'spec/spec_index.js': ['webpack', 'sourcemap']
    },

    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['dots'],

    // web server port
    port: 9876,

    // enable / disable colors in the output (reporters and logs)
    colors: true,

    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    //logLevel: config.LOG_INFO,

    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,

    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['PhantomJS'],

    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false,

      webpack: {
          // karma watches the test entry points
          // (you don't need to specify the entry option)
          // webpack watches dependencies

          // webpack configuration

          devtool: "inline-source-map",

          module: {
              loaders: [
                  { test: /\.(js|jsx)$/, loaders: ['babel'], exclude: /node_modules/}
              ]
          }

      },

      plugins: [
          require("karma-sourcemap-loader"),
          require("karma-jasmine"),
          require("karma-webpack"),
          require("karma-phantomjs-launcher"),
          require("karma-chrome-launcher")
    ],

      webpackServer: {
        noInfo: true //please don't spam the console when running in karma!
    }
  });



};
