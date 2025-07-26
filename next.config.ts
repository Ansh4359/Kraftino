import type { NextConfig } from "next";

const nextConfig: NextConfig = {
   images: {
     remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'images.pexels.com',
      },
    ]
     // Add the domain(s) of your external images
  },
};

export default nextConfig;
