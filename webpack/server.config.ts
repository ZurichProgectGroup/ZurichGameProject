/* eslint-disable import/no-extraneous-dependencies */
import path from 'path';
import { Configuration } from 'webpack';
import nodeExternals from 'webpack-node-externals';
import { TsconfigPathsPlugin } from 'tsconfig-paths-webpack-plugin';

import { IS_DEV, DIST_DIR, SRC_DIR } from './env';
import fileLoader from './loaders/fileLoader';
import cssLoader from './loaders/cssLoader';
import tsLoader from './loaders/tsLoader';

const config: Configuration = {
    name: 'server',
    target: 'node',
    node: { __dirname: false },
    entry: path.join(SRC_DIR, 'server'),
    module: {
        rules: [fileLoader.server, cssLoader.server, tsLoader.server],
    },
    output: {
        filename: 'server.js',
        libraryTarget: 'commonjs2',
        path: DIST_DIR,
        publicPath: '/',
    },
    resolve: {
        modules: ['src', 'node_modules'],
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
        // @ts-ignore
        plugins: [new TsconfigPathsPlugin({ configFile: './tsconfig.json' })],
    },

    devtool: 'source-map',

    performance: {
        hints: IS_DEV ? false : 'warning',
    },

    externals: [nodeExternals({ allowlist: [/\.(?!(?:tsx?|json)$).{1,5}$/i] })],

    optimization: { nodeEnv: false },
};

export default config;
