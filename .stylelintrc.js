const order = require('./style-order.js');
const prettier = require('./.prettierrc.js');

module.exports = {
    extends: ['stylelint-prettier/recommended'],
    plugins: ['stylelint-prettier', 'stylelint-order'],
    rules: {
        'prettier/prettier': [true, prettier],
        'order/order': order.order,
        'order/properties-order': order.properties,
    },
};
