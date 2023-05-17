const path = require("path");
const Dotenv = require("dotenv-webpack");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    mode: "development",
    entry: "./src/app.js",
    output: {
        path: path.resolve(__dirname, "./dist"),
        filename: "[name].js",
    },
    devServer: {
        static: {
            directory: path.join(__dirname, 'src'),
        },
        open: true,
        port: 'auto'
    },
    plugins: [
        new MiniCssExtractPlugin({ filename: "css/style.css" }),
        new HtmlWebpackPlugin({ template: "./src/index.html", }),
        new Dotenv()
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
                use: [
                    {
                        loader: "file-loader",
                        options: {
                            name: 'img/[name].[ext]',
                        },
                    },
                ],
            },
        ],
    },
};