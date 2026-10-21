import HeaderOne from "@/components/HeaderOne";
import TopBarOne from "@/components/TopBarOne";
import FooterOne from "@/components/FooterOne";
import Preloader from "@/components/Preloader";
import CustomCursor from "@/helper/CustomCursor";
import AOSWrap from "@/helper/AOSWrap";

import BreadcrumbOne from "@/components/BreadcrumbOne";
import GalleryInner from "@/components/our-gallery/GalleryInner";
import CtaSectionTwo from "@/components/CtaSectionTwo";

export const metadata = {
  title: "Our Gallery | MBSM Trust",
  description: "Photos and moments from the seva, events and celebrations of Mangal Bhakta Seva Mandal Trust.",
};

const OurGalleryPage = () => {
  return (
    <AOSWrap>
      <section className="page-wrapper">
        <Preloader />
        <CustomCursor />
        <TopBarOne />
        <HeaderOne />
        <BreadcrumbOne title="Our Gallery" />
        <GalleryInner />
        <CtaSectionTwo />
        <FooterOne />
      </section>
    </AOSWrap>
  );
};

export default OurGalleryPage;
