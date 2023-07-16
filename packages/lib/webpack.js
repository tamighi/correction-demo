const path = require("path");

module.exports = {
  entry: "./src/library/index.ts",
  mode: "production",
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  externals: {
    react: "react",
    "react-dom": "react-dom",
  },
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "bundle.js",
    library: {
      type: "umd",
    },
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              modules: {
                mode: "local",
                localIdentName: "[hash:base64:5]",
              },
            },
          },
        ],
      },
      {
        test: /\.tsx?$/,
        use: "ts-loader",
      },
    ],
  },
};
