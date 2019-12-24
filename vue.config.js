// vue.config.js

const path = require("path");

module.exports = {
  publicPath: "./",
  // 全局注入变量 方法一
  css: {
    loaderOptions: {
      sass: {
        // data：`@import "~@/assets/variable.scss";` v7之前使用 的是data，现在改成了prependData
        prependData: `@import "~@/assets/variable.scss";`
        /* prependData: `
              @import "~@/assets/variable.scss";
              @import "~@/assets/variable2.scss";
          ` */
      },
      stylus: {
        import: "~@/assets/variable.styl"
        // import: ["~@/assets/variable.styl", "~@/assets/variable2.styl"]
      }
      // 此方法只支持变量key:value赋值，若要使用less文件中变量，请使用以下两种方案
      // less: {
      //   globalVars: {
      //     "@color": "#f00"
      //   }
      // }
    }
  },
  // 全局注入变量 方法二
  chainWebpack: config => {
    // ----------scss-------------
    // 需要安装 stylus-resources-loader 插件
    // const oneOfsMap = config.module.rule("scss").oneOfs.store;
    // oneOfsMap.forEach(item => {
    //   item
    //     .use("style-resources-loader")
    //     .loader("style-resources-loader")
    //     .options({
    //       // 需要插入的文件路径
    //       patterns: "./src/assets/variable.scss"
    //       // 需要插入的文件路径数组
    //       // patterns: ["./path/to/vars.styl", "./path/to/mixins.styl"]
    //     })
    //     .end();
    // });
    // -------------
    // 也可以使用 sass-resource-loader 插件
    // const oneOfsMap = config.module.rule("scss").oneOfs.store;
    // oneOfsMap.forEach(item => {
    //   item
    //     .use("sass-resources-loader")
    //     .loader("sass-resources-loader")
    //     .options({
    //       // 需要插入的文件路径
    //       resources: "./src/assets/variable.scss"
    //       // 需要插入的文件路径数组
    //       // resources: ["./path/to/vars.scss", "./path/to/mixins.scss"]
    //     })
    //     .end();
    // });
    // ---------stylus-------------
    // 需要安装 style-resources-loader
    // const oneOfsMap = config.module.rule("stylus").oneOfs.store;
    // oneOfsMap.forEach(item => {
    //   item
    //     .use("style-resources-loader")
    //     .loader("style-resources-loader")
    //     .options({
    //       // 需要插入的文件路径
    //       patterns: "./src/assets/variable.styl"
    //       // 需要插入的文件路径数组
    //       // patterns: ["./path/to/vars.styl", "./path/to/mixins.styl"]
    //     })
    //     .end();
    // });
    // ---------less-------------
    // 需要安装 style-resources-loader 与stylus一致
    // const oneOfsMap = config.module.rule("less").oneOfs.store;
    // oneOfsMap.forEach(item => {
    //   item
    //     .use("style-resources-loader")
    //     .loader("style-resources-loader")
    //     .options({
    //       // 需要插入的文件路径
    //       patterns: "./src/assets/variable.less"
    //       // 需要插入的文件路径数组
    //       // patterns: ["./path/to/vars.less", "./path/to/mixins.less"]
    //     })
    //     .end();
    // });
  },
  // 全局注入方法三
  // !!!!!! 重点 使用此方法请 在控制台 执行 vue add stylus-resources-loader
  // 会自动安装 vue-cli-plugin-style-resources-loader
  pluginOptions: {
    // -----------stylus--------------
    // "style-resources-loader": {
    //   preProcessor: "stylus",
    //   patterns: ["./src/assets/variable.styl"]
    // },
    // -----------less--------------
    "style-resources-loader": {
      preProcessor: "less",
      patterns: "./src/assets/variable.less"
    }
    // -----------scss--------------
    // "style-resources-loader": {
    //   preProcessor: "scss",
    //   patterns: [path.resolve(__dirname, "./src/assets/variable.scss")]
    // }
  }
};
