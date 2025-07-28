import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Allow Next.js to compile the local `@repo/ui` package directly from source
  // during development without a prebuild step.
  transpilePackages: ["@repo/ui"],
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
