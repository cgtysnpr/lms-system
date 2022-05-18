module.exports = function override(config, env) {
  if (config.devServer) {
    config.devServer.push({
      historyApiFallback: true,
      contentBase: "./",
      hot: true,
    });
  } else {
    config.devServer = {};
    config["devServer"] = {
      historyApiFallback: true,
      contentBase: "./",
      hot: true,
    };
  }
  return config;
};
