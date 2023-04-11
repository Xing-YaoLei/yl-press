# 获取请求的参数

在Gin框架中，我们通过默认提供的方法来响应对应HTTP中的各类请求。在进行数据请求的过程中我们需要进行数据交互。所以需要获取客户端在请求过程中携带的参数，我们在上一篇文章里面已经简单的说了一些针对对应请求所使用的方法。接下来的话根据对应的请求方法，单独进行对应方法的说明。

## Get请求

### Query

get请求我们通常获取参数的时候，是通过Query的方式来进行参数的传递的，通常的表现形式为`https://www.oh-undefined.com/api/v1/getUserInfo?userid=10&session=666`其中，`userid`以及`session`是我们本次请求接口所传递的参数。在上一个文档中我们说到可以通过使用`Query()`方法来获取。

```go
package main

import "github.com/gin-gonic/gin"
// get方法，通过Query方法获取到请求中的userid以及session
func getting(c *gin.Context) {
	userid := c.Query("userid")
	session := c.Query("session")
  // 最终通过c.JSON返回
	c.JSON(200, gin.H{
		"message": "GET",
		"userid":  userid,
		"session": session,
	})
}

func main () {
  router := gin.Default() // 携带基础中间件启动
  router.GET("/someGet", getting)
  router.Run() // listen and serve on 0.0.0.0:8080
}
```

我们通过接口调用工具，例如**postman**、**apifox**等工具模拟数据请求的发送。请求地址为`http://localhost:8080/someGet?userid=666998&session=session`，接口相应请求后，显示的数据为

```json
{
    "message": "GET",
    "session": "session",
    "userid": "666998"
}
```

::: tip 不传递某一个值

在数据请求的过程中我们可能会偶尔漏掉某一个参数，那么如果不传递的情况下，通过Query的方法在服务端这边也会去拿值尽管它是一个空的。如下所示。

:::

```json
// http://localhost:8080/someGet?userid=666998 只是传递了userid
{
    "message": "GET",
    "session": "",
    "userid": "666998"
}
```

### DefaultQuery

在此中方法下，我们可以设置对应的默认值，当客户端没有传递对应的值的时候，服务端程序这边会默认将默认值放入变量中去使用。如下所示。

```go
session := c.DefaultQuery("session", "default session")
```

当我们没有传递`session`参数的时候，会默认将`default session`这段字符串放入`session`变量中。

```json
// RequestURL http://localhost:8080/someGet?userid=666998
{
    "message": "GET",
    "session": "default session", // 此处相应的数据为default session
    "userid": "666998"
}
```

当我们传递了`session`参数的时候，会将我们用户传递过来的`session`放入对应变量中，减少了一定程度因为数据为空导致的错误。

## Post请求

### PostForm & DefaultPostForm

通过使用`PostForm`能够拿到HTTP请求的`Post`请求体中的参数数据。同样我们也可以使用`DefaultPostForm`方法可以设置Post请求在未传递某一个参数的时候的默认值。（未传递，如果传递了数据，但是值为空的情况下，是会赋值为空的）

```go
func posting(c *gin.Context) {
	userid := c.PostForm("userid")
	session := c.DefaultPostForm("session", "默认的session")
	c.JSON(200, gin.H{
		"message": "POST",
		"userid":  userid,
		"session": session,
	})
}

func main () {
  router := gin.Default() // 携带基础中间件启动
  router.POST("/somePost", posting)
  router.Run() // listen and serve on 0.0.0.0:8080
}
```

实际请求内容如下所示。

```json
// RequestURL http://localhost:8080/somePost
// 请求数据为 userid 以及 session
{
    "message": "POST",
    "session": "",
    "userid": "666"
}
```

## Put请求

`put`请求与`post`请求大致相同，都可以通过`PostForm`以及`DefaultPostForm`来进行数据获取。

## Delete请求

`delete`请求也能够从URL中获取参数，但是通常delete请求都是使用Param传递参数，Gin框架同样提供了使用`Param()`方法来获取参数。

```go
router.DELETE("/someDelete/:id", deleting)
func deleting(c *gin.Context) {
	id := c.Param("id")
	c.JSON(200, gin.H{
		"message": "DELETE",
		"id":      id,
	})
}
```

```json
// ReqeuestURL: http://localhost:8080/someDelete/123  Method:Delete
{
    "id": "123",
    "message": "DELETE"
}
```

::: warning 存在的问题

这样接受参数也可能会存在一些问题，例如必填项，或者对于字段的校验不够明确。后续我们可以通过定义struct模型来进行字段的约束。配合是用`shouldBind`的相关方法来进行校验。

:::