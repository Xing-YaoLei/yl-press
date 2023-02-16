# Vite 在 qiankun 项目中的使用

::: tip qiankun

qiankun 是一个基于 [single-spa](https://github.com/CanopyTax/single-spa) 的[微前端](https://micro-frontends.org/)实现库，旨在帮助大家能更简单、无痛的构建一个生产可用微前端架构系统。

:::

### 一点自己的想法

因为乾坤可以做到主应用以及微应用都与技术栈无关，所以qiankun的改造对于技术栈层面来说还是相对轻松的。但从使用下来这段时间来说，qiankun的使用坑还是很多的。

- 首先qiankun主要使用是在webpack上面进行的，对于vite来说（目前是2023年2月16日）暂时还没有进行**官方**的兼容，如果项目为vite的情况下可能需要使用三方的插件来进行开发。
- qiankun的一些配置文档也不够清晰（可能是因为我太菜了）所以从刚刚接触微前端的弟兄们，可能使用起来需要查阅大量的搜索引擎的资料。
- 上线环境与开发环境一定程度上的配置是不太相同的，可能在开发环境配置好了之后，上线的时候会出现页面无法加载的情况，样式冲突，沙箱隔离不生效的情况。
- 所幸qiankun官方提供了[demo](https://github.com/umijs/qiankun)供大家来进行查看以及学习。

### 📦 前情提要

公司需要将现有的MaaS系统进行微前端架构的拆分（个人认为更像是看到别人使用了微前端架构，为了使用微前端架构而去使用），但是不得不承认，微前端架构一定程度上也能够让项目耦合程度降低，某一个模块的开发拆分出单独的一个项目，修改模块只需要去对应的服务中进行修改即可。

但是对于一个中小型项目的开发方面来说，个人认为可能是有些大材小用的。

### 项目背景

🔧 主项目：Vue3.x + Vite + Element-Plus + Axios + Pinia

🔨 子项目：个人尝试了Vue + Webpack的框架 以及 Vue + Vite的框架，Vite的使用可能坑会多一点点。

### 具体配置

其实具体配置都大差不差，基本都能在Github、juejin、csdn这些网站上面能够看到很多大佬写的，和官网文档提供的内容也都差不多。对于父项目配置的地方很少，下面放出一下例子。

#### 1、安装qiankun

```sh
pnpm i qiankun
```

#### 2、主应用中注册微应用

```ts
// 引入qiankun对应的方法   main.ts || main.js
import { registerMicroApps, start  } from "qiankun"
// 将微应用的信息进行定义
const microAppList: any = [
  {
    name: "qiankuntestapp1",
    entry: "http://www.oh-undefined.com:8080",
    container: "#microApp",
    activeRule: "/qiankuntestapp1",
    props: {
      user: "123"
    }
  },
  {
    name: "qiankuntestapp2",
    entry: "http://www.oh-undefined.com:8081",
    container: "#microApp",
    activeRule: "/qiankuntestapp2"
  }
]
// 注册微应用
registerMicroApps(microAppList)
```

#### 3、微应用（Vite + Vue3）

```ts
// vite.config.ts || vite.config.js
import qiankun from "vite-plugin-qiankun";
import { defineConfig } from "vite";
import path from "path";
import vue from "@vitejs/plugin-vue";
const mode = "product";

// useDevMode 开启时与热更新插件冲突
const useDevMode = true;
export default defineConfig({
  base: mode == "local" ? "/" : "http://www.oh-undefined.com:8080",
  plugins: [
    vue(),
    qiankun("viteapp", {
      useDevMode,
    }),
  ],
  server: {
    // 这部分代码是网上看到的，但是似乎暂时没有用。
    fsServe: {
      root: path.join(process.cwd(), "../../"),
    },
    host: "0.0.0.0",
    // 跨域的解决似乎也是问题
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
  },
});
```

main.ts的配置

```ts
// main.ts || main.js
import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
// 因为使用的是Vite 所以使用的是vite-plugin-qiankun的插件来进行兼容的
import {
  renderWithQiankun,
  qiankunWindow,
} from "vite-plugin-qiankun/dist/helper";
import router from "./router/index";

const render = (container) => {
  const appDom = container ? container : "#subApp";
  createApp(App).use(router).mount(appDom);
};

const initQianKun = () => {
  renderWithQiankun({
    // 当前应用在主应用中的生命周期
    // 文档 https://qiankun.umijs.org/zh/guide/getting-started#
    mount(props) {
      render(props.container);
      //  可以通过props读取主应用的参数：msg
      // 监听主应用传值
      props.onGlobalStateChange((res) => {
        store.count = res.count;
        // console.log(res.count)
      });
    },
    bootstrap() {},
    unmount() {},
  });
};

qiankunWindow.__POWERED_BY_QIANKUN__ ? initQianKun() : render();
```

#### 4、微应用（Webpack + Vue3）

这个的配置其实是从qiankun的官方demo中拿到的，大家也可以直接下载。

```ts
// vue.config.js
const path = require("path");
const { name } = require("./package");

function resolve(dir) {
  return path.join(__dirname, dir);
}

const port = 5000;

module.exports = {
  outputDir: "dist",
  assetsDir: "static",
  filenameHashing: true,
  devServer: {
    hot: true,
    disableHostCheck: true,
    port,
    overlay: {
      warnings: false,
      errors: true,
    },
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
  },
  // 自定义webpack配置
  configureWebpack: {
    resolve: {
      alias: {
        "@": resolve("src"),
      },
    },
    output: {
      // 把子应用打包成 umd 库格式
      library: `${name}-[name]`,
      libraryTarget: "umd",
      jsonpFunction: `webpackJsonp_${name}`,
    },
  },
};
```

main.js的配置

```ts
// main.js
import "./public-path";
import { createApp } from "vue";
import {
  createRouter,
  // createWebHashHistory,
  createWebHistory,
} from "vue-router";
import App from "./App.vue";
import routes from "./router";
import store from "./store";

let router = null;
let instance = null;
let history = null;

function render(props = {}) {
  const { container } = props;
  history = createWebHistory(window.__POWERED_BY_QIANKUN__ ? "/test" : "/");
  router = createRouter({
    history,
    routes,
  });

  instance = createApp(App);
  instance.use(router);
  instance.use(store);
  instance.mount(container ? container.querySelector("#app") : "#app");
}

if (!window.__POWERED_BY_QIANKUN__) {
  render();
}

export async function bootstrap() {
  console.log("%c%s", "color: green;", "vue3.0 app bootstraped");
}

function storeTest(props) {
  props.onGlobalStateChange &&
    props.onGlobalStateChange(
      (value, prev) =>
        console.log(`[onGlobalStateChange - ${props.name}]:`, value, prev),
      true
    );
  props.setGlobalState &&
    props.setGlobalState({
      ignore: props.name,
      user: {
        name: props.name,
      },
    });
}

export async function mount(props) {
  storeTest(props);
  render(props);
  instance.config.globalProperties.$onGlobalStateChange =
    props.onGlobalStateChange;
  instance.config.globalProperties.$setGlobalState = props.setGlobalState;
}

export async function unmount() {
  instance.unmount();
  instance._container.innerHTML = "";
  instance = null;
  router = null;
  history.destroy();
}
```

Public-path.js

```js
if (window.__POWERED_BY_QIANKUN__) {
  // eslint-disable-next-line no-undef
  __webpack_public_path__ = window.__INJECTED_PUBLIC_PATH_BY_QIANKUN__;
}
```

::: danger 问题

目前跨域问题依旧是存在的，因为端口号不相同，所以这个目前也是急需解决的问题之一。未完待续、未完待续、未完待续。

:::
