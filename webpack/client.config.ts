/* eslint-disable import/no-extraneous-dependencies */
import path from 'path';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import CssnanoPlugin from 'cssnano-webpack-plugin';
import TerserPlugin from 'terser-webpack-plugin';
import { TsconfigPathsPlugin } from 'tsconfig-paths-webpack-plugin';
import tsLoader from './loaders/tsLoader';
import cssLoader from './loaders/cssLoader';
import fileLoader from './loaders/fileLoader';
import { DIST_DIR, SRC_DIR, IS_DEV } from './env';

const config = {
    devtool: 'source-map',
    entry: {
        app: path.resolve(SRC_DIR, 'index.tsx'),
        sw: path.resolve(SRC_DIR, 'sw.ts'),
    },
    output: {
        path: DIST_DIR,
        filename: IS_DEV ? '[name].js' : '[name].[contenthash].js',
        publicPath: '/',
    },
    resolve: {
        extensions: ['*', '.js', '.jsx', '.json', '.ts', '.tsx'],
        plugins: [new TsconfigPathsPlugin({ configFile: './tsconfig.json' })],
    },
    module: {
        rules: [tsLoader.client, cssLoader.client, fileLoader.client],
    },
    devServer: {
        contentBase: DIST_DIR,
        port: 9000,
        hot: true,
        open: true,
        historyApiFallback: true,
    },
    plugins: [
        new MiniCssExtractPlugin(),
    ],
    optimization: {
        minimize: !IS_DEV,
        minimizer: [
            new CssnanoPlugin(),
            new TerserPlugin(),
        ],
    },
};

export default config;
