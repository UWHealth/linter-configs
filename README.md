# Linter Configs
Collection of linter configurations for front-end projects. Allows for standardization across projects.
Includes ESLint, StyleLint, and Prettier.

```
yarn add uwhealth/linter-configs
```

## Adding to a project

Within the config of eslint or stylelint, add one of the following options:

**ESLint**
```
"extends": ["./node_modules/@uwhealth/linter-configs/eslint.js"]
```

**StyleLint**
```
"extends": ["./node_modules/@uwhealth/linter-configs/stylelint.js"]
```

This will bring along all plugins and rules to each linter.

**Prettier**

Editor plugins for Prettier may require a `.prettierrc.js` file at the root of the project to work.
In that case, the file should look like this:
```
module.exports = require('@uwhealth/linter-configs/.prettierrc.js');
```
