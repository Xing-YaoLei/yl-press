# 前端 Nodejs 版本管理 NVM 安装

![image-20230314171649554](https://oss.oh-undefined.com/image-20230314171649554.png)

作为前端开发，偶尔在接手老项目的时候，可能会需要安装老版本的 Node，但是在开发新项目或者使用新技术的时候可能就需要使用更新的 Nodejs 版本。Nvm 就是能够实现这样操作的工具之一。

## 电脑环境

🖥：MacBook Pro For M1 Pro 版本

⭐️：MacOS Ventura 13.2.1 版本

## 安装

```sh
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.3/install.sh | bash
```

```sh
wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.3/install.sh | bash
```

运行上面的任意一个命令都会下载并且执行脚本运行。脚本会将 nvm 存储并且克隆到`~/.nvm`目录下。

在运行完成后，需要确定自己的操作系统的版本号，因为在 MacOS 上，不同版本号对应的终端工具也是不相同的。

::: tip 提示

在 MacOS10.15 开始，默认的 shell 为`zsh`，nvm 会寻找`.zshrc`来进行更新，如果你的系统版本是 10.15 以上，应该将暴露命令放在`~/.zshrc`文件下。如果你的操作系统默认没有它的话，那你需要执行`touch ~/.zshrc`再次运行安装脚本

:::

::: tip bash

如果你使用的是bash，可能你需要修改`.bash_profile`或者`~/.profile`，如果没有`~/.bashrc`文件，你可以通过`source ~/<your_profile_file>`来创建它解决这个问题。

:::

通过在对应的文件中添加导出环境变量的命令来让系统能够成功识别它。(`~/.bash_profile`, `~/.zshrc`, `~/.profile`, or `~/.bashrc`)

```sh
export NVM_DIR="$([ -z "${XDG_CONFIG_HOME-}" ] && printf %s "${HOME}/.nvm" || printf %s "${XDG_CONFIG_HOME}/nvm")"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" # This loads nvm
```

在添加完成后，我们通过使用执行以下命令，来让系统重新读取文件信息来让系统识别`nvm`的命令。

:::: code-group
::: code-group-item bash

```sh
source ~/.bashrc
```
:::

::: code-group-item zsh

```sh
source ~/.zshrc
```
:::

::: code-group-item ksh

```sh
. ~/.profile
```

:::

::::

## 查看版本

在运行完毕之后上述命令后，我们可以通过使用`nvm -v`来查看nvm是否安装成功了，如果安装成功，则会显示对应的nvm版本号。

```sh
nvm -v
# 0.39.3
```

如果能够正常的输出版本好，那么就代表nvm已经成功的安装到你的电脑上了，紧接着我们通过使用`nvm list`来查看默认提供的LTS(**Long Time Support / 长期支持版本**)版本的node，通常node版本偶数版本都为LTS版本。

```sh
nvm list
# v12.22.7
# v12.22.12
# v14.18.1
# system default -> lts/fermium (-> N/A)
# iojs -> N/A (default)
# unstable -> N/A (default)
# node -> stable (-> v14.18.1) (default)
# stable -> 14.18 (-> v14.18.1) (default)
# lts/* -> lts/hydrogen (-> N/A)
# lts/argon -> v4.9.1 (-> N/A)
# lts/boron -> v6.17.1 (-> N/A)
# lts/carbon -> v8.17.0 (-> N/A)
# lts/dubnium -> v10.24.1 (-> N/A)
# lts/erbium -> v12.22.12
# lts/fermium -> v14.21.3 (-> N/A)
# lts/gallium -> v16.19.1 (-> N/A)
# lts/hydrogen -> v18.15.0 (-> N/A)
```

如果上述nvm提供的nodejs版本无法适配你的要求的情况下，可以通过`nvm install version` version为你需要安装的版本号，例如:`nvm install v12.22.12`即可。在安装完成后，通过使用`nvm use version`来进行node版本的切换。例如`nvm use v12.22.12`即可。

## 切换常驻版本

通过以上的方式已经能够正常的将node版本随意切换了，但是还是存在一个问题，那就是切换版本的效果**只在当前打开的命令行窗口会话有效**，无法做到全局切换的效果。如果想要切换的情况下，则需要通过以下命令来进行。

```sh
nvm alias default <version>
```

其中 `<version>` 是您想要设置为默认的 Node.js 版本。例如，如果您想将 Node.js 14 设置为默认版本，可以运行：

```sh
nvm alias default 14
```

**永久保存默认版本**：

要确保默认版本在新的终端窗口中仍然有效，您可以将上述命令添加到您的 shell 配置文件中，例如 `~/.bashrc`、`~/.zshrc` 或 `~/.profile`，具体取决于您使用的 shell。

打开适当的配置文件，并添加以下行（请根据您选择的 shell 来选择适当的文件）：

- 对于 Bash，编辑 `~/.bashrc` 文件：

  ```
  shellCopy code
  echo 'nvm alias default <version>' >> ~/.bashrc
  ```

- 对于 Zsh，编辑 `~/.zshrc` 文件：

  ```
  shellCopy code
  echo 'nvm alias default <version>' >> ~/.zshrc
  ```

[Github官方文档](https://github.com/nvm-sh/nvm#troubleshooting-on-macos)查看具体的配置以及更多的问题方案。
