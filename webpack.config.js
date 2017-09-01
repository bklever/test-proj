var HtmlWebpackPlugin = require('html-webpack-plugin')
var HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
  template: __dirname + '/src/index.html',
  filename: 'index.html',
  inject: 'body'
});
module.exports = {
  entry: [
    './src/index.jsx'
  ],
  module: {
    loaders: [
      {
        test: /\.js[x]?$/, 
        exclude: /node_modules/, 
        loader: "babel-loader"
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  output: {
    filename: "index_bundle.js",
    path: __dirname + '/dist'
  },
  plugins: [HTMLWebpackPluginConfig]
};