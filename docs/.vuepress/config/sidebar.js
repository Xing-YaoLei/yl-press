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
      children: fs
        .readdirSync(path.resolve(__dirname, "../../notes/project"))
        .map((item) => {
          return "/notes/project/" + item;
        }),
    },
    {
      text: "TypeScript",
      collapsible: true,
      children: ["/notes/pages/TypeScript"],
    },
    {
      text: "Vue.js",
      collapsible: true,
      children: fs
        .readdirSync(path.resolve(__dirname, "../../notes/pages/Vue"))
        .map((item) => {
          return "/notes/pages/Vue/" + item;
        }),
    },
    {
      text: "React.js",
      collapsible: true,
      children: fs
        .readdirSync(path.resolve(__dirname, "../../notes/pages/React"))
        .map((item) => {
          return "/notes/pages/React/" + item;
        }),
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
      text: "系统配置",
      collapsible: true,
      children: fs
        .readdirSync(path.resolve(__dirname, "../../computer"))
        .map((item) => {
          return "/computer/" + item;
        }),
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
