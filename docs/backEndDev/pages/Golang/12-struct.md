# Struct 自定义数据类型

Go语言中的struct是一种用户自定义的数据类型，用于封装一组相关的数据。struct可以包含各种类型的数据，例如基本数据类型、数组、切片、指针、函数等等。【说人话你可以理解为这是一个JavaScript中的对象】

## Struct的定义

### 基本定义

基本定义的使用方法如下所示。通过定义一个Person的struct，其中包含三个字段，Name、Age、Email。这些字段都是由类型和名称组成的键值对。

```go
type Person struct {
	Name string
	Age  int
	Email string
}
```

### 创建实例

既然有了基本的数据类型的定义，接下来我们可以尝试创建一个基于Person的实例。

```go
type Person struct {
	Name string
	Age  int
	Email string
}

func main(){
	Ley := Person {
		Name:"Ley",
		Age : 666,
		Email: "542528512@qq.com",
	}
	f.Println(Ley)
	f.Println(Ley.Name)
	f.Println(Ley.Age)
	f.Println(Ley.Email)
}
```

```sh
# go run main.go                                                                            
# {Ley 666 542528512@qq.com}
# Ley
# 666
# 542528512@qq.com
```

### 修改实例

既然有创建，就肯定可能伴随着修改的操作。涉及到修改操作可能就需要查看一下跨方法传递的时候，是值传递还是指针传递了。具体例子如下所示。

```go
package main

import (
	f "fmt"
)

type Person struct {
	Name string
	Age  int
	Email string
}

func changePerson(user Person){
	user.Name = "胡桃"
}

func main(){
	Ley := Person {
		Name:"Ley",
		Age : 666,
		Email: "542528512@qq.com",
	}
	changePerson(Ley) 
	f.Println(Ley) // {Ley 666 542528512@qq.com}
}
```

在刚才的操作中，最终输出还是原本的值，那么在这个地方我们就能够发现，struct定义的数据类型在方法中传递的时候，是进行的**值传递**，而不是指针传递。

如果我们想要在另外的方法修改数据的时候，同步修改源数据，我们可以通过`&`和`*`来进行指针地址的传递。具体如下所示。

```go
func changePerson(user *Person){
	user.Name = "胡桃"
}
func main(){
	Ley := Person {
		Name:"Ley",
		Age : 666,
		Email: "542528512@qq.com",
	}
	changePerson(&Ley)
	f.Println(Ley)
}
// {胡桃 666 542528512@qq.com}
```

::: tip 一些小提示

- struct字段的名称必须以大写字母开头才能被其他包访问，否则就是私有的。
- struct可以包含匿名字段，也可以嵌套其他struct。
- struct是值类型，传递struct实例时会进行复制，修改副本不会影响原始实例。

:::

### struct与TypeScript中的泛型

>1. 不完全可以将Go语言中的struct理解为TypeScript中的泛型，因为它们的本质和用法不同。
>2. 在TypeScript中，泛型是一种参数化类型，可以用来定义通用的数据结构和算法。它可以在编译时指定实际的类型参数，从而实现类型安全和代码重用。
>3. 在Go语言中，struct是一种用户自定义的数据类型，用于封装一组相关的数据。它不具有泛化的特性，即每个struct都是唯一的，不能用来定义通用的数据结构和算法。
>4. 当然，在某些情况下，可以使用interface类型来实现类似于泛型的效果。interface类型可以定义一组方法集合，而不指定具体的类型。可以使用interface{}类型来表示任意类型的值，从而实现更灵活的数据结构和算法。但是，这种方式与TypeScript中的泛型还是存在很大差异的。
>
>——ChatGPT

![image-20230404180628565](https://oss.oh-undefined.com/image-20230404180628565.png)
