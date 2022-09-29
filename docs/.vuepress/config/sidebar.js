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
      children: ["/notes/pages/ES6/1-表达声明", "/notes/pages/ES6/2-解构赋值"],
    },
    {
      text: 'Vue.js',
      collapsible: true,
      children:[
        "/notes/pages/Vue/pinia"
      ]
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
