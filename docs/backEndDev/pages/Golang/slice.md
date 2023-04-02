# Go的数组以及切片

## 数组

### 数组的创建

在Go中，如果想要简单理解，可以将数组以及切片理解为同一种数据类型，唯一不同的则是，数组是固定长度的、而切片则是动态长度。接下来我们首先了解一下数组的基本使用。

```go
var arrayName [arrayLength]dataType  // 创建数组的方法
// 以下为实际创建示例
package main
import (
	. "fmt"
)

func main() {
  var strArray [3]string // 创建一个长度为3的字符串数组 但没有赋值
  var intArray = [5]int {1,2,3,4,5}  // 创建一个长度为5，且值为1，2，3，4，5的整型数组
	customArray := [4]int {1,2,3} // 创建一个数组，数组长度为4，且前三个值为1，2，3
	fmt.Printf("strArray=%v\n", strArray)
	fmt.Printf("intArray=%v\n", intArray)
	fmt.Printf("customArray=%v\n", customArray)
}
```

```sh
# go run index.go                                                                             
# strArray=[  ]
# intArray=[1 2 3 4 5]
# customArray=[1 2 3 ]
```

以上提供了三种创建数组的方法，第一种为普通的创建方法，第二种为创建并且赋值的创建方法，第三种则是通过使用短句的方式省略了`var`关键字来进行数组的创建。

在创建数组的时候，可以选择给数组**设置默认值**或不设置默认值。如果设置默认值，则需要在定义类型后追加使用`{}`来为数组添加符合条件的值。如果**不设置默认值**，Go会根据数据类型来**自动填充**对应的内容（例如Int类型会自动填充0，string类型数组会自动填充空字符串）

### 数组的循环遍历的方式

#### for

如果想要访问循环遍历数组，则可以通过使用for循环来完成这一操作，具体如下所示。

```go
package main
import (
	"fmt"
)

func main() {
	var intArray = [5]int {1,2,3,4,5}
  // len方法可以获取到数组对应的长度，同Js中的length相同
	for i := 0; i < len(intArray); i++ {
		fmt.Println(intArray[i])
	}
}

```

#### range

也可以通过`range`关键字来进行循环遍历。其中i（index）是数组中每个元素的索引，而v（value）则是索引所对应的值。具体代码如下所示。

```go
	for index,value := range intArray {
		fmt.Println("item=",index,"value = ",value)
	}
```

#### Range(省略index或者value)

在使用range的时候，偶尔有些情况，我们可能只需要其中的index索引或者其中的value值，那么我们则可以通过如下的方式来使用。（`_`匿名变量，我们在包引入的时候也有用到过这个`_`）

```go
// 如果我们需要省略下标，只拿数组中的值可以使用匿名变量来接受索引
for _,v := range intArray{
  fmt.Println("item=",v)
}
// 如果我们需要省略值，只是拿下标的情况下，我们可以直接省略掉v这一变量
for i := range intArray{
  fmt.Println("item=",i)
}
```

在上面的方法中，`v`和`i`只是一个变量的命名而已，你可以根据场景或者自己的个人习惯使用任何的变量名来接收。

### 修改数组的值

假如我们需要定义一个方法来进行数组数据的修改。比如修改数组中的第一项的值，我们定义了一个`changeArray`的方法，该方法接收一个数组长度为5的整型数组，并且在方法中修改了数组中的第0项的值，将其修改为了100。具体例子如下所示。

```go
package main
import (
	"fmt"
)
// 修改数组的方法
func changeArray(arr [5]int){
	arr[0] = 100
}
// 主函数
func main() {
	var intArray = [5]int {1,2,3,4,5}
	changeArray(intArray)
	fmt.Println(intArray)
}
// 输出结果会是什么样子的？
```

最终输出结果如下所示。

```sh
# go run index.go                                                                            
# [1 2 3 4 5]
```

如上所示，数组的值没有发生变化，因为在数组中的操作中，属于**值传递**，只是将**数组中的值传递给了方法**，而方法则使用一个变量来接受，两个数组所存储的**存储空间不是同一个空间**。所以没有办法修改原数组。



## 切片

::: tip 切片与数组

切片实际上是一个**指向数组的指针**，加上一个**长度**和**容量（capacity）**信息。容量指定了该切片可以容纳的元素的最大数量，它可能大于或等于长度。当切片**需要扩展时**，它会**分配一个新的数组**，将原来的元素复制到新的数组中，并更新切片的指针、长度和容量。

因此，可以将切片看作是一个**动态长度的数组的窗口**，它提供了对**底层数组的访问和操作**。

虽然数组和切片在某些方面类似，但它们在使用和语法上有很大的不同。例如，**数组的长度是固定的**，**不能更改**，而**切片的长度可以随时更改**。**数组的声明方式是在变量名后面跟数组长度和元素类型**，而**切片的声明方式是使用make函数或切片字面量**。

:::

我们回到刚才的问题中，刚才我们通过封装了一个`changeArray`的方法来更改数组中第一项的值，但是发现因为数组是属于值传递，相当于系统开辟了一个新的存储空间，来存放新的变量，修改的值也是新数组的值，所以原本的数组没有发生变化。我们通过定义一个切片，来查看两者的区别。

```go
package main
import (
	"fmt"
)

func changeArray(array [] int){
	array[0] = 100
}

func main() {
	intArray := []int {1,2,3,4}
	changeArray(intArray)
	fmt.Printf("intArray=%v\n",intArray)
}
```

不能说是很像，基本是一模一样，这玩意对比之前代码大家应该大致能够发现，我们没有去定义数组的长度，便是切片（slice）（**本质不相同**，大家不要被我误导）

回到刚才的输出结果如下所示。我们能够发现最初定义的动态数组`intArray`在调用了`changeArray`方法后，原数组发生了变化。因为切片是**引用传递**，修改内容的时候是直接**修改对应内存地址中的值**。

```sh
# go run slice.go                   
# intArray=[100 2 3 4]
```



