import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "followmee-officiel.com",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
