# 模型的绑定和验证

在我们进行数据请求的时候，在前端可能会进行字段的校验以及约束，但是对于数据字段的约束以及校验后端同样是需要进行的，以此来保证数据的可靠性。在Gin框架中我们可以通过模型的绑定，将请求主体绑定到结构体中。Gin框架目前支持JSON、XML、YAML和标准表单值的绑定。

Gin一共提供了两套绑定方法：

- Must bind
  - `MustBind`方法的使用需要谨慎，因为它会直接抛出panic，可能会导致程序崩溃。所以一般都不建议使用此方法，**建议使用`Should bind`**
  - 类似于`ShouldBind`方法，用于将请求参数绑定到指定的结构体上。不同的是，`MustBind`在参数绑定失败时会直接抛出panic，而不是返回错误对象。
  - 使用`MustBind`方法可以简化代码，避免在每个请求处理函数中都写错误检查的逻辑。如果参数绑定失败，程序会直接退出，并在控制台输出错误信息。

```go
type Person struct {
    Name string `form:"name" binding:"required"`
    Age  int    `form:"age" binding:"required"`
}

func main() {
    router := gin.Default()

    router.POST("/person", func(c *gin.Context) {
        var person Person
        c.MustBind(&person)

        // do something with person

        c.JSON(http.StatusOK, gin.H{
            "name": person.Name,
            "age":  person.Age,
        })
    })

    router.Run(":8080")
}
```

- Should bind
  - 在 Golang 中，`shouldBind` 是 Gin 框架中的一个方法，用于将 HTTP 请求中的数据绑定到一个结构体中，方便在代码中进行处理。
  - 具体来说，`shouldBind` 方法可以将 HTTP 请求的参数、表单数据、JSON 数据等绑定到一个指定的结构体中，并进行数据类型转换。

```go
// 自定义数据类型
type LoginForm struct {
	userName string `json:"userName"  form:"userName" xml:"userName"`
  // 用户名 类型为string类型 
	password string `json:"password" form:"password" xml:"userName"`
}

func loginHandle(ctx *gin.Context) {
	var loginForm LoginForm
	//err := ctx.ShouldBindWith(&loginForm, binding.Form)
	err := ctx.ShouldBindUri(&loginForm)
	if err != nil {
    // 如果存在错误，则将错误抛出
		ctx.JSON(http.StatusBadRequest, gin.H{
			"message": "error",
			"error":   err.Error(),
		})
	} else {
    // 否则的情况下 将loginForm的数据返回给客户端
		ctx.JSON(http.StatusOK, gin.H{
			"message": "success",
			"data":    loginForm,
		})
	}
}
```

在上面的方法中，我们定义了一个结构体LoginForm，其中包含两个私有字符串变量userName以及password，这两个变量分别定义了在`json`、`form`、`xml`三种标签来指定对应数据请求格式情况下的校验名称。

`json` 标签用于指定与 JSON 格式相关的序列化和反序列化方式，`form` 标签用于指定和 HTML form 表单相关的序列化和反序列化方式，而 `xml` 标签用于指定与 XML 相关的序列化和反序列化方式。这样一来，无论您在什么场景下使用这个结构体，都可以通过相应的标签来控制它的表现形式。

其中我们使用`ShouldBindWith`方法进行了数据的校验

```go
err := ctx.ShouldBindWith(&loginForm, binding.Form)
```

