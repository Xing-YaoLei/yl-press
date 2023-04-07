# Gin框架开发RESTful API

## RESTful API

RESTful API是一种基于HTTP协议的网络应用程序接口，它使用HTTP请求方法（GET、POST、PUT、DELETE等）来实现客户端和服务器之间的数据交互和通信。

RESTful API的优势包括：

1. 简化开发：RESTful API使用标准的HTTP协议，使得开发人员可以更加专注于业务逻辑的实现，而不必关注底层的网络协议和传输细节。
2. 可扩展性：RESTful API的设计原则包括松耦合、可重用、可扩展等，这使得它可以适应不同的应用场景和需求，并且可以方便地进行扩展和升级。
3. 易于理解和使用：RESTful API使用简单的URI（统一资源标识符）和HTTP方法来表示资源和操作，这使得它易于理解和使用，并且可以降低学习成本和开发成本。
4. 可移植性：由于RESTful API使用标准的HTTP协议，因此它可以在不同的平台和编程语言之间进行交互和通信，从而实现更好的可移植性和互操作性。
5. 安全性：RESTful API可以使用HTTPS协议来保证通信的安全性，同时也可以使用认证和授权等机制来保护资源和数据的安全性和隐私性。

## Gin开发RESTful API

```go
package main

import (
	"net/http"

	"github.com/gin-gonic/gin"
)

func main() {
	// 引入Gin框架
	router := gin.Default()
	// 路由的GET方法 访问地址为index
	router.GET("/index", func(ctx *gin.Context) {
		// 返回的是一个JSON数据
		ctx.JSON(http.StatusOK, gin.H{
			"message": "Hello World",
		})
		// gin.H 是 Gin 框架中提供的一个用于创建 map 的简便方式，可以让我们更快、更有效地创建 JSON 响应。
	})
  // 路由监听 8080端口 此处为:8080 注意冒号的使用
	router.Run(":8080")
}
```

### Post请求

在Post请求当中，我们可以通过使用提供的`PostForm()`方法来获取请求体或请求表单中的信息。

```go
	router.POST("/user", func(ctx *gin.Context) {
		// 使用ctx.PostForm()方法获取POST请求中的参数
		userName := ctx.PostForm("userName")
		password := ctx.PostForm("password")
		ctx.JSON(http.StatusOK, gin.H{
			"body":     "牛逼了",
			"userName": userName,
			"password": password,
		})
	})
```

### Put请求

在使用Get或者Put请求的时候，通常我们传递数据都是通过`Query()`的方式来进行传参的，我们可以通过`Query()`方法来获取所需要的参数。

```go
	router.PUT("/user", func(ctx *gin.Context) {
		userName := ctx.Query("userName")
		ctx.JSON(http.StatusOK, gin.H{
			"body":     "牛逼了",
			"userName": userName,
		})
	})
```

### Delete请求

在使用Delete请求的时候，我们通常传递数据是通过`Params`传递参数的方式，我们可以通过使用`Param`的方式来获取某一个参数，也可以通过`ctx.Params.ByName(paramsName)`的方式来获取多个`Params`中的某一个参数

```go
	router.DELETE("/user/:userid", func(ctx *gin.Context) {
		// 使用ctx.Param()方法获取URL中的参数
		// ctx.Params()方法获取URL中的所有的参数
		// userid := ctx.Params.ByName("userid") // 如果有多个可以通过此种方式来获取
		userid := ctx.Param("userid")
		ctx.JSON(http.StatusOK, gin.H{
			"body":   "牛逼了",
			"userId": userid,
		})
	})
```

### 404路由

```go
	router.NoRoute(func(ctx *gin.Context) {
    // 如果没有匹配路由的情况下对应的操作
		ctx.HTML(http.StatusNotFound, "404.html", nil)
    // 此处使用返回HTML模版的形式来返回了404页面
	})
```

