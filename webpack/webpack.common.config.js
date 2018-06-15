const path = require('path');
var filename = 'ethjs-util';
const commonConfig = {
  module: {
    rules: [
      {
        test: /\.js$/,
        loaders: ['babel-loader'],
        exclude: /node_modules/,
      },
      {
        test: /\.json$/,
        loader: 'json',
      },
    ],
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: filename + '.js',
  }
}
module.exports = commonConfig;