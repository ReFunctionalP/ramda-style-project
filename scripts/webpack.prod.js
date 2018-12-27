const merge = require('webpack-merge');
const path = require('path');
const cleanPlugin = require('clean-webpack-plugin');
const commonConfig = require('./webpack.common.js');

module.exports = merge.smart(commonConfig, {
    mode: 'production',

    plugins: [
        new cleanPlugin(path.resolve(__dirname, '../dist'))
    ]
})
