'use strick'
const path = require('path');

const config = require('../config');
const utils = require('./utils');
const vueLoaderConfig = require('./vue.loader.conf');
const { VueLoaderPlugin } = require('vue-loader');

const ENV = process.env.NODE_ENV;

function resolve(dir) {
    return path.join(__dirname, '..', dir)
}

module.exports = {
    mode: ENV,
    context: resolve('src'),
    entry: {
        app: './main.js'
    },
    output: {
        path: config.build.assetsRoot,
        filename: '[name].js',
        publicPath: ENV === 'production' ? config.build.assetsPublicPath : config.dev.assetsPublicPath,
        chunkFilename: '[name].chunk.js'
    },
    resolve: {
        extensions: ['.js', '.vue', '.json'],
        alias: {
            '@': resolve('src'),
            'components': resolve('src/components'),
            'assets': resolve('src/assets')
        }
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: vueLoaderConfig
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                options: {
                    cacheDirectory: true
                },
                include: resolve('src')
            }
        ]
    },
    plugins: [
        new VueLoaderPlugin()
    ]
}