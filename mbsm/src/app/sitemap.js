import { galleryItems } from "@/components/our-gallery/galleryData";

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
    "/our-updates",
    "/our-events",
    "/our-publications",
    "/our-gallery",
  ];

  const staticEntries = staticRoutes.map(path => ({
    url: `${BASE_URL}${path}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: path === "" ? 1.0 : 0.8,
  }));

  // Blog detail pages (IDs 1-68)
  const blogIds = Array.from({ length: 68 }, (_, i) => i + 1);

  const blogEntries = blogIds.map(id => ({
    url: `${BASE_URL}/blog/${id}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: 0.7,
  }));

  // Gallery album pages
  const galleryEntries = galleryItems.map(item => ({
    url: `${BASE_URL}/our-gallery/${item.slug}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: 0.6,
  }));

  return [...staticEntries, ...blogEntries, ...galleryEntries];
}



