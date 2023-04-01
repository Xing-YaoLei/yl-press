# Go中的Defer

## Js中的defer

在Js中也有defer的这样一个概念，我们先回顾一下Js中的defer的用法

::: tip Js中的defer

在 JavaScript 中，`defer` 是一个指定脚本应该延迟执行的属性。当浏览器解析 HTML 文档时，如果遇到带有 `defer` 属性的脚本标签，它将不会立即执行该脚本，而是将其推迟到文档解析完成后再执行。

`defer` 允许页面同时下载多个脚本文件而不会阻塞页面的渲染，以提高性能和用户体验。这对于需要在页面上加载多个脚本文件的大型网站特别有用。

`defer` 属性仅适用于外部脚本文件，而不适用于内联脚本。此外，对于不支持 `defer` 属性的浏览器，脚本将按照正常顺序执行，而不是延迟执行。

:::

例如下面的例子结合来理解，我们在引入script1.js以及script2.js的时候，在其标签中添加了属性`defer`，那么就代表该文件会推迟到文档解析完成后执行。假设我们的这两个Js文件相对较大，如果不添加`defer`的时候，同步下载并且执行的情况下，可能会导致**页面阻塞渲染**，**加载过慢**的情况。

我们在添加了`defer`属性后，浏览器在下载这些Js文件内容的时候，同时也会继续渲染页面。这样的话，能够帮助我们减少页面加载的时间，提高用户体验。

```html
<!DOCTYPE html>
<html>
<head>
  <title>My Website</title>
  <script src="script1.js" defer></script>
  <script src="script2.js" defer></script>
</head>
<body>
  <h1>欢迎访问</h1>
</body>
</html>
```

## Go中的defer

### defer的简单使用

在Go中，`defer`是一个语句，用于让函数调用推迟到当前函数返回之前执行。`defer`语句可以用于释放资源、记录日志等操作。如下通过一个简单的例子来了解`defer`语句的使用以及执行顺序。

```go
package main
import (
	. "fmt"
)

func main(){
  defer Println("5")
	Println("6")
}
// 6
// 5
```

如上方的方法执行结果所示，在执行该文件的时候，虽然`defer Println("5")`的输出语句在上方，按照正常从上到下的执行逻辑来看的话，应该是先输出5，后输出6，实际效果中由于使用了`defer`，所以`defer Println("5")`的代码被推迟到了最后执行。

### 多个defer

如果代码体量较大的情况下我们也可能会出现一个方法中多个`defer`语句的使用。那么在多个`defer`语句同时使用的时候，执行顺序遵循的为（LIFO）后进先出的执行顺序原则。最后的一个defer语句会最先执行。如下所示。

```go
package main
import (
	. "fmt"
)

func main(){
	defer Println("1")
	defer Println("2")
	defer Println("3")
	defer Println("4")
}
// 4
// 3
// 2
// 1
```

如果不太理解的话个人认为前端的同学可以理解为`Promise.finally`[方法](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise/finally)。

### defer 与 return语句的先后顺序

在编写方法函数的时候可能会迷惑return以及defer的执行顺序。通过下面的例子我们来了解一下。

```go
package main
import (
	. "fmt"
)

func deferFun() int {
	Println("deferFun")
	return 0
}

func returnFun() int {
	Println("returnFun")
	return 0
}
func processFun() int {
	defer deferFun()  // 调用deferFun函数 但是使用defer语句来推迟代码返回数值之前执行
	return returnFun()  // 调用returnFun函数，并且将函数执行结果返回
}

func main(){
	processFun() // 调用processFun函数
}

// returnFun
// deferFun
```

`processFun` 函数中首先执行了 `returnFun()` 函数，并返回 0。然后，`deferFun()` 函数被推迟执行，直到 `processFun` 函数返回之前执行。因此，`returnFun()` 函数的输出先于 `deferFun()` 函数的输出。

在这个例子中，`returnFun()` 函数被执行并返回 0，然后 `defer` 语句被推迟执行。由于 `defer` 语句是最后一个语句，它将在函数返回之前执行。因此，`deferFun()` 函数的输出将先于 `returnFun()` 函数的输出。

虽然 `defer` 语句通常用于释放资源、记录日志、恢复 panic 等操作，但是在实际应用中，应该避免过多地使用 `defer` 语句，以免影响代码的可读性和性能。

------

::: tip 白话描述

虽然看输出结果是returnFun先打印输出，然后是deferFun函数后打印输出的。

实际是因为当函数执行到return语句的时候，会计算返回值。

然后暂停函数执行，在这一步计算返回值的时候，系统执行了returnFun函数，然后触发了内部的Println方法，输出了returnFun。

然后执行deferFun函数，得到输出结果以后。将值return返回了出去。

:::

