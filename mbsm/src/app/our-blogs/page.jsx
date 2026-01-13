import BreadcrumbOne from "@/components/BreadcrumbOne";
import BlogInner from "@/components/BlogInner";
import CtaSectionTwo from "@/components/CtaSectionTwo";
import FooterOne from "@/components/FooterOne";
import HeaderOne from "@/components/HeaderOne";
import Preloader from "@/components/Preloader";
import TopBarOne from "@/components/TopBarOne";
import AOSWrap from "@/helper/AOSWrap";
import CustomCursor from "@/helper/CustomCursor";

export const metadata = {
  title: "Our Blogs | MBSM Trust",
  description: "Mangal Bhakt Seva Mandal Trust - Explore inspiring stories, spiritual insights, and updates about our community service initiatives and spiritual mission.",
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
        <BreadcrumbOne title='Our Blogs' />

        {/* BlogInner */}
        <BlogInner />

        {/* CtaSectionTwo */}
        <CtaSectionTwo />

        {/* FooterOne */}
        <FooterOne />
      </section>
    </AOSWrap>
  );
};

export default page;
