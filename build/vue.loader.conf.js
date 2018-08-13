'use strict'

const utils = require('./utils');
const config = require('../config');
const isProduction = process.env.NODE_ENV === 'production';
const sourceMapEnabled = isProduction ? config.build.productionSourceMap : config.dev.cssSourceMap;

module.exports = {
    loaders: utils.cssLoaders({
        sourceMap: sourceMapEnabled,
        extract: isProduction
    }),
    // postcss: [
    //     require('autoprefixer')({browsers: ['iOS >= 7', 'Android >= 4.1']}),
    //     require('postcss-px2rem')({remUnit: 75, 'baseDpr':2})
    // ],
    cssSourceMap: sourceMapEnabled,
    cacheBusting: config.dev.cacheBusting, //破坏缓存，开发环境使用
    transformToRequire: { // 将例如vidoe,audio,img的src内容转换成模块，可以直接在页面中使用，无需先将资源存为一个变量
        video: ['src', 'poster'],
        audio: 'src',
        source: 'src',
        img: 'src',
        image: 'xlink:href'
    }
}