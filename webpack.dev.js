'use strict';

const webpackMerge      = require('webpack-merge');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const commonConfig      = require('./webpack.common.js');
const helpers           = require('./webpack.helpers');

module.exports = webpackMerge(commonConfig, {
  devtool: 'cheap-module-eval-source-map',

  output: {
    path          :  helpers.root('dist'),
    publicPath    : 'http://localhost:1337/',
    filename      : '[name].js',
    chunkFilename : '[id].chunk.js'
  },

  plugins: [
    new ExtractTextPlugin('[name].css')
  ],

  devServer: {
    historyApiFallback : true,
    stats              : 'minimal'
  }
});
