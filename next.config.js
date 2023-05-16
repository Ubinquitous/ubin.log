/** @type {import('next').NextConfig} */

const removeImports = require("next-remove-imports")({});

const nextConfig = removeImports({
  reactStrictMode: false,
  images: {
    domains: ["media.discordapp.net"],
  },
});

module.exports = nextConfig;
