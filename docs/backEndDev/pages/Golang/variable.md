# Go 的变量

## 变量定义

### Demo

Go语言的变量在使用中与JavaScript、Typescript的使用类似。

通过`var`来进行变量的定义，在定义变量的时候，可以进行数据类型的定义，也可以不进行数据类型的定义。如下所示

```go
package main
import "fmt"
func main(){
  // 创建一个名为language的变量 该变量的数据类型为string字符串类型 最后通过等号进行赋值
	var language string = "Javascript"
	var level = "牛逼"
  // 或者 首先定义变量 并且声明数据类型  
  // var language string
	// language = "Golang" 最后进行该变量的赋值
	fmt.Println("世界上最好的编程语言是",language, level)
}
```

```sh
# ▶ go run index.go
# 世界上最好的编程语言是 Javascript 牛逼
```

### 类型校验

::: warning 变量类型

在变量定义的时候，变量赋值内容需要与定义变量时的类型相同。

:::

例如，在定义变量a的时候，我们赋予变量Int类型。但是我们在赋值的时候赋值一个小数数值执行代码则会抛出错误。如下所示

```go
package main
import "fmt"
func main(){
	var a int = 12.23
	fmt.Println(a)
}
```

```sh
# ▶ go run index.go
# command-line-arguments
# cannot use 12.23 (untyped float constant) as int value in variable declaration (truncated)
# 翻译：不能在变量声明中使用12.23(未类型化浮点常量)作为int值(截断)
```

### 类型转换

::: warning 类型转换

在Go中不允许隐式类型转换。

:::

例如定义变量a，但是并**未赋予数据类型**，但是**赋值**为"Never give Up"，那么变量a的数据类型则为字符串类型，后续赋值**不允许赋值为其他数据类型的值**，如果进行了该操作，则会抛出错误。如下所示

```go
package main
import "fmt"
func main(){
	var a = "Never give Up" // 根据等号后的数据 自动确定数据类型
	a  = 1234 // 这里是错的 实际代码不要模仿
  fmt.Println("Lihua:",a)
}
```

```sh
# ▶ go run index.go
# command-line-arguments
# cannot use 1234 (untyped int constant) as string value in assignment
# 翻译：不能在赋值时使用1234(未类型化int常量)作为字符串值
```

### 重复定义

::: warning 重复定义

Go中不允许变量重复定义。（与JavaScript中`const`定义相同）

:::

例如定义变量a，并且赋值，后续再次进行变量的定义，则会抛出错误，如下所示

```go
package main
import "fmt"
func main(){
	var a = "Never give Up"
	var a = "keep on fighting" // 重复定义在这里
  fmt.Println("Lihua:",a)
}
```

```sh
# ▶ go run index.go
# command-line-arguments
# a redeclared in this block 会提醒在这一行再一次定义了变量
# other declaration of a 最开始定义是在这个位置
```

### 变量默认值

::: tip 默认值

变量定义后没有赋值，变量拥有默认值

:::

我们定义了一个名为stduy的变量，并且赋予类型为string或者Int进行尝试，如下所示

```go
package main
import "fmt"
func main(){
  var study string
  fmt.Println(study)  // 这是一个空字符串 这里写一下
  var study int
  fmt.Println(study)  // 0 int类型未赋值 默认值则为0
  var study bool
  fmt.Println(study)  // false 布尔类型未赋值 默认值为false
  var study float32
  fmt.Println(study)  // 0  浮点型数字 默认值也为0
  // ... 其余留到数据类型一起学习
}
```

### 简写定义变量

在变量定义的时候，我们也可以进行简写可以省略`var`

```go
package main
import "fmt"
func main(){
  result := 123
  fmt.Println(result)
}
```

```sh
# ▶ go run index.go
# 123
```

### 同时定义多个变量

在变量定义的时候，我们可以同时对多个变量进行定义（有点像是解构赋值那味儿）

```go
package main
import "fmt"
func main(){
  var a,b,c,d string
	a,b,c,d = "one","two","three","four"
	fmt.Println(a,b,c,d)  // one two three four
 
	time,day,week,month := 1,2,3,4
	fmt.Println(time,day,week,month) // 1,2,3,4
  
	var q,w,e,r = "车轮滚滚",2,"猛捶地板","共享大脑"
	fmt.Println( q,w,e,r )  // 车轮滚滚 2 猛捶地板 共享大脑
}
```

### 全局变量

Go在方法外部也可以定义全局变量来供所有方法使用

```go
package main
import "fmt"
var res = 123
func main(){
	fmt.Println(res) // 123
}
```

除了一个一个定义以外，还可以通过以下方式快速定义多个全局变量

```go
package main
import "fmt"
var (
	a = 1
	b = "abc"
	c = "666"
	d = 12.55
)
func main(){
	fmt.Println(a,b,c,d)
}
```

```sh
# ▶ go run index.go
# 1 abc 666 12.55
```

## fmt

导入的`fmt`包在Go中通常用于打印数据。

```go
package main
import "fmt"
func main(){
	var language string = "Javascript"
	// 或者
	// var language string
	// language = "Golang"
	fmt.Println("世界上最好的编程语言是", language)
  // go run index.go 执行文件
  // 世界上最好的编程语言是 Javascript  // 执行结果
	fmt.Printf("世界上最好的编程语言是", language)
  // go run index.go 执行文件
  // 世界上最好的编程语言是%!(EXTRA string=Javascript)%   
	fmt.Print("世界上最好的编程语言是", language)
  // go run index.go 执行文件
  // 世界上最好的编程语言是Javascript%   
}
```

其中`Println`会进行换行输出。 

```go
package main
import "fmt"
var (
	a = 1
	b = "abc"
	c = "666"
	d = 12.55
)
func main(){
	fmt.Println(a)
	fmt.Println(b)
	fmt.Println(c)
	fmt.Println(d)
}
```

```sh
# ▶ go run index.go
# 1
# abc
# 666
# 12.55
```

其中`Print`则会原样输出。

```go
package main
import "fmt"
var (
	a = 1
	b = "abc"
	c = "666"
	d = 12.55
)
func main(){
	fmt.Print(a)
	fmt.Print(b)
	fmt.Print(c)
	fmt.Print(d)
}
```

```sh
# ▶ go run index.go
# 1abc66612.55% 
```

其中`Printf`会进行格式化输出。

