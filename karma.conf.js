'use strict';

const webpackConfig = require('./webpack.test');

module.exports = (config) => {
  const _config = {
    basePath: '',

    frameworks: ['jasmine', 'mocha', 'chai'],

    files: [
      './test/spec-helper.js',
      './src/**/*.spec.js'
    ],

    preprocessors: {
      './test/spec-helper.js': ['webpack', 'babel'],
      './src/**/*.spec.js': ['webpack', 'sourcemap']
    },

    webpack: webpackConfig,

    webpackMiddleware: {
      stats: 'errors-only'
    },

    webpackServer: {
      noInfo: true
    },

    // reporters: ['progress'],
    colors: true,
    logLevel: config.LOG_INFO
  };

  config.set(_config);
};
