import HeaderOne from "@/components/HeaderOne";
import TopBarOne from "@/components/TopBarOne";
import FooterOne from "@/components/FooterOne";
import Preloader from "@/components/Preloader";
import CustomCursor from "@/helper/CustomCursor";
import AOSWrap from "@/helper/AOSWrap";

import BreadcrumbOne from "@/components/BreadcrumbOne";
import ComingSoon from "@/components/coming-soon/ComingSoon";

export const metadata = {
  title: "Our Publications | MBSM Trust",
  description: "Books, granths and publications from Mangal Bhakta Seva Mandal Trust.",
};

const OurPublicationsPage = () => {
  return (
    <AOSWrap>
      <section className="page-wrapper">
        <Preloader />
        <CustomCursor />
        <TopBarOne />
        <HeaderOne />
        <BreadcrumbOne title="Our Publications" />
        <ComingSoon
          icon="fa-solid fa-book"
          title="Our Publications Coming Soon"
          text="We are preparing this page. Please check back soon."
        />
        <FooterOne />
      </section>
    </AOSWrap>
  );
};

export default OurPublicationsPage;
