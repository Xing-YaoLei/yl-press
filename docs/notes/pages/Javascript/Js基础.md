# Js基础

### 绑定this指向

```js
let obj = {
  name: "敖兴",
  age: "?",
  skill: "风暴龙",
  say: function () {
    console.log(`姓名${this.name},年龄:${this.age},技能:${this.skill},金额:${this.price}`);
  },
};
obj.say() // 姓名敖兴,年龄:?,技能:风暴龙,金额:undefined
```

默认情况下对象中使用this指向为对象中的属性，当对象中若不存在该属性则为undefined

我们可以通过bind、call、apply来进行的参数改变，使用方法如下：

````js
let obj = {
  ...
};
let anger = {
  name: "希瓦娜",
  age: 18,
  skill: "喷火龙",
  price: 8,
};
let money = {
  name: "艾达斯",
  age: "?",
  skill: "大鹏展翅",
  price: 7,
};
obj.say(); // 姓名敖兴,年龄:?,技能:风暴龙,金额:undefined
// bind 相较于call与apply的使用，多出来了一个括号运行
obj.say.bind(anger)(); // 姓名希瓦娜,年龄:18,技能:喷火龙,金额:8
obj.say.call(anger); // 姓名希瓦娜,年龄:18,技能:喷火龙,金额:8
obj.say.apply(money); // 姓名艾达斯,年龄:?,技能:大鹏展翅,金额:7
````

三种改变this指向的方法括号内都是传入对应需要绑定的对象名称，乍一看好像是相同的，但是还是有细微的不同之处。

- call的后续参数传递只需要像我们传递多个参数一样进行传递即可。如下所示：

  ```js
  let obj = {
    say: function (position) {
      console.log(
       `姓名${this.name},年龄:${this.age},技能:${this.skill},金额:${this.price},定位:${position}`
      );
    },
  };
  obj.say.call(anger,'肉盾') // 姓名希瓦娜,年龄:18,技能:喷火龙,金额:8,定位:肉盾
  ```

- apply的后续参数传递则需要使用数组的方式进行传递。如下所示：

  ```js
  obj.say.apply(money,['肉盾']) // 姓名艾达斯,年龄:?,技能:大鹏展翅,金额:7,定位:肉盾
  ```

- bind则与call的参数传递方式相同。如下所示：

  ```js
  obj.say.bind(obj,'法师')(); // 姓名敖兴,年龄:?,技能:风暴龙,金额:undefined,定位:法师
  ```

  