# Linter Configs

[![lerna](https://img.shields.io/badge/maintained%20with-lerna-cc00ff.svg)](https://lernajs.io/)

Collection of linter configurations for front-end projects. Allows for standardization across projects.
Includes ESLint, StyleLint, and Prettier.

```cli
yarn add @uwhealth/linter-configs --dev
```

## Individual configurations
This is a mono-repo of other configurations. So, installing the `linter-configs` module will install the other configurations as dependencies.
**If you just need eslint, prettier, or stylelint configurations, then you can install them individually.**

```cli
# ESLint
yarn add @uwhealth/eslint-config --dev
```
```cli
# ESLint Environments
yarn add @uwhealth/eslint-plugin-environments --dev
```
```cli
# StyleLint
yarn add @uwhealth/stylelint-config --dev
```
```cli
# Prettier
yarn add @uwhealth/prettier-config --dev
```

## Adding to a project

Within the configs of eslint or stylelint, add one of the following options:

**ESLint**
```js
"extends": ["@uwhealth"]
```

There are also environments available as a dependency of this project. They are name-spaced as `@uwhealth/environments`.
```js
"env": [
    "@uwhealth/environments/t4",
    "@uwhealth/environments/rhino",
    "@uwhealth/environments/webpack"
]
```

**StyleLint**
```js
"extends": ["@uwhealth/stylelint-config"]
```

This will bring along all plugins and rules to each linter.

**Prettier**

_Prettier configurations are embedded within the eslint and stylelint configurations, so you shouldn't need to do anything extra_.
But some editor plugins won't use embedded prettier configurations without the existence of a prettier file.

If formatting isn't working in your editor, try adding a `.prettierrc.js` file at the root of your project with this as its content:
```js
module.exports = require('@uwhealth/prettier-config');
```
