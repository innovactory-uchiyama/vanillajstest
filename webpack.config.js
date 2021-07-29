const webpack = require('webpack')
const path = require('path')

module.exports = {
    devtool: 'source-map',
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'main.js',
        publicPath: '/'
    },
    devServer: {
        index: 'index.html',
        contentBase: path.join(__dirname, 'dist'),
        watchContentBase: true,
        port: 8080,
        historyApiFallback: true,
        hot: true,
        inline: true
    },
    entry: './src/index.js',
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: "babel-loader",
                        options: {
                            presets: [
                                "@babel/preset-env",
                            ],
                        },
                    },
                ],
            },
            {
                test: /\.scss/,
                use: [
                    "style-loader",
                    {
                        loader: "css-loader",
                        options: {
                            url: false,
                            sourceMap: true,
                            // 0 => no loaders (default);
                            // 1 => postcss-loader;
                            // 2 => postcss-loader, sass-loader
                            importLoaders: 2
                        }
                    },
                    {
                        loader: "sass-loader",
                        options: {
                            sourceMap: true
                        },
                    }
                ]
            }
        ],
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
        , new webpack.LoaderOptionsPlugin({
            debug: true
        })
    ],
    target: ["web", "es5"],
}