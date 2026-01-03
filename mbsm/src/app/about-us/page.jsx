import BreadcrumbOne from "@/components/BreadcrumbOne";
import ContactOne from "@/components/ContactOne";
import CtaSectionTwo from "@/components/CtaSectionTwo";
import DifferenceTwo from "@/components/DifferenceTwo";
import FaqOne from "@/components/FaqOne";
import FooterOne from "@/components/FooterOne";
import FounderStory from "@/components/FounderStory";
import GalleryOne from "@/components/GalleryOne";
import HeaderOne from "@/components/HeaderOne";
import HelpOne from "@/components/HelpOne";
import Preloader from "@/components/Preloader";
import TopBarOne from "@/components/TopBarOne";
import AOSWrap from "@/helper/AOSWrap";
import CustomCursor from "@/helper/CustomCursor";

export const metadata = {
  title: "MBSM Trust",
  description: "Mangal Bhakt Seva Mandal Trust - Spiritual service and humanitarian organization dedicated to serving humanity through compassionate service.",
};

const page = () => {
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
        <BreadcrumbOne title='About Us' />

        {/* HelpOne */}
        <HelpOne />

        {/* FounderStory */}
        <FounderStory />

        {/* FaqOne */}
        <FaqOne />

        {/* CtaSectionTwo */}
        <CtaSectionTwo />

        {/* ContactOne */}
        <ContactOne />

        {/* DifferenceTwo */}
        <DifferenceTwo />

        {/* GalleryOne */}
        <GalleryOne />

        {/* FooterOne */}
        <FooterOne />
      </section>
    </AOSWrap>
  );
};

export default page;
