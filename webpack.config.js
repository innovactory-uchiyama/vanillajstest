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
                    test: /\.(css|scss|sass)$/,
                    use: [
                        "style-loader",//<head>タグ内にcssを<style>として展開する
                        {
                            loader: "css-loader",//jsからimportしたcssをバンドルする
                            options: {
                                sourceMap: !isProduction,
                            }
                        },
                        {
                            loader: "sass-loader",// sass/scssをcssに変換する
                            options: {
                                sourceMap: !isProduction
                            },
                        }
                    ]
                },
                {
                    test: /\.(png|svg|jpg|jpeg|gif)$/,// js内でimportした画像をバンドルする
                    type: 'asset/resource',
                },
            ],
        },
        target: ['web'],
    }
    if (isProduction) {
         configData.plugins
    }
    else {// デバッグ時の追加設定
        configData.devtool = 'source-map'
        configData.devServer = {
            index: 'index.html',
            contentBase: path.join(__dirname, 'dist'),
            // ファイル監視
            watchContentBase: true,
            // ローカル環境で実行する際に使用するポート
            port: 8080,
            historyApiFallback: true,
            // hot: true,
            inline: true
        }
        configData.output.devtoolModuleFilenameTemplate = '[resource-path]'
    }
    return configData
}