//inspired by https://github.com/collardeau/react-scaffold/tree/master/src/scripts

var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var neat = require('node-neat').includePaths;
var sassNeatPaths = require("node-neat").includePaths.map(function(sassPath) {
    return "includePaths[]=" + sassPath;
}).join("&");

var config = {
    entry: {
        app: [
            'webpack-dev-server/client?http://localhost:8080',
            'webpack/hot/only-dev-server',
            './app/App.js'
        ],
        vendor: [
            'react',
            'firebase'
        ]
    },
    output: {
        path: './public',
        filename: "bundle.js"
    },
    module: {
        loaders: [
            { test: /\.(js|jsx)$/, loaders: ['react-hot', 'jsx', 'babel'], exclude: /node_modules/},
            { test: /\.scss$/, loaders: [ExtractTextPlugin.extract("css"), 'css', 'sass?' + sassNeatPaths] },
            { test: /\.css$/, loader: ExtractTextPlugin.extract("css") }
        ]
    },

    plugins: [
        new webpack.optimize.CommonsChunkPlugin("vendor", "vendor.bundle.js"),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin(),
        new ExtractTextPlugin("bundle.css"),
        // If you want to minify everything (including css bundle), perhaps remove react-hot?
        //new webpack.optimize.UglifyJsPlugin()
    ]
};

module.exports = config;