import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Allow Next.js to compile the local `@repo/ui` package directly from source
  // so we don't need to run its build step when developing.
  transpilePackages: ["@repo/ui"],
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
