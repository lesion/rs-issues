module.exports = {
  entry: './index.js',
  output: {
    filename: 'bundle.js'
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
