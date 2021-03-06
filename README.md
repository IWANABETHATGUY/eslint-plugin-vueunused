ENGLISH | [中文](https://github.com/IWANABETHATGUY/eslint-plugin-vueunused/blob/master/README.CN.md)

# eslint-plugin-vueunused

a eslint plugin for detecting unused code in vue single file component
## Preview
[online-preview](https://iwanabethatguy.github.io/eslint-plugin-vueunused/)
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

Add `vueunused` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix.
Also, you need to install `vue-eslint-parser`. Because this plugin requires vue-eslint-parser to parse .vue files
```json
{
    "plugins": [
        "vueunused"
    ],
    "parser": "vue-eslint-parser",
}
```


Just extends the plugin's recommended configuration

```json
{
    "extends": ["plugin:vueunused/recommend"],
}
```

## Supported Rules
**only one rule**
1. vueunused/unused




## Warning
This plugin is not compatible with `eslint-plugin-html`,cause that plugin could destroy your `scf(.vue)` component template information, But if you need to use `eslint-plugin-html` to lint your `.html` file, you could add setting as below to lint your `html` file only.
```
module.exports = {
  ...
  settings: {
    'html/html-extensions': ['.html'] // consider .html and .we files as HTML
 }
}
```
 .I recommend you use `eslint-plugin-vue`, this plugin is also used to make up for the feature that did not complete, like [no-unused-methods](https://github.com/vuejs/eslint-plugin-vue/issues/848),[no-unused-variables](https://github.com/vuejs/eslint-plugin-vue/issues/631) and so on, actually most of property you defined in the component scope which is not used it can detect it.

## Tips
1. If you use the VSCode editor, I strongly recommend that you install the `ESlint` VSCode plugin, which can point out dead code in a single file in a more intuitive way.
2. By default vscode-eslint don't lint .vue file except you install eslint-plugin-vue, if you want to test your demo and don't want to install eslint-plugin-vue, please make sure add setting blow in your vscode setting.json
```json
  "eslint.validate": [
    "vue"
  ],
```
