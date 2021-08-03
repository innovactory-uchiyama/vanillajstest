const webpack = require('webpack')
const path = require('path')
module.exports = (env, argv) => {
    const isProduction = argv.mode === 'production'
    configData = {
        //バンドルファイルの設定
        output: {
            path: path.join(__dirname, 'dist'),
            //バンドル後のjs
            filename: 'bundle.js',
            publicPath: '/',
            assetModuleFilename: 'images/[hash][ext][query]'
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
                    test: /\.(css|scss|sass)$/,
                    use: [
                        "style-loader",
                        {
                            loader: "css-loader",
                            options: {
                                sourceMap: !isProduction,
                            }
                        },
                        {
                            loader: "sass-loader",
                            options: {
                                sourceMap: !isProduction
                            },
                        }
                    ]
                },
                {
                    test: /\.(png|svg|jpg|jpeg|gif)$/,
                    type: 'asset/resource',
                },
            ],
        },
        plugins: [
        ],
        target: ['web', 'es5'],
    }
    if (isProduction) {
    }
    else {
        configData.devtool = 'source-map'
        //デバッグ方法の設定(webpack serveコマンド等で使用)
        configData.devServer = {
            index: 'index.html',
            contentBase: path.join(__dirname, 'dist'),
            //ファイル監視
            watchContentBase: true,
            port: 8080,
            historyApiFallback: true,
            // hot: true,
            inline: true
        }
        configData.output.devtoolModuleFilenameTemplate = '[resource-path]'
    }
    return configData
}