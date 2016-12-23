var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  // devtool: 'eval-source-map',//配置生成Source Maps，选择合适的选项
  // devServer: {
  //   contentBase: "./public",//本地服务器所加载的页面所在的目录
  //   colors: true,//终端中输出结果为彩色
  //   historyApiFallback: true,//不跳转
  //   inline: true//实时刷新
  // },
  context:  __dirname + '/src',
  entry: './index',
  output: {
    path: __dirname + '/dist',
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
            presets: ['es2015', 'react']
        }

      }, {
        test: /\.css$/,
        loader: 'style!css?modules' //将样式限制在模块中
      }
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({ //从模板自动生成h5页面的插件
      template: './index.tmp.html',
      filename: '../index.html'
    }) ,
    // new webpack.BannerPlugin('Copyright weiyi, all rights reserved.'),
    new webpack.HotModuleReplacementPlugin()//热加载插件
  ]
};