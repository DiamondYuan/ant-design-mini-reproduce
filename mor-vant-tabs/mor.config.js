import { defineConfig } from "@morjs/cli";

export default defineConfig([
  {
    name: "wechat-miniprogram",
    sourceType: "wechat",
    target: "wechat",
    compileType: "miniprogram",
    compileMode: "bundle",
    processNodeModules: true,
  },
  {
    name: "alipay-miniprogram",
    sourceType: "wechat",
    target: "alipay",
    compileType: "miniprogram",
    compileMode: "bundle",
    processNodeModules: true,
  },
]);
