# GiteePage网站搭建

::: tip 前置条件

- Gitee实名认证账号
- 拥有一定的Git基础
- 静态网站（Pages 服务仅供博客 / 门户 / 开源项目网站 / 开源项目静态效果演示用途）
- 具体要求可以在GiteePage页面提示中查看

:::

## 注册

- 注册账号这里就不进行演示了，无非就是使用邮箱、手机号或者第三方服务来进行注册。

- 注册账号完成之后创建一个代码仓库

  

## GiteePage

- 进入代码仓库的界面选择服务

  ![代码仓库](https://oss.oh-undefined.com/image-20220922165655553-20220922170613343.png)

- 在服务下方有具体的功能服务，选择第一个GiteePages进入![Gitee Pages](https://oss.oh-undefined.com/image-20220922170542883.png)

- 进入页面之后，如果需要使用此服务的情况下，则需要进行实名认证，点击下方的前往个人设置完成验证，根据步骤进行验证即可

  ![image-20220922171002195](https://oss.oh-undefined.com/image-20220922171002195.png)

- 认证过程应该是需要个人身份证号、以及各种照片，这个需要自己提前准备或者临时拍照。

## 部署

- 在该服务下的部署是直接将代码仓库中的某一个目录进行部署的，可以将自己开发的页面，或者项目打包放入指定目录中，例如本项目的代码以及内容是在**/项目目录/docs/.vuepress/dist**目录下 -> 那么直接填写**/docs/.vuepress/dist**即可

  ![image-20220922171637426](https://oss.oh-undefined.com/image-20220922171637426.png)

- 设置完成之后点击下方启动按钮即可部署项目，几分钟左右时间后，Gitee会提供此代码部署完成后的网址。访问该网址即可通过网络查看部署的项目。

  ![image-20220922171849914](https://oss.oh-undefined.com/image-20220922171849914.png)

- 后续代码更新并且成功推送代码仓库后，进入该页面中点击更新按钮即可。

- 进行Vue或者React等框架开发的同学可能会认为每次Build -> 提交 -> Commit -> Push会相对较为麻烦，那么也可以进行自动化脚本的开发。以下提供本项目的自动化脚本**deploy.sh**

  ```sh
  #!/usr/bin/env sh
  
  # 确保脚本抛出遇到的错误
  set -e
  
  # 生成静态文件
  yarn run build
  # 本项目使用的yarn进行包管理，如果没有yarn也可以使用npm等包管理工具即可。 如果为纯静态页面，则不需要此步骤
  
  # 将网站提交Gitee
  git init
  git add -A
  git commit -m 'deploy'
  
  git push -f 个人代码仓库的地址
  
  cd -
  ```

- 此文件的使用方法如下所示

  :::: code-group
  ::: code-group-item MacOS

  ```sh
  sh ./deploy.sh
  ```

  :::

  ::: code-group-item Windows

  ```sh
  sh ./deploy.sh
  
  # or
  
  ./deploy.sh
  ```

  :::
  ::::

- 项目的搭建可以使用任意的技术框架或者是纯静态，本页面使用的是通过VuePress进行搭建的静态博客网站。如果需要使用可查看[VuePress篇](./VuePress.md)

<Vssue />