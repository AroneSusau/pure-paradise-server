const path = require("path");
const nodeExternals = require("webpack-node-externals");

module.exports = {
  target: "node",
  entry: "temp/server.ts",
  devtool: "hidden-source-map",
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: "ts-loader",
        exclude: [/node_modules/, /tests/],
      },
    ],
  },
  resolve: {
    extensions: [".ts"],
  },
  output: {
    filename: "server.js",
    path: path.resolve(__dirname, "./build"),
  },
  externals: [nodeExternals()],
};
