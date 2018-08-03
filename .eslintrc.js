const prettier = require('./.prettierrc.js');

module.exports = {
    extends: [
        'eslint:recommended',
        'plugin:prettier/recommended',
        'prettier/standard',
    ],
    plugins: ['compat', 'html', 'prettier'],
    parser: 'babel-eslint',
    parserOptions: {
        ecmaVersion: 9,
        sourceType: 'module',
        allowImportExportEverywhere: true,
    },
    env: {
        browser: true,
        node: true,
        nashorn: true,
        commonjs: true,
    },
    rules: {
        complexity: ['warn', 6],
        semi: ['warn', 'always'],

        'prettier/prettier': ['warn', prettier],

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
    globals: {
        cwd: true,

        // Java Rhino
        importPackage: true,
        importClass: true,
        print: true,
        java: true,
        org: true,
        com: true,
        defineClass: true,
        deserialize: true,
        gc: true,
        help: true,
        load: true,
        loadClass: true,
        Packages: true,
        print: true,
        quit: true,
        readFile: true,
        readUrl: true,
        runCommand: true,
        seal: true,
        serialize: true,
        spawn: true,
        sync: true,
        toint32: true,
        version: true,

        // Terminal 4
        document: true,
        publishCache: true,
        dbStatement: true,
        section: true,
        content: true,
        contentList: true,
        template: true,
        templateFormat: true,
        language: true,
        isPreview: true,
        isStyleHeader: true,
        ContentHierarchy: true,
        ContentManager: true,

        // Webpack
        __webpack_modules__: true,
        __webpack_require__: true,
        __webpack_chunk_load__: true,
        __non_webpack_require__: true,
        __webpack_public_path__: true,
        __webpack_hash__: true,
        __resourceQuery: true,
        DEBUG: true,
    },
};
