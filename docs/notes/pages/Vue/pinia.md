# Pinia的简单用法

::: tip 前言

[Pinia](https://pinia.vuejs.org/getting-started.html)也是一个用于Vuejs的状态管理器，在Vuejs2.x中官方推荐使用的是Vuex来进行Vue的状态管理，但是在Vue3.x版本后，官方文档的状态管理器则变成了Pinia，在Pinia文档中也提到了，此状态管理器不仅仅只有Vue3.x可以使用，同样也适用于Vue2.x版本。所以大家可以放心食用。

:::

## Installation

- 安装Pinia通过**npm**或者**yarn**都可以进行安装

:::: code-group
::: code-group-item NPM

```sh
npm install pinia
```

:::

::: code-group-item YARN

```sh
yarn add pinia
```

:::
::::

::: tip 提示

官方提示：如果你使用的Vuejs版本小于2.7版本的情况下则需要安装 **@vue/composition-api**进行配合使用，其次，如果你使用的是`Nuxt`，则需要查看具体的[文档](https://pinia.vuejs.org/ssr/nuxt.html)

:::

- 安装完成之后则在项目内进行引入即可

:::: code-group

::: code-group-item Vue3.x

```js
// src -> main.js
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'

const pinia = createPinia()
const app = createApp(App)

app.use(pinia)
app.mount('#app')
```

:::

::: code-group-item Vue2.x

```js
// src -> main.js
import { createPinia, PiniaVuePlugin } from 'pinia'

Vue.use(PiniaVuePlugin)
const pinia = createPinia()

new Vue({
  el: '#app',
  pinia,
})
```

:::

::::

## Defining

定义一个存储空间可以在我们的`src`目录文件夹下尝试创建一个`stores`的文件夹用来统一存放我们的状态存储空间文件，首先我们默认常见一个`main.js`文件。

```js
// src -> stores -> main.js
import { defineStore } from 'pinia'
export default defineStore('命名空间',{
  state: () => {
    return {
      msg: 'Hello world'
    }
  }
})
```

当然除了state以外，Pinia也拥有actions和getters属性的options对象。

:::: code-group

::: code-group-item Setup

```js
// src -> stores -> main.js
import { ref } from 'vue'
import { defineStore } from 'pinia'
export default defineStore('counter', ()=>{
  	const count = ref(10)
    const isLoading = false
    const msg = 'Hello world'
    const increment(() => {
      this.count++
    })
    const loadingChange(()=>{
      this.isLoading = !this.isLoading
    })
    return {
      count,
      isLoading,
      msg,
      increment,
      loadingChange
    }
}
```

:::

::: code-group-item Option

```js
// src -> stores -> main.js
import { defineStore } from 'pinia'
export default defineStore('counter', {
  // 存放的状态值
  state: () => { 
    count: 0,
    isLoading: false,
    msg: 'Hello world'
  },
  // getters可以理解为状态管理内的计算属性 提供的方法也可以在外部进行调用
  getters: {
    doubleCount: (state) => state.count * 2,
  },
  // action可以理解为Js中的function方法等 提交后触发，改变State存放的值。
  actions: {
    increment() {
      this.count++
    },
    loadingChange(){
      this.isLoading = !this.isLoading
    }
  },
})
```

:::

::::



## Using

在页面中去使用Pinia读取我们在状态管理中存放的状态。

```vue
// src -> App.vue
<template>
  {{ store.msg }}
  <!-- <button @click="clickHandle()">更改</button> -->
</template>
<script setup>
import useBaseStore from './stores/main'
const store = useBaseStore();
</script>
```

## 解构

::: tip 提示

如果我们只是简单的引入Store的情况下，我们访问变量每次都需要使用`store.msg`、`store.loading`、`store.count`这样的方式来进行。有的同学可能会想到结构赋值的方式来使用。例如：`const {  msg, loading, count } = store

**但是**这种方式解构出的值不是响应式的，也就是说在更改的情况下，视图是不会进行更新渲染的。 Pinia提供了**storeToRefs**的方法来帮助我们进行数据的更新。

:::

```js
// src -> App.vue
import useBaseStore from './stores/base'
import { storeToRefs } from 'pinia'
const store = useBaseStore()
const { isLoading, msg, count } = storeToRefs(store)
```

## 重置状态值

Pinia可以通过调用`store.$reset`来重置状态中的值

## 修改状态

Pinia可以通过在action中进行数据状态的修改，我们书写完毕action的方法后，只需要触发这个action即可完成数据状态的修改。

```vue
// src -> App.vue
<script steup>
  import { onMounted, watch, ref } from "vue";
  import useBaseStore from './stores/base'
  const  = useBaseStore()
  const { isLoading, msg, count } = storeToRefs(store)
  
  onMounted(() => {
    // 在该处 出发onMounted的钩子函数，页面挂载完毕之后即可触发该action
    store.increment()
  })
</script>
```

## 改变状态 - $patch

除了使用`store.count++`、或者触发action的方式改变状态，Pinia还可以通过使用[$patch](https://pinia.vuejs.org/core-concepts/state.html#mutating-the-state)来进行状态的改变。

```js
store.$patch({
  count: store.count + 1,
  isLoading: true,
  msg: '疫情退散，🤺🤺🤺',
})
```

但是可能状态可能不仅仅是一些简单的值，有可能是对象或者是一个数组，那么使用$patch的时候还可以直接书写方法。如下所示。

```js
store.$patch((state) => {
  state.items.push({ name: 'iPhone14 Pro', price: 8899 })
  state.isLoading:true
})
```

::: warning 提示

在Setup外使用useStore的时候，可能会报`getActivePinia was called with no active Pinia. Did you forget to install`的错误，具体如下所示。

:::

```js
// src -> router -> index.js
import { createRouter, createWebHashHistory } from "vue-router";
// 引入Pinia的Base存储空间
import useBaseStore from "@/stores/base";
const store = useBaseStore(); // 本条代码报错
// 引入原因：避免重复的定义存储空间 代码的简洁以及复用
// 出现问题：报错，错误提示是在使用useStore的时候，Pinia还未创建 所以只能引入在内部
```

所以便将所以将`const store = useBaseStore()`本条代码放入了路由拦截的内部。

```js
router.beforeEach((to, from) => {
  const store = useBaseStore();
  store.$patch({
    isLoading: true,
  });
});
// 这样则可以避免在使用Store的时候Store还未创建完毕的错误。
router.afterEach((to, from) => {
  const store = useBaseStore();
  store.$patch({
    isLoading: false,
  });
});
```

## 未完待续

---






