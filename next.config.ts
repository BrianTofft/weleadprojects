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
      { source: "/indsigt/hvad-er-enterprise-architecture", destination: "/indsigt/enterprise-arkitektur-guide", permanent: true },
      { source: "/indsigt/what-is-enterprise-architecture", destination: "/indsigt/enterprise-architecture-guide", permanent: true },
    ];
  },
};

export default nextConfig;
