module.exports = (api) => {
  if (api.env("test")) return {};

  return {
    presets: [require.resolve("@docusaurus/core/lib/babel/preset")],
  };
};
