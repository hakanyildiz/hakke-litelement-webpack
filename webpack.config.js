const path = require("path")
let html = require("html-webpack-plugin")

module.exports = {
    entry: "./src/app.js",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "main.js",
        publicPath: "/dist/"
    },
    mode: "development",
    plugins: [
        new html({
            template: "./src/app.html",
            filename: "index.html"
        })
    ]
};