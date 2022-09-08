#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
yarn run build

# 将网站提交Gitee
git init
git add -A
git commit -m 'deploy'

git push -f https://gitee.com/Xing_Lei/yl-press.git master

cd -