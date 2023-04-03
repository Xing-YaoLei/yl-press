# Go 的数据类型 

## 前言

Go中也存在许多数据类型，通常分为基本数据类型和复杂数据类型。具体内容如下所示（可能存在有些许误差的情况，大伙也可以自行总结，如果有疏漏希望大伙及时指出更改）

![Golang数据类型](https://oss.oh-undefined.com/Golang%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B.png)

## 整型

在整型中根据操作系统来决定所占的存储空间，对于32位操作系统，`int`所占用的空间为4个字节，对于64位操作系统，`int`所占用的空间为8个字节。

例如针对年龄的取值（不存在负数，且数值在正常情况下一般不会特别离谱）便可以使用uint8（0-255）来定义数据类型。其中byte类型也等价于int8

## 浮点型

浮点型数据也分为`float32`以及`float64`用来存储数据，两种浮点型数据格式都遵循的是IEEE754标准。并且也同样拥有几乎所有编程语言都有的精度丢失问题（二进制浮点数精度丢失）。其中`float32`更加容易出现精度丢失问题。如下所示

```go
package main
import "fmt"
func main() {
	var floatNum = 3.14
	fmt.Printf("floatNum类型:%T", floatNum)
	fmt.Println() // 内容不写相当于输出换行
	fmt.Println(floatNum)
	// go run index.go 
	// floatNum类型:float64
	// 3.14
	var floatNum2 float32 = 3.141592653
	fmt.Println(floatNum2)
	// 3.1415927
	var floatNum3 float64 = 3.141592653
	fmt.Println(floatNum3)
	// 3.141592653
}
```

## 布尔

布尔类型与JavaScript相同，都为`true`以及`false`

## 字符串

在Go语言中字符串的使用与Js中也是相同的，编码格式统一为UTF-8编码，字符串的表示需要**使用双引号**，**不能**使用**单引号**。如下所示

```go
package main
import "fmt"
func main() {
	var str = '123' // 正常情况下，本行代码会抛出错误
	fmt.Println(str)
}
```

```sh
# go run index.go 
# command-line-arguments
# more than one character in rune literal
```

## byte

字符串的使用是通过使用双引号来包裹的，`byte`数据类型的数据，则是使用单引号来进行包裹，并且在输出代码的时候，输出的是该字符在`ASCII`码表中**对应的值**，如下所示。

```go
package main
import "fmt"
func main() {
	var str byte = '~'
	fmt.Println(str)
}
```

```sh
# go run index.go 
# 126
```

`byte`与`uint8`相同，代表*ASCII*码的一个字符，所以在我们定义的时候，单引号只能包裹一个字符。否则会抛出错误。如下所示

```go
package main
import "fmt"
func main() {
	var str byte = '~1'
	fmt.Println(str)
}
```

```sh
# go run index.go 
# command-line-arguments
# more than one character in rune literal //符文文字中不止一个字符
```

## rune类型

rune类型代表一个UTF-8字符，比如我们需要处理中文的时候，我们就可以使用rune类型（在内存中使用`int`来表示）。如下所示。

```go
package main
import "fmt"
func main() {
	var str rune = '我'
	var sym rune = 'A'
	fmt.Println(str)
	fmt.Println(sym)
}
```

```sh
# go run index.go 
# 25105  // 这个是str
# 65 		 // 这个是sym
```

