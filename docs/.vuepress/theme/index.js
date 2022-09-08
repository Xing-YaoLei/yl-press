const { defaultTheme } = require("@vuepress/theme-default");
module.exports = (options) => {
  return {
    name: "vuepress-theme-local",
    extends: defaultTheme(options),
  };
};
