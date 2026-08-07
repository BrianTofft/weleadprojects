import { MetadataRoute } from "next";
import { articles } from "@/lib/articles";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://www.weleadprojects.com";

  const staticPages = [
    { url: base,              priority: 1.0,  changeFrequency: "weekly"  as const },
    { url: `${base}/om-os`,   priority: 0.8,  changeFrequency: "monthly" as const },
    { url: `${base}/ydelser`, priority: 0.9,  changeFrequency: "monthly" as const },
    { url: `${base}/indsigt`, priority: 0.8,  changeFrequency: "weekly"  as const },
    { url: `${base}/faq`,     priority: 0.7,  changeFrequency: "monthly" as const },
    { url: `${base}/news`,    priority: 0.6,  changeFrequency: "monthly" as const },
    { url: `${base}/find-projektleder`, priority: 0.8, changeFrequency: "monthly" as const },
  ];

  const articlePages = articles.map((a) => ({
    url: `${base}/indsigt/${a.slug}`,
    priority: 0.7,
    changeFrequency: "monthly" as const,
  }));

  return [...staticPages, ...articlePages];
}
