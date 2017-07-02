var path = require("path");

module.exports = {
  entry: path.resolve(__dirname, "app/assets/js/main.js"),
  output: {
    path: path.join(__dirname, 'public/assets/js'),
    filename: 'main.js'
  },
  devtool: 'source-map',
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'stage-0']
        }
      }
    ]
  }
};