var path = require("path");
var extractTextWebpackPlugin = require("extract-text-webpack-plugin");
//以下为postcss插件
var cssnext = require('postcss-cssnext');
var mixins = require('postcss-mixins');
var defineproperty = require('postcss-define-property');
var cssimport = require('postcss-import');
var cssnano = require('cssnano');
var perfectionist = require('perfectionist');

console.log('--------------------------------------------------------------');
console.log(process.cwd());
console.log('--------------------------------------------------------------');

module.exports = {
    devtool: "source-map",
    entry: {
        styles: "./src/js/css-compile.js",
        main: "./src/js/index.js"
    },
    output: {
        path: path.resolve(process.cwd(), "www/static/"),
        filename: "./js/[name].js"
    },
    module: {
        loaders: [
            {
                test: /\.css$/,
                loader: extractTextWebpackPlugin.extract("style-loader", "css-loader!postcss-loader")
            },
            {
                test: /\.vue$/,
                loader: "vue"
            },
            {
                test: /\.js$/,
                exclude: /node_modules\//,
                loader: 'babel'
            }
        ]
    },
    postcss: function () {
        return [
            cssimport,
            mixins,
            defineproperty,
            cssnext,
            cssnano,
            perfectionist
        ];
    },
    plugins: [
        new extractTextWebpackPlugin("./css/[name].css")
    ],
    babel: {
        presets: ['es2015', 'stage-3'],
        plugins: ['transform-runtime']
    },
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.js'
        }
    }
}
