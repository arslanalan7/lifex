import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: 'standalone',
  env: {
    NEXT_PUBLIC_SITE_URL: process.env.NEXT_PUBLIC_SITE_URL || 'lifex-app-gzbug7e6g4gxdmdz.westeurope-01.azurewebsites.net',
  },
  images: {
    domains: ['lifexstorage.blob.core.windows.net'],
  },
};

export default nextConfig;