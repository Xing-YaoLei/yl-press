# 前端自动化测试之 Playwright - 可视化

## 可视化

Playwright 可以通过 VSCode 打开拾取器进行录制用例（可以简单理解为按键精灵），也可以通过使用命令行来打开录制用例的页面。

### 软件录制

在安装过 VSCode 的 Playwright 的插件后，左侧菜单栏会有测试的栏目，点击后会显示测试资源管理器，具体如下所示。

![image-20230802155505948](https://oss.oh-undefined.com/image-20230802155505948.png)

- 拾取选择器

  该方式主要用于在页面中拾取某一个选择器，点击后，会在软件侧生成对应的拾取代码，使用频率相对不高。

- 录制新用例

  该方式使用频率较高，点击后会弹出测试浏览器的空白页，我们可以通过输入地址，在页面中进行各类操作实现用例的录制，在我们操作过程中，插件会自动创建一个测试文件，并且将我们鼠标以及键盘等事件以及输入记录下来生成代码在文件中。

![transcribe](https://oss.oh-undefined.com/transcribe.gif)

上面的操作我们就可以完成一个相对基础的测试案例。如果只是要求跑一下流程的话基本上完全可以通过这种方法进行录制了，但是通常测试用例需要结合**断言**等操作来确保操作是正确的。所以实际上手起来的话也是稍微要学习一部分语法的。

## 项目搭建

通常我们需要测试的项目可能分为开发环境、测试环境、正式环境等等较多不同的环境，那相对应的服务器地址、域名、数据库数据等都是不相同的，所以我们需要通过使用环境变量来进行控制。

我们可以通过使用cross-env插件来控制环境变量

```sh
npm i cross-env -D
```

通过配置`package.json`文件来根据命令运行测试流程

```json
"scripts": {
  "test": "npx playwright test",
  "test:dev": "cross-env TEST_MODE=dev npx playwright test tests/exmple1",
  "test:test": "cross-env TEST_MODE=test npx playwright test tests/exmple1",
  "test:prod": "cross-env TEST_MODE=prod npx playwright test tests/exmple1",
  "exmple2:dev": "cross-env TEST_MODE=dev npx playwright test tests/exmple2",
  "exmple2:test": "cross-env TEST_MODE=test npx playwright test tests/exmple2",
  "exmple2:prod": "cross-env TEST_MODE=prod npx playwright test tests/exmple2"
},
```

为了让我们的环境变量在项目开发的时候能够让程序识别使用，我们还需要安装`dotenv`

```sh
npm i dotenv -D
```

安装完毕后配置`playwright.config.ts`

```ts
// playwright.config.ts
import dotenv from 'dotenv';

const modeExt = process.env.TEST_MODE || "dev";

dotenv.config({ path: ".env" });
dotenv.config({ path: `.env.${modeExt}`, override: true });
dotenv.config({ path: `.env.local`, override: true });
```

配置完环境变量后我们需要去创建对应的环境变量的文件

```sh
# 根据自身需求来进行创建
.env.dev    # 开发环境
.env.local  # 本地环境
.env.prod   # 正式环境
.env.test   # 测试环境
```

本地环境的文件如下所示

```sh
# local-本地环境
WEBSITE_URL = 'https://exmple.com'
SYSNAME = 'local'
PHONE = '13333333333'
AUTH_URL = "https://exmple.com/auth/user/login"
```

配置完毕环境变量后，我们需要针对项目整体来进行配置了。需要修改`playwright.config.ts`文件。如下我针对部分修改进行了一定的注释，可以根据自身需要决定是否配置对应功能。

```ts
export default defineConfig({
  testDir: "./tests",
 	... //  省略的这一部分是默认的我没有进行修改
  reporter: [
    // 在命令行中同步打印每条用例的执行结果
    ["list"],
    // 输出 html 格式的报告，并将报告归档与指定路径
    [
      "html",
      {
        outputFolder: "playwright-report",
        open: "always",
      },
    ],
  ],
  use: {
    // 设置浏览器的基本URL 这个是读取环境变量需要修改的
    baseURL: process.env.WEBSITE_URL,
    // 第一次重试的时候记录
    trace: "on-first-retry",
    // 是否为无头模式
    headless: false,
    // 设置视口的打小
    viewport: { width: 1920, height: 1080 },
    // 在测试失败的时候进行截图保存
    screenshot: "only-on-failure",
    // 在重试的时候进行视频的录制
    video: "retry-with-video",
    // 忽略HTTPS错误
    ignoreHTTPSErrors: true,
  }
});

```

以上只是个人需要的一部分配置，如果需要更加详细的配置信息可以参照对应的开发文档来食用。后续会针对登录的统一鉴权来进行封装。
