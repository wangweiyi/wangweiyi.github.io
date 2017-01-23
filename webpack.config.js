const fs = require('fs');
const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

// 路径设置
const paths = {
  context: __dirname,
  output: path.resolve(__dirname, 'build'),
  articles: path.resolve(__dirname, 'database/articles'),
};

// 排除 node_modules 目录里的模块
const nodeModules = {};
fs.readdirSync('node_modules')
  .filter(function(x) {
    return ['.bin'].indexOf(x) === -1;
  })
  .forEach(function(mod) {
    nodeModules[mod] = 'commonjs ' + mod;
  });

//样式loader配置
const styleLoader = function(needParseLess) {
  const lessParser = needParseLess ? '!less-loader' : '';
  return ExtractTextPlugin.extract('style-loader', 
    'css-loader?modules&camelCase&importLoaders=1&localIdentName=[name]--[local]--[hash:base64:5]' + lessParser);
};

// 基础配置
const baseConfiguration = {
  devtool: 'source-map',
  context: paths.context,
  output: {
    path: paths.output,
    filename: '[name].js',
    publicPath: '/static/',
  },

  resolve: {
    extensions: ['', '.js', 'jsx', '.json', '.css', '.less']
  },

  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: path.resolve(__dirname, 'node_modules'),
        loader: 'babel',
      },
      {
        test: /\.css$/,
        loader: styleLoader()
      },
      {
        test: /\.less$/,
        loader: styleLoader(true)
      },
      {
        test: /\.json$/,
        loader: 'json-loader'
      },
      {
        test: /\.(png|jpg|jpeg|gif)$/,
        loader: 'url-loader?limit=10000'
      }
    ]
  },
  
  plugins: [
    new ExtractTextPlugin('bundle.css', {
      allChunks: true
    }),
    new webpack.DefinePlugin({
      '__ARTICLE_FILES__': JSON.stringify(fs.readdirSync(paths.articles).join(','))
    })
  ]
};

// 后端配置
const backConfiguration = Object.assign({}, baseConfiguration, {
  entry: {
    'server': './src/server',
  },

  externals: nodeModules,
  target: 'node',
  node: {
    __filename: true,
    __dirname: true,
  }
});

// 前端配置
const frontConfiguration = Object.assign({}, baseConfiguration, {
  entry: {
    'client': './src/client',
  }
});

module.exports = [
  backConfiguration,
  frontConfiguration
];