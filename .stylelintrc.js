const order = require('./style-order.js');
const prettier = require('./prettier.js');

module.exports = {
    extends: ['stylelint-config-recommended', 'stylelint-prettier/recommended'],
    plugins: ['stylelint-prettier', 'stylelint-order'],
    rules: {
        'prettier/prettier': [true, prettier],
        'order/order': order.order,
        'order/properties-order': order.properties,
        'at-rule-no-unknown': null,
        'no-invalid-double-slash-comments': null,
        'no-descending-specificity': null,
    },
};
