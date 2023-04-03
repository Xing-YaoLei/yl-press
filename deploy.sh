#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

yarn run commit

# 生成静态文件
yarn run build

# 将网站提交Gitee
git init
git add .
git commit -m 'deploy'

# Github
git push -f git@github.com:Xing-YaoLei/yl-press.git main
# 码云 Gitee
# git push -f https://gitee.com/Xing_Lei/yl-press.git master
