'use strict'
const path = require('path');

module.exports = {
    dev: {
        assetsPublicPath: '/',
        assetsSubDirectory: 'static',
        cssSourceMap: true,
        cacheBusting: true,
        devtool: 'eval-source-map',
        host: 'localhost',
        port: 6688, 
        errorOverlay: true
    },
    build: {
        assetsRoot: path.resolve(__dirname, '../dist'),
        assetsPublicPath: '/',
        assetsSubDirectory: 'static',
        productionSourceMap: true
    }
}