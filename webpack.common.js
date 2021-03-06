'use strict';

const webpack = require('webpack');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const helpers           = require('./webpack.helpers');

module.exports = {
  entry: {
    'polyfills' : './src/app.polyfills.js',
    'vendor'    : './src/app.vendor.js',
    'app'       : './src/app.main.js'
  },

  module: {
    loaders: [
      {
        test    : /\.js$/,
        loader  : 'babel',
        exclude : /node_modules/
      },
      {
        test   : /\.html$/,
        loader : 'html'
      },
      {
        test    : /\.css$/,
        loader  : 'raw-loader'
      }
    ]
  },

  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: ['app', 'vendor', 'polyfills']
    }),

    new HtmlWebpackPlugin({
      template: 'src/index.html'
    })
  ]
};
