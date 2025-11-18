import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/projects/NebulaExchange/:path*",
        destination: "https://github.com/MrNtex/NebulaExchange",
        permanent: true,
      },
      {
        source: "/projects/ANIEngine/:path*",
        destination: "https://github.com/MrNtex/ANIEngine",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
