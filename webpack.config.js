const path = require('path')

module.exports = {
  entry: './docs/App.jsx',
  output: {
    filename:
      process.env.NODE_ENV === 'production' ? 'docs/bundle.js' : 'bundle.js',
    publicPath: '/',
  },
  devServer: {
    inline: true,
    port: 3000,
    contentBase: path.join(__dirname, 'docs'),
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
    ],
  },
  devtool: 'eval-source-map',
}
