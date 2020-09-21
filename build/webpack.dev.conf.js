// webpack.config.js
const path = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

let url = "";

module.exports = {
    entry:  path.join(__dirname, '../src/index.js'),
    mode: 'development',
    devtool: 'eval-source-map',
    output: {
        filename: 'bundle.js',
        path: path.join(__dirname, 'dist'),
        publicPath: '/',
    },
    module: {
        rules: [
            {
                test: /.vue$/,
                loader: 'vue-loader',
            },
            {
                test: /.js$/,
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
                  {
                     loader: MiniCssExtractPlugin.loader, // 用miniCssExtractPlugin代替了style-loader,以便css提取
                     options: {
                        hmr: process.env.NODE_ENV === 'development',
                        esModule: true,
                        reloadAll: true // if hmr does not work, this is a forceful method.
                    }
                  },
                  //"style-loader", // 将 JS 字符串生成为 style 节点
                  "css-loader", // 将 CSS 转化成 CommonJS 模块
                  "postcss-loader" // 将 Sass 编译成 CSS
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
          filename: "css/[name].css",
          chunkFilename: "css/[id].css"
        }),
        new CleanWebpackPlugin()
    ],
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.esm.js' //内部为正则表达式  vue结尾的
        }
    },
    devServer: {
       contentBase: path.join(__dirname, "../dist"),
       publicPath: '/',
       historyApiFallback: true,
       host:"127.0.0.1",
       port: 8000,
       inline: true,
       hot: true,
       proxy: {
          '/api': {
            target: url,
            pathRewrite: {'^/api' : ''}
          }
        }
     }
}
