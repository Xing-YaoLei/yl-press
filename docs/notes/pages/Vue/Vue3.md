# Vue3

## 响应式API

### ref()

它算是Vue3中定义响应式数据最为常用的API之一，`ref`接收一个值返回一个响应式的、可更改的`ref`对象，访问这个值的方式为`.value`。

示例：

```js
const count = ref(0)
console.log(count.value) // 0
count.value++
console.log(count.value) // 1
```

::: tip 对象参数

如果对象赋值给ref的时候，它会通过`reactive()`转为深层的响应式对象，如果想避免深层转换你可以使用`shallowRef()`代替

:::



### reactive()

...

### shallowRef()

和`ref()`的功能类似都是用于让数据变为响应式的操作，不同的是`shallowRef()`不会被深层递归的转换为响应式，只有第一层（通过`.value`）访问的那一层。所以在一些大型的数据结构优化，是可以减少大型不可变结构的响应性开销的。

```js
const state = shallowRef({ count: 1 })
// 不会触发更改
state.value.count = 2
// 会触发更改
state.value = { count: 2 }
```



