const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: ['./src/app.jsx'],
  output: { path: __dirname + '/public', filename: './out.js' },
  watch: true,
  module: {
    loaders: [
         {
             test: /\.jsx$/,  exclude: /node_modules/,
             loader: 'babel-loader',
             query: { presets: ['es2015', 'stage-2' , 'react'] }
         },
         {
             test: /.scss$/,
             loader: ExtractTextPlugin.extract({
                 fallback: 'style-loader',
                 loader: 'css-loader?sourceMap&url=false!sass-loader?sourceMap'
             }),
         },
         {
         test: /\.(jpe?g|gif|svg|png)$/,
         loader: 'file-loader?emitFile=false&name=[path][name].[ext]'
        }
     ],
  },
  plugins: [
    new ExtractTextPlugin('css/style.css'),
  ],
}
