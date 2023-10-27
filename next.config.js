/** @type {import('next').NextConfig} */
const path = require("path");

const nextConfig = {
  // Add external domains to the config
  images: {
    domains: ["lh3.googleusercontent.com", "firebasestorage.googleapis.com"],
  },
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
};

module.exports = nextConfig;
