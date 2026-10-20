import HeaderOne from "@/components/HeaderOne";
import TopBarOne from "@/components/TopBarOne";
import FooterOne from "@/components/FooterOne";
import Preloader from "@/components/Preloader";
import CustomCursor from "@/helper/CustomCursor";
import AOSWrap from "@/helper/AOSWrap";

import BreadcrumbOne from "@/components/BreadcrumbOne";
import RecentActivities from "@/components/our-updates/RecentActivities";
import CtaSectionTwo from "@/components/CtaSectionTwo";

export const metadata = {
  title: "Our Updates | MBSM Trust",
  description:
    "Stay connected with the latest news, events, seva programs, and spiritual milestones from Mangal Bhakta Seva Mandal Trust.",
};

const OurUpdatesPage = () => {
  return (
    <AOSWrap>
      <section className="page-wrapper">
        <Preloader />
        <CustomCursor />
        <TopBarOne />
        <HeaderOne />
        <BreadcrumbOne title="Our Updates" />
        <RecentActivities />
        <CtaSectionTwo />
        <FooterOne />
      </section>
    </AOSWrap>
  );
};

export default OurUpdatesPage;
