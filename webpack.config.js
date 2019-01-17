var path = require('path');
var UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
    context: path.join(__dirname, 'wwwroot'),
    entry: {
        App: './js/app.ts'
    },
    output: {
        path: path.join(__dirname, 'wwwroot/Bundles'),
        filename: '[name].bundle.js'
    },
    watch: true,
    watchOptions: {
        poll: 500
    },
    resolve: {
        alias: {
            vue: 'vue/dist/vue.esm.js'
        }
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            },
            {
                test: /.ts$/,
                use: ['ts-loader']
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: ["file-loader"]
            }
        ]

    },
    optimization: {
        minimizer: [
            new UglifyJsPlugin({
                uglifyOptions: {
                    output: {
                        comments: false
                    }
                }
            })
        ]
    },
    stats: { colors: true }    // pretty terminal output
};
