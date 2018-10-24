# @uwhealth/eslint-plugin-environments

Additional environments that UW Health works in (T4, Rhino, Webpack)

## Installation

You'll first need to install [ESLint](http://eslint.org):

```
$ npm i eslint --save-dev
```

Next, install `@uwhealth/eslint-plugin-environments`:

```
$ npm install @uwhealth/eslint-plugin-environments --save-dev
```

**Note:** If you installed ESLint globally (using the `-g` flag) then you must also install `eslint-plugin-environments` globally.

## Usage

Add `environments` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "plugins": [
        "@uwhealth/environments"
    ]
}
```
