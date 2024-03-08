const Encore = require("@symfony/webpack-encore");
Encore.setOutputPath("public/build/")
  .setPublicPath("/build")
  .enableSassLoader()
  .enableSingleRuntimeChunk()
  .addEntry("index", "./src/index.js")
  .configureLoaderRule("sass", (rule) => {
    rule.test = /\.(scss|sass)$/;
    rule.use = ["style-loader", "css-loader", "sass-loader"];
    rule.exclude = /node_modules/;
  });
module.exports = Encore.getWebpackConfig();
