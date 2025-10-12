import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    compiler: {
        removeConsole: process.env.NODE_ENV === "production",
    },
    experimental: {
        reactCompiler: true,
    },
    typedRoutes: true,
};

export default nextConfig;
