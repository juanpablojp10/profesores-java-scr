//  ↓ Sirve para identificar la ruta de donde se encuentra este archivo
const path = require('path');

// Me permite trabajar con documentos html ↓
const HtmlWebpackplugin = require('html-webpack-plugin');

// ↓ Extraer los codigos css, minificarlo y optimizarlo, ademas lo agrega como parte del head
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

// Nos permite copiar archivos de una ruta a otra ↓
const CopywebpackPlugin = require('copy-webpack-plugin');

module.exports = (env, argv) => {

    const isProduction = argv.mode === 'production';

    return {
        entry: {
            index: './src/index.js',
        },
        output: {
            filename: '[name].js',
            path: path.resolve(__dirname, 'dist')
        },
        module: {
            rules: [

                {
                    test: /\.css$/,
                    use: [
                        isProduction ? MiniCssExtractPlugin.loader : 'style-loader',
                        'css-loader'
                    ]
                },
                {
                    text: /\.js$/,
                    include: path.resolve(__dirname, 'src/assets/js'),
                    use: {
                        loader: 'babel-loader',
                        options: {
                            presets: ['@babel/preset-env']
                        }
                    }
                }
            ]
        },
        plugins: [
        ],
        devServer: {
            static: {
                directory: path.join(__dirname, 'dist'),
            },
            open: true,
            hot: true,
            watchFiles: [
                'src/**/*'
            ]
        }
    };

}