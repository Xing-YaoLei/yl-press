# Go 入门 Hello,World

## 介绍

> **Go**（又称 **Golang**）是 [Google](https://baike.baidu.com/item/Google/86964?fromModule=lemma_inlink) 的 Robert Griesemer，Rob Pike 及 Ken Thompson 开发的一种[静态](https://baike.baidu.com/item/静态?fromModule=lemma_inlink)[强类型](https://baike.baidu.com/item/强类型?fromModule=lemma_inlink)、[编译型语言](https://baike.baidu.com/item/编译型语言/9564109?fromModule=lemma_inlink)。Go 语言语法与 [C](https://baike.baidu.com/item/C/7252092?fromModule=lemma_inlink) 相近，但功能上有：内存安全，[GC](https://baike.baidu.com/item/GC/66426?fromModule=lemma_inlink)（垃圾回收），[结构形态](https://baike.baidu.com/item/结构形态/5942010?fromModule=lemma_inlink)及 CSP-style [并发计算](https://baike.baidu.com/item/并发计算/9939802?fromModule=lemma_inlink)。

## 环境安装

在入门 Golang 编程语言开发的前提需要安装对应的**开发环境**[官网](https://go.dev/dl/)下载与**自身电脑操作系统对应**的安装包即可。

![image-20230316130741615](https://oss.oh-undefined.com/image-20230316130741615.png)

下载完成后，基本就是一直下一步即可安装成功，在安装成功之后我们要重启命令行窗口，重新打开命令行窗口，通过输入`go version`，如果能够正常出现版本号，即代表安装成功。

![image-20230316133355146](https://oss.oh-undefined.com/image-20230316133355146.png)

然后我们默认打开我们的代码编辑器（可以根据自身习惯来选择编辑器）前端开发攻城狮可以直接使用 VSCode 即可，VSCode 也拥有对于 Go 拥有语法高亮，代码提示等功能。安装完成后我们首先创建一个我们开发需要的文件夹，然后在 VSCode 中打开。

## 创建编写文件

在该文件夹下需要首先进行项目初始化，通过使用如下命令来初始化项目（如果没有进行初始化的话，不影响最后的编译以及代码的运行，但是 VSCode 会有报错提示）_go: go.mod file not found in current directory or any parent directory; see 'go help modules'_

```sh
go mod init <项目名>
```

随后创建我们的第一个 Go 语言的文件`Hello.go`文件，然后就可以编写我们的第一个 Go 语言的代码了。

```go
package main
import "fmt"
func main() {
  fmt.Println("HelloWorld")
}
```

## 运行文件

书写完成之后，我们在当前文件下目录中通过使用`go build Hello.go`命令，会根据当前操作系统生成一个可执行的文件，个人电脑是 Mac，所以生成的并不是像 Windows 操作系统一样的`.exe`文件。

![image-20230316142357534](https://oss.oh-undefined.com/image-20230316142357534.png)

在MacOS操作系统下双击运行后得到如下效果（Windows电脑需要在命令行中输入对应文件名运行，例如打包生成出来的文件为`Hello.exe`，那么则在当前目录下运行命令行 ./Hello.exe）即可。

![image-20230316142422989](https://oss.oh-undefined.com/image-20230316142422989.png)

当然我们除了通过使用`go build 文件名`以外，还可以通过使用`go run Hello.go`的方式直接运行 Go 的文件。执行效果如下展示。

![image-20230316142608264](https://oss.oh-undefined.com/image-20230316142608264.png)
