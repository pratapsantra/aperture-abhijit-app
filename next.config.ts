import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  devIndicators: false,
  images: {
    remotePatterns: [
      {
        protocol: 'https', // Or 'http' if necessary
        hostname: 'picsum.photos', // Replace with your allowed domain
        port: '', // Leave empty unless a specific port is required
        pathname: '**', // Be as specific as possible to prevent abuse
      },
      {
        protocol: 'https', // Or 'http' if necessary
        hostname: 'images.unsplash.com', // Replace with your allowed domain
        port: '', // Leave empty unless a specific port is required
        pathname: '**', // Be as specific as possible to prevent abuse
      },
    ],
  },
};

export default nextConfig;
