# Vue.js面试题

### Vue数据双向绑定原理 & Vue2.x以及3.x绑定的区别？

Vue2.x是借助`Object.defineProperty()`来进行实现，我们可以通过使用该API来为对象添加属性，并且设置getter以及setter方法，当我们在设置完成后，每当使用该属性的时候，都会调用getter方法，每次设置值的时候都会调用setter方法。

```js
let obj = {};
let age;
Object.defineProperty(obj, 'age', {
  get: function getter() {
    console.log("getter");
    return age;
  },
  set: function setter(newVal) {
    console.log("setter");
    age = newVal;
  },
});
obj.age= 10   // setter
console.log(obj.age) // getter  // 10
console.log('--------------------------------------------------------')
console.log(obj.age) // getter  // 10
```

Vue3.x是借助Proxy实现

```js
let obj = {
  age:10,
  name:'敖兴'
};
let bindObj = new Proxy(obj /* 此处obj可以预设也可以设置为{}空对象*/, {
  get: function (target, propKey, receiver) {
    console.log(`getting:${propKey}`);
    return Reflect.get(target, propKey, receiver);
  },
  set: function (target, propKey, value, receiver) {
    console.log(`setting:${propKey}为${value}`);
    return Reflect.set(target, propKey, value, receiver);
  },
});
bindObj.age = 9999 // setting:age为10
console.log(bindObj.name) // getting:name // 敖兴
```

::: tip Reflect

Reflect对象与Proxy对象一样也是ES6为了操作对象而提供的新的API，在使用Object对象的时候，无法定义某些属性的时候会抛出错误，而Reflect则会返回false，简单来说，就是通过使用Reflect来代替Object的使用。详情可以查看[Reflect](https://es6.ruanyifeng.com/#docs/reflect)的相关用法

:::

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

### nextTick是干嘛用的？

在下次DOM更新循环结束之后执行的延迟回调。在修改数据之后立刻使用这个方法获取更新后的DOM。

简单点来说就是在Vue中，在某些情况下，数据发生变化了，但是DOM上面却并没有进行对应的更新渲染，我们可以通过该API手动进行页面中视图数据的更新。

在Vue3中，`watchEffect` 和 `watch` 都是响应式系统的一部分，用于观察和响应数据的变化。它们虽然类似，但也有一些关键的区别。
### Vue3中的watchEffect是什么？与watch有什么区别？

#### watchEffect

1. **自动侦测依赖**: `watchEffect` 会自动追踪其内部使用的任何响应式状态，并在这些状态变化时重新执行。
2. **立即执行**: 当你定义 `watchEffect` 时，它会立即执行一次来注册依赖关系。
3. **无需指定侦听源**: 由于自动侦测机制，你不需要明确指定侦听哪个特定的响应式引用或计算属性。
4. **用途**: 常用于根据依赖的变化执行副作用（例如，DOM 更新、网络请求）。

#### watch

1. **指定侦听源**: 在 `watch` 中，你需要明确指定一个或多个要侦听的响应式引用或计算属性。
2. **惰性执行**: `watch` 不会在初始定义时立即执行，而是等待侦听的源发生变化时才执行。
3. **访问旧值和新值**: `watch` 允许你访问旧值和新值，这在进行比较或基于以前的状态执行逻辑时非常有用。
4. **用途**: 常用于更精确的数据观察和处理，尤其是当你需要知道是哪些特定的数据变化触发了观察者时。

简而言之，`watchEffect` 更适合于需要自动追踪多个依赖并执行副作用的场景，而 `watch` 则更适用于那些需要精确控制和了解哪些特定数据变化所引起反应的场景。
