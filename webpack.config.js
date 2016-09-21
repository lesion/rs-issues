var webpack = require("webpack");
 
module.exports = {
  entry: './index.js',
  output: {
    filename: 'bundle.js'
  },
  devtool: 'source-map',
  externals: [ {xmlhttprequest: "{XMLHttpRequest:XMLHttpRequest}"} ]
}
