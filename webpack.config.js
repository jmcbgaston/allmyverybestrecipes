const path = require('path');
module.exports = {
  context: __dirname,
  entry: './frontend/all_my_recipes.jsx',
  output: {
    path: path.resolve(__dirname, 'app', 'assets', 'javascripts'), 
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['.js', '.jsx', '*']
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          query: {
            presets: ['@babel/env', '@babel/react']
          }
        },
      },
      {
        test: /\.(png|jp(e*)g|svg)$/,
        use: [{
            loader: 'url-loader',
            options: {
                limit: 8000,
                name: '[path][name].[ext]'
            }
        }]
      }
    ]
  },
  devtool: 'inline-source-map',
  watch: process.env.NODE_ENV !== "production" ? true : false, 
  watchOptions: { poll: process.env.NODE_ENV !== "production" ? true : false }
};