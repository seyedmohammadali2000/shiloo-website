import type { NextConfig } from "next";
const staticExport = process.env.SITE_STATIC_EXPORT === "1";
const config: NextConfig = {
  ...(staticExport
    ? { output: "export", trailingSlash: true, images: { unoptimized: true } }
    : {}),
  poweredByHeader: false,
  turbopack: { root: process.cwd() },
  allowedDevOrigins: ["127.0.0.1"],
};
export default config;
