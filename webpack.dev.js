const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");

module.exports = merge(common, {
  mode: "development", //Development mode
  devtool: "inline-source-map", //Helps know where bugs come from SRC
  devServer: {
    static: "./dist",
    watchFiles: {
      paths: ["src/*.html"], //Watch for files that change in this case html files
      options: {
        usePolling: false,
      },
    },
  },
  optimization: {
    runtimeChunk: "single",
  },
});
