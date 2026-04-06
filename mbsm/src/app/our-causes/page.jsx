import BreadcrumbOne from "@/components/BreadcrumbOne";
import CauseInner from "@/components/CauseInner";
import ContactOne from "@/components/ContactOne";
import CtaSectionTwo from "@/components/CtaSectionTwo";
import FooterOne from "@/components/FooterOne";
import HeaderOne from "@/components/HeaderOne";
import Preloader from "@/components/Preloader";
import TopBarOne from "@/components/TopBarOne";
import AOSWrap from "@/helper/AOSWrap";
import CustomCursor from "@/helper/CustomCursor";

export const metadata = {
  title: "Our Projects | MBSM Trust",
  description:
    "Mangal Bhakta Seva Mandal Trust (MBSM Trust) is a spiritual and charitable organization serving society with devotion and seva.",
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
        <BreadcrumbOne title='Our Projects' />

        {/* CauseInner */}
        <CauseInner />

        {/* CtaSectionTwo */}
        <CtaSectionTwo />

        {/* ContactOne */}
        <ContactOne />

        {/* FooterOne */}
        <FooterOne />
      </section>
    </AOSWrap>
  );
};

export default page;
