const path = require('path');

module.exports = {
  mode: 'development', //production
  entry: {
    main: path.resolve(__dirname, 'src/index.js'),

  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
    //clean: true,

  },
  devtool: 'inline-source-map',

  //loaders
  module: {
    rules: [{test: /\.css$/i, use: ['style-loader', 'css-loader']}]
  }

  //plugins
  
}