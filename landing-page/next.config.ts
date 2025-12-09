import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // to import images from this domain
  images: { 
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'assets.aceternity.com', 
        port: '', // Leave blank unless a specific port is required
        pathname: '/**', // Allows any path on this hostname
      },
    ],
}
}

export default nextConfig;
