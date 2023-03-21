# Vite使用踩坑

## Vite配置别名

Vite配置别名，首先需要在`vite.config.ts`文件中添加，`resolve`选项以及`alias`的内容

```ts
import path, { resolve } from "path";
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      /** @ 符号指向 src 目录 */
      "@": resolve(__dirname, "./src"),
    },
  },
});

```

添加完成后，系统依旧是没有办法识别别名的，需要我们在tsconfig.json中也进行对应的配置，内容如下所示。

```JSON
"compilerOptions": {
    /** baseUrl 用来告诉编译器到哪里去查找模块，使用非相对模块时必须配置此项 */
    "baseUrl": ".",
    /** 非相对模块导入的路径映射配置，根据 baseUrl 配置进行路径计算 */
    "paths": {
      "@/*": ["src/*"]
    }
  },
```

如上操作，重启项目后或者等待读取文件后，系统就能够识别别名的定义，并且进行对应文件的引入了。

## Vite热更新失效

在使用Vite作为项目的模块工具时，如果路由的大小写拼错的情况下，项目不会报错，但是Vite会失去对于页面的热更新功能。