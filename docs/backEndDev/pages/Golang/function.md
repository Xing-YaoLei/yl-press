# Go 中的函数

## 写在前面

在Go中定义方法是通过使用 `func`来进行，同时可以传递多个参数以及返回多个参数，与TypeScript相似。

## 定义函数

在每一个文件都会需要有一个主函数，也就是我们之前所书写的`main`函数，在进行文件代码执行的时候则会去执行这个`main`函数。

```go
package main
func main(){
	
}
```

在此以外我们还可以添加别的方法，方法需要声明形参对应的数据类型，以及返回值的数据类型，通过使用`return`对函数方法的结果进行返回，然后在其他函数中，通过使用`函数名(形参)`的方式进行参数的传递以及函数的调用。

```go
package main
import "fmt"
// 主程序
func main(){
	result := sum(10,20)
	fmt.Println(result)
    // 30
}

// sum方法
func sum(num1 int,num2 int) int {
	res := num1 + num2
	return res
}
```

::: tip 函数名命名

- 函数名通常为驼峰式命名规则。

- 首字母不能为数字
- 首字母大写时，可以被本包文件和其他包文件使用
- 首字母小写的时候，只能被本包文件使用，其他包文件不能使用

:::

### 函数没有返回值

如果函数没有返回值，那么填写返回值类型校验的区域可以为空，如下所示

```go
package main
import "fmt"
func main(){
	sum(10,20)
    // 执行sum方法
}

func sum(num1 int,num2 int) /*此处被省略了*/ {
	res := num1 + num2
	fmt.Println(res) // 输出结果 30
	// return res
}
```

### 多个返回值

如果函数有多个返回值，那么填写返回值的时候需要进行多个返回值的类型定义，如下所示

```go
package main
import "fmt"
func main(){
	fmt.Println(sum(10,20)) // 30 -10
}

func sum(num1 int,num2 int) (int,int) {
	res := num1 + num2
	result := num1 - num2
	return res,result
}
```

如上所示，方法sum返回了**两个参数**，`res`以及`result`两个值，那么就需要分别在形参定义后面定义对应返回值的数据类型。在接收的时候也需要使用**两个参数**来**接收**，如果返回两个值，但是**使用一个值接收的情况下**，代码**报错**。如下所示

```go
package main
import "fmt"
func main(){
	user := sum(10,20) // 本行报错 assignment mismatch: 1 variable but sum returns 2 valuesgo
    user,pass := sum(20,30)  // 正确用法
	fmt.Println(user,pass)
}

func sum(num1 int,num2 int) (int,int) {
	res := num1 + num2
	result := num1 - num2
	return res,result
}
```

### 忽略某一个返回值

可能存在某一种需求，方法返回的结果，我们只需要其中一个，那么这个时候我们可以通过使用`_`来接收函数返回值中不需要的内容来避免程序报错。如下所示。

```go
package main
import "fmt"
func main(){
	user,_ := sum(20,30) // 在此处忽略了第二个参数
 // _,user := sum(10,30) // 在此处忽略了第一个参数
	fmt.Println(user)
}

func sum(num1 int,num2 int) (int,int) {
	res := num1 + num2
	result := num1 - num2
	return res,result
}
```

### 直接声明返回值

本方式可以直接在**声明返回值类型的时候**，**进行返回值变量名的定义**。这样操作的情况下，方法内部直接对变量进行赋值即可，不需要再通过使用`var`的方式进行变量的定义。且方法直接`return`即可，不在`return`后添加对应的值也能够返回对应的值。

```go
package main
import "fmt"
func main(){
	// user := sum(10,20)
	// user,_ := sum(20,30)
	_,user := sum(10,30)
	fmt.Println(user)
}

func sum(num1 int,num2 int) (res int,result int) {
	res = num1 + num2
	result = num1 - num2
	return
}
```

### 函数形参或返回值类型相同

有些情况我们会遇到两个返回值数据类型相同的情况，例如都是`int`或者`string`，亦或者我们的多个返回值的数据类型也是相同的，那么我们可以在声明形参或者`return`数据类型定义的时候，统一将数据类型放入最后。如下所示

```go
package main
import "fmt"
func main(){
	_,user := sum(10,30)
	fmt.Println(user)
}

// 此处可以与上方方法对比，int的定义放在了最后
func sum(num1 ,num2 int) (res ,result int) {
	res = num1 + num2
	result = num1 - num2
	return
}
```

### 实现一个方法，交换两个变量的数据。 a =  1, b = 2, 最终输出 a = 2, b = 1

```go
package main
import "fmt"
func changeValue (num1,num2 int)(ret1,ret2 int) {
	ret1 = num2
	ret2 = num1
	return 
}

func main(){
	num1 := 10
	num2 := 200
	num1,num2 = changeValue(num1,num2)
	fmt.Println("num1 = ",num1, "num2 = ",num2)
}
```

