const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = (env) => {
  const isDev = env.mode === "development";

  return {
    mode: env.mode ?? "development",
    entry: path.resolve(__dirname, "src", "index.tsx"),
    output: {
      path: path.resolve(__dirname, "build"),
      filename: "[name].[contenthash].js",
      clean: true,
    },
    resolve: {
      extensions: [".tsx", ".ts", ".js"],
      alias: {
        assets: path.resolve(__dirname, "src/assets"),
        components: path.resolve(__dirname, "src/components"),
        pages: path.resolve(__dirname, "src/pages"),
        store: path.resolve(__dirname, "src/store"),
        const: path.resolve(__dirname, "src/const"),
      },
    },
    module: {
      rules: [
        {
          test: /\.css$/i,
          use: [MiniCssExtractPlugin.loader, "css-loader"],
        },
        {
          test: /\.tsx?$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader",
          },
        },
        {
          test: /\.(png|jpg|jpeg|gif)$/i,
          type: "asset/resource",
        },
        {
          test: /\.svg$/i,
          issuer: /\.[jt]sx?$/,
          use: [{ loader: "@svgr/webpack", options: { icon: true } }],
        },
      ],
    },
    devtool: isDev ? "inline-source-map" : false,
    devServer: isDev ? { port: 3000, open: true, hot: true } : undefined,
    plugins: [
      new HtmlWebpackPlugin({ template: path.resolve(__dirname, "public", "index.html") }),
      new MiniCssExtractPlugin({
        filename: isDev ? "[name].css" : "[name].[contenthash].css",
        chunkFilename: isDev ? "[id].css" : "[id].[contenthash].css",
      }),
    ],
  };
};
