var path = require('path')
module.exports = {
  entry: './index.js',
  output: {
    filename: 'bundle.js'
  },
  externals: { xmlhttprequest: 'XMLHttpRequest'},
}
