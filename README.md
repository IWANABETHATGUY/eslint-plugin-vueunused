ENGLISH | [中文](https://github.com/IWANABETHATGUY/eslint-plugin-vueunused/blob/master/README.CN.md)
# eslint-plugin-vueunused

a eslint plugin for detecting unused code in vue single file component

## Installation

You'll first need to install [ESLint](http://eslint.org):

```
$ npm i eslint --save-dev
```

Next, install `eslint-plugin-vueunused` 

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
        "vueunused/unused": 1
    }
}
```

## Supported Rules
**only one rule**
1. vueunused/unused




## Warning
This plugin is not compatible with `eslint-plugin-html`,cause that plugin could destroy your `scf(.vue)` component template information, so I recommend you use `eslint-plugin-vue`, this plugin is also used to make up for the feature that did not complete, like [no-unused-methods](https://github.com/vuejs/eslint-plugin-vue/issues/848),[no-unused-variables](https://github.com/vuejs/eslint-plugin-vue/issues/631) and so on, actually most of property you defined in the component scope which is not used it can detect it.

## Tips
If you use VSCode Editor, I recommend you install `ESlint` VSCode plugin which will point out your deadcode with wavy line which is nicely prompted;