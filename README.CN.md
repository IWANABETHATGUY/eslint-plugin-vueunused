[ENGLISH](https://github.com/IWANABETHATGUY/eslint-plugin-vueunused/blob//README.CN.md) | 中文 
# eslint-plugin-vueunused

一个用于检测vue单个文件组件中死代码的eslint插件。

## 安装

首先你需要安装 [ESLint](http://eslint.org):

```
$ npm i eslint --save-dev
```

然后, 安装 `eslint-plugin-vueunused` 

```
$ npm install eslint-plugin-vueunused --save-dev
```

**注意:** 
如果您全局安装了ESLint（使用`-g`标志），则还必须全局安装`eslint-plugin-vueunused`。
## 使用方法

将 `vueunused` 添加至你的 `.eslintrc` 配置文件中的`plugins`部分. 你可以省略 `eslint-plugin-` 前缀:

```json
{
    "plugins": [
        "vueunused"
    ]
}
```


然后继承插件推荐配置即可
```json
{
    "extends": ["plugin:vueunused/recommend"],
}
```

## 支持的规则
**只有一条规则**
1. vueunused/unused




## 警告

该插件与`eslint-plugin-html`不兼容，因为该插件可能会破坏您的`scf（.vue）`组件模板信息，如果你一定要共用`eslint-plugin-html` 可以考虑再`.eslintrc.js`中添加
```
module.exports = {
  ...
  settings: {
    'html/html-extensions': ['.html'] // consider .html and .we files as HTML
 }
}
```
使用该配置指定需要使用`eslint-plugin-html`的 文件，不要lint`.vue`即可。
我建议您使用`eslint-plugin-vue`，本插件用于弥补`eslint-plugin-vue`某些未完成的功能，例如[no-unused-methods](https://github.com/vuejs/eslint-plugin-vue/issues/848),[no-unused-variables](https://github.com/vuejs/eslint-plugin-vue/issues/631)，等等挂载在`this`上的属性实际上，您在组件范围内定义的大多数未使用的属性都可以被检测到。

## 建议
如果您使用VSCode编辑器，我强烈建议您安装`ESlint` VSCode插件，它可以用更加直观的方式指出单文件中的死代码。
