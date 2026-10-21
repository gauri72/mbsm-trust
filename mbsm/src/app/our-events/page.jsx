import HeaderOne from "@/components/HeaderOne";
import TopBarOne from "@/components/TopBarOne";
import FooterOne from "@/components/FooterOne";
import Preloader from "@/components/Preloader";
import CustomCursor from "@/helper/CustomCursor";
import AOSWrap from "@/helper/AOSWrap";

import BreadcrumbOne from "@/components/BreadcrumbOne";
import ComingSoon from "@/components/coming-soon/ComingSoon";

export const metadata = {
  title: "Our Events | MBSM Trust",
  description: "Upcoming and past events, utsavs and spiritual programs of Mangal Bhakta Seva Mandal Trust.",
};

const OurEventsPage = () => {
  return (
    <AOSWrap>
      <section className="page-wrapper">
        <Preloader />
        <CustomCursor />
        <TopBarOne />
        <HeaderOne />
        <BreadcrumbOne title="Our Events" />
        <ComingSoon
          icon="fa-solid fa-calendar-days"
          title="Our Events Coming Soon"
          text="We are preparing this page. Please check back soon."
        />
        <FooterOne />
      </section>
    </AOSWrap>
  );
};

export default OurEventsPage;
