# Koa 的服务端开发

### 使用Koa开发代理转发接口

在项目开发过程中，常常能够遇到一个场景就是可能前后端数据交互的时候会遇到跨域问题。

最简单的解决跨域的方式就是让后端的同学解除跨域资源访问的配置。但是如果后端同学没有办法解决的情况下。我们作为前端的同学也不能只了解一个JSONP。

#### JSONP的缺点

虽然JSONP实现方式简单，但是缺点也很明显，例如：只能实现GET请求（因为JSONP是通过动态插入`script`标签来实现的）、JSONP只能由服务器端提供支持，如果服务器不支持JSONP，那么依旧是没辙、JSONP安全性较差，敏感信息传输更容易出现问题。

既然要解决跨域，就需要知道跨域是什么，在什么情况下会出现

::: tip

跨域（Cross-Origin Resource Sharing，简称 CORS）是指浏览器实现的一种安全机制，它限制了来自不同源的脚本对本地资源的访问。

所谓源（Origin），指的是域名、协议、端口号三者的组合。如果两个 URL 的源相同，则表示它们属于同一个源；如果两个 URL 的源不同，则表示它们属于不同的源。

... 剩下的可以自行百度了

:::

简单来说，客户端去服务端请求数据，如果端口、域名、协议不同就会产生跨域问题，但是服务端到服务端则不会，例如Vue中配置Proxy代理服务器原理相同。

#### 跨域接口开发

```js
import Router from "koa-router";
// request插件用于发送数据请求
import request from "request-promise-native";
// successResponse为成功返回数据的方法，用于接口返回数据的统一性
import { successResponse } from "../../utils/common";

// 定义路由的前缀
const router = new Router({
  prefix: "/api/v1/proxy",
});

// router.all 用来接受所有类型的请求，下方封装仅仅使用get、post、put、delete四种RESTfull风格的API
router.all("/", async (ctx) => {
  // 获取请求的地址以及请求方法
  const method = ctx.method.toLowerCase();
  // 发送数据请求
  if (method === "get") {
    // 如果方法为get请求则获取get请求中的params参数
    const params = ctx.query;
    // 通过调用参数中的URL以及其他参数
    const result = await request.get({
      uri: params.url,
      json: true,
    });
    // 将数据返回给用户
    ctx.body = successResponse(result);
  } else if (method === "post") {
    // 如果方法为post请求则获取post请求中的body请求体内的参数
    const data = ctx.request.body;
    // 将参数中的数据放入数据请求中
    const result = await request.post({
      uri: data.url,
      body: data,
      json: true,
    });
    // 将数据放入响应体内返回给用户
    ctx.body = successResponse(result);
  } else if (method === "put") {
    // 如果为put请求，则获取请求体中的query
    const params = ctx.query;
    // 发送请求拿到请求后的数据
    const result = await request.put({
      uri: params.url,
      body: params,
      json: true,
    });
    // 返回给用户数据
    ctx.body = successResponse(result);
  } else if (method == "delete") {
    // 如果为delete数据请求
    const params = ctx.params;
    // 获取params参数 URL后跟的参数id
    const result = await request.delete({
      uri: `${params.url}/${params.id}`,
      json: true,
    });
    // 返回给用户
    ctx.body = successResponse(result);
  }
});

export default router;
```



::: warning
Koa-body 在配置完成上传图片的功能后，可能会引发所有的请求出现 415 的情况。
配置阶段请关闭 encoding 的 gzip 选项
[issues](https://github.com/koajs/koa-body/issues/185)
:::

::: warning

`koa2-connect-history-api-fallback`插件的使用会造成get请求全部被拦截没有响应。

:::
