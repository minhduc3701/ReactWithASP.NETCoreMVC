var path = require("path");
const { resolve } = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const TerserWebpackPlugin = require("terser-webpack-plugin");
const isProd = process.env.NODE_ENV === "production";

const config = {
  mode: process.env.NODE_ENV === "production" ? "production" : "development",
  devtool: "inline-source-map",
  entry: {
    Admin: "./src/components/Admin.tsx",
    Dashboard: "./src/components/Dashboard.tsx",
    Login: "./src/components/Login.tsx",
    User: "./src/components/User.tsx",
    Test: "./src/components/Test.tsx",
    Index: "./src/index.tsx",
  },
  output: {
    path: path.resolve(__dirname, "../wwwroot/dist"),
    filename: "[name].js",
    publicPath: "dist/",
  },
  performance: {
    hints: false,
    maxEntrypointSize: 512000,
    maxAssetSize: 512000,
  },
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx", ".less"],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "babel-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
        exclude: /node_modules/,
      },
    ],
  },
};

if (isProd) {
  config.optimization = {
    minimizer: [new TerserWebpackPlugin()],
  };
} else {
  config.devServer = {
    port: 9000,
    open: true,
    hot: true,
    compress: true,
    stats: "errors-only",
    overlay: true,
  };
}

module.exports = config;
