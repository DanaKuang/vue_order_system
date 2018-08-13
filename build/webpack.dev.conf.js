'use strict'

const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin');
const portfinder = require('portfinder');

const utils = require('./utils');
const config = require('../config');
const baseWebpackConfig = require('./webpack.base.conf');


function resolve(dir) {
    return path.join(__dirname, '..', dir)
}

const devWebpackConfig = merge(baseWebpackConfig, {
    module: {
        rules: utils.styleLoaders({ sourceMap: config.dev.cssSourceMap, usePostCSS: true })
    },
    devtool: config.dev.devtool,
    devServer: {
        host: config.dev.host,
        port: config.dev.port,
        hot: true,
        open: true,
        publicPath: config.dev.assetsPublicPath,
        historyApiFallback: true,
        contentBase: false,
        clientLogLevel: 'warning',
        overlay: config.dev.overlay ? {
            warnings: false, 
            errors: true
        } : false
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: '../index.html',
            inject: 'body',
            title: '后台系统'
        }),
        new webpack.HotModuleReplacementPlugin()
    ]
})

module.exports = devWebpackConfig;
// module.exports = new Promise((resolve, reject) => {
//     portfinder.basePort = config.dev.port
//     portfinder.getPort((err, port) => {
//         if (err) {
//             reject(err)
//         } else {
//             // publish the new Port, necessary for e2e tests
//             process.env.PORT = port
//             // add port to devServer config
//             devWebpackConfig.devServer.port = port
  
//             // Add FriendlyErrorsPlugin
//             devWebpackConfig.plugins.push(new FriendlyErrorsPlugin({
//                 compilationSuccessInfo: {
//                 messages: [`Your application is running here: http://${devWebpackConfig.devServer.host}:${port}`],
//             },
//             onErrors: config.dev.notifyOnErrors
//             ? utils.createNotifierCallback()
//             : undefined
//         }))
  
//         resolve(devWebpackConfig)
//         }
//     })
// })
  