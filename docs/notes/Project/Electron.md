# Electron

## 序

最近公司在用Electron开发桌面应用程序，其中也是踩了不少坑，中间也找了不少朋友帮忙来解决各种各样的问题，也不知道Electron过了这么久了为什么还是会有好多各种各样的坑。稍微进行一部分的总结记录一下本次开发心得吧。

## 技术栈

这次用到的技术栈如下所示基本都是前端常用的内容。因为前端项目一直用的是Vue + Vite所以在这个项目内也是使用了Github上面开源的框架来快速搭建的[Electron-Vite)[](https://electron-vite.org/)。

|       技术栈       | 版本号  |
| :----------------: | :-----: |
|      *Vuejs*       | ^3.4.15 |
|       *Vite*       | ^5.0.12 |
|     *electron*     | ^28.2.0 |
| *electron-builder* | ^24.9.1 |
|  *electron-vite*   | ^2.0.0  |
|      *prisma*      | ^5.10.2 |
|  *@prisma/client*  | ^5.10.2 |
|    *vue-router*    | ^4.2.5  |

## 目录结构

以下为项目的目录结构以及具体用途

```sh
- database   # 正式环境数据库存放位置
- prisma     # prisma文件目录用于存放开发数据库以及prisma模型文件
- resources  # 项目的资源文件，用于存放项目icon等内容
- src        # 项目资源文件 
	- main		 # 主进程目录文件
	- preload  # 用于存放预加载脚本 能够在渲染进程（web页面）和主进程之间提供一个安全的桥梁 避免主进程方法直接暴露在渲染进程中
	- renderer # 渲染进程，我们所熟知的前端页面数据存放在此处
- ...
- electron-builder.yml # 	electron的打包配置文件 在项目进行打包操作的时候会读取此文件来载入打包设置
- ...
```

## 遇到的问题

### Prisma打包问题

在项目中因为需要使用SQLite数据库，对于前端来说使用ORM框架是能够快速开发并且减少学习成本的一项技术。此处我使用的是Prisma来作为我主进程的ORM框架的。但是Prisma在Electron打包安装的时候会`can not find module .prisma/client/index`文件导致无法运行Prisma的查询等功能。后来是通过朋友分享的博客文章中找到了另一个鸽们儿的[解决方案](https://term-inator.github.io/2023/07/23/use-prisma-with-electron/)。

简单的解决方法把 .prisma 和 @prisma/client 当作 extraResources 打包进去

```yml
# electron-builder.yml
extraResources:
  - 'node_modules/.prisma/**/*'
  - 'node_modules/@prisma/client/**/*'
```

不过虽然我这样配置了还是有几率会出现同样的问题，后来查了一下在安装完毕依赖后，需要运行一下`npx prisma generate`来生成`prisma`的文件才行。