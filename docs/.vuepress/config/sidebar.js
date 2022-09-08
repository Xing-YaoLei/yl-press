module.exports = {
  "/components": [
    {
      text: "VuePress",
      link: "/components/pages/VuePress",
    },
    {
      text: "学习提升",
      collapsible: true,
      sidebarDepth: 2,
      children: [
        "/components/pages/leetcode",
        "/components/pages/ES6",
        // {
        //   text: "整数反转",
        //   link: "/components/pages/7-reverse.md",
        // },
      ],
    },
    {
      text: "面试题",
      collapsible: true,
      children: [
        {
          text: "InputNumber 数字输入框",
          link: "/components/pages/InputNumber",
        },
        {
          text: "InputNumber 数字输入框",
          link: "/components/pages/InputNumber",
        },
      ],
    },
  ],
};
