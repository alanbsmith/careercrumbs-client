/* eslint-disable no-var */

var webpack = require('webpack');

module.exports = {
  entry: [
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/only-dev-server',
    './src/index.js'
  ],
  module: {
    preLoaders: [
      {
        test: /\.js$/,
        exclude: [/node_modules/],
        loader: 'eslint-loader'
      }
    ],
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'react-hot!babel'
      }
    ]
  },
  eslint: {
    failOnWarning: false,
    failOnError: false,
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  output: {
    path: __dirname + '/dist',
    publicPath: '/',
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: './dist',
    hot: true
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
}
