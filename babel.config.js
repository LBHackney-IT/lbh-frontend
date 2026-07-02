module.exports = (api) => {
  if (api.env("test")) {
    return {
      presets: [
        ["@babel/preset-env", { targets: { node: "current" } }],
        "@babel/preset-react",
        "@babel/preset-typescript",
      ],
    };
  }

  return {
    presets: [require.resolve("@docusaurus/core/lib/babel/preset")],
  };
};
