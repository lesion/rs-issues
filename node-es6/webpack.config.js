module.exports = {
  entry: './index.js',
  output: {
    filename: 'bundle.js'
  },
  target: 'node',
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
  }
}
