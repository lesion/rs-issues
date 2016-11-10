var path = require('path')
module.exports = {
  entry: './index.js',
  output: {
    filename: 'bundle.js'
  },
  devtool: 'source-map',
  resolve: {
    fallback: path.join(__dirname, 'node_modules'),
    // resolve file extensions
    extensions: ['.js', '']
  },
  module: {
    loaders:
    [
      {
        test: /\.js?$/,
        loader: 'babel?presets=es2015&compact=false',
        exclude: /node_modules/
      }
    ]
  },
  externals: { xmlhttprequest: 'XMLHttpRequest'},
}
