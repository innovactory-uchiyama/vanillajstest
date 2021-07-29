const webpack = require('webpack')
const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

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
                    {
						loader: MiniCssExtractPlugin.loader,
					},
                    {
                        loader: "css-loader",
                        options: {
                            url: false,
                            sourceMap: true,
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
        }),
        new MiniCssExtractPlugin({
			filename: 'css/style.css',
			ignoreOrder: true,
		})
    ],
    target: ["web", "es5"],
}