# Javascript 面试题

### 事件循环

::: tip 提示

任务队列（Task Queue）

宏任务（macro-task）

- script
- setTimeout
- setInterval
- setImmediate

微任务（micro-task）

- process.nextTick
- Promise
- Async/Await
- MutationObserver

:::

总体的执行顺序就是，首先执行宏任务，当宏任务执行完成后，执行该宏任务执行的时候产生的微任务，若微任务在执行过程中产生了新的微任务，则继续执行这个微任务，微任务执行完毕后，则继续执行宏任务进行下一轮的代码执行。

```js
console.log('---Start---')  // 1、首先执行 -- Start --
async function sync1(){
  await sync2()  
  // 3、在该位置触发了 sync2 若微任务在执行过程中产生了新的微任务则继续执行这个微任务 则触发sync2
  console.log('sync1 completed')
  // 5、最后输出该代码 sync1 completed
}
async function sync2(){
  console.log('sync2 completed')
  // 4、触发该函数，则进行输出 sync2 completed
}
sync1() // 2、触发该函数的执行
// 最终输出 ---Start--- -> sync2 completed -> sync1 completed
```

我们在此代码基础上面添加Promise尝试一下。

```js
console.log('---Start---') // 1、首先执行Start
async function sync1(){
  await sync2() // 3、执行函数遇到第sync2的执行函数 若微任务在执行过程中产生了新的微任务则继续执行这个微任务 则触发sync2
  console.log('sync1 completed')
  // 7、最后执行sync1 completed的输出
}
async function sync2(){
  // 4、 触发该函数输出sync2 completed
  console.log('sync2 completed')
}
sync1() // 2、代码遇到执行函数
new Promise((resolve, reject) =>{
  // 5、执行Promise的输出
  console.log('Promise')
})
// 6、执行end的输出
console.log('----End----')
// 最终输出顺序为 
// 1、---Start---  2、sync2 completed 3、Promise 4、----End---- 5、sync1 completed
```

async与await执行过程中，当await执行完毕之后，会跳出当前async函数进行其他代码的运行，当本轮宏任务执行完毕后，才会回到async函数中执行await后的剩余代码，然后将await代码后面的代码推进微任务队列中进行执行。

![image-20221015121553920](https://oss.oh-undefined.com/image-20221015121553920.png)

如果我们再给Promise添加then，并且添加一下setTimeout来看一下

```js
console.log('---Start---')
async function sync1(){
  await sync2()
  console.log('sync1 completed')
}
setTimeout(() => {
  console.log('timeOut1')
}, 0);
async function sync2(){
  console.log('sync2 completed')
}
sync1()
new Promise((resolve, reject) =>{
  console.log('Promise')
  resolve()
}).then(()=>{
  console.log('Promise then')
})
setTimeout(() => {
  console.log('timeOut2')
})
console.log('----End----')
// start => sync2 completed (await sync2后的代码推入微任务队列，优先执行主程序代码)
// => Promise(setTimeout1推入宏任务队列，其运行是等待主程序空闲所以执行下方Promise)
// => End(Promise执行完毕后遇到setTimeout2 推入宏任务队列 继续执行主程序同步代码console的End)
// => 主程序执行完毕后回到Sync1代码中执行await后剩余代码输出 Sync1 Completed
// => 微任务队列中，除了Sync1以外，还有Promise的then，所以输出 Promise then
// => 主程序微任务队列清空，继续执行后续宏任务
// => timeOut1 => timeOut2
```

1. 简单捋一遍，首先代码从上到下执行，首先执行Start，遇到`setTimeout1`则**推入宏任务队列等待**；
2. 然后遇到Sync1函数的调用，执行Sync1函数，函数内部`await Sync2`函数需要等待`Sync2`函数执行完毕，则输出了`Sync2 Completed`，然后**跳出当前`async`函数**，继续执行本轮宏任务代码；
3. 下方遇到`Promise`则输出`Promise`，`Promise`的`.then`为微任务，则**推入微任务队列中等待主程序执行**；
4. 后续遇到`setTimeout2`则推入宏任务队列等待，继续向下执行；
5. 遇到console输出End后，本轮宏任务执行完毕；
6. 跳回await后续代码，输出`Sync1 Completed`；
7. 然后查看微任务队列输出`Promise.then`，微任务队列清空；
8. 执行下一轮宏任务，输出timeout1，查看微任务队列，微任务队列为空；
9. 执行下一轮宏任务，输出timeout2，代码运行完毕

### this指向

- 普通函数：普通函数通常为谁调用它，this就指向谁；如果函数为全局函数，并且没有人调用this时，那么指向window
- 严格模式：严格模式下this值为undefined
- 箭头函数：箭头函数下this指向为箭头函数所处上下文
- 定时器以及延时器属于window下方法，所以默认情况下使用指向为window，使用了箭头函数则参照箭头函数的指向方向。
- 对象：对象中的方法使用了this，则指向该对象。
- 构造函数：构造函数中的this指向为创建出的对象。

### 绑定this

|       | 用法                                  | 区别                                     |
| ----- | ------------------------------------- | ---------------------------------------- |
| Bind  | `obj.fn.bind(obj,'参数1','参数2')()`  | 使用后需添加方法的执行                   |
| Call  | `obj.fn.call(obj,'参数1','参数2')`    | 与方法传递参数相同                       |
| Apply | `obj.fn.apply(obj,['参数1','参数2'])` | 第二个参数需要使用数组的方式进行参数传递 |

前往查看具体的[案例展示](../pages/Javascript/Js基础.md#绑定this指向)

### ES6新增

- 声明：`let`、`const`
- 解构赋值
- 字符串
  - 模版字符串
  - 字符串遍历`for-of`
  - `includes()`是否存在字符串
  - `matchAll()`返回正则表达式
  - `repeat()`重复字符串
  - `startsWith()` 匹配字符串头部指定字符串
  - `endsWith()`匹配字符串尾部字符串
  - ...
- 对象
  - `Object.is()` 对比两个值是否相等
  - `Object.assign()` 合并对象、浅拷贝
  - `Object.getPrototypeOf()` 获取对象的原型对象
  - `Object.setPrototypeOf() `设置对象的原型对象
  - 对象属性的遍历
    - `for in`遍历对象中可继承可枚举的属性
    - `Object.keys` & `Object.values`  keys返回的对象所有键，values返回所有的值
    - `Object.getOwnPropertyNames()`返回对象非Symbol属性键组成的数组
    - ...
- 数组
  - 扩展运算符(...)，可以用于转换数组，也可以用于数组的合并等
  - `Array.from()` 类数组转换为数组
  - `Array.of()`将一组值转换为数组
  - `find()`返回第一个符合条件的项目
  - `findIndex()`返回第一个符合条件的项目的下标
  - `fill()`填充数组，返回原数组
  - `entries()`返回索引值和属性值为遍历器的对象
  - `includes()` ES2016新增，是否存在指定内容
  - `flat()`扁平化数组，俗称数组降维
- 函数
  - 参数默认值
  - rest参数，可以用于接收函数多余的参数
    - 例如 `function fn(a,b,c,...rest){} fn(1,2,3,4,5,6,7,8)`其中输出`rest`为`[4,5,6,7,8]`
  - 箭头函数
    - 箭头函数不能作为构造函数使用（箭头函数没有prototype所以不能使用，也无法使用new操作符调用箭头函数）
- Symbol
- Set
- Map
- Proxy
  - `get()`
  - `set()`
  - `has()`
  - ...
- Class 理论上为构造函数语法糖
  - constructor
  - extends
  - super
  - static
  - ...
- Promise
  - 状态
    - `pending` - 进行中
    - `resolved` - 成功
    - `rejected `- 数百
  - 方法
    - `then()`接收成功`(resolved)`回调
    - `catch()`接收失败`(rejected)`回调
    - `Promise.all()`同时执行多个Promise然后以数组的形式返回（其中一个失败则整体状态为失败）
    - `Promise.race()`俗称"跑得快",接收多个Promise，返回最先返回结果的Promise
    - `Promise.resolve()`转换对象为Promise对象
    - `Promise.reject()`对象状态为失败状态
    - `Promise.finally()`无论成功失败都会执行`finally`的方法
    - ...
- async/await
  - 异步解决方案之一

### devDependencies和dependencies的区别？

dev可以理解为development**开发**的缩写，故devDependencies为开发依赖，开发依赖多为各类预处理器、代码检查

dependencies为项目依赖，项目依赖即便是项目上线依旧需要依靠其运行的依赖，例如框架主体、路由等内容
