# VuePress

::: tip 简介

VuePress 是一个以 Markdown 为中心的静态网站生成器。你可以使用 [Markdown在新窗口打开](https://zh.wikipedia.org/wiki/Markdown) 来书写内容（如文档、博客等），然后 VuePress 会帮助你生成一个静态网站来展示它们。

VuePress 诞生的初衷是为了支持 Vue.js 及其子项目的文档需求，但是现在它已经在帮助大量用户构建他们的文档、博客和其他静态网站。

- [VuePress2.x](https://v2.vuepress.vuejs.org/zh/)
- [VuePress1.x](https://v1.vuepress.vuejs.org/zh/)

:::

::: warning 提醒

VuePress推荐使用yarn来进行安装依赖项目，如果你设备还没有[yarn](http://yarnpkg.top/Installation.html)，请尝试安装它。

:::

## 安装

- **创建并且进入**一个目录

```sh
mkdir vuepress-starter # 创建项目目录
cd vuepress-starter # 进入这个目录
```

- 进行项目的**初始化**

:::: code-group
::: code-group-item YARN

```sh
git init
yarn init
```
:::

::: code-group-item NPM

```sh
git init
npm init
```
:::
::::

- 安装VuePress的本地依赖

:::: code-group

::: code-group-item YARN

```sh
yarn add -D vuepress@next
```

:::

::: code-group-item NPM

```sh
npm install -D vuepress@next
```

:::

::::

- 初始化完成后修改package.json文件中的script配置项

:::: code-group

::: code-group-item 官方

```json
{
  "scripts": {
    "docs:dev": "vuepress dev docs",
    "docs:build": "vuepress build docs"
  }
}
```

:::

::: code-group-item 简写

```json
{
  "scripts": {
    "dev": "vuepress dev docs",
    "build": "vuepress build docs"
  }
}
```

::: 

::::

- 将默认的临时目录和缓存目录添加到 `.gitignore` 文件中,防止git,交时提交缓存文件

```sh
echo 'node_modules' >> .gitignore
echo '.temp' >> .gitignore
echo '.cache' >> .gitignore
```

- 创建一个docs的目录,并且将自己提前写好的markdown文档放入其中。

```sh
mkdir docs
echo '# Hello VuePress' > docs/README.md
```

- 在本地启动服务器来开发你的文档网站

:::: code-group

::: code-group-item YARN

``` sh
yarn docs:dev # 官方完整版
yarn dev # 简写版
```

:::

::: code-group-item YARN

```sh
npm docs:dev # 官方完整版
npm run dev # 简写版
```

:::

::::

- VuePress 会在 [http://localhost:8080](http://localhost:8080/) 启动一个热重载的开发服务器。当你修改你的 Markdown 文件时，浏览器中的内容也会自动更新。

```sh
vite v2.9.15 dev server running at:
> Local:    http://localhost:8080/
```

- 目录结构

```
├── docs
│   ├── README.md
│   ├── docs
│   │   ├── README.md
│   │   └── pages
│   └── document
│       ├── introduction
│       └── tips
├── package.json
└── yarn.lock
```

- 更多配置详情可参考[官方文档](https://v2.vuepress.vuejs.org/zh/guide/configuration.html)

- 可能我们有些时候会需要根据具体的开发环境或者生产环境来进行项目的开发那么我们可以通过安装插件*cross-env*来进行系统环境变量的配置

```sh
yarn add cross-env
```

- 安装完成后我们可以通过配置package.json文件来进行环境变量的更改

```json
"scripts": {
    "dev": "cross-env NODE_ENV='/' vuepress dev docs",
    "build": "cross-env NODE_ENV='/yl-press/' vuepress build docs"
}
```

::: tip 提示

- cross-env NODE_ENV='/yl-press/' 引号内的为自己要部署的项目仓库的名字

:::

​	
