# 模型的绑定和验证

在我们进行数据请求的时候，在前端可能会进行字段的校验以及约束，但是对于数据字段的约束以及校验后端同样是需要进行的，以此来保证数据的可靠性。在Gin框架中我们可以通过模型的绑定，将请求主体绑定到结构体中。Gin框架目前支持JSON、XML、YAML和标准表单值的绑定。

### 验证

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

- ShouldBind
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

标签使用了三个不同的键名，分别是 `json`、`form` 和 `xml`，分别代表了使用 JSON、form 表单和 XML 进行序列化时的字段名。例如，如果使用 JSON 序列化这个结构体，则会使用 `userName` 作为 JSON 对象中的键名。

1. `ShouldBind`：用于绑定请求体中的数据到结构体。适用于 `application/json`、`application/xml` 等格式的请求体。

   ```go
   err := ctx.ShouldBind(&loginForm)
   ```

2. `ShouldBindQuery`：用于绑定 URL 查询参数到结构体。适用于 `?key=value` 格式的查询参数。

   ```go
   err := ctx.ShouldBindQuery(&loginForm)
   ```

3. `ShouldBindUri`：用于绑定 URL 路径参数到结构体。适用于 `/user/:id` 格式的路径参数。

   ```go
   err := ctx.ShouldBindUri(&loginForm)
   ```

4. `ShouldBindWith`：可以手动指定绑定的参数格式和绑定规则。

   ```go
   err := ctx.ShouldBindWith(&loginForm, binding.Form)
   ```

### 必填

以上的验证只能验证当我们输入了对应的值后，是否符合对应的数据类型，除了这个以外我们可以进行其他约束的校验，例如必填项。我们只需要在定义数据类型的时候，最后面跟随一个键为`binding`的属性，值为`required`即可。

```go
UserName string `json:"userName"  form:"userName" xml:"userName" binding:"required"`
```

![image-20230412153159811](https://oss.oh-undefined.com/image-20230412153159811.png)

如果我们在定义模型的时候，定义了必填。但是当我们传递的参数为空，或者直接不传递某一个值的时候。Gin框架会自动将状态码更改为400，并且将错误抛出。

```go
if err != nil {
  ctx.JSON(http.StatusBadRequest, gin.H{
    "message": "error",
    "error":   err.Error(),
  })
} else {
  ctx.JSON(http.StatusOK, gin.H{
    "message": "success",
    "data":    loginForm,
  })
}

```

响应内容如下所示。

```json
{
    "error": "Key: 'LoginForm.Password' Error:Field validation for 'Password' failed on the 'required' tag",
    "message": "error"
}
```

## 自定义验证规则

[自定义验证规则](https://www.kancloud.cn/shuangdeyu/gin_book/949427)相对较为繁琐，后续根据实际开发项目的时候来进行完善
