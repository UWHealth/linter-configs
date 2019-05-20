const uwhealth = require('../../packages/eslint-config');
const envs = require('../../packages/eslint-plugin-environments');

module.exports = {
    "extends": [uwhealth],
    "root": true,
    "env": {...envs.environments}
}
