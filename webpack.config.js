const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CssnanoPlugin = require('cssnano-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = (env, opt) => {
    const isProduction = opt.mode === 'production';

    return {
        devtool: 'source-map',
        entry: {
            index: './src/index.tsx',
        },
        output: {
            path: path.join(__dirname, '/dist'),
            filename: isProduction ? 'bundle.[contenthash].js' : 'bundle.js',
            publicPath: './',
        },
        resolve: {
            extensions: ['.tsx', '.ts', '.js'],
            alias: {
                Audio: path.resolve(__dirname, 'src/audio/'),
                Images: path.resolve(__dirname, 'src/images/'),
                Components: path.resolve(__dirname, 'src/components/'),
                Configs: path.resolve(__dirname, 'src/configs/'),
                Utils: path.resolve(__dirname, 'src/utils/'),
                Pages: path.resolve(__dirname, 'src/pages/'),
                Mocks: path.resolve(__dirname, 'src/mocks/'),
                Types: path.resolve(__dirname, 'src/types/'),
                Configs: path.resolve(__dirname, 'src/configs/'),
                Services: path.resolve(__dirname, 'src/services/'),
            },
        },
        module: {
            rules: [
                {
                    test: /\.tsx?$/,
                    use: 'ts-loader',
                    exclude: /(node_modules)/,
                },
                {
                    test: /\.css$/,
                    use: [
                        MiniCssExtractPlugin.loader,
                        'css-loader',
                        'postcss-loader',
                    ],
                },
                {
                    test: /\.(png|jpe?g|gif|svg|mp3)$/i,
                    use: [
                        {
                            loader: 'file-loader',
                        },
                    ],
                },
            ],
        },
        devServer: {
            contentBase: path.join(__dirname, 'dist'),
            port: 9000,
            hot: true,
            open: true,
            historyApiFallback: true,
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: './www/index.html',
                cache: false,
                title: 'Beat Game',
            }),
            new MiniCssExtractPlugin(),
            new CleanWebpackPlugin(),
        ],
        optimization: {
            minimize: isProduction,
            minimizer: [
                new CssnanoPlugin(),
                new TerserPlugin(),
            ],
        },
    };
};
