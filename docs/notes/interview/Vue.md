# Vue.js面试题

### Vue的生命周期都有哪些？

| 生命周期 | Vue2.x        | Vue3.x          |
| :------: | ------------- | --------------- |
|  创建前  | beforeCreate  | setup           |
|  创建后  | created       | setup           |
|  挂载前  | beforeMount   | onBeforeMount   |
|  挂载后  | mounted       | onMounted       |
|  更新前  | beforeUpdate  | onBeforeUpdate  |
|  更新后  | updated       | onUpdated       |
|  销毁前  | beforeDestroy | onBeforeUnmount |
|  销毁后  | destroyed     | onUnmounted     |

在Vue生命周期中，父子组件的执行顺序为：

父组件`beforeCreate` -> 父组件 `created` -> 父组件 `beforeMount` -> 子组件` beforeCreate` -> 子组件 `created `-> 子组件 `beforeMount` -> 子组件 `mounted` -> 父组件 `mounted` 在正常情况下，可以理解为一个人的出生，正常情况下，孩子出生的时候，孩子的各项器官（组件）都已经是挂载完毕之后整体才出生的（`mounted`） 个人理解请勿见怪。

### Vue常用的指令

```vue
// v-if 判断是否渲染
<div v-if="flag"></div>
// if-show  判断是否显示
<div v-show="flag"></div>
// v-model 绑定表单值
<input type="text" v-model="userName">
// v-for
<div v-for="item in todoList" :key="item.id"></div>
// v-bind 与定义的值进行绑定 读取变量
<input :value="userInfo">
// v-on 绑定事件
<div @click="clickHandle"></div>
// v-html 在该标签下渲染html样式
<div v-html="inner"></div>
// v-text 在该标签下渲染文本内容
<div v-text="textInfo"></div>
// v-once 该标签下的插值只渲染一次 数据改变不会发生变化
<div v-once>{{ msg }}</div>
```

