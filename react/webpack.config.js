var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  // devtool: 'eval-source-map',//配置生成Source Maps，选择合适的选项
  devServer: {
    contentBase: "./dist",//本地服务器所加载的页面所在的目录
    colors: true,//终端中输出结果为彩色
    historyApiFallback: true,//不跳转
    inline: true//实时刷新
  },

  entry: './src/pages/index/index',
  output: {
    path: __dirname + '/dist',
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['', '.js', '.json', '.jsx', '.css', '.less']
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
            presets: ['latest', 'react']
        }

      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader?modules&camelCase&importLoaders=1&localIdentName=[name]--[local]--[hash:base64:5]') 
      },
      {
        test: /\.less$/,
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader?modules&camelCase&importLoaders=1&localIdentName=[name]--[local]--[hash:base64:5]!less-loader') 
      },
      {
        test: /\.json$/,
        loader: 'json-loader'
      },
      {
        test: /\.(png|jpg|jpeg)$/,
        loader: 'url-loader?limit=10000'
      }
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({ //从模板自动生成h5页面的插件
      template: './src/pages/index/index.tmp.html', //relative to current path
      filename: '../index.html' //relative to output path
    }),
    new ExtractTextPlugin('bundle.css', {
      allChunks: true
    })
  ]
};