var path = require('path')
module.exports = {
  entry: './index.js',
  output: {
    filename: 'bundle.js'
  },
  resolve: {
    fallback: path.join(__dirname, 'node_modules'),
    // resolve file extensions
    extensions: ['.js', '', '.vue']
  },
   module: {
    loaders: [
          {
              test: /\.js?$/,
              exclude: /(node_modules|bower_components)/,
              loader: 'babel-loader',
              query: {
                  presets: ['es2015']
              }
          }
      ]
  },
  externals: { xmlhttprequest: 'XMLHttpRequest'},
}
