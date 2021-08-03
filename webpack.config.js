const path = require('path')
module.exports = (env, argv) => {
    const isProduction = argv.mode === 'production'
    configData = {
        //バンドルファイルの設定
        output: {
            //出力フォルダ
            path: path.join(__dirname, 'dist'),
            //バンドル後のjs
            filename: 'bundle.js',
            publicPath: '/',
            //画像等のバンドルされたアセットファイルの出力方法
            assetModuleFilename: 'images/[hash][ext][query]'
        },
        entry: './src/index.js',
        module: {
            // JavaScriptからimport(require)した.js以外のファイルをバンドルする場合はここにLoaderを指定する
            rules: [
                {
                    test: /\.ts$/,
                    use: 'ts-loader',// typescriptをjavascriptに変換する
                    exclude: /node_modules/,
                },
                {
                    test: /\.(css|scss|sass)$/,
                    use: [
                        "style-loader", //<head>タグ内にcssを<style>として展開する
                        {
                            loader: "css-loader", // jsからimportしたcssをバンドルする
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
        target: 'web',
        //import文で.jsファイルまたは.tsファイルどちらも拡張子無しで指定する
        resolve: {
            extensions: [
                '.ts', '.js',
            ],
        },
    }
    if (isProduction) {
    }
    else {// デバッグ時の追加設定
        //source-mapの構築方法(値によってビルド速度に大きく影響する)
        configData.devtool = 'eval-source-map'
        //webpack serveコマンド実行時の設定
        configData.devServer = {
            index: 'index.html',
            //静的ファイルのディレクトリの位置を指定する(この例ではindex.html等)
            contentBase: path.join(__dirname, 'dist'),
            // ファイル監視
            watchContentBase: true,
            // ローカル環境で実行する際に使用するポート
            port: 8080,
            // SPAとしてWebサイトを構成した場合に必要な指定
            historyApiFallback: true,
            inline: true
        }
        // sourcemapで指定するパス解決方法 devtoolの指定によって必要なパラメータが変わる
        configData.output.devtoolModuleFilenameTemplate = 'webpack:///[resource-path]'
    }
    return configData
}