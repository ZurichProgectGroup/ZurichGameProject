module.exports = {
    extends: ['airbnb-typescript'],
    parser: "@typescript-eslint/parser",
    parserOptions: {
        project: './tsconfig.json',
        createDefaultProgram: true,
    },
    rules: {
        "react/jsx-indent": ["error", 4],
        "@typescript-eslint/indent": ["error", 4],
        "indent": ["error", 4],
        "jsx-a11y/label-has-associated-control": "off",
        "@typescript-eslint/indent" : ["error", 4],
        "react/prop-types": "off",
        "react/jsx-props-no-spreading": "off"
    }
};
