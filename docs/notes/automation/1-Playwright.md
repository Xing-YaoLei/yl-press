# 前端自动化测试之Playwright

::: tip 前言

个人认为，对于前端而言一般在调试好页面接口之后通常是不会出现Bug的，但是很多Bug是体现在前端的。

就鸽们儿目前所呆的公司来说，任何页面上出现的Bug，对于不懂技术或者是想甩锅的情况下，通常都是先说是前端的Bug😡。

正巧鸽们儿公司业务方面暂时停止了，公司认为前端工作不饱和了，需要搞点别的东西，就让我们前端的同学进行前端自动化测试的开发。

:::

## 方案选型

对于前端自动化测试方案有很多种，技术在选型的时候个人是相对来说一窍不通的，通过社区内搜索以及同事推荐当时暂定了几个方案。

- [Cypress](https://www.cypress.io/)
- [Playwright](https://playwright.dev/)（最终选型）
- [Selenium](https://www.selenium.dev/)
- [Robot Framework](https://robotframework.org/) （测试同事推荐）

个人认为这些框架的使用都是大差不差的，文档后来几个都看了一下，发现都是纯英文的。

测试同事推荐的是他之前就使用的测试工具，但是打开之后纯英的文档给劝退了，其次软件似乎运行在Windows上（个人使用的Mac），搜索了一下没有发现对应的软件就放弃了。

## 选型理由

太麻烦了，对比起来的话各位自己搜索引擎搜索一下子吧，说一下最终选择Playwright的理由，

- 在[Github](https://github.com/microsoft/playwright)上面看了一下，Star的数量在53k左右。相对是几个框架中较多的。

- 其次微软推出的自动化框架，也集成了VSCode的软件中，可以通过直接安装插件配合VSCode来使用。
- 同样也支持多浏览器的测试，比如谷歌、Edge、火狐、Safari浏览器
- 支持多语言能够同时使用TypeScript、JavaScript、Python、.NET、Java，目前公司后台同学是Java，测试同学会一部分Python。
- 支持图形化的方式来生成代码，虽然后续还是需要更改的但是能够节省很多重复的工作。

## 快速上手

### 安装

安装方式可以通过命令行的方式来进行安装，创建项目需要安装[Nodejs16.x](https://nodejs.org/zh-cn)版本以上（建议为 LTS 版本），结合[官方文档](https://playwright.dev/docs/intro#installing-playwright)来使用。也可以通过安装VSCode的[插件](https://marketplace.visualstudio.com/items?itemName=ms-playwright.playwright)来进行使用。

::: tip 提示

首次安装需要安装浏览器的内核，可能速度相对较慢，需要耐心等待。

:::

### VSCode安装

如果使用VSCode的插件进行安装的情况下，可以按照如下步骤进行操作。

- 安装VSCode插件

![image-20230731172719922](https://oss.oh-undefined.com/image-20230731172719922.png)

- Command + Shift + P打开VSCode软件的命令面板

![image-20230731173019960](https://oss.oh-undefined.com/image-20230731173019960.png)

- 点击Test：Install Playwright后弹出选择对应的浏览器，然后可以选中你需要测试的浏览器，我这里是选择了全部的浏览器，然后点击确定等待安装成功即可。

![image-20230731173135939](https://oss.oh-undefined.com/image-20230731173135939.png)

### 命令行安装

- 安装 Nodejs；
- 合适的位置创建文件夹，以英文方式进行项目命名；
- 在当前文件夹下打开命令行窗口 执行命令`npm init playwright@latest`即可初始化完成。

:::: code-group
::: code-group-item npm

```sh
npm init playwright@latest
```
:::

::: code-group-item yarn

```sh
yarn create playwright
```
:::

::: code-group-item pnpm

```sh
pnpm dlx create-playwright
```

:::

::::

### 目录结构

```
├── tests/                # 测试目录
├── playwright-report    	# 测试结果统计页面
├── test-result           # 运行异常的结果、截图、录屏等
├── tests-examples        # 测试用例-示例
├── playwright.config.ts  # 配置文件
├── package.json
```

### 启动

修改`package.json`文件，在`scripts`中添加运行命令`"test": "npx playwright test"`命令。然后执行`npm run test`即可执行测试程序进行全局测试。

## 书写文档

### 部分用法

```ts
page.goto(url): 导航到指定的 URL。

page.click(selector): 点击指定的元素。

page.fill(selector, value): 填充指定的输入元素。

page.textContent(selector): 获取指定元素的文本内容。

page.waitForSelector(selector): 等待指定的元素出现。

page.waitForTimeout(timeout): 等待指定的时间（以毫秒为单位）。

page.screenshot(options): 对页面进行截图。可以通过 options 参数来指定截图的类型、质量、路径等。

page.evaluate(function): 在页面上下文中执行指定的 JavaScript 函数。

page.check(selector) 和 page.uncheck(selector): 勾选或取消勾选指定的复选框。

page.selectOption(selector, values): 选择指定的下拉菜单选项。

page.url(): 获取当前页面的 URL。
```

### DEMO

```ts
test("basic test", async ({ page }) => {
  // 导航到指定的 URL
  await page.goto("https://example.com");

  // 点击指定的元素
  await page.click("#my-button");

  // 填充指定的输入元素
  await page.fill("#my-input", "Hello, world!");

  // 获取指定元素的文本内容
  const text = await page.textContent("#my-element");
  expect(text).toBe("Expected text");

  // 对页面进行截图
  await page.screenshot({ path: "screenshot.png" });
});
```

### Playwright 网络请求拦截和模拟

```ts
import { test, expect } from "@playwright/test";

test("API test", async ({ page }) => {
  // 启用请求拦截
  await page.route("**/api-endpoint", (route, request) => {
    // 检查请求方法和请求头
    expect(request.method()).toBe("POST");
    expect(request.headers()["content-type"]).toBe("application/json");

    // 检查请求体
    const postData = JSON.parse(request.postData());
    expect(postData.key).toBe("value");

    // 返回模拟的响应
    route.fulfill({
      status: 200,
      contentType: "application/json",
      body: JSON.stringify({ key: "response value" }),
    });
  });

  // 导航到页面并触发 API 请求
  await page.goto("https://example.com");
});
```

可以通过 `page.route()` 方法来拦截所有指向 '/api-endpoint' 的请求。检查请求的方法、请求头和请求体，最后返回一个模拟的响应。

### 等待接口响应

```ts
const promise = page.waitForResponse((response) => {
   return response.url().includes("https://example.com");
});
const rsp = await promise;
const data = await rsp.json();
// 原理为等待接口响应成功 判断接口是否能够正常返回 且接口返回值为1 如果不为1则失败
if (data.rspCode != 1) {
  throw Error("创建员工失败");
}
```

