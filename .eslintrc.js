module.exports = {
    extends: ['airbnb-typescript'],
    parser: "@typescript-eslint/parser",
    parserOptions: {
        project: './tsconfig.json',
    },
    rules: {
        "no-param-reassign": "off",
    }
};
