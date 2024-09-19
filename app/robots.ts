import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: ["/", "/about", "/contact", "/privacy-policy", "/usage"],
      disallow: "/api/",
    },
    sitemap: `${process.env.NEXT_PUBLIC_URL}/sitemap.xml`,
  };
}
