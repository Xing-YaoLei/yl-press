# commitizen 规范代码

在我们进行 Git 提交代码的时候，必不可少的是对于本次代码功能提交的一个介绍。可能提交内容因人而异导致提交记录难以理解具体的内容。我们就可以通过使用`commitizen`来进行 Git 提交的自定义来进行统一。

## 安装`Commitizen`

```sh
# 在项目内运行，安装commitizen
yarn add commitizen cz-conventional-changelog @commitlint/config-conventional @commitlint/cli commitlint-config-cz cz-customizable
```

## 配置`package.json`

```json
"scripts": {
  "commit": "git add . && git-cz && git push",
},
"config":{
  "commitizen": {
    "path": "node_modules/cz-customizable"
  }
}
```

## 根目录下创建`commitlint.config.js`

```js
module.exports = {
  types: [
    { value: "feature", name: "feature:  增加新功能" },
    { value: "bug", name: "bug:      测试反馈bug列表中的bug号" },
    { value: "fix", name: "fix:      修复bug" },
    { value: "ui", name: "ui:       更新UI" },
    { value: "docs", name: "docs:     文档变更" },
    { value: "style", name: "style:    代码格式(不影响代码运行的变动)" },
    { value: "perf", name: "perf:     性能优化" },
    {
      value: "refactor",
      name: "refactor: 重构(既不是增加feature，也不是修复bug)",
    },
    { value: "release", name: "release:  发布" },
    { value: "deploy", name: "deploy:   部署" },
    { value: "test", name: "test:     增加测试" },
    {
      value: "chore",
      name: "chore:    构建过程或辅助工具的变动(更改配置文件)",
    },
    { value: "revert", name: "revert:   回退" },
    { value: "build", name: "build:    打包" },
  ],
  // override the messages, defaults are as follows
  messages: {
    type: "请选择提交类型:",
    customScope: "请输入您修改的范围(可选):",
    subject: "请简要描述提交 message (必填):",
    body: "请输入详细描述(可选，待优化去除，跳过即可):",
    footer: "请输入要关闭的issue(待优化去除，跳过即可):",
    confirmCommit: "确认使用以上信息提交？(y/n/e/h)",
  },
  allowCustomScopes: true,
  skipQuestions: ["body", "footer"],
  subjectLimit: 72,
};
```

本段代码参考自[掘金易师傅](https://juejin.cn/post/7079785777692934174#heading-28)

## 创建自定义提示文件`.cz-config.js`

```js
module.exports = {
  types: [
    { value: "feature", name: "feature:  增加新功能" },
    { value: "bug", name: "bug:      测试反馈bug列表中的bug号" },
    { value: "fix", name: "fix:      修复bug" },
    { value: "ui", name: "ui:       更新UI" },
    { value: "docs", name: "docs:     文档变更" },
    { value: "style", name: "style:    代码格式(不影响代码运行的变动)" },
    { value: "perf", name: "perf:    性能优化" },
    {
      value: "refactor",
      name: "refactor: 重构(既不是增加feature，也不是修复bug)",
    },
    { value: "release", name: "release:  发布" },
    { value: "deploy", name: "deploy:   部署" },
    { value: "test", name: "test:     增加测试" },
    {
      value: "chore",
      name: "chore:    构建过程或辅助工具的变动(更改配置文件)",
    },
    { value: "revert", name: "revert:   回退" },
    { value: "build", name: "build:    打包" },
  ],
  // override the messages, defaults are as follows
  messages: {
    type: "请选择提交类型:",
    customScope: "请输入您修改的范围(可选):",
    subject: "请简要描述提交 message (必填):",
    body: "请输入详细描述(可选，待优化去除，跳过即可):",
    footer: "请输入要关闭的issue(待优化去除，跳过即可):",
    confirmCommit: "确认使用以上信息提交？(y/n/e/h)",
  },
  allowCustomScopes: true,
  skipQuestions: ["body", "footer"],
  subjectLimit: 72,
};
```

本段代码参考自[掘金易师傅](https://juejin.cn/post/7079785777692934174#heading-28)

## 制作 deploy.sh 文件完成快捷打包提交

```sh
#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
yarn run build

# 将代码提交至代码仓库
git init
# run commit 则会执行package.json中的script的commit的命令
# 具体命令 "commit": "git add . && git-cz && git push",
yarn run commit

# Github
git push -f git@github.com:Xing-YaoLei/yl-press.git main
# 码云 Gitee
# git push -f https://gitee.com/Xing_Lei/yl-press.git master

cd -
```
