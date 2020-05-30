/*
 * @Author: caoyp
 * @Date: 2020-03-16 21:35:50
 * @Last Modified by: caoyp
 * @Last Modified time: 2020-03-17 22:30:24
 * @Description: Description
 * @Route: Route
 */
const Path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const WebpackBundleAnalyzer = require('webpack-bundle-analyzer');
const vueLoaderPlugin = require('vue-loader/lib/plugin');

const { resolve } = Path;
const { ANALYZE } = process.env;
const { BundleAnalyzerPlugin } = WebpackBundleAnalyzer;

const PluginConfig = [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
        filename: 'index.html',
        template: resolve(__dirname, '../index.html')
    }),
    new vueLoaderPlugin(),
    new MiniCssExtractPlugin({
        filename: 'css/[name].[hash].css',
        chunkFilename: 'css/[id].[hash].css'
    }),
];

if (ANALYZE === 'true') {
    PluginConfig.push(new BundleAnalyzerPlugin());
}
module.exports = PluginConfig;