import type { MetadataRoute } from "next";

const routes = ["", "/products", "/trade-copier", "/documentation", "/support", "/contact"];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `https://feftradingsolutions.com${route}`,
    lastModified: new Date("2026-06-27"),
    changeFrequency: "monthly",
    priority: route === "" ? 1 : 0.8
  }));
}
