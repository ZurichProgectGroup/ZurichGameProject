import { IS_DEV } from '../env';

export default {
    client: {
        test: /\.tsx?$/,
        use: [
            IS_DEV && ({
                loader: 'babel-loader',
                options: {
                    cacheDirectory: true,
                    plugins: ['react-hot-loader/babel'],
                },
            }),
            'ts-loader',
        ],
        exclude: /(node_modules)/,
    },
    server: {
        test: /\.ts(x?)$/,
        exclude: /node_modules/,
        use: 'ts-loader',
    },
};
