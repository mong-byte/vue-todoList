module.exports = {
  css: {
    loaderOptions: {
      sass: {
        additionalData: `
          @import "@/style/_variable.scss";
          @import "@/style/_mixin.scss";
          @import "@/style/global.scss";
          @import "@/style/reset.scss";
        `,
      },
    },
  },
};
