# TypeScript可能出现的Bug

### Ts警告不允许使用Any

当项目构建使用TS的时候，如果在数据类型的定义上使用了`Any`，则有可能会报`warning Unexpected any. Specify a different type @typescript-eslint/no-explicit-any`的错误。

解决方案：通过在`.eslintrc.js`文件中的rules中进行配置如下代码即可

```js
rules: {
  '@typescript-eslint/no-explicit-any': ['off'],
    // override/add rules settings here, such as:
},
```

### TS配置无法同时引入模块和类型

当项目构建使用TS的时候，如果在引入模块的时候`import axios, { AxiosResponse, AxiosRequestConfig } from 'axios';`同时引入了模块以及模块中的类型的情况下，则可能会报错`"AxiosRequestConfig" 是一种类型，在同时启用了 "preserveValueImports" 和 "isolatedModules" 时，必须使用仅类型导入进行导入。`

解决方案：单独引入模块以及单独进行类型的引入即可。

```ts
import axios from 'axios';
import type { AxiosResponse, AxiosRequestConfig } from 'axios';
```



