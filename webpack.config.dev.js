var webpack = require('webpack');
var config = require('./webpack.config.js');

config.devtool= 'eval',

config.entry.app.unshift(
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/only-dev-server'
);

config.module.loaders.push({
    test: /\.(js|jsx)$/,
    loaders: ['react-hot'],
    exclude: /node_modules/
});

config.plugins.push(new webpack.HotModuleReplacementPlugin());
config.plugins.push(new webpack.NoErrorsPlugin());

module.exports = config;