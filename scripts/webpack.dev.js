const merge = require('webpack-merge');
const path = require('path');
const commonConfig = require('./webpack.common.js');

module.exports = merge.smart(commonConfig, {
    mode: 'development',
    devServer: {
        port: 8080,
        host: '0.0.0.0',
        contentBase: path.resolve(__dirname, '../dist')
    }
});
