import type { MetadataRoute } from "next";

const SITE_URL = "https://saadii-eta.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/about", "/skills", "/contact"];

  return routes.map((route) => ({
    url: `${SITE_URL}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: route === "" ? 1 : 0.7,
  }));
}
