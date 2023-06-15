const path = require("path");

module.exports = function override(config, env) {
  config.module.rules.push({
    test: /\.(mp4|webm|ogg)$/,
    use: [
      {
        loader: require.resolve("file-loader"),
        options: {
          name: "[name].[ext]",
          outputPath: "assets/videos/",
        },
      },
    ],
  });

  return config;
};
