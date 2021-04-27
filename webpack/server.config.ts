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
