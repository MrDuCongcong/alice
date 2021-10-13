/*
 * @Author: DuCongcong
 * @Date: 2021-10-05 16:16:59
 * @Description: 
 */
const path = require('path');

const webpackConfig = {
    entry: './examples/index.js',
    output: {
        path: path.resolve(process.cwd(), './examples/element-ui/'),
        name: '[name].js',
    },
    devServer: {
        host: '0.0.0.9',
        port: '8081',
        publicPath: '/',
        hot: true,
    },
    module: {
        rules: [
            {
                test: /\.(scss|css)$/,
                use: [
                    'css-loader',
                    'sass-loader',
                ]
            },
            {
                test: /\.(ts|tsx)$/,
                use: [
                    'ts-loader'
                ]
            }, 
            // {
            //     test: /\.md$/,
            //     use: path.resolve(__dirname, './md-loader/index.js')
            // }
        ],
    },
    plugin: {

    }
};

module.exports = webpackConfig;