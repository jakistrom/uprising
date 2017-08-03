const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: ['./src/app.jsx'],
  output: { path: __dirname + '/public',
  filename: './out.js' },
  watch: true,
  module: {
    loaders: [
        {
          test: /\.jsx$/, exclude: /node_modules/,
          loader: 'babel-loader',
          query: { presets: ['es2015', 'stage-2', 'react'] }
      },
      {
          test: /\.css$/,
          use: [ 'style-loader', 'css-loader' ]
      },
      {
          test: /\.scss$/,
          use: [ 'style-loader', 'css-loader', 'sass-loader' ]
      }
    ],
  },
    plugins: [
    new ExtractTextPlugin('public/style.css'),
  ],
}
