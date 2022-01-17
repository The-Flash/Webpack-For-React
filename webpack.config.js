const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { ProvidePlugin } = webpack;
const port = process.env.PORT || 3000;

module.exports = {
    mode: "development",
    entry: "./src/index.js",
    output: {
        filename: "[name].[hash].js",
        publicPath: "/"
    },
    resolve: {
        alias: {
            "react-dom": "@hot-loader/react-dom",
        },
    },
    devtool: "inline-source-map",
    module: {
        rules: [
            {
                test: /\.(js)$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true,
                            modules: {
                                namedExport: true
                            },
                            esModule: true,
                            sourceMap: true
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "public/index.html",
        }),
        new ProvidePlugin({
            React: "react"
        }),
        new webpack.HotModuleReplacementPlugin(),
    ],
    devServer: {
        host: "localhost",
        port,
        historyApiFallback: true,
        open: true,
        hot: true
    }
}