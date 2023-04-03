# Go的运算符

## 写在前面

在Go中同样拥有者各种各样的算术运算符，例如`+，-，*， /, %, ++, --`的算数运算符，以及`=, +=, -=, *=, /=, %=`的赋值运算符、逻辑的或与非、比较运算符等等，与JavaScript基本大致相同，基本内容入下图所示。欢迎大佬查漏补缺。







-- 这里是一张图 总结好了再放上来。











## 算数运算符

与所有的编程语言相同，组成Go的算数运算符也为开头所说的几种形式，所以这里快速的尝试一下即可。

```go
package main
import "fmt"
func main(){
	var num1 int = 10 // 定义整型变量
	fmt.Println(num1) // 10
	var num2 string = "尘世闲游-" // 定义字符串变量
	var num3 string = "钟离"  // 定义字符串变量
	fmt.Println(num2 + num3) // 尘世闲游-钟离
}
```

::: warning 可能遇到的问题

加法在Js当中的时候会涉及到大量的隐式类型转换，但是在Go中，**字符串可以与字符串进行拼接**，**无法**通过使用**字符串**的变量来与**数字**的变量进行相加的方式进行**拼接**，如果进行了该操作的情况下的话，代码则会抛出对应的错误。如下所示。

:::

```go
package main
import "fmt"
func main(){
	var num1 int = 10
	fmt.Println(num1)
	var num2 string = "尘世闲游-"
	fmt.Println(num1 + num2)
}
```

```sh
# go run index.go                                                                                                      
# command-line-arguments
# invalid operation: num1 + num2 (mismatched types int and string)
# 错误的操作:num1 + num2(类型int和字符串不匹配)
```

然后我们进行其他的算数运算符的尝试。

```go
package main
import "fmt"
func main(){
  num1 := 10
  num2 := 20
  fmt.Println("减法",num1 - num2)
  fmt.Println("乘法",num1 * num2)
  fmt.Println("除法",num1 / num2)
  fmt.Println("求余数",num1 % num2)
}
```

```sh
# go run index.go
# 减法 -10
# 乘法 200
# 除法 0
# 求余数 10
```

## 自增自减

与Js不相同，在Go中，自增自减的运算符只允许放在变量的后边，不允许放在变量的前边，如果使用错误的方式，代码则会抛出错误。

```go
package main
import "fmt"
func main(){
	num1 := 1
	num1 ++ 
	fmt.Println(num1) // 2
	num1 --
	fmt.Println(num1) // 1
  ++ num1 // syntax error: unexpected ++, expected } 这一点是错误的，会提示语法错误
}
```

## 赋值运算符

`=, +=, -=, *=, /=, %=`为Go中的赋值运算符，都是将等号后的内容赋值给等号前的变量中去，与JavaScript相同。 

## 关系运算符

`==, !=, >, <, >=, <=`为Go中的关系运算符，这些运算符也与JavaScript相同，`==`为判断是否相等，`=`则代表赋值。关系运算符所返回的值，为布尔类型的`true`与`false`。

## 逻辑运算符

`&&, ||, !`为Go中的逻辑运算符，这些运算符也与JavaScript相同，

- `&&`为逻辑且，代表同时需要满足运算符前后的两个条件则为正确。
- `||`为逻辑或，代表运算符前后满足其中一个条件则为正确。
- `!`为逻辑非，代表最终结果为运算符不同的条件则为正确。

```go
package main
import "fmt"
func main(){
	age := 12
    user := true
	fmt.Println(age)
	fmt.Println(age < 20 && age > 10)
	fmt.Println(age > 20 || age < 10)
    fmt.Println(!user)
}
```

```sh
# go run .\index.go
# 12
# true 逻辑且
# false 逻辑或
# false 逻辑非
```

## 其他运算符

`&`运算符能够获取到当前变量在内存中所存储的地址

```go
package main
import "fmt"
func main(){
	var a  = 1
	fmt.Println(&a, a)  //0xc00000e0a8 1
}
```

`*`运算符能够获取内存地址中所储存的值

```go
package main
import "fmt"
func main(){
    var a = 10086
    var b = &a
    fmt.Println(&a)   // 0xc00000e0a8
    fmt.Printf("内存地址为%v,内存地址所对应的值为%v",&a,*b) 
    // 内存地址为0xc00000e0a8,内存地址所对应的值为10086
}
```
