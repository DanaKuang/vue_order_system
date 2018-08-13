const path = require('path');
const config = require('../config')

const MiniCssExtractPlugin = require('mini-css-extract-plugin');

// 天了噜，特别注重sourcemap

exports.cssLoaders = function (options) {
    options = options || {};

    const cssLoader = {
        loader: 'css-loader',
        options: {
            sourceMap: options.sourceMap
        }
    }

    const postcssLoader = {
        loader: 'postcss-loader',
        options: {
            sourceMap: options.sourceMap
        }
    }

    function generateLoaders(loader, loaderOptions) {
        const loaders = options.usePostCSS ? [cssLoader, postcssLoader] : [cssLoader]

        if (loader) {
            loaders.push({
                loader: loader + '-loader',
                options: Object.assign({}, loaderOptions, {
                    sourceMap: options.sourceMap
                })
            })
        }

        if (options.extract) {
            return [MiniCssExtractPlugin.loader].concat(loaders)
        } else {
            return ['vue-style-loader'].concat(loaders)
        }
    }

    return {
        css: generateLoaders(),
        postcss: generateLoaders(),
        sass: generateLoaders('sass', {
            indentedSyntax: true   //针对multiple line
        }),
        scss: generateLoaders('sass')
    }

}

exports.styleLoaders = function (options) { //将非vue-loader处理的loader，在module.rules里面进行罗列
    const output = []
    const loaders = exports.cssLoaders(options)
  
    for (const extension in loaders) {
        const loader = loaders[extension]
        output.push({
            test: new RegExp('\\.' + extension + '$'),
            use: loader
        })
    }
  
    return output
}