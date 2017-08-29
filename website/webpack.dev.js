const path = require('path');
const optimize = require('webpack').optimize;
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {

    entry: {
        bundle: path.resolve(__dirname, 'src') + '/app/index.js',
        vendor: ['react', 'react-dom', 'react-router-dom', 'react-bootstrap']
    },
    output: {
        path: path.resolve(__dirname, 'dist') + '/app',
        filename: '[name].[hash].js',
        sourceMapFilename: '[name].map'
    },
    module: {
        rules: [{
                test: /.js?$/,
                include: path.resolve(__dirname, 'src'),
                exclude: path.resolve(__dirname, 'node_modules'),
                use: 'babel-loader',
            },
            {
                test: /\.scss|css$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            },
            {
                test: /\.(eot|woff|woff2|ttf|svg|ico|png|jpe?g|gif)(\?\S*)?$/,
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
    resolve: {
        alias: {
            modules: __dirname + '/node_modules'
        }
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
    ],
/*     externals: {
        'react/addons': true,
        'react/lib/ExecutionEnvironment': true,
        'react/lib/ReactContext': true,
      } */
};