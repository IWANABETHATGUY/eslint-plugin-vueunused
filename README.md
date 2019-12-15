# eslint-plugin-vueunused

a eslint plugin for detecting unused code in vue single file component

## Installation

You'll first need to install [ESLint](http://eslint.org):

```
$ npm i eslint --save-dev
```

Next, install `eslint-plugin-vueunused`:

```
$ npm install eslint-plugin-vueunused --save-dev
```

**Note:** If you installed ESLint globally (using the `-g` flag) then you must also install `eslint-plugin-vueunused` globally.

## Usage

Add `vueunused` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "plugins": [
        "vueunused"
    ]
}
```


Then configure the rules you want to use under the rules section.

```json
{
    "rules": {
        "vueunused/unused": 2
    }
}
```

## Supported Rules

* Fill in provided rules here





