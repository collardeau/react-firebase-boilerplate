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
            './app/Router.js'
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
            { test: /\.(js|jsx)$/, loaders: ['jsx', 'babel'], exclude: /node_modules/},
            { test: /\.scss$/, loaders: [ExtractTextPlugin.extract("css"), 'css', 'sass?' + sassNeatPaths] },
            { test: /\.css$/, loader: ExtractTextPlugin.extract("css") }
        ]
    },

    plugins: [
        new webpack.optimize.CommonsChunkPlugin("vendor", "vendor.bundle.js"),
        new ExtractTextPlugin("bundle.css")
    ]

};

module.exports = config;