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
