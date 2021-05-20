const path = require("path");
const webpack = require("webpack");
module.exports = {
  publicPath: "./",
  outputDir: path.resolve(__dirname, "../docs"),
  configureWebpack(_config, _isServer) {
    /**@type import('webpack').Configuration */
    const config = {
      resolve: {
        alias: {
          module: require.resolve("./shim/module"),
          eslint: path.resolve(__dirname, "./shim/eslint"),
        },
      },
    };
    return config;
  },
};
