// webpack.config.js
const path = require('path')
const webpack = require('webpack');

const VueLoaderPlugin = require('vue-loader/lib/plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

let url = "";

module.exports = {
    entry:  path.join(__dirname, '../src/index.js'),
    mode: 'development',
    devtool: 'eval-source-map',
    output: {
        filename: 'bundle.js',
        path: path.join(__dirname, '../dist'),
        publicPath: '/',
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {
                   hotReload: true
                }
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
                  "vue-style-loader",
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
        new CleanWebpackPlugin(),
        // new webpack.NamedModulesPlugin(),
        // new webpack.HotModuleReplacementPlugin()
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
       proxy: {
          '/api': {
            target: url,
            pathRewrite: {'^/api' : ''}
          }
        }
     }
}
