const path = require("path");
const Dotenv = require("dotenv-webpack");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    mode: "development",
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname, "./dist"),
        filename: "[name].js",
    },
    devServer: {
        static: {
            directory: path.join(__dirname, 'src'),
        },
        open: true,
        port: 8000
    },
    plugins: [
        new HtmlWebpackPlugin({ template: "./src/index.html" }),
        new MiniCssExtractPlugin({ filename: "css/style.css" }), // css 파일 분리
        new Dotenv() // env파일적용
    ],
    module: {
        rules: [
            {
                test: /\.js$/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: [["@babel/preset-env", { targets: "defaults" }]],
                    },
                }
            },
            {
                test: /\.scss$/,
                use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
            },
            {
                test: /\.jpg$/,
                type: 'asset/resource',
                generator: {
                    filename: 'img/[name][ext]'
                }
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: "html-loader",
                    }
                ]
            },
        ],
    },
};