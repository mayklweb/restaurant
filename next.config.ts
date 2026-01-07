// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "static.wixstatic.com",
      },
      {
        protocol: "https",
        hostname: "dyj6gt4964deb.cloudfront.net",
      },
      {
        protocol: "https",
        hostname: "instagram.fbhk1-1.fna.fbcdn.net",
      },
    ],
    domains: ["instagram.fbhk1-1.fna.fbcdn.net", "scontent.cdninstagram.com", "static.wixstatic.com", "instagram.fbhk1-4.fna.fbcdn.net"],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig;
