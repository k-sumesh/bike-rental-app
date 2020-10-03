const path = require('path')
module.exports = {
  entry: './src/index.tsx',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  // sourcemap: true,
  watch: true,
  devServer: {
    contenBase: './dist'
  },
  module: {
    rules: [
      {
        test: /\.tsx$/i, use: "ts-loader"
      },
      {
        test: /\.css$/i, use: ['css-loader', 'style-loader']
      }
    ]
  },
  resolve: {
    extensions: ['.css', '.tsx', '.ts', '.js']
  }
}