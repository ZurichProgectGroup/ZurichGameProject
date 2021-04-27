export default {
    client: {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /(node_modules)/,
    },
    server: {
        test: /\.ts(x?)$/,
        exclude: /node_modules/,
        use: 'ts-loader',
    },
};
