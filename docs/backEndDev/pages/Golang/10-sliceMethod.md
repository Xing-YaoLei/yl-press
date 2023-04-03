# Go 切片方法

![先放个图](https://oss.oh-undefined.com/f3f123a1dm22cd969a2aa14bb6b7e6ec-20230403234316774-20230403234338221.jpeg)

## 切片的创建方法

切片创建的方法和数组的创建方法基本相同，在上一篇中我们也进行了一定的演示。

```go
package main
import (
	"fmt"
)

func main() {
  // 创建一个变量slice1，slice1为一个整型的切片，且初始值为1,2,3
  slice1 := []int {1,2,3}
	fmt.Println(slice1)
  // [1 2 3]
}

or

func main(){
  var slice1 [] string
  fmt.Println(slice1)
  // []
}

```

在已经**定义了初始值的切片中**，我们可以修改切片（动态数组）中对应的**初始值**。但是，如果这个切片是通过第二种方式来进行创建的（不设置初始值）。则会抛出错误，因为当前的切片没有空间容纳这个值，具体如下所示。

```go
package main

import (
	"fmt"
)

func main() {
	var slice1 [] int
	slice1[0] = 100
	fmt.Println(slice1)
  // panic: runtime error: index out of range [0] with length 0
	// FAIL
}
```

那既然没有空间容纳值，自然有着可以开辟存储空间的方法。通过使用`make()`函数。

`make()`函数第一个参数是切片的类型，第二个参数是切片的长度，第三个参数是切片的容量。如下所示我们创建一个整数类型的切片，并且预分配 10 个元素的存储空间

```go
dataSlice := make([]int,10) 
fmt.Println(dataSlice)
// [0 0 0 0 0 0 0 0 0 0]
```

当然我们假设可能需要冗余操作，例如我目前可能需要 10 个空间，但是我可能后面会用到 15 个空间或者 20 个空间来存储数据，那么我们在创建切片的时候，也可以与分配 20 个存储空间以供我们后期使用。如下所示

```go
dataSlice := make([]int, 10, 20)
// 创建了一个切片，切片类型为整型，切片长度为10（整型默认长度会填充0），切片容量为20
fmt.Println(dataSlice)
// [0 0 0 0 0 0 0 0 0 0]
```

## 切片的容量

> 在 Go 中，切片的容量是指底层数组的大小，即可以存储的元素数量。与切片的长度不同，切片的容量可以动态变化，并且容量大于等于长度。
>
> 1. 扩容：当向一个已满的切片中添加新元素时，如果底层数组的容量不足，Go 会**自动扩容**该切片。扩容操作会**创建一个新的底层数组**，将**原有元素复制到新的底层数组**中，并返回一个**新的切片**。新的切片的容量是**原来切片容量的两倍**，新的底层数组的大小也是**原来底层数组大小的两倍**。因此，在使用切片时，需要注意其容量，以免频繁扩容影响性能。
> 2. 预分配：在创建切片时，可以使用内置的 make() 函数为其预分配一定的容量，以**避免**在添加大量元素时**频繁**进行**扩容操作**，提高程序性能。
> 3. 截取：使用切片的截取操作时，可以通过指定起始位置和结束位置，得到一个新的切片。新的切片的容量是原来切片的容量减去起始位置，即新切片末尾与原切片末尾之间的元素数量。因此，在使用切片的截取操作时，需要注意容量的变化。

我们如果想要获取某一个切片的容量的时候我们可以通过使用内置的`cap`函数来查看，与`len`函数使用方法相同。如下所示

```go
cap(sliceName)
// 例如
dataSlice := make([]int, 10, 20)
fmt.Println(cap(dataSlice))
// 20
```

## 切片中追加元素

如果想要在切片中追加元素，可以使用内置的`append()`函数，函数会将一个或者多个元素添加到切片的末尾，并且返回一个**新的切片**。返回的新切片包含添加新元素后的所有元素。如下所示。

```go
func main(){
	mySlice := make([]int,3,5) // 创建一个mySlice的切片 整型 长度为3默认填充3个0 空间为5
	fmt.Println(mySlice) // [0 0 0] 
	mySlice = append(mySlice, 1)  // 将mySlice切片向后追加一个1 
	fmt.Println(mySlice) // [0 0 0 1]
  mySlice = append(mySlice, 1,2,3,4) // 将mySlice切片向后追加4个值 1，2，3，4
  fmt.Println(mySlice) // [0 0 0 1 1 2 3 4]
}
```

能够发现我们通过`append()`函数在切片中不断追加了许多的值。也能够看到我们一开始预设的容量为5，但是最后我们的内容长度则为8个数值，我们通过`cap()`函数来尝试查看一下容量的变化。

```go
func main(){
	mySlice := make([]int,3,5)
	fmt.Printf("len=%d cap=%d slice=%v\n", len(mySlice), cap(mySlice), mySlice)
	mySlice = append(mySlice, 1)
	fmt.Printf("len=%d cap=%d slice=%v\n", len(mySlice), cap(mySlice), mySlice)
	mySlice = append(mySlice, 1,2,3,4)
	fmt.Printf("len=%d cap=%d slice=%v\n", len(mySlice), cap(mySlice), mySlice)
}
```

我们通过`Printf`来输出一下，其中`%d`为整数，`%v`则原样输出，并且`\n`代表换行。输出结果如下所示

```sh
# $ go run index.go                                                                             
# len=3 cap=5 slice=[0 0 0]
# len=4 cap=5 slice=[0 0 0 1]
# len=8 cap=10 slice=[0 0 0 1 1 2 3 4]
```

我们能够发现虽然我们一开始设置的cap容量为5，但是经过我们一直在尾部追加的操作，在容量超过5的时候，**自动扩容**，并且扩容的值是**原本容量的2倍**。（如果**没有设置cap容量**的时候，**默认**则为**len长度***）

## 切片截取

在Go中，切片的截取使用方法为` sliceName[low:high]`

- 其中`sliceName`为要截取的切片
- `low`代表截取的起始下标（包括该下标对应的元素）
- `high`代表截取的结束下标（不包括该下标对应的元素）
- `low`与`high`中间通过冒号`:`进行连接

具体的例子如下所示

```go
package main
import (
	. "fmt"
)
func main(){
	nums := []int{1,2,3,4,5}
	slice := nums[0:3]
	Println(slice) // [1 2 3]
}
```

 `low` 或 `high` 被省略，则默认为 0 或切片的长度。例如，要截取切片的前两个元素，可以使用以下语法：

```go
slice := nums[:2]
```

同样地，要截取切片的后两个元素，可以使用以下语法：

```go
slice := nums[3:]
```

::: warning 注意

切片截取不会修改原始切片，而是创建一个新的切片。如果对新的切片进行修改，会影响到原始的切片（因为新的切片与原始切片，共享相同的底层数组）。另外，截取的起始下标和结束下标必须在切片的范围内，否则会导致运行时错误。

如果需要创建一个不共享底层数组的新切片，可以使用 `make` 函数创建一个新的切片，并使用 `copy` 函数将原始切片的元素复制到新切片中。

:::

## 切片拷贝

使用方法：`copy(destSlice, srcSlice)`

- `destSlice` 是目标切片
- `srcSlice` 是源切片
- 拷贝操作会将 `srcSlice` 中的元素复制到 `destSlice` 中，并返回复制的元素个数。

如上方警告所提到的，如果切片截取后，修改新的切片，原始切片也会发生变化（操作不好bug嘎嘎多），因为他们共享底层数组。那么我们为了避免这种情况，可以使用内置的`copy`函数来将切片进行深拷贝。

```go
package main

import (
	. "fmt"
)

func main(){
	nums := []int{1,2,3,4,5}
	slice := make([]int,3)
	copy(slice,nums) 
	Println(slice) // [1 2 3]
}
```

::: tip Tip

如果目标切片的长度小于源切片的长度，只会复制目标切片的前几个元素。如果源切片和目标切片是相同的切片，则不会进行拷贝操作。

:::

如果我们想要拷贝切片，且长度与被拷贝切片长度相同，可以搭配`len`方法来进行拷贝，如下所示。

```go
slice := make([]int, len(nums))
copy(slice, nums)
```

## 判断 slice 切片是否为空

::: tip nil

在 Go 中，nil 是一个预定义的标识符，表示指针、切片、映射、通道、函数和接口类型的零值。具体来说，nil 表示一个指针或接口值，指向内存地址 0，表示该指针或接口值不指向任何有效的内存地址。

当一个指针、切片、映射、通道、函数或接口类型的变量被声明但没有被初始化时，它们的默认值都是 nil。

:::

