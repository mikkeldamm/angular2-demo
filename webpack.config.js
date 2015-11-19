module.exports = {
  target: 'web',
  entry: './src/bootstrap',
  output: {
    path: __dirname + '/dist',
    publicPath: 'dist/',
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['', '.js', '.ts']
  },
  module: {
    loaders: [{
      test: /\.ts/, loaders: ['ts'], exclude: /node_modules/
    }]
  }
};