const path = require('path');
const optimize = require('webpack').optimize;
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {

    entry: {
        bundle: path.resolve(__dirname, 'src') + '/app/index.js',
        vendor: ['react', 'react-dom']
    },
    output: {
        path: path.resolve(__dirname, 'dist') + '/app',
        filename: '[name].[hash].js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                include: path.resolve(__dirname, 'src'),
                loader: 'babel-loader',
                options: {
                    presets: ['react', 'es2015']
                }
            },
            {
                test: /\.scss$/,
                use: ['style-loader','css-loader', 'sass-loader']
            }
        ]
    },
        devServer: {
        inline: true,
        contentBase: path.join(__dirname, 'src'),
        port: 4200
    },
    plugins: [
        new optimize.UglifyJsPlugin(),
        new optimize.CommonsChunkPlugin({
            names: ['vendor', 'manifest']
        }),
        new HtmlWebpackPlugin({
            template: './src/index.html'
        })
    ]
};