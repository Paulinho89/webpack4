/*
 * @Author: caoyp
 * @Date: 2020-03-15 17:55:19
 * @Last Modified by: caoyp
 * @Last Modified time: 2020-05-30 16:42:42
 * @Description: 生成环境
 * @Route: Route
 */
const Webpack = require('webpack');
const WebpackMerge = require('webpack-merge');
const WebpackConfig = require('./webpack.base.config');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = WebpackMerge(WebpackConfig, {
    mode: 'production',
    optimization: {
        minimizer: [
            // new UglifyJsPlugin({
            //     cache: '.cache/',
            //     parallel: true,
            //     sourceMap: true,
            //     uglifyOptions: {
            //         output: {
            //             comments: false,
            //             beautify: false
            //         },
            //         compress: {
            //             drop_console: true,
            //             collapse_vars: true,
            //             reduce_vars: true
            //         }
            //     }
            // }),
            new OptimizeCssAssetsPlugin()
        ],
        splitChunks: {
            chunks: 'all',
            minSize: 30000,
            minChunks: 1,
            maxAsyncRequests: 5,
            maxInitialRequests: 3,
            automaticNameDelimiter: '~',
            name: true,
            cacheGroups: {
                // 抽离node_modules下面的基础依赖，可以自行补充
                vendors: {
                    test: /[\\/]node_modules[\\/](vue|vue-router|axios|vuex)/,
                    priority: 10,
                    name: 'vendor',
                    enforce: true
                }
            }
        }
    },
    plugins: [
        new Webpack.BannerPlugin(new Date().toString()),
        // 定义全局环境变量
        new Webpack.DefinePlugin({ 'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV) })
    ]
});