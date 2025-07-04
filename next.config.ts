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
      {
        protocol: 'https',
        hostname: 'visittheusa.com',
        port: '',
        pathname: '**',
      }
    ],
  },
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors. This is not recommended unless you
    // have ESLint configured to run in a separate part of your workflow.
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
