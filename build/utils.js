var path = require('path')
var config = require('../config')
var ExtractTextPlugin = require('extract-text-webpack-plugin')

// extract-text-webpack-plugin 用于单独抽出css文件
// 今天要和大家分享的webpack的插件extract-text-webpack-plugin。我们先聊聊webpack的一个打包机制，webpack本来只能能打包处理.js文件，但是通过强大的loader之后，可以打包处理各种类型的文件。比如：.css文件等。

// 表面上webpack通过loader可以打包各种文件了，已经完美了。但是在某些场景中也存在着问题的，比如我们的css的内容都被打包到bundle.js里面了。在生产环境中我们通常会利用浏览器的缓存来提高用户体验，用上了webpack的hash（正常js文件hash类型会使用chunkhash）。
// 那么问题来了：
// 我只要修改了js部分的代码，那么我的css模块也会被重新打包，被当成css模块也有内容修改。
// 或者只修改了css模块，js模块是没有变化的，但是他们都是在一个bundle中，所以都会被认为都有修改。

// 解决方案：
// 思路：将css模块和js模块分开打包，换句话说把css代码从js文件中抽离出来，单独出一个模块。
// 方法：extract-text-webpack-plugin插件
// ————————————————
// 版权声明：本文为CSDN博主「No Bug !」的原创文章，遵循CC 4.0 BY-SA版权协议，转载请附上原文出处链接及本声明。
// 原文链接：https://blog.csdn.net/weixin_41134409/article/details/88416356

// commonJS 模块，旧的模块导出写法。与之相对的是 ES6 模块
exports.assetsPath = function(_path) {
    var assetsSubDirectory = process.env.NODE_ENV === 'production' ? config.build.assetsSubDirectory : config.dev.assetsSubDirectory
    return path.posix.join(assetsSubDirectory, _path)
}

exports.cssLoaders = function(options) {
    options = options || {}
        // generate loader string to be used with extract text plugin
    function generateLoaders(loaders) {
        var sourceLoader = loaders.map(function(loader) {
            var extraParamChar
            if (/\?/.test(loader)) {
                loader = loader.replace(/\?/, '-loader?')
                extraParamChar = '&'
            } else {
                loader = loader + '-loader'
                extraParamChar = '?'
            }
            return loader + (options.sourceMap ? extraParamChar + 'sourceMap' : '')
        }).join('!')

        // Extract CSS when that option is specified
        // (which is the case during production build)
        if (options.extract) {
            return ExtractTextPlugin.extract('vue-style-loader', sourceLoader)
        } else {
            return ['vue-style-loader', sourceLoader].join('!')
        }
    }

    // http://vuejs.github.io/vue-loader/en/configurations/extract-css.html
    return {
        css: generateLoaders(['css']),
        postcss: generateLoaders(['css']),
        less: generateLoaders(['css', 'less']),
        sass: generateLoaders(['css', 'sass?indentedSyntax']),
        scss: generateLoaders(['css', 'sass']),
        stylus: generateLoaders(['css', 'stylus']),
        styl: generateLoaders(['css', 'stylus'])
    }
}

// Generate loaders for standalone style files (outside of .vue)
exports.styleLoaders = function(options) {
    var output = []
    var loaders = exports.cssLoaders(options)
    for (var extension in loaders) {
        var loader = loaders[extension]
        output.push({
            test: new RegExp('\\.' + extension + '$'),
            loader: loader
        })
    }
    return output
}