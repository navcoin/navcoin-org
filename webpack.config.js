const path = require('path');

let counter = 0;

module.exports = {
  entry: {
    'github-project': './react/components/github-project.js',
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'themes/nav-community-v2/static/js/react'),
    chunkFilename: '[name].bundle.js',
  },
  optimization: {
    splitChunks: {    
       cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          chunks: 'all',
          priority: 1,
          name: 'vendor'
        },
      },
    },
 },
  module: {
    rules: [
      {
        include: [
          path.resolve(__dirname, 'react/components')
        ],
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  }
};
