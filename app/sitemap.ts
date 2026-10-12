import type { MetadataRoute } from "next";
import { workExperience } from "@/data/workExperience";
import { siteConfig } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: siteConfig.url, changeFrequency: "monthly", priority: 1 },
    ...workExperience.map((work) => ({
      url: `${siteConfig.url}/work/${work.slug}`,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    { url: `${siteConfig.url}/site`, changeFrequency: "yearly", priority: 0.3 },
  ];
}
