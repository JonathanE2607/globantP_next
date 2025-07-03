import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**', // Accept all domains (wildcard – works in Next.js 13.4+ with app router)
      },
    ],
  },
};

export default nextConfig;

