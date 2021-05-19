const webpack = require('webpack')
const { merge } = require('webpack-merge')

const commonConfiguration = require('./webpack.common.js')
const paths = require('./paths')

module.exports = merge(commonConfiguration, {
  /* ... */
  mode: 'development',
  devServer: {
    historyApiFallback: true,
    contentBase: paths.build,
    open: true,
    compress: true,
    hot: true,
    port: 8080,
  },

  plugins: [
    /* ... */
    // Only update what has changed on hot reload
    new webpack.HotModuleReplacementPlugin(),
  ],
})
