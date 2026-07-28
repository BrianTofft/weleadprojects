import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: "/da", destination: "/", permanent: true },
      { source: "/da/", destination: "/", permanent: true },
      { source: "/en", destination: "/", permanent: true },
      { source: "/en/", destination: "/", permanent: true },
      { source: "/contact", destination: "/#kontakt", permanent: true },
      { source: "/contact/", destination: "/#kontakt", permanent: true },
    ];
  },
};

export default nextConfig;
