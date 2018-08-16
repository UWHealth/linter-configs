# Linter Configs
Collection of linter configurations for front-end projects. Allows for standardization across projects.
Includes ESLint, StyleLint, and Prettier.

```
yarn add @uwhealth/linter-configs
```

## Adding to a project

Within the configs of eslint or stylelint, add one of the following options:

**ESLint**
```
"extends": ["./node_modules/@uwhealth/linter-configs/eslint.js"]
```

There are also environments available as a dependency of this project. They are name-spaced as `@uwhealth/environments`.
```
"env": [
    "@uwhealth/environments/t4",
    "@uwhealth/environments/rhino",
    "@uwhealth/environments/webpack"
]
```

**StyleLint**
```
"extends": ["./node_modules/@uwhealth/linter-configs/stylelint.js"]
```

This will bring along all plugins and rules to each linter.

**Prettier**

Prettier configurations are embedded within the eslint and stylelint configurations. But if formatting isn't working from your editor, try adding a `.prettierrc.js` file at the root of your project.
In that case, the file should look like this:
```
module.exports = require('@uwhealth/linter-configs/prettier.js');
```
