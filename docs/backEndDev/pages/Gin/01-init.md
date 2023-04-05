# Gin框架

## Gin的介绍

[Gin](https://gin-gonic.com/zh-cn/docs/quickstart/) 是一个用 Go 编写的 Web 框架， 是一个快速、轻量级、灵活和易于使用的 Web 框架，非常适合构建各种类型的 Web 应用程序，特别是对于需要高性能的应用程序。它提供了高性能的路由和中间件功能，使得开发 Web 应用程序变得更加简单和快速。

- 快速：Gin 框架具有卓越的性能，其速度比其他流行的 Web 框架更快。
- 轻量级：Gin 框架具有非常小的内存占用和二进制文件大小，非常适合构建轻量级的 Web 应用程序。
- 路由：Gin 框架提供了灵活的路由功能，可以轻松处理各种 HTTP 请求。
- 中间件：Gin 框架支持中间件，可以通过中间件来添加各种功能，例如身份验证、日志记录、缓存等。
- 错误处理：Gin 框架提供了方便的错误处理机制，可以轻松地处理各种错误情况。
- 模板：Gin 框架支持模板功能，可以使用各种模板引擎来渲染视图。
- JSON 序列化：Gin 框架内置了 JSON 序列化和反序列化功能，可以轻松地将数据序列化为 JSON 格式。
- 文件上传：Gin 框架支持文件上传功能，可以轻松处理文件上传和下载操作。
- 自定义中间件：Gin 框架允许开发者编写自定义中间件，以便添加自定义功能。

## Gin的使用

如果我们想要在项目中使用Gin框架的情况下，我们需要创建我们的项目目录，然后在项目内初始化。通过使用`go mod init projectName`的方式来进行初始化。

![image-20230405221841352](https://oss.oh-undefined.com/image-20230405221841352.png)

```go
// go.mod
module go-WebServer

go 1.20
```

初始化完成后我们的项目目录中会生成一个`go.mod`的文件表明我们的项目已经初始化完成。

初始化完成后我们便可以按照Gin[官网](https://gin-gonic.com/zh-cn/docs/quickstart/)所示的快速流程进行对应框架的安装。

### 要求

- Go 1.13 及以上版本

### 安装

1. 下载并安装 gin，在项目根目录中运行这条命令。

   ```sh
   go get -u github.com/gin-gonic/gin
   ```

2. 将 gin 引入到代码中，我这里默认就先放在了main.go文件中，如果不存在的情况下你可以自行创建一个。

   ```go
   import "github.com/gin-gonic/gin"
   ```

3. 如果不会使用的情况下，Gin框架默认给我们提供了一个初始化的模板。可以通过以下命令来拷贝进去。

   ```sh
   curl https://raw.githubusercontent.com/gin-gonic/examples/master/basic/main.go > main.go
   ```

4. 运行项目

   ```go
   go run main.go
   ```

### 开始

这里Gin的官网有提示，如果不会的编写或者执行Go的代码的情况下，给了一个链接，跳的是Go的[官网🤣](https://go.dev/doc/code)。

然后创建一个名为 `example.go` 的文件

```sh
touch example.go
```

然后书写`example.go`文件

```go
package main

import "github.com/gin-gonic/gin"

func main() {
	// 引入Gin的路由
	router := gin.Default()
	// 路由的GET方法 访问地址为index 
	router.GET("/index",func(ctx *gin.Context) {
		// 返回的是一个JSON数据
		ctx.JSON(200,gin.H{
			"message":"Hello World",
		})
		// gin.H 是 Gin 框架中提供的一个用于创建 map 的简便方式，可以让我们更快、更有效地创建 JSON 响应。
	})
	// 路由监听 8080端口
	router.Run(":8080")
}
```

然后, 执行 `go run example.go` 命令来运行代码：

```sh
# go run example.go 
# [GIN-debug] Listening and serving HTTP on :8080
```

访问结果如下所示。

![image-20230405223902767](https://oss.oh-undefined.com/image-20230405223902767.png)

完事！水了一篇，因为Go语言中的部分基础知识还没有搞明白，打算通过Web框架实际使用与学习基础知识同步进行，学到哪里不明白了就继续回去学对应的基础知识。祝愿大家变得更强。

![image-20230405224400360](https://oss.oh-undefined.com/image-20230405224400360.png)
