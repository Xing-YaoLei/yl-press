# Go 中的包的引入

编写代码的过程中，不能是一个文件梭哈几千行，肯定会根据模块来进行封装，然后通过导入导出的方式来优化整体的代码结构以及代码逻辑，提高可维护性的，在Go中，同样可以进行包的互相引入功能。例如我们通常在控制台打印的`fmt`包

```go
package main
import (
	"fmt"
)
func main() {
	fmt.Println("输出main")
}
```

上面就是一个简单的例子，最终输出结果就是`输出main`这样一段文字，在头部我们则通过使用`import`来导入了我们所需要的`fmt`包，我们在引入内置包以外的情况下，也可以通过导入自己所封装的包。如下所示

```go
// pack/lib/lib.go
package lib
import "fmt"

func SendNo(){
	fmt.Println("No")
}

func init() {
	fmt.Println("libInit")
}
```

我们在`index.go`相同层级的`lib`文件夹下创建了一个`lib.go`的文件，并且进行一部分简单代码的书写。然后我们在`index.go`文件中将此包进行导入

```go
// pack/index.go
package main
import (
	"fmt";
	"lib"; // 无法直接导入 package lib is not in GOROOT (/usr/local/go/src/lib) 需要添加他们共有的父文件夹
  "pack/lib" // 此种操作为正确的
)

func main() {
	fmt.Println("输出main")
	lib.SendNo()
}
```

上方Demo操作中，我们通过直接引入`lib`包，导致编辑器提示错误`package lib is not in GOROOT (/usr/local/go/src/lib)`需要我们将`index.go`以及`lib.go`共有的父级文件夹携带才可以。

引入完成后，可以在`main`方法中直接调用`lib`文件夹下`lib.go`文件中封装的方法。

```go
// pack/index.go
package main
import (
	"fmt";
  "pack/lib"
)

func main() {
	fmt.Println("输出main")
	lib.SendNo()
}
```

包的引入顺序以及执行顺序一般为，所有子包按照先后顺序执行方法层级向下，执行到最中的子包没有引入的时候，逐级向上返回，最终执行`main`包的`main`方法。

```go
package main
import (
	"fmt";
	"pack/lib";
	"pack/plugins";
)

func main() {
	fmt.Println("输出main")
	lib.SendNo()
	plugins.PrintYes()
}
```

```sh
# libInit // 此为lib包中的init方法
# pluginInit // 此为plugin中的init方法
# 输出main // main包中的main方法
# No // main包中调用lib包的方法 
# pluginYes // main包中调用plugin包的方法 
```

