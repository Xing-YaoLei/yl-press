const { searchPlugin } = require("@vuepress/plugin-search");
// 启用搜索功能
const { prismjsPlugin } = require("@vuepress/plugin-prismjs");
const { shikiPlugin } = require("@vuepress/plugin-shiki");
// 启用代码块语法高亮功能
const theme = require("./theme/index");
// 文档主题
const navbar = require("./config/navbar");
// 顶部导航栏配置
const sidebar = require("./config/sidebar");
// 侧边栏配置
module.exports = {
  base: process.env.NODE_ENV,
  title: "YaoLei",
  // 网站首页
  lang: "zh-CN",
  // 网站语言
  description: "一个小小前端, 只希望能够开心",
  // 网站介绍
  head: [["link", { rel: "icon", href: "http://oss.oh-undefined.com/xianluo.png" }]],
  // 顶部添加logo 会默认编译到网站的head区域
  theme: theme({
    // 具体主题配置项 旧版本存在配置放在themeConfig的现象
    logo: "http://oss.oh-undefined.com/xianluo.png",
    navbar,
    sidebar,
    lastUpdatedText: "最后更新",
    sidebarDepth:2, // 侧边栏显示2级
  }),
  // markdown设置
  markdown: {
    lineNumbers: true, // 代码块显示行号
  },
  // 插件配置
  plugins: [searchPlugin({}), shikiPlugin({}), prismjsPlugin({})],
};
