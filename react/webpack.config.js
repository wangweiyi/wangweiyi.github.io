const fs = require('fs');
const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const StaticSiteGeneratorPlugin = require('static-site-generator-webpack-plugin');

//所有文章的文件名列表
const articleFiles = fs.readdirSync('./src/database/articles');

module.exports = {
  // devtool: 'eval-source-map',//配置生成Source Maps，选择合适的选项
  devServer: {
    contentBase: path.join(__dirname, 'dist'),//本地服务器所加载的页面所在的目录
    colors: true,//终端中输出结果为彩色
    historyApiFallback: true,//不跳转
    inline: true//实时刷新
  },

  entry: './src/index',
  output: {
    publicPath: '/',
    path: 'dist',
    filename: 'bundle.js'
  },

  resolve: {
    extensions: ['', '.jsx', '.js', '.json', '.css', '.less']
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
    new webpack.DefinePlugin({
      '__ARTICLE_FILES__': JSON.stringify(articleFiles.join(','))
    }),
    new ExtractTextPlugin('bundle.css', {
      allChunks: true
    })
  ]
};