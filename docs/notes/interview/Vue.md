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
// v-for 循环渲染数据
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

::: tip v-if 与v-show的区别

v-if是动态的向DOM树内添加或者删除DOM元素（简单来说就是这个标签存不存在页面里面）v-if的判断值如果不断切换的情况下，会比较消耗性能，所以v-if的**切换开销**会更大。

v-show本质是控制元素的CSS的display属性的切换来控制显示隐藏的，无论判断值是否为true或者false都会渲染，无非就是显示不显示。切换开销较小，**初始开销**会较大。

:::

### Vue父子组件传递数据？

父组件 -> 子组件 通过Props来进行参数的传递

```vue
<div :data="list"></div>
```

子组件 -> 父组件 通过使用$emit进行参数的传递

```vue
// 可以理解为一个子组件 在Vue中便是单独的Vue文件 通过import引入到父组件中
Vue.component('Hello',{
	template: `
	<button @click="$emit('Hello')">
  	Click Say Hello
  </button>
 `
})

// 父组件
<div>
  <Hello @Hello="sayHello"></Hello>
</div>
...
methods:{
	sayHello(){
		alert('Hello')
	}
}
```

### vue-loader是什么？

vue文件的一个加载器，会将Vue中的template/js/style转换为js模块，从而转换为浏览器识别的内容。

### Vuex有哪些属性？

Vuex中核心属性为State、Getter、Mutation、Action、Module

其中

`State` 作为基本数据存放地存在；

`Getters`简单理解则为Vuex中的计算属性，能够针对数据进行过滤或计算；

`Mutations`更改数据的方法，Vuex改变状态的唯一方法则为显式的提交Mutations，该操作为同步操作；

::: tip 问：为什么Mutations中必须是同步操作？

答：Mutations中的数据变化是可以被Vue的开发工具Vue-devTools进行观测到的，如果Mutations中的操作为异步操作，则会导致devTools中的数据不可监测，导致无法捕捉到前后状态的变化。如果需要使用异步操作，则可以在actions中进行异步操作，然后提交Mutation来改变数据状态

:::

`Actions`用于在Vuex中进行异步操作，可以提交触发Mutations；

::: tip 数据请求放在Vuex的action中还是放入组件的Methods中？

如果请求的数据仅仅只是需要在当前组件中进行使用的情况下，则可以将数据请求放入该组件的Methods中使用即可，如果请求的数据需要进行复用，也就是说需要在其他组件中进行使用的情况下，则可以将数据请求放入Actions中。

:::

`Modules`用于Vuex中的模块化存储，针对大型项目，进行数据状态的分别存放。

Vuex的使用相对较为复杂，在Vue3.x版本中，Vue官方推荐使用大菠萝（Pinia）来进行状态管理，其状态管理器进行了一定程度的优化，Vuex中的Mutations与Action被集成在了一个地方。具体查看[Pinia篇](../pages/Vue/pinia)
