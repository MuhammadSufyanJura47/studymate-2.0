import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://studymate-20.vercel.app/sitemap.xml",
    host: "https://studymate-20.vercel.app/",
  };
}
