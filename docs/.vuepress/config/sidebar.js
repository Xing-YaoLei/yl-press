module.exports = {
  "/notes": [
    {
      text: "网站建设",
      collapsible: true,
      children: [
        "/notes/pages/GiteePage",
        "/notes/pages/VuePress",
        "/notes/pages/Koa",
      ],
    },
    {
      text: "Javascript",
      collapsible: true,
      children: [
        "/notes/pages/Javascript/ES6.md",
        "/notes/pages/Javascript/Js基础.md"
      ],
    },
    {
      text: "Vue.js",
      collapsible: true,
      children: ["/notes/pages/Vue/pinia", "/notes/pages/Vue/VueRouter"],
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
      ],
    },
  ],
};
