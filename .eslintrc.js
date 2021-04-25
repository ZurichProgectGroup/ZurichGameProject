module.exports = {
    extends: ['airbnb-typescript'],
    parser: "@typescript-eslint/parser",
    parserOptions: {
        project: './tsconfig.json',
        createDefaultProgram: true,
    },
    rules: {
        "react/jsx-indent": ["error", 4],
        "react/jsx-indent-props": ["error", 4],
        "indent": ["error", 4, {"SwitchCase": 1}],
        "@typescript-eslint/indent": ["error", 4, {"SwitchCase": 1}],
        "jsx-a11y/label-has-associated-control": "off",
        "react/prop-types": "off",
        "react/jsx-props-no-spreading": "off",
        "react/button-has-type": "off",
        'no-console': "off"
    }
};
