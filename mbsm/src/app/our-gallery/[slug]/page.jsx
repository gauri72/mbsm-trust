import BreadcrumbOne from "@/components/BreadcrumbOne";
import GalleryDetail from "@/components/our-gallery/GalleryDetail";
import CtaSectionTwo from "@/components/CtaSectionTwo";
import FooterOne from "@/components/FooterOne";
import HeaderOne from "@/components/HeaderOne";
import Preloader from "@/components/Preloader";
import TopBarOne from "@/components/TopBarOne";
import AOSWrap from "@/helper/AOSWrap";
import CustomCursor from "@/helper/CustomCursor";
import { galleryItems, getGalleryItem } from "@/components/our-gallery/galleryData";

export function generateStaticParams() {
  return galleryItems.map(item => ({ slug: item.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const item = getGalleryItem(slug);

  if (!item) {
    return {
      title: "Album Not Found | MBSM Trust",
    };
  }

  return {
    title: `${item.title} | Our Gallery | MBSM Trust`,
    description: item.description,
  };
}

const page = async ({ params }) => {
  const { slug } = await params;

  return (
    <AOSWrap>
      <section className='page-wrapper'>
        {/* Preloader */}
        <Preloader />

        {/* CustomCursor  */}
        <CustomCursor />

        {/* TopBarOne */}
        <TopBarOne />

        {/* HeaderOne */}
        <HeaderOne />

        {/* BreadcrumbOne */}
        <BreadcrumbOne title='Gallery Details' />

        {/* GalleryDetail */}
        <GalleryDetail slug={slug} />

        {/* CtaSectionTwo */}
        <CtaSectionTwo />

        {/* FooterOne */}
        <FooterOne />
      </section>
    </AOSWrap>
  );
};

export default page;
