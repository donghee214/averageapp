var webpack = require('webpack');
var path = require('path');
var loaders = require('./webpack.loaders');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var WebpackCleanupPlugin = require('webpack-cleanup-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

loaders.push({
    test: /\.css$/,
    exclude: /[\/\\]src[\/\\]/,
    loaders: [
        'style?sourceMap',
        'css',

    ]
});
// local scss modules
loaders.push({
    test: /\.scss$/,
    exclude: /[\/\\](node_modules|bower_components|public)[\/\\]/,
    loaders: [
        'style?sourceMap',
        'css?modules&importLoaders=1&localIdentName=[path]___[name]__[local]___[hash:base64:5]',
        'postcss',
        'sass'
    ]
});

// local css modules
loaders.push({
    test: /\.css$/,
    exclude: /[\/\\](node_modules|bower_components|public)[\/\\]/,
    loaders: [
        'style?sourceMap',
        'css?modules&importLoaders=1&localIdentName=[path]___[name]__[local]___[hash:base64:5]'
    ]
});

loaders.push({
    test: /\.html$/,
    loader: 'html',
})


loaders.push({
    test: /\.css$/,
    loader: "style-loader!css-loader",

})

loaders.push({
    test: /\.json$/,
    loader: 'json',
})

module.exports = {
    entry: [
        './src/index.jsx',
        './styles/index.scss'
    ],
    output: {
        publicPath: '/',
        path: path.join(__dirname, 'public'),
        filename: '[chunkhash].js'
    },
    resolve: {
        extensions: ['', '.js', '.jsx','.json']
    },
    module: {
        loaders
    },
    plugins: [
        new WebpackCleanupPlugin(),
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"production"'
            }
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false,
                screw_ie8: true,
                drop_console: true,
                drop_debugger: true
            }
        }),
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.optimize.DedupePlugin(),
        new ExtractTextPlugin("style.css", {
            allChunks: true
        }),
        new HtmlWebpackPlugin({
            template: './src/template.html',
            files: {
                css: ['style.css'],
                js: ["bundle.js"],
            }
        })
    ]
};