module.exports = {
    plugins: [
        [
            require('postcss-nested'),
            "postcss-preset-env",
            require("postcss-import"),
            require('autoprefixer'),
        ],
    ],
};
