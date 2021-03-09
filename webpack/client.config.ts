/* eslint-disable import/no-extraneous-dependencies */
import path from 'path';
import { HotModuleReplacementPlugin } from 'webpack';
import { CleanWebpackPlugin } from 'clean-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import CssnanoPlugin from 'cssnano-webpack-plugin';
import TerserPlugin from 'terser-webpack-plugin';
import { TsconfigPathsPlugin } from 'tsconfig-paths-webpack-plugin';
import tsLoader from './loaders/tsLoader';
import cssLoader from './loaders/cssLoader';
import fileLoader from './loaders/fileLoader';
import { DIST_DIR, SRC_DIR, IS_DEV } from './env';

const getPlugins = () => {
    const plugins = [
        new MiniCssExtractPlugin(),
        new CleanWebpackPlugin(),
    ];
    if (IS_DEV) {
        plugins.push(new HotModuleReplacementPlugin());
    }
    return plugins;
};

const config = {
    devtool: 'source-map',
    entry: {
        app: ['react-hot-loader/patch', 'webpack-hot-middleware/client', path.resolve(SRC_DIR, 'index.tsx')],
        sw: path.resolve(SRC_DIR, 'sw.ts'),
    },
    output: {
        path: DIST_DIR,
        filename: IS_DEV ? '[name].js' : '[name].[contenthash].js',
        publicPath: '/',
    },
    resolve: {
        extensions: ['*', '.js', '.jsx', '.json', '.ts', '.tsx'],
        alias: {
            Api: path.resolve(SRC_DIR, 'api/'),
            Audio: path.resolve(SRC_DIR, 'audio/'),
            Images: path.resolve(SRC_DIR, 'images/'),
            Components: path.resolve(SRC_DIR, 'components/'),
            Configs: path.resolve(SRC_DIR, 'configs/'),
            Utils: path.resolve(SRC_DIR, 'utils/'),
            Pages: path.resolve(SRC_DIR, 'pages/'),
            Store: path.resolve(SRC_DIR, 'store/'),
            Mocks: path.resolve(SRC_DIR, 'mocks/'),
            Types: path.resolve(SRC_DIR, 'types/'),
            Services: path.resolve(SRC_DIR, 'services/'),
            Selectors: path.resolve(SRC_DIR, 'selectors/'),
            Hooks: path.resolve(SRC_DIR, 'hooks/'),
        },
        plugins: [new TsconfigPathsPlugin({ configFile: './tsconfig.json' })],
    },
    module: {
        rules: [tsLoader.client, cssLoader.client, fileLoader.client],
    },
    plugins: getPlugins(),
    optimization: {
        minimize: !IS_DEV,
        minimizer: [
            new CssnanoPlugin(),
            new TerserPlugin(),
        ],
    },
};

export default config;
