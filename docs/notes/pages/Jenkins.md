# 前端自动化部署之Jenkins

## 安装Java环境以及JDK

服务器为ubuntu，下载Jenkins步骤参考详见[官方文档](https://www.jenkins.io/zh/download/)

首先需要设置Jenkins的软件包存储库

```sh
curl -fsSL https://pkg.jenkins.io/debian-stable/jenkins.io.key | sudo tee \
    /usr/share/keyrings/jenkins-keyring.asc > /dev/null
```

添加Jenkins apt的仓库入口

```sh
echo deb [signed-by=/usr/share/keyrings/jenkins-keyring.asc] \
    https://pkg.jenkins.io/debian-stable binary/ | sudo tee \
    /etc/apt/sources.list.d/jenkins.list > /dev/null
```

更新本地的包，之后进行Jenkins的安装

```sh
sudo apt-get update
sudo apt-get install fontconfig openjdk-11-jre
sudo apt-get install jenkins
```

在输入完最后代码后可能会出现报错`Errors were encountered while processing`的相关问题，这个问题弟兄们也不会，闻道有先后，术业有专攻，百度得到[解决方案](https://blog.csdn.net/qingfengxiaosong/article/details/87889995)

```sh
# 解决方法
cd /var/lib/dpkg
sudo mv info info.bak
sudo mkdir info
sudo apt-get update
```

在解决完毕之后重新运行

```sh
echo y|sudo apt-get install jenkins
```

安装完毕之后可以通过查看版本号确定是否安装成功，新版本的jenkins需要使用**JDK11**版本

```sh
java -version
# openjdk version "11.0.16" 2022-07-19
# OpenJDK Runtime Environment (build 11.0.16+8-post-Ubuntu-0ubuntu118.04)
# OpenJDK 64-Bit Server VM (build 11.0.16+8-post-Ubuntu-0ubuntu118.04, mixed mode, sharing)
```

## 运行Jenkins

```sh
sudo systemctl start jenkins
```

## 进入Jenkins

首先需要放行服务器的8080端口，然后通过浏览器中访问`http://id地址:8080`即可进入Jenkins

进入之后等待一段时间出现登陆界面，需要提交密码，密码所在路径`/var/lib/jenkins/secrets`

```sh
cat /var/lib/jenkins/secrets/initialAdminPassword
# 查看默认密码填入其中
```

紧接着Jenkins会让用户选择安装插件，本人选择推荐的插件即可。等待一段时间安装完毕后。需要创建用户，可以选择使用admin账户登陆，但是前提你需要记住`initialAdminPassword`才行。否则还是老老实实配置一个自己的账户吧～

![配置完成](https://oss.oh-undefined.com/202210220155811.png)

## 使用Jenkins

首页如下图所示，可能根据版本不同会有细微的出入。

![image-20221022015735400](https://oss.oh-undefined.com/image-20221022015735400.png)

在创建任务之前我们可以提前先将依赖进行安装一下，选择Manage Jenkins，然后选择右侧菜单中的Manager Plugins搜索我们需要的插件。我这里安装了nodejs、nvm wrapper（控制nodejs版本）以及Generic Webhook Trigger（用于触发自动部署的插件）

![image-20221022021326481](https://oss.oh-undefined.com/image-20221022021326481.png)

在安装完毕插件之后我们进入仪表盘 -> 系统管理 -> 全局工具配置下可以选择Nodejs的安装版本来确保你的项目能够正常运行。

![image-20221022022705038](https://oss.oh-undefined.com/image-20221022022705038.png)

紧接着我们回到首页选择新建Item -> 填写一个你觉得合适的任务名称 -> Freestyle Project 点击确认进入下一步配置

![image-20221022020152876](https://oss.oh-undefined.com/image-20221022020152876.png)

在描述的栏目中针对这个项目可以进行简单的描述，在后期项目部署较多的情况下可以进行有效的区分。

继续往下我们可以可以看到源码管理选择Git后，在Repository URL中填入你的代码仓库并且在Credentials中选择你的账号密码等，如果没有可以进行添加。

![image-20221022020413682](https://oss.oh-undefined.com/image-20221022020413682.png)

在下方构建触发器中勾选Generic Webhook Trigger 用来搭配提交事件进行项目的同步更新。

![image-20221022022924306](https://oss.oh-undefined.com/image-20221022022924306.png)

再往下可以勾选`Provide Node & npm bin/folder to Path`选项用来选择nodejs版本

![image-20221022023017034](https://oss.oh-undefined.com/image-20221022023017034.png)

在Build Steps中我们选择执行shell命令

```sh
pwd
node -v
# 查看node版本
npm -v
# 查看npm版本

npm install
# 安装项目依赖
pwd
echo '构建完成'
# 重启pm2
echo '重启完成'
```

::: danger 警告

目前我在使用的是pm2进行项目的自动更新，当代码拉取下来之后pm2会自动运行更新程序，所以在这里本人只是进行了前端项目依赖的安装并没有进行其他操作。

理论上这里本来是想要跑pm2 restart all 来重启程序的，但是Jenkins会自动给杀除衍生程序，问了问Java的朋友没用过Jenkins，问了问运维的朋友没了解过这个。

当然首先是百度的，目前百度提供了两种方法。第一种则是配置**BUILD_ID**，第二种方法则是全局配置。两种方法都有尝试过，在shell中运行pm2依旧是没有显示任何的程序运行。所以此处是不完善的，后续完善了会进行更新。

有懂的大佬也烦请能帮忙解决一下。542528512@qq.com不胜感激。

:::

配置WebHooks，进入Gitee的项目中，选择管理 -> WebHooks -> 填入URL URL的组成为 `http://用户名:userId@服务器IP:Jenkins端口/generic-webhook-trigger/invoke`

![image-20221023012505990](https://oss.oh-undefined.com/image-20221023012505990.png)

用户名的查看方式需要进入用户列表，点击所要查看的用户，然后生成用户ID即可。

![image-20221022024230224](https://oss.oh-undefined.com/image-20221022024230224.png)

添加完成后例子：`http://UserName:userId@ip:port/generic-webhook-trigger/invoke`然后点击测试可以看到Jenkins的看板是有部署项目的进度存在的。

![image-20221022024427094](https://oss.oh-undefined.com/image-20221022024427094.png)

## 修改默认存储文件夹

虽然Jenkins上面已经开始部署了，但是我们会发现，项目部署到了`/var/lib/jenkins/workspace/项目`中，但是我们的项目可能会存放在其他文件夹中。我们可以通过项目配置的General中选择高级->勾选使用自定义的工作空间

![image-20221022191043881](https://oss.oh-undefined.com/image-20221022191043881.png)

::: tip 权限

在自定义工作空间的时候可能会遇到没有权限访问文件夹的情况，可以使用`chmod 777`来将文件夹赋予读写权限。具体该命令如何[使用](https://www.baidu.com/s?wd=chmod)。

:::

设置完毕之后，项目即可自动拉取到服务器中。

