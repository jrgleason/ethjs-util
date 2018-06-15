const webpackMerge = require('webpack-merge');
const commonConfig = require('./webpack.common.config.js');
const devConfig = {
  mode: 'development',
  module: {
    rules: [
      {
        enforce: "pre",
        test: /\.js$/,
        exclude: /node_modules|webpack|lib/,
        loader: "eslint-loader",
      }
    ]
  }
}
module.exports = webpackMerge(commonConfig, devConfig);