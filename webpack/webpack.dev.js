const webpack = require('webpack')
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin')

module.exports = {
  mode: 'development', //webpack supports mode = development/production/none, (it'll also set {process.env.NODE_ENV: development}
  devtool: 'cheap-module-source-map', //devtool property is optional and can have many values, but create-react-app suggests `cheap-module-source-map` for dev env, it generates source map for our code
  devServer: {
    port: 8001,
    hot: true, // to support hot module reload, it's required for "@pmmmwh/react-refresh-webpack-plugin"
    open: true, //to auto-open the browser on npm-start
  },
  plugins: [
    //to set env variables
    new webpack.DefinePlugin({
      'process.env.url': JSON.stringify('https://dev.webtechtool.com/'),
    }),
    //to enable "Fast Refresh" (also previously known as Hot Reloading) for React components.
    new ReactRefreshWebpackPlugin(),
  ],
}
