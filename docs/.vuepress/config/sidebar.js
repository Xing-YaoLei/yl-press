const fs = require("fs");
const path = require("path");
module.exports = {
  "/notes": [
    {
      text: "网站建设",
      collapsible: true,
      children: [
        "/notes/pages/GiteePage",
        "/notes/pages/VuePress",
        "/notes/pages/Koa",
        "/notes/pages/Jenkins",
        "/notes/pages/Vercel",
      ],
    },
    {
      text: "Javascript",
      collapsible: true,
      children: [
        "/notes/pages/Javascript/ES6.md",
        "/notes/pages/Javascript/Js基础.md",
      ],
    },
    {
      text: "项目",
      collapsible: true,
      children: [
        "/notes/Project/CodeCommitLint",
        "/notes/Project/Vite",
        "/notes/Project/HTML",
        "/notes/Project/Vue",
        "/notes/Project/Pinia",
        "/notes/Project/qiankun",
      ],
    },
    {
      text: "TypeScript",
      collapsible: true,
      children: ["/notes/pages/TypeScript"],
    },
    {
      text: "Vue.js",
      collapsible: true,
      children: [
        "/notes/pages/Vue/Vue3",
        "/notes/pages/Vue/pinia",
        "/notes/pages/Vue/VueRouter",
        "/notes/pages/Vue/Auth",
        "/notes/pages/Vue/searchBar",
        "/notes/pages/Vue/Hook",
      ],
    },
    {
      text: "力扣",
      collapsible: true,
      children: ["/notes/Leetcode/1-两数之和", "/notes/Leetcode/2-整数反转"],
    },
    {
      text: "面试题",
      collapsible: true,
      children: [
        "/notes/interview/HTML",
        "/notes/interview/Js",
        "/notes/interview/Vue",
        "/notes/interview/React",
        "/notes/interview/计算机网络.md",
        "/notes/interview/浏览器.md",
        "/notes/interview/代码题.md",
      ],
    },
  ],
  "/computer": [
    {
      text: "电脑软件",
      collapsible: true,
      children: ["/computer/nvm.md"],
    },
  ],
  "/backEndDev": [
    // 根据路径下的文件生成侧边栏
    {
      text: "Go",
      collapsible: true,
      children: fs
        .readdirSync(path.resolve(__dirname, "../../backEndDev/pages/Golang"))
        .map((item) => {
          return "/backEndDev/pages/Golang/" + item;
        }),
    },
  ],
};
