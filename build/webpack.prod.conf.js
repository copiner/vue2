// webpack.config.js
const path = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    entry:  path.join(__dirname, '../src/index.js'),
    mode: 'production',
    devtool: 'cheap-module-eval-source-map',
    output: {
        filename: '[name].bundle.js',
        path: path.join(__dirname, '../dist'),
        publicPath: '/',
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.js$/,
                loader:"babel-loader",
                exclude: /node_modules/
            },
            {
              test: /\.(png|jpg)$/,
              loader: 'url-loader',
              options: {
                limit: 8*1024
              }
            },
            {
               test: /\.css$/,
               exclude: /node_modules/,
               use: [
                   MiniCssExtractPlugin.loader,
                   {
                     loader: 'css-loader',
                     options: {
                       modules: true,
                       importLoaders: 1
                     }
                   },
                   "postcss-loader"
                 ]
           }
        ]
    },
    plugins:[
        new VueLoaderPlugin(),
        new HtmlWebpackPlugin({
          title: 'vued',
          template:'./public/index.html',
          filename: "index.html",
          favicon: "./public/favicon.ico"
        }),
        new MiniCssExtractPlugin({
          filename: "[name][chunkhash].css",
          chunkFilename: "[id][chunkhash].css"
        }),
        new CleanWebpackPlugin()
    ],
    resolve: {
        // 自动补全的扩展名
        //extensions: ['.js', '.vue', '.json'],
        // 默认路径代理
        // 例如 import Vue from 'vue'，会自动到 'vue/dist/vue.common.js'中寻找
        // 这样可以使之后在开发项目的时候, 引用文件时不必关注不同层级的问题
        alias: {
            'vue$': 'vue/dist/vue.esm.js', //内部为正则表达式  vue结尾的
            // '@': path.join(__dirname, './', 'src'),
            // '@api': path.join(__dirname, './', 'src/api'),
            // '@styles': path.join(__dirname, './', 'src/styles'),
            // '@components':path.join(__dirname, './', 'src/components')
        }
    },
    optimization: {
       splitChunks: {
         chunks: 'async',
         minSize: 30000,//模块大于30k会被抽离到公共模块
         maxSize: 0,
         minChunks: 1,//模块出现1次就会被抽离到公共模块
         maxAsyncRequests: 5,//异步模块，一次最多只能被加载5个
         maxInitialRequests: 3,//入口模块最多只能加载个数
         automaticNameDelimiter: '-',
         name: true,
         cacheGroups: {
           vendor: {
             //第三方依赖
             priority: 1,
             name: 'vendor',
             test: /node_modules/,
             chunks: 'initial',
             minSize: 100,
             minChunks: 1 //重复引入了几次
           },
           default: {
             minChunks: 2,
             priority: -20,
             reuseExistingChunk: true
           }
         }
       }
     }
}
