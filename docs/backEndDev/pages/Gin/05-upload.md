# 上传文件

服务端上传文件也是较为重要的一环。Gin框架中也提供了单文件以及多文件的上传功能的封装。

## 单文件上传

单文件上传的使用方法如下所示，通过使用`FormFile`方法来获取数据请求中的File文件，当没有错误的情况下，我们将上传到的文件通过使用`SaveUploadedFile`的方式将文件保存到本地的指定文件夹中去。

`SaveUploadedFile`方法是Gin框架中的一个方法，用于将客户端上传的文件保存到指定位置中去。

```go
func (c *Context) SaveUploadedFile(file *multipart.FileHeader, dst string) error
```

其中`file`参数是客户端上传的文件。类型是`*multipart.FileHeader`；`dst`参数是一个字符串`string`的形式，为文件保存的目标路径。

```go
func uploadHandle(ctx *gin.Context) {
  // 通过FormFile的方式来获取Form表单中的文件
	file, err := ctx.FormFile("file")
	if err != nil {
		ctx.JSON(http.StatusBadRequest, gin.H{
			"message": "error",
			"error":   err.Error(),
		})
	} else {
    // 如果有文件的情况下调用SaveUploadedFile方法 将文件存储到本地
		ctx.SaveUploadedFile(file, "./public/"+file.Filename)
		ctx.JSON(http.StatusOK, gin.H{
			"message": "success",
			"data":    file,
		})
	}
}
```

当然如果想要抛开Gin框架提供的方法，自己通过原生的办法来实现的情况下则需要依赖于Go中的[OS](../Golang/14-OS.md)模块。

## 多文件上传

单文件上传已经能够满足我们绝大多数的文件上传的需要，甚至于可以通过循环调用单文件上传的方法来模拟出多文件上传的操作，但是如果文件数量较多的情况下，则可能因为循环调用过程中出现一些问题导致整个流程的失败，所以多文件上传在某些情况下同样是有着一定的需求以及必要性的。

```go
func uploadManyFileHandle(ctx *gin.Context) {
	form, _ := ctx.MultipartForm()
	files := form.File["files"]
	for _, file := range files {
		log.Println(file.Filename)
		ctx.SaveUploadedFile(file, "./public/"+file.Filename)
	}
	ctx.JSON(http.StatusOK, gin.H{
		"message": "success",
		"data":    files,
	})
}
```

如上方法操作所示，我们定义了一个方法为`uploadManyFileHandle`方法。

- 在方法开始的时候，我们通过使用`MultipartForm()`方法来接受客户端的`form-data`数据。
- 随后通过使用`form.File["files"]`方法，来获取form中的文件。
- 通过使用`range`来循环遍历切片中的文件数据。
- 并且通过使用`SaveUploadedFile`方法来循环保存文件到指定目录中。

客户端模拟请求的操作如下所示。

![image-20230413145328967](https://oss.oh-undefined.com/image-20230413145328967.png)

但是上述代码没有处理文件名重复的问题，如果有多个文件重名的情况下，会导致只有一个会被保存下来。我们可以通过使用时间戳、随机数或者特定的方法来将文件重命名保存。

```go
func uploadManyFileHandle(ctx *gin.Context) {
    form, _ := ctx.MultipartForm()
    files := form.File["files"]
    for _, file := range files {
        log.Println(file.Filename)
        // 生成不重复的文件名
        fileName := fmt.Sprintf("%d_%s", time.Now().UnixNano(), file.Filename)
        ctx.SaveUploadedFile(file, "./public/"+fileName)
    }
    ctx.JSON(http.StatusOK, gin.H{
        "message": "success",
        "data":    files,
    })
}
```

如上所示，我们通过使用时间戳的方式来与文件名进行拼接这样的情况下避免了上述所说的情况。上传后的文件列表如下所示。

![image-20230413150258591](https://oss.oh-undefined.com/image-20230413150258591.png)

通过这种方式我们能够将文件数据从客户端以接口的方式来传递到服务端，服务端接收后，可以选择是否存在本地，或者将文件通过API的方式转存在云厂商的对象存储中去。

之前在使用Node搭建上传服务的时候，便是通过接入了[七牛云](https://developer.qiniu.com/sdk#official-sdk)的方式将文件转存到对象存储中去，这样一方面减少了数据丢失的情况，另一方面也一定程度上减少了服务器带宽的压力。具体接入方式，可以参考云服务器厂商所提供的文档。
