var path = require('path')
module.exports = {
  entry: './index.js',
  output: {
    filename: 'bundle.js'
  },
  externals: { xmlhttprequest: 'XMLHttpRequest'},
  resolve: {
    extensions: ['', '.js'],
    fallback: path.join(__dirname, 'node_modules')
  }
}
