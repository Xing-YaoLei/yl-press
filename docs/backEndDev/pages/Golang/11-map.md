# Go中的Map

## Map的基本信息

Go语言中的map是一种键值对的数据结构，类似于其他语言中的哈希表或字典。（你可以直接理解为他是Js中的Map或者对象）它可以用来存储一组无序的键值对。在map中，**键必须是唯一**的，而**值可以是任意类型**的。

## 创建Map

- 第一种方法，创建一个`myMap`的`map`对象，`key`为`string`类型，`value`为`string`类型

```go
var myMap map[string]string
```

- 第二种方法，使用`make()`函数创建map，keyType为键的类型，valueType为值的类型

```go
myMap := make(map[keyType]valueType)
```

- 第三种方法，使用`make()`函数创建map，并且分配数据空间。这里的数据空间与切片中的容量相同。当无法承载的时候，会自动扩容。

```go
myMap := make(map[string]int, 10)
```

- 第四种方法，使用`make()`函数创建map，并且预设初始值。

```go
myMap := map[int]string {
  1 : "JavaScript",
  2 : "TypeScript",
  3 : "Golang",
}
```

## 修改Map的值

如果我们想要修改map中的某一项值可以通过键来进行访问且进行修改。

```go
func main (){
	myMap := make(map[string]string)
	myMap["AMD"] = "YES"
	fmt.Println(myMap)
	fmt.Println(myMap == nil)
}
```

通过上面的例子能够发现我是直接使用第二种创建方法来进行map对象的创建并且修改的。

第一种方式相对来说不太常用，因为创建的是一个值为nil的map对象，并且没有给它分配空间，所以我们如果想要通过`myMap["AMD"] = "YES"`这种方式来直接在map对象中添加数据是不正确的。会报错`assignment to nil map (SA5000)go-staticcheck`。

::: warning 警告

这个警告是Go静态分析工具`staticcheck`检测到的一种常见错误，它表示尝试在一个`nil`的map上进行赋值操作。

在Go中，如果创建一个map但没有进行初始化，它的值将为`nil`。这时，如果尝试在这个map上进行赋值操作，就会导致`assignment to nil map`错误。

:::

## Map的增删改查

#### 增

map的增加操作在上一段演示的时候已经操作过了，在下面的话再进行一个简单的操作尝试。

```go
package main

import (
	f "fmt"
)
func main (){
	myMap := make(map[string]int)
	myMap["ChatGPT"]= 1
	myMap["NewBing"]= 2
	myMap["Baidu"]= 3
  f.Println(myMap)
  // key= ChatGPT value= 1
	// key= NewBing value= 2
	// key= Baidu value= 3
}
```

#### 删

map的删除操作和Js基本相同，通过使用delete方法来操作，第一个参数为要删除内容的map对象，第二个参数为删除的键，具体操作如下所示。

```go
func deleteMap(myMap map[string]int, key string){
	delete(myMap, key)
}

func main (){
	myMap := make(map[string]int)
	myMap["ChatGPT"]= 1
	myMap["NewBing"]= 2
	myMap["Baidu"]= 3
  f.Println(myMap)
	deleteMap(myMap, "Baidu")
	f.Println("---------删除后----------")
  f.Println(myMap)
}
```

```sh
# key= ChatGPT value= 1
# key= NewBing value= 2
# key= Baidu value= 3
# ---------删除后----------
# key= ChatGPT value= 1
# key= NewBing value= 2
```

#### 改

改的操作与创建的操作相同，如果存在这个值，那么则修改它，如果不存在的情况下，则创建它。基本操作如下所示。

```go
func main (){
	myMap := make(map[string]int)
	myMap["ChatGPT"]= 1
	myMap["NewBing"]= 2
	myMap["Baidu"]= 3
	f.Println(myMap)
	myMap["Baidu"] = 5
	f.Println("----- 修改后 ------")
	f.Println(myMap)
}
```

```sh
# map[Baidu:3 ChatGPT:1 NewBing:2]
# ----- 修改后 ------
# map[Baidu:5 ChatGPT:1 NewBing:2]
```

#### 查

之前我们使用的`range`方法同样能够用在`map`对象中来遍历查询其中的键值对。我们简单封装一个方法，在此方法内，我们传入一个myMap的map对象，然后通过`for range`的方法来循环输出他们。

```go
func viewMap(myMap map[string]int) {
	for key, value := range myMap {
		f.Println("key=",key,"value=",value)
	}
}
// key= ChatGPT value= 1
// key= NewBing value= 2
// key= Baidu value= 3
```

## 传递参数修改值

之前我们在使用数组的时候有过类似的场景。

- 数组在通过方法接收后，原本的数组没有发生变化，只是在内存地址开辟了新的空间来存放新的数组。
- 动态数组（切片），在传入动态数组的时候，我们修改动态数组，原本的动态数组也发生了变化，因为动态数组传递的值，其实是将对应数据的指针传递了过去。如果不想同时变化的情况下，可以通过使用copy方法来拷贝一个新的切片再进行操作。
- 在Go语言中，map也是引用类型，因此，将map作为参数是传递给方法的时候，函数内部对map的修改会影响到原始（满脑子都是原石）的值。

具体操作如下所示。

```go
func editMap(myMap map[string]int){
	myMap["Tencent"] = 0
}

func main (){
	myMap := make(map[string]int)
	myMap["ChatGPT"]= 1
	myMap["NewBing"]= 2
	myMap["Baidu"]= 3
	myMap["Google"]= 4
	editMap(myMap)
	viewMap(myMap)
}
```

```sh
# key= Baidu value= 3
# key= Google value= 4
# key= Tencent value= 0
# key= ChatGPT value= 1
# key= NewBing value= 2
```

![img](https://oss.oh-undefined.com/c0cc7eb2fuf12154383b7e8e567c8ad4.jpeg)

