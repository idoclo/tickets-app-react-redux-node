var webpack = require('webpack');
var path = require('path');

var commonPlugin = new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.bundle.js');

module.exports = {
  entry: {
    js: './client/index.js',
    html: './client/index.html',
    vendor: [ 'react' ]
  },
  devtool: 'source-map',
  output: {
    path: path.resolve(__dirname, 'build'),
    publicPath: '/',
    filename: 'bundle.js'
  },
  module: {
    preLoaders: [
      { test: /\.js?$/, loader: 'eslint', exclude: /node_modules/ }
    ],
    loaders: [
      {
        test: /\.js ?$/,
        exclude: /(node_modules)/,
        loader: 'babel',
        query: {
          presets: [ 'react', 'es2015' ]
        }
      },
      {
        test: /\.html$/,
        loader: 'file?name=[name].[ext]'
      },
      {
        test: /\.css/,
        exclude: /(node_modules)/,
        loaders: [ 'style', 'css' ]
      }
    ]
  },
  resolve: {
    extensions: [ '', '.js', '.jsx' ]
  },
  plugins: [ commonPlugin ],
  devServer: {
    colors: true,
    inline: true,
    noInfo: true,
    port: 3000
  }
};