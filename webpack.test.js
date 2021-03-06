'use strict';

module.exports = {
  devtool: 'inline-source-map',

  // resolve: {
  //   extensions: ['', '.js']
  // },

  module: {
    loaders: [
      {
        test    : /\.js$/,
        loader  : 'babel',
        exclude : /node_modules/
      },
      {
        test: /\.html$/,
        loader: 'html'
      },
      {
        test: /\.css$/,
        loader: 'null'
      }
    ]
  }
}
