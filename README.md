# Docdog

## 运行

``` shell
[sudo] npm i vuepress [-g]

npm start
```

## 配置

`/doc/.vuepress/config.js`

## 使用

根据配置进行目录设置。

支持一级目录与二级目录，可以直接用文件之间的路径关系作为超链接。

在`/doc/.vuepress/onloadHook.js`文件中，可以提供一组函数，这些函数会在页面渲染前执行，同时可以拿到最外层的Vue实例。

## Vue Component支持

可以在`/doc/.vuepress/componets`文件夹中新建`Vue`组件

所有在该目录下的`.vue`文件都会自动注册为全局组建

在`.md`文件中可以直接使用

组件名称根据文件名称推断

> Test.vue
```
<template>
	<div>
		<h3>Test</h3>
	</div>
</template>
```

> README.md
```
组件测试
<Test></Test>
```

如果需要css预处理器，需要安装对应的包(sass: `npm i sass-loader node-sass -D`)。

默认已经有`stylus`，可以直接使用`<stytle lang="stylus" scoped>...`

## 全局钩子

在页面渲染前，会调用`/doc/.vuepress/onloadHook.js`中导出的所有方法，可以在里面书写一些额外功能，为文档提供丰富的内容。

## 编译导出

`npm run build`即可，默认导出在根目录下的`doc-dist`文件夹中，可以在`DEST`配置项中对导出路径进行配置。
