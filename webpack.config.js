const path = require('path')
const webpack = require('webpack')
const BrowserSync = require('browser-sync-webpack-plugin')

module.exports = {
  devtool: 'cheap-module-eval-source-map',
  entry: './src/app',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  plugins: [
    new BrowserSync({
      host: 'localhost',
      port: 8081,
      proxy: 'http://localhost:8080'
    })
  ],
  module: {
    loaders: [{
      test: /\.sass$/,
      loaders: [
        'style',
        // 'css?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]',
        'css',
        'sass'
      ]
    }]
  }
}