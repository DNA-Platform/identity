
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  
  // Add redirect from root to maps page
  async redirects() {
    return [
      {
        source: '/',
        destination: '/maps',
        permanent: true, // Use a 308 permanent redirect
      },
    ];
  },
};

export default nextConfig;
