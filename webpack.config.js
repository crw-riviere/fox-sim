const Path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry:'./src/index.js',
    output: {
        filename:'index.js',
        path: Path.resolve(__dirname, 'dist')
    },
    devServer:{
        contentBase: './dist'
    },
    module: {
        rules: [
          {
            test: /\.jsx?$/,
            exclude: /(node_modules|bower_components)/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: ['@babel/env','@babel/react']
              }
            }
          }
        ]
    },
    plugins:[
        new CleanWebpackPlugin('dist'),
        new HtmlWebpackPlugin({
            title:'Fox Sim',
            template: './src/index.html'
        })
    ]
}