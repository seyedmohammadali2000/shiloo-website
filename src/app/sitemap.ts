import type { MetadataRoute } from "next";
import { siteConfig } from "@/data/site-config";
import { caseStudies } from "@/data/case-studies";
export const dynamic = "force-static";
export default function sitemap(): MetadataRoute.Sitemap {
  if (!siteConfig.url) return [];
  return [
    "",
    "/services",
    "/method",
    "/case-studies",
    "/academy",
    "/about",
    "/contact",
    ...caseStudies.map((s) => `/case-studies/${s.id}`),
  ].map((path) => ({
    url: `${siteConfig.url}${path}`,
    changeFrequency: "monthly" as const,
    priority: path ? 0.7 : 1,
  }));
}
