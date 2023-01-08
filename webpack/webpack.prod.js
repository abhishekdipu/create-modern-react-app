const webpack = require('webpack')
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

module.exports = {
  mode: 'production', //it sets {process.env.NODE_ENV: production}, and minifies the code in bundle.js
  devtool: 'source-map', //devtool property is optional and can have many values, but create-react-app suggests `source-map` for prod env, it generates source map for our code
  plugins: [
    //to set env variables
    new webpack.DefinePlugin({
      'process.env.url': JSON.stringify('https://webtechtool.com/'),
    }),
    // new BundleAnalyzerPlugin(), //to view the bundle size in browser, required for dev only
  ],
}
