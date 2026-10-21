// Thumbnails live in public/assets/images/our gallery/<category>/
export const galleryItems = [
  {
    slug: "school-kit-distribution",
    image: "our gallery/projects/projects-1.png",
    category: "Projects",
    title: "School Kit Distribution",
    description: "School bags and stationery for children in need.",
    content:
      "Through our Shaikshanik Sevakarya, MBSM Trust gives school bags, notebooks and stationery to children from families in need.\n\nEvery kit is offered as seva at the feet of Sadguru, so that every child can study with confidence and joy.",
  },
  {
    slug: "durgashtami",
    image: "our gallery/events/events-1.png",
    category: "Events",
    title: "Durgashtami",
    description: "Puja, aarti and bhajans celebrated together at the Math.",
    content:
      "On Durgashtami, devotees gathered at the Math for Shankar Geeta parayan, followed by aarti and bhajans in an atmosphere of deep devotion.\n\nThe day concluded with prasad shared by all at the feet of Sadguru. MBSM Trust wishes all devotees a blessed Durgashtami.",
  },
];

export const galleryCategories = ["All", "Projects", "Events", "Other"];

export const galleryImageSrc = path => encodeURI(`/assets/images/${path}`);

export const getGalleryItem = slug => galleryItems.find(item => item.slug === slug);
