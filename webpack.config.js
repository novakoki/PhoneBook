var path = require('path');

module.exports = {
  entry: ['./app/entry.js'],
  output: {
    path: path.join(__dirname, '/dist'),
    filename: 'app.js'
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [
      { test: /\.js|jsx$/, loaders: ['babel'] },
      { test: /\.css$/, loader: 'style-loader!css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]'}
    ]
  }
}