const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
// const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = {
  entry: path.resolve(__dirname, '..', './src/index.tsx'),
  resolve: {
    extensions: ['.tsx', '.ts', '.js'], // it'll enable us to use import statement without file extension, eg. ("import App from './app'" in this case 1st it'll try of import "./app.tsx" if does't exist then "./app.ts" then  "./app.js"
  },
  module: {
    rules: [
      // to transpile all files ends with .ts/.js/.tsx/.jsx
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
          },
        ],
      },
      //for webpack to understand css
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      //for webpack to understand these image formate : ico|gif|png|jpg|jpeg
      {
        test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
        type: 'asset/resource',
      },
      //for webpack to understand these image formate : eot|ttf|otf|svg
      {
        test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
        type: 'asset/inline',
      },
    ],
  },
  output: {
    path: path.resolve(__dirname, '..', './build'),
    filename: 'bundle.js',
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '..', './src/index.html'),
    }),
    // new CopyWebpackPlugin({
    //   patterns: [{ from: 'source', to: 'dest' }],
    // }),
  ],
  stats: 'errors-only',
}
