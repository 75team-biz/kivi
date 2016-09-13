var extractTextWebpackPlugin = require("extract-text-webpack-plugin");

module.exports = {
    entry: {
        styles: "./src/js/css-compile.js",
        main: "./src/js/index.js"
    },
    output: {
        filename: "./www/static/js/[name].js"
    },
    module: {
        loaders: [
            {
                test: /\.css$/,
                loader: extractTextWebpackPlugin.extract("style-loader", "css-loader")
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
    plugins: [
        new extractTextWebpackPlugin("./www/static/css/[name].css")
    ],
    babel: {
        presets: ['es2015'],
        plugins: ['transform-runtime']
    }
}
