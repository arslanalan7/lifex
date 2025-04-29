import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: 'standalone',
  images: {
    domains: ['lifexstorage.blob.core.windows.net'],
  },
};

export default nextConfig;
