import type { MetadataRoute } from "next";

const baseUrl = "https://www.nofehstudio.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes: { path: string; priority: number; changeFrequency: "weekly" | "monthly" }[] = [
    { path: "", priority: 1, changeFrequency: "weekly" },
    { path: "/webdesign", priority: 0.8, changeFrequency: "monthly" },
    { path: "/marketing", priority: 0.8, changeFrequency: "monthly" },
    { path: "/photography", priority: 0.8, changeFrequency: "monthly" },
    { path: "/photography/product", priority: 0.6, changeFrequency: "monthly" },
    { path: "/photography/property", priority: 0.6, changeFrequency: "monthly" },
    { path: "/photography/event", priority: 0.6, changeFrequency: "monthly" },
  ];

  return routes.map(({ path, priority, changeFrequency }) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
    changeFrequency,
    priority,
  }));
}
