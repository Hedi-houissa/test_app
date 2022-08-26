/** @type {import('next').NextConfig} */
const path = require("path");
const withImages = require('next-images')

module.exports = withImages(),{
  
  reactStrictMode: true,
  fileExtensions: ["jpg", "jpeg", "png", "gif", "pdf", "svg"],
  experimental: {
    images: {
      unoptimized: true,
    },
  },
  images: {
    domains: ["rickandmortyapi.com"],
    loader: "imgix",
    path: "/",
  },
  eslint: {
    // Warning: Dangerously allow production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });
    return config;
  },
};
