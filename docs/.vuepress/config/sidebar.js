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
      children: fs
        .readdirSync(path.resolve(__dirname, "../../notes/Leetcode"))
        .map((item) => {
          return "/notes/Leetcode/" + item;
        }),
    },
    {
      text: "面试题",
      collapsible: true,
      children: fs
        .readdirSync(path.resolve(__dirname, "../../notes/interview"))
        .map((item) => {
          return "/notes/interview/" + item;
        }),
    },
    {
      text: "前端自动化",
      collapsible: true,
      children: fs
        .readdirSync(path.resolve(__dirname, "../../notes/automation"))
        .map((item) => {
          return "/notes/automation/" + item;
        }),
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
    {
      text: "Gin",
      collapsible: true,
      children: fs
        .readdirSync(path.resolve(__dirname, "../../backEndDev/pages/Gin"))
        .map((item) => {
          return "/backEndDev/pages/Gin/" + item;
        }),
    },
  ],
};
