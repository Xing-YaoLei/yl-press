module.exports = {
  "/notes": [
    {
      text: "网站建设",
      collapsible: true,
      children: ["/notes/pages/VuePress", "/notes/pages/Koa"],
    },
    {
      text: "学习提升",
      collapsible: true,
      children: ["/notes/pages/ES6"],
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
        {
          text: "InputNumber 数字输入框",
          link: "/notes/pages/InputNumber",
        },
        {
          text: "InputNumber 数字输入框",
          link: "/notes/pages/InputNumber",
        },
      ],
    },
  ],
};
