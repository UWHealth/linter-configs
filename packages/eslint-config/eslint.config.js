const prettierConfig = require('@uwhealth/prettier-config');

module.exports = {
    extends: [
        'eslint:recommended',
        'plugin:prettier/recommended',
        'prettier/standard',
    ],
    plugins: ['@uwhealth/environments', 'compat', 'html', 'prettier'],
    parser: 'babel-eslint',
    parserOptions: {
        ecmaVersion: 9,
        sourceType: 'module',
        allowImportExportEverywhere: true,
    },
    env: {
        browser: true,
        node: true,
        commonjs: true,
        serviceworker: true,
        es6: true,
    },
    rules: {
        complexity: ['warn', 6],
        semi: ['warn', 'always'],

        'prettier/prettier': ['warn', prettierConfig],

        'no-console': ['error', { allow: ['warn', 'error', 'info', 'table'] }],

        'lines-around-comment': [
            'warn',
            {
                beforeBlockComment: true,
                allowBlockStart: true,
                allowBlockEnd: true,
                allowObjectStart: true,
                allowObjectEnd: true,
                allowArrayStart: true,
                allowArrayEnd: true,
            },
        ],
        'no-tabs': 'off',
        'no-mixed-spaces-and-tabs': ['warn', 'smart-tabs'],
        'new-cap': 'off',
        'no-trailing-spaces': [
            'warn',
            {
                skipBlankLines: true,
            },
        ],
        'no-multiple-empty-lines': ['warn', { max: 2 }],
        'no-multi-spaces': [
            'warn',
            {
                exceptions: {
                    BinaryExpression: true,
                    VariableDeclarator: true,
                    Property: true,
                    ImportDeclaration: true,
                },
                ignoreEOLComments: true,
            },
        ],
        'space-before-blocks': ['warn', 'always'],
    },
    globals: {},
};
