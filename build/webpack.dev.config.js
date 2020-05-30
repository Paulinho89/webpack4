/*
 * @Author: caoyp
 * @Date: 2020-03-15 17:55:04
 * @Last Modified by: caoyp
 * @Last Modified time: 2020-03-16 20:46:32
 * @Description: 开发环境
 * @Route: Route
 */
const Webpack = require('webpack');
const webpackConfig = require('./webpack.base.config.js');
const WebpackMerge = require('webpack-merge');

module.exports = WebpackMerge(webpackConfig, {
    mode: 'development',
    devServer: {
        port: 3000,
        hot: true,
        contentBase: '../dist'
    },
    plugins: [
        new Webpack.HotModuleReplacementPlugin()
    ]
});

