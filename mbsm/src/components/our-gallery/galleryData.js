import durgashtamiAlbum from "./albums/durgashtami.json";
import schoolKitAlbum from "./albums/school-kit-distribution.json";

// Thumbnails live in public/assets/images/our gallery/<category>/
export const galleryItems = [
  {
    slug: "school-kit-distribution",
    image: "our gallery/projects/projects-1.png",
    category: "Projects",
    title: "School Kit Distribution",
    hideIntro: true,
    description: "Notebooks, school bags, uniforms and stationery for children in need.",
    content:
      "Through our Shaikshanik Sevakarya, MBSM Trust gives notebooks, school bags, uniforms and stationery to children from families in need.\n\nWe owe something to the society we live in, and we do this seva with a sense of duty towards it.",
    album: schoolKitAlbum,
  },
  {
    slug: "durgashtami",
    image: "our gallery/events/events-1.png",
    category: "Events",
    title: "Durgashtami",
    hideIntro: true,
    description: "Shankar Geeta Parayana, Palakhi Sohala, Bhajan, Pravachan, Aarati, Darshan & Maha Prasad at the Math.",
    content:
      "On Durgashtami, devotees gathered at the Math for Shankar Geeta parayan, followed by aarti and bhajans in an atmosphere of deep devotion.\n\nThe day concluded with prasad shared by all at the feet of Sadguru. MBSM Trust wishes all devotees a blessed Durgashtami.",
    album: durgashtamiAlbum,
  },
];

export const galleryCategories = ["All", "Projects", "Events", "Other"];

export { galleryImageSrc } from "./galleryPaths";

export const getGalleryItem = slug => galleryItems.find(item => item.slug === slug);
