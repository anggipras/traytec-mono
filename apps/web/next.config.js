const { i18n } = require("./next-i18next.config");

module.exports = {
  images: {
    domains: ["tailwindui.com"],
  },
  i18n,
  reactStrictMode: true,
  transpilePackages: ["ui"],
};
