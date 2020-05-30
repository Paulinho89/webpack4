/*
 * @Author: caoyp
 * @Date: 2020-03-08 15:39:54
 * @Last Modified by: caoyp
 * @Last Modified time: 2020-05-25 10:03:15
 * @Description: Description
 * @Route: Route
 */
const path = require('path');
const Webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HappyPack = require('happypack');
const BasePlugins = require('./plugins');

const { resolve } = path;
const devMode = process.env.NODE_ENV === 'development';

module.exports = {
    devtool: 'source-map',
    // 入口
    entry: {
        app: resolve(__dirname, '../src/main')
    },
    // 出口
    output: {
        filename: 'js/[name]-[hash:6].js',
        path: resolve(__dirname, '../dist'),
        chunkFilename: 'js/[name]-[chunkhash:6].js'
    },
    plugins: [
        ...BasePlugins,
        new MiniCssExtractPlugin({
            filename: 'css/[name].[hash:6].css',
            chunkFilename: 'css/[id].[hash:6].css'
        }),
        new HappyPack({
            /*
             * 必须配置
             */
            // id 标识符，要和 rules 中指定的 id 对应起来
            id: 'babel',
            // 需要使用的 loader，用法和 rules 中 Loader 配置一样
            // 可以直接是字符串，也可以是对象形式
            loaders: ['babel-loader?cacheDirectory']
        })
    ],
    module: {
        rules: [
            {
                test:/\.css$/,
                use:[
                    {
                        loader: devMode ? 'style-loader' : MiniCssExtractPlugin.loader 
                    },
                    'css-loader', {
                    loader: 'postcss-loader',
                    options: {
                        plugins: [require('autoprefixer')]
                    }
                    }
                ]
              },
              {
                test: /\.less$/,
                use:[
                    {
                        loader: devMode ? 'style-loader' : MiniCssExtractPlugin.loader
                    },
                    'css-loader',
                    'less-loader',
                    {
                        loader: 'postcss-loader',
                        options: {
                            plugins: [require('autoprefixer')]
                        }
                    }
                ]
              },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: ['happypack/loader?id=babel'],
            },
            {
                test: /\.(jpg|jpeg|png|gif)$/,
                loaders: 'url-loader',
                exclude: /node_modules/,
                options: {
                    limit: 8192,
                    outputPath: 'img/',
                    name: '[name]-[hash:6].[ext]'
                }
            },
            {
                test: /\.(woff|woff2|svg|eot|ttf)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            outputPath: 'fonts/',
                            name: '[name].[ext]'
                        }
                    }
                ]
            },
            {
                test: /\.vue$/,
                use: ['vue-loader']
            }
        ]
    },
    resolve: {
        extensions: ['.js', 'json', '.less', '.css', '.vue'],
        alias: {
            vue$: 'vue/dist/vue.common.js',
            '@': resolve(__dirname, '../src'),
            'pages': resolve(__dirname, '../src/pages'),
        }
    }
};