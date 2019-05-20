const order = require('./style-order.js');
const prettierConfig = require('@uwhealth/prettier-config');

module.exports = {
    extends: ['stylelint-config-recommended', 'stylelint-prettier/recommended'],
    plugins: ['stylelint-prettier', 'stylelint-order'],
    rules: {
        'prettier/prettier': [true, prettierConfig],
        'order/order': order["order"],
        'order/properties-order': order["properties-order"],
        'at-rule-no-unknown': null,
        'no-invalid-double-slash-comments': null,
        'no-descending-specificity': null,
    },
};
