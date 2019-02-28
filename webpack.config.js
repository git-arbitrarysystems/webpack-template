const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const packageJSON = require('./package.json');
const webpack = require('webpack');

module.exports = {
  entry: {
    index:'./src/index.js'
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'build')
  },
  devServer:{
  	contentBase: path.join(__dirname, 'build'),
    hot:true
  },
  devtool:'inline-source-map',
  module: {
    rules: [
      
      {
        test: /\.m?js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [[
              '@babel/preset-env',
              {
                targets: {
                  esmodules: false
                }
              }
            ]]
          }
        }
      },


      // {
      //   test: /.\mjs$/,
      //   exclude:/(node_modules)/,
      //   parser: {
      //     // amd: false, // disable AMD
      //     // commonjs: false, // disable CommonJS
      //     // system: false, // disable SystemJS
      //     // harmony: false, // disable ES2015 Harmony import/export
      //     // requireInclude: false, // disable require.include
      //     // requireEnsure: false, // disable require.ensure
      //     // requireContext: false, // disable require.context
      //     // browserify: false, // disable special handling of Browserify bundles
      //     // requireJs: false, // disable requirejs.*
      //     // node: false, // disable __dirname, __filename, module, require.extensions, require.main, etc.
      //     // node: {...} // reconfigure [node](/configuration/node) layer on module level
      //   }
      // },

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
      title:packageJSON.name,
      favicon:'./src/img/favicon.png'
    }),
    new webpack.HotModuleReplacementPlugin({})
  ]
};