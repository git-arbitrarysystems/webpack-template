const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const packageJSON = require('./package.json');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'dist')
  },
  devServer:{
  	contentBase: path.join(__dirname, 'dist'),
  },
  module: {
    rules: [
      
      {
        test: /\.m?js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },

      {      
        test: /\.scss$/,
        use: [
            "style-loader", // creates style nodes from JS strings
            "css-loader", // translates CSS into CommonJS
            "sass-loader" // compiles Sass to CSS, using Node Sass by default
        ]
      },

      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [{
          loader: 'file-loader',
          options:{
            name: 'img/[name].[ext]'
          }
        }]
      },

      {
        test:/snippet\.html$/,
        use: [
          'raw-loader'
        ]
      }
    
    ]
  },
  plugins:[
    new CleanWebpackPlugin(['dist','build'],{}),
  	new HtmlWebpackPlugin({
      title:packageJSON.name,
      favicon:'./src/img/favicon.png'
    })
  ]
};