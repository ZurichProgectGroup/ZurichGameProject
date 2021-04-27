const REG_EXP = /\.(png|jpe?g|gif|svg|mp3|ogg)$/i;

export default {
    client: {
        test: REG_EXP,
        use: [
            {
                loader: 'file-loader',
            },
        ],
    },
    server: {
        use: [
            {
                loader: 'file-loader',
            },
        ],
        test: REG_EXP,
    },
};
