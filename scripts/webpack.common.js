const webpack = require('webpack');
const path = require('path');
const htmlPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',

    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name]-[contentHash].js'
    },

    resolve: {
        extensions: ['.js', '.jsx', '.json']
    },

    module: {
        rules: [{
            test: /\.jsx?$/,
            use: 'babel-loader'
        }]
    },
    plugins: [
        new htmlPlugin({
            template: './tpl/index.html',
            filename: 'index.html'
        })
    ]
}
