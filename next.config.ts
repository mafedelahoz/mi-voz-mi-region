import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  output: 'standalone',
  basePath: '/mi-voz-mi-region',
  swcMinify: true,
};

export default nextConfig;
