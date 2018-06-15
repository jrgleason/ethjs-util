const webpackMerge = require('webpack-merge');
const commonConfig = require('./webpack.common.config.js');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const prodConfig = {
  mode: 'production',
  optimization: {
    minimizer: [new UglifyJsPlugin({ sourceMap: false })]
  },
}
module.exports = webpackMerge(commonConfig, prodConfig);