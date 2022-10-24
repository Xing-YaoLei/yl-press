# ES6

ECMAScript 6.0（以下简称 ES6）是 JavaScript 语言的下一代标准，已经在 2015 年 6 月正式发布了。它的目标，是使得 JavaScript 语言可以用来编写复杂的大型应用程序，成为企业级开发语言。[ECMAScript6简介](https://es6.ruanyifeng.com/#docs/intro)

## ES6 与 ECMAScript 2015 的关系

> ECMAScript 2015（简称 ES2015）这个词，也是经常可以看到的。它与 ES6 是什么关系呢？
>
> ES6 的第一个版本，在 2015 年 6 月发布了，正式名称就是《ECMAScript 2015 标准》（简称 ES2015）。2016 年 6 月，小幅修订的《ECMAScript 2016 标准》（简称 ES2016）如期发布，这个版本可以看作是 ES6.1 版，因为两者的差异非常小（只新增了数组实例的`includes`方法和指数运算符），基本上是同一个标准。根据计划，2017 年 6 月发布 ES2017 标准。
>
> ES6 既是一个历史名词，也是一个泛指，含义是 5.1 版以后的 JavaScript 的下一代标准，涵盖了 ES2015 -> 如今 等等，而 ES2015 则是正式名称，特指该年发布的正式版本的语言标准。所以ES6泛指“下一代 JavaScript 语言”。

## 表达声明

### 声明

- 声明方面肯定逃不开var的数据定义

  ```js
  var num = 10
  console.log(window.num)  // 10 -> var定义的根变量会在window中挂载
  ```

- let命令用于声明**变量**

  ```js
  let num = 10
  console.log(window.num) 
  // undefined -> let定义的则不会挂载window中,而是在当前作用域中执行
  ```

- const命令用于声明**常量**

  ```js
  const num 
  // 报错:Uncaught SyntaxError: Missing initializer in const declaration  
  // const定义数据后需要立刻进行赋值 
  const num = 10 // 正确书写方法
  const num = 20 
  // const定义的数据不允许重复定义
  // 报错:Identifier 'num' has already been declared
  ```

- 声明提升

  ```js
  console.log(num) // 使用const或者let来定义数据 在变量定义之前使用则会直接报错
  // ReferenceError: Cannot access 'num' before initialization
  const num = 10;
  
  console.log(testNum) // 输出则为 undefined 并不会导致程序终止
  var testNum = 1
  ```

## 解构赋值

### 字符串解构

```js
// 字符串解构
const [a,b,c,d,e] = '早日退休'
console.log(a) // 早
console.log(b) // 日
console.log(c) // 退
console.log(d) // 休
console.log(e) // undefined
```

### 对象解构

- 普通用法

  ```js
  // 对象解构
  const obj = {
        a: "早",
        b: "日",
        c: "退",
        d: "休",
  };
  // 如果不是用解构赋值的情况下我们需要
  const a = obj.a
  ...
  const d = obj.d
  // 使用解构赋值则可以将代码量有效的缩减
  const { a, b, c, d, e } = obj;
  console.log(a) // 早
  console.log(b) // 日
  console.log(c) // 退
  console.log(d) // 休
  console.log(e) // undefined
  ```

- 重新命名：如果数值名和自身想要定义的变量名不同的情况下可以在解构时

  ```js
  // 如果解构赋值的数据属性名和自己想要定义的变量名不同，则可以重新赋值如下所示
  const { a:study,b,c,d,e } = obj
  console.log(study) // 早
  ```

- 默认值：在赋值过程中可能会出现undefined或者null的时候，为了避免这种情况我们可以使用默认的方式

  ```js
  const { a, b, c, d, e = 2 } = obj
  // 设置默认值的方式是当解构后没有值传入的情况下,
  // 会有一个默认值保底避免程序出现意想不到的错误。
  console.log(e) // 2
  ```

- 易错点：被解构的对象不能为undefined或者null否则会报错终止代码运行

  ```js
  const obj = undefined
  const { a:study, b, c, d, e = 2 } = obj;
  console.log(e);
  // TypeError: Cannot destructure property 'a' of 'obj' as it is undefined.
  
  // 解决方案 通过使用或运算符给定一个空对象或者默认对象
  const { a:study, b, c, d, e } = obj || {}
  
  ```

### 数组解构

- 基础用法

  ```js
  const arr = [1,2,3,4,5,6,7,7,8,9]
  const [ a, b, c, d ] = arr
  console.log(a) // 1
  console.log(b) // 2
  console.log(c) // 3
  console.log(d) // 4
  ```

- 传递默认值

  ```js
  const arr = [ 5, 5, ]
  // 此数组共有三项 5 5 空
  const [ a, b, c ] = arr
  console.log(c) // undefined
  // 传递默认值后则会自动将默认值传入
  const [ a, b, c = 2 ] = arr
  console.log(c) // 2
  ```

- 交换变量值

  ```js
  let a = 1;
  let b = 2;
  [a, b] = [b, a];
  console.log("a:", a); // a:2
  console.log("b:", b); // b:1
  ```

### 函数解构赋值

- 函数数组解构

  ```js
  function fn([x = 0, y = 100]) {
      console.log(x, y);
  }
  fn([, 1]); // 0,1
  fn([100, ]); // 100,100
  fn(); // 0,100
  ```

- 函数对象解构赋值

  ```js
  function fn({x=0,y=1}){
  	console.log(x,y)
  }
  fn({}) // 0 1
  fn({x:500}) // 500 1
  fn({y:100}) // 0 100
  fn({y:10,x:100}) // 100 10
  ```

- 剩余参数[MDN](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Functions/Rest_parameters)

  ```js
  function fn(x,y,...rest){
      // 其中 ... 为扩展运算符 后续会进行介绍
      console.log(x) // 1
      console.log(y) // 2
      console.log(rest) // [3,4,5,6,7,8,9]
  }
  fn(1,2,3,4,5,6,7,8,9)
  ```

  

  ::: warning 注意

  **undefined**和**null**无法转化为对象，因此无法进行解构

  如果解构不成功（没有值可以接收）的情况下，变量获取到的值为**undefined**

  解构赋值的规则：只要等号右边的值不是对象的情况下，会优先转换为对象的格式

  :::

## Class

### 与构造函数的区别

在Js当中我们通常生成实例对象的方法是构造函数的形式。

```js
function Phone(phoneNumber) {
  this.phoneNumber = phoneNumber
}
Phone.prototype.call = function () {
  console.log("打电话给" + this.phoneNumber);
};
new Phone(13323233434).call() // 打电话给13323233434
```

为了让代码更符合面向对象的编程思想，在ES6中引入了`class`类的概念，本质上是一个语法糖，所有功能与普通的写法实现的功能是相同的。例子如下所示：

```js
class Phone {
  constructor(phoneNumber) {
    this.phoneNumber = phoneNumber;
  }
  call(){
    return "打电话给" + this.phoneNumber
  }
}
console.log(new Phone(13323233434).call())
```

在上面代码中我们用到了`constructor`，可以理解为它是用来创建和初始化类的，在同一个类中只能出现一个constructor方法。

### 实例

`class`实例化必须通过`new`关键字来进行。

```js
class Phone {
	// ...
}
Phone() // Class constructor Phone cannot be invoked without 'new' at Class.html:65:5
new Phone()
```

### super

super关键字主要是用来接收或者调用父类上的参数或者函数，在下面的案例中可以发现，当我们使用`extends`继承父类上面的属性的时候，直接使用，则会报出错误。当我们使用super进行接收之后则可以正常使用。 

原因是子类没有this对象，只能继承父类的this对象才可以，如果不调用super方法，子类就得不到this对象。

```js
// 父类同上
class TelPhone extends Phone{
  constructor(phoneNumber) {
    // this.phoneNumber = phoneNumber; // Must call super constructor in derived class before accessing 'this' or returning from derived constructor
    super()
    this.phoneNumber = phoneNumber; // 正常使用
    // this.Tel = phoneNumber
  }
}
```
