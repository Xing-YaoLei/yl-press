# 使用VSCode开发Go

![img](https://oss.oh-undefined.com/397e9615bk3d5a799f9742181d3ca666.jpeg)

在使用VSCode开发Go的时候，我们通过打开一个装有Go代码的文件夹，编辑器则会自动识别其中的代码，初次使用会弹出提示，如下所示。

![image-20230403154557146](https://oss.oh-undefined.com/image-20230403154557146.png)

提示我们需要安装对应的工具，然后我们通过点击Install All后，系统会自动进入安装程序。

但是，但是，但是，因为众所周知的网络原因，你的工具大概率是安装不上去的。这个时候需要更改[代理地址](https://goproxy.cn/)。

## Go 1.13 及以上（推荐）

```
$ go env -w GO111MODULE=on
$ go env -w GOPROXY=https://goproxy.cn,direct
```

完成。

## macOS 或 Linux

打开你的终端并执行

```
$ export GO111MODULE=on
$ export GOPROXY=https://goproxy.cn
```

或者

```
$ echo "export GO111MODULE=on" >> ~/.profile
$ echo "export GOPROXY=https://goproxy.cn" >> ~/.profile
$ source ~/.profile
```

完成。

## Windows

打开你的 PowerShell 并执行

```
C:\> $env:GO111MODULE = "on"
C:\> $env:GOPROXY = "https://goproxy.cn"
```

## 安装插件

在安装完成之后如果找不到安装工具的情况，可以尝试重启VSCode，如果再次弹窗，选择`install all`即可，如果没有出现的情况下，可以尝试使用`command + shift + p` 调出命令窗口（windows用户选择使用`ctrl + shift + p`）。调出命令窗口后，在窗口中输入如下命令，勾选全部即可。

```
> Go install/Update Tools
```

