const path = require('path');
const optimize = require('webpack').optimize;
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

          
module.exports = {

    entry: {
        bundle: path.resolve(__dirname, 'src') + '/app/index.js',
        vendor: ['react', 'react-dom', 'react-router-dom']
    },
    output: {
        path: path.resolve(__dirname, 'dist') + '/app',
        filename: '[name].[hash].js',
        sourceMapFilename: '[name].map'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                include: path.resolve(__dirname, 'src'),
                exclude: path.resolve(__dirname, 'node_modules'),
                use: 'babel-loader',
            },
            {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            },
            {
                test: /\.(png|svg|jpg|gif|ico)$/,
                use: ['file-loader']
            }
        ]
    },
        devServer: {
        inline: true,
        contentBase: path.join(__dirname, 'src'),
        hot: true,
        port: 4200,
        stats: "errors-only",
        open: true
    },
    plugins: [
        new optimize.UglifyJsPlugin(),
        new optimize.CommonsChunkPlugin({
            names: ['vendor', 'manifest']
        }),
        new HtmlWebpackPlugin({
            template: './src/index.html',
            hash: true,
            //favicon: 'src/app/assets/images/favicon.ico'
        }),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin()
    ]
};