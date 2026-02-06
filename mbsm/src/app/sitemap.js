const BASE_URL = "https://mbsmtrust.org";

export default function sitemap() {
  const now = new Date();

  // Static pages
  const staticRoutes = [
    "",
    "/about-us",
    "/contact-us",
    "/donate-us",
    "/our-causes",
    "/our-blogs",
  ];

  const staticEntries = staticRoutes.map(path => ({
    url: `${BASE_URL}${path}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: path === "" ? 1.0 : 0.8,
  }));

  // Blog detail pages (IDs 1–13)
  const blogIds = Array.from({ length: 13 }, (_, i) => i + 1);

  const blogEntries = blogIds.map(id => ({
    url: `${BASE_URL}/blog/${id}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: 0.7,
  }));

  return [...staticEntries, ...blogEntries];
}


