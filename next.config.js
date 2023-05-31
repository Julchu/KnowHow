/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

const images = {
  domains: ["https://media2.giphy.com/", "localhost"],
  loader: "akamai",
  path: "",
};

module.exports = { ...nextConfig, images, trailingSlash: false };