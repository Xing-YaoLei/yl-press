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

