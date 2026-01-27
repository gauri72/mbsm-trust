import BannerOne from "@/components/BannerOne";
import CauseOne from "@/components/CauseOne";
import CauseSliderTwo from "@/components/CauseSliderTwo";
import CommunityOne from "@/components/CommunityOne";
import CtaSectionOne from "@/components/CtaSectionOne";
import DifferenceOne from "@/components/DifferenceOne";
import DifferenceTwo from "@/components/DifferenceTwo";
import FooterOne from "@/components/FooterOne";
import HeaderOne from "@/components/HeaderOne";
import HelpOne from "@/components/HelpOne";
import PartnerOne from "@/components/PartnerOne";
import Preloader from "@/components/Preloader";
import TopBarOne from "@/components/TopBarOne";
import AOSWrap from "@/helper/AOSWrap";
import CustomCursor from "@/helper/CustomCursor";

export const metadata = {
  title: "MBSM Trust",
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

        {/* BannerOne */}
        <BannerOne />

        {/* PartnerOne */}
        {/* <PartnerOne /> */}

        {/* DifferenceOne */}
        <DifferenceOne />

        {/* HelpOne */}
        <HelpOne />

        {/* CauseOne */}
        <CauseOne />

        {/* CtaSectionOne */}
        <CtaSectionOne />

        {/* CommunityOne */}
        <CommunityOne />

        {/* CauseSliderTwo */}
        <CauseSliderTwo />

        {/* DifferenceTwo */}
        <DifferenceTwo />

        {/* FooterOne */}
        <FooterOne />
      </section>
    </AOSWrap>
  );
};

export default page;
