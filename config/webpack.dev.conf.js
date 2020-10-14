
const path = require('path')
const Webpack = require('webpack');

const VueLoaderPlugin = require('vue-loader/lib/plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

let url = "";

module.exports = {
    //entry:  path.join(__dirname, '../src/index.js'),
    entry:  path.join(__dirname, '../src/vuex/todomvc/app.js'),
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
                  "style-loader",
                  {
                    loader: 'css-loader',
                    options: {
                      // modules: true,
                      importLoaders: 1
                    }
                  },
                  "postcss-loader"
                ]
            }
        ]
    },
    plugins:[
        new Webpack.DefinePlugin({
         'SERVICE_URL': JSON.stringify("http://127.0.0.1:8000/api")
        }),
        new VueLoaderPlugin(),
        new HtmlWebpackPlugin({
          title: 'vued',
          template:'./public/index.html',
          filename: "index.html",
          favicon: "./public/favicon.ico"
        }),
        new CleanWebpackPlugin(),
        // new webpack.NamedModulesPlugin(),
        new Webpack.HotModuleReplacementPlugin(),
        new Webpack.NoEmitOnErrorsPlugin()
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
