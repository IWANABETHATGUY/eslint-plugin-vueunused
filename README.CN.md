[ENGLISH](https://github.com/IWANABETHATGUY/eslint-plugin-vueunused) | 中文
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


然后在规则部分配置你想要的规则
```json
{
    "rules": {
        "vueunused/unused": 1
    }
}
```

## 支持的规则
**只有一条规则**
1. vueunused/unused




## Warning
This plugin is not compatible with `eslint-plugin-html`,cause that plugin could destroy your `scf(.vue)` component template information, so I recommend you use `eslint-plugin-vue`, this plugin is also used to make up for the feature that did not complete, like [no-unused-methods](https://github.com/vuejs/eslint-plugin-vue/issues/848),[no-unused-variables](https://github.com/vuejs/eslint-plugin-vue/issues/631) and so on, actually most of property you defined in the component scope which is not used it can detect it.

## Tips
If you use VSCode Editor, I recommend you install `ESlint` VSCode plugin which will point out your deadcode with wavy line which is nicely prompted;