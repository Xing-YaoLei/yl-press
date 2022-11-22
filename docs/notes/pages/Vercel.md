# Vercel网站部署

之前用过了Gitee Page部署页面，但是会有一些问题，在写了一些博客之后部署它的时候，可能文档中有一些敏感词汇？（Js哪来的敏感词汇）然后Gitee Page会提示无法更新，重复几次多少就有点烦了，然后就转头去Jenkins了，但是Jenkins的自动部署虽然好，但是需要**有服务器**才行，而且自从部署了Jenkins之后，因为**服务器配置**本来就**比较低**，然后导致通过**SSH连接**远端的服务器之后，命令行的**操作都延迟**的要命。

后来我的想法是再买一个服务器，服务器A安装Jenkins然后回调钩子触发的时候，通过SSH命令来将另一个服务器B的项目进行部署操作，这样的话也就只是A服务器占用较高，服务器B的操作不受到影响。啊，这个后续再说吧。

## Vercel

Vercel是一个称为零配置的静态资源部署平台，我们前端可以将我们的项目非常简便的部署到Vercel服务上去，而Vercel能够自动生成一个域名进行访问，或者是通过购买一个域名，配置CNAME来自定义域名的解析。

## 项目部署流程

- 进入[官网](https://vercel.com/)，选择Sign Up，Vercel提供了使用Github、GitLab等一系列方式来进行登陆，推荐使用Github来进行登陆。
- 登陆成功之后，如果已存在部署项目，则会以看板的形式显示代码，如果还暂时没有部署过项目的情况下，则会有导入项目的功能。


![image-20221106220040058](https://oss.oh-undefined.com/image-20221106220040058.png)

- 引入的时候会让你选择是引入全部的项目还是选择某一个项目导入，根据自己的需求选择即可，引入成功后我们则可以看到在该位置有选择的项目了。通过点击Import导入来到菜单中。

![image-20221106220845091](https://oss.oh-undefined.com/image-20221106220845091.png)

- 在这个位置我们可以配置项目的名称，以及项目使用的技术。Root Directory则为我们项目的根路径。我们可以通过点击Deploy来进行项目的部署，在部署过程中，代码可能会出现报错的情况，如果出现错误了，依照提示中的错误进行更改即可，基本都是代码方面的问题。

![image-20221106223308898](https://oss.oh-undefined.com/image-20221106223308898.png)

- 在部署完成之后，会出现如上图的页面情况，然后我们可以通过点击Add Domain来进行域名的自定义等其他操作。

![image-20221106223450546](https://oss.oh-undefined.com/image-20221106223450546.png)

- 勾选Edit之后会进入自定义选项中去，我们可以更改Domain中的域名来自定义，更改完成后选择Save来进行保存

![image-20221106223555881](https://oss.oh-undefined.com/image-20221106223555881.png)

- 保存完毕后会自动来到域名解析情况的界面中来，如果你预先设置好了CNAME的配置，则可以进行访问，如果没有配置的情况下会如下图所示进行一定的报错。我们复制Value进入你购买域名的厂商下进行DNS解析。

![image-20221106223732385](https://oss.oh-undefined.com/image-20221106223732385.png)

- [我的是阿里云](https://dns.console.aliyun.com/)，进入自己的域名中，然后选择添加记录，添加到自己的域名解析中即可。

![image-20221106223935650](https://oss.oh-undefined.com/image-20221106223935650.png)

- 当然如果你没有自己的域名也可以使用它默认提供的域名即可（默认的域名可能国内网络访问较慢，不过相较于Github Page可能要好一点）

如此，你的静态网站就已经部署成功了。