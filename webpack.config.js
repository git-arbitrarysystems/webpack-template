const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const packageJSON = require('./package.json');
const webpack = require('webpack');

module.exports = {
  entry: {
    index:'./src/index.js'
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'build')
  },
  devtool:'source-map',
  
  // STARTS ON BUILD
  watch:true,
  watchOptions: {
    ignored: /node_modules/
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
            // fallback to style-loader in development
           MiniCssExtractPlugin.loader,
            {loader:"css-loader", options:{ sourceMap:true } },
            {loader:"sass-loader", options:{ sourceMap:true } },
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

      // RAW STRINGS
      {
        test:/snippet\.html$/,
        use: [
          'raw-loader'
        ]
      },

      // FONTS
      {
         test: /\.(woff|woff2|eot|ttf|otf)$/,
         use: [
           'file-loader'
         ]
       }
    
    ]
  },
  plugins:[
    new CleanWebpackPlugin(['build'],{}),
  	new HtmlWebpackPlugin({
      template:'./src/index.html',
      favicon:'./src/img/favicon.png'
    }),
    new MiniCssExtractPlugin({
        filename: "[name].css",
        chunkFilename: "[id].css"
    })
  ]
};