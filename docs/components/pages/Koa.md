# Koa的服务端开发
:::wrning 
Koa-body 在配置完成上传图片的功能后，可能会引发所有的请求出现415的情况。
:::
配置阶段请关闭 encoding的gzip选项
[详情地址](https://github.com/koajs/koa-body/issues/185)