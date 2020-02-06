const path = require('path');

process.chdir(__dirname);

module.exports = {
  entry: './main.ts',
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    filename: 'dist.js',
    path: path.resolve(__dirname),
  },
};
