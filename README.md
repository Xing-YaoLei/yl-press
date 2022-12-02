### Start

```sh
npm install
npm run dev
```

### Auto Commit

```sh
sh ./deploy.sh
```

### Scripts

"dev": "cross-env NODE_ENV='/' vuepress dev docs",
"build": "cross-env NODE_ENV='/' vuepress build docs",
"build:Pages":"cross-env NODE_ENV='/yl-press/' vuepress build docs"

### 集成在项目中

打包完成之后，将 dist 文件夹下的文件放入后台项目中的 public 目录中
