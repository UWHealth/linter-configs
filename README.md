# Linter Configs

[![lerna](https://img.shields.io/badge/maintained%20with-lerna-cc00ff.svg)](https://lernajs.io/)

Collection of linter configurations for front-end projects. Allows for standardization across projects.
Includes ESLint, StyleLint, and Prettier.

```cli
npm install @uwhealth/linter-configs -D
```

## Individual configurations
This is a mono-repo of other configurations. So, installing the `linter-configs` module will install the other configurations as dependencies.
**If you just need eslint, prettier, or stylelint configurations, then you can install them individually.**

```cli
# ESLint
npm install @uwhealth/eslint-config -D
```
```cli
# ESLint Environments
npm install @uwhealth/eslint-plugin-environments -D
```
```cli
# StyleLint
npm install @uwhealth/stylelint-config -D
```
```cli
# Prettier
npm install @uwhealth/prettier-config -D
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

---

# Repo Management

This repo uses **[Lerna](https://github.com/lerna/lerna)** to manage publishing and versioning.

Briefly, this means that all the configs live within this single repo (`./packages`), but are published as individual npm modules (e.g. `@uwhealth/eslint-config`, `@uwhealth/stylelint-config`, etc.).
The top level package (where this README lives) essentially just imports the other packages (and brings those others as in as dependencies). This allows projects to import one or all the different configs.
Using **Lerna**, you can make changes to any of the sub-packages and Lerna will decide what packages need to be published (and have their version changed).

If you are making modifications to this repo for the first time, you should run the following commands:

```cli
npm install
npm run start
```
This will make sure you're using the local versions of the dependencies (in the `./packages` folder), instead of the packages downloaded from npm. You'll want this, since you're likely making changes to the packages as well as the root directory.

To publish new changes to npm, use the following command:

```cli
npx lerna publish
```

You'll be prompted to decide what type of update this is (`patch`, `minor`, `major`). Unless there's a API change that will affect projects currently using these configs, you should choose `patch`.

**NOTE:** You have to be logged into npm and github (in your CLI) in order to publish. (using `npm login`).


