const path = require('path')
module.exports = {
  configureWebpack(_config, _isServer) {
    return {
      resolve: {
        alias: {
          module: require.resolve("./shim/module"),
          eslint: path.resolve(__dirname, "./shim/eslint"),
        },
      },
    };
  },
};
