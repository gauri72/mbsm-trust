import BreadcrumbOne from "@/components/BreadcrumbOne";
import BlogDetail from "@/components/BlogDetail";
import CtaSectionTwo from "@/components/CtaSectionTwo";
import FooterOne from "@/components/FooterOne";
import HeaderOne from "@/components/HeaderOne";
import Preloader from "@/components/Preloader";
import TopBarOne from "@/components/TopBarOne";
import AOSWrap from "@/helper/AOSWrap";
import CustomCursor from "@/helper/CustomCursor";

export async function generateMetadata({ params }) {
  const blogId = params.id;
  
  const blogs = [
    {
      id: 1,
      title: "Where Devotion Dwells & Blossoms: The Shankar Maharaj Math in Ahilyanagar",
      description: "Thursday is an ordinary day for most people. But at the Shankar Maharaj Math in Ahilyanagar, Maharashtra, \"Thursday\" carries a different meaning. It is a special day soaked in devotion, peace and quiet miracles."
    },
    {
      id: 2,
      title: "Come Here to Experience the True Meaning of Service, Devotion, Charity & Humanity!",
      description: "The Shankar Maharaj Math is simple and warm, but the energy, the aura it holds is deeply powerful. The Math takes care of every basic need of a devotee."
    },
    {
      id: 3,
      title: "Repairing Lives & Healing Hearts: The Thursday Gaadi Seva of Shankar Maharaj",
      description: "Every Thursday, Bhaau dedicates his entire day and self to devotees. Right from Thursday morning till Friday morning, he compassionately listens to all struggling people."
    },
    {
      id: 4,
      title: "\"कर्म\" हाच कलियुगाचा धर्म",
      description: "श्री विश्वेश्वर स्वामी महाराज त्यांच्या गुरुवार विशेष प्रवचनात म्हणतात: बघा किती प्रश्न, किती अडचणी आपण आपल्या जीवनामध्ये निर्माण केल्या आहेत."
    },
    {
      id: 5,
      title: "अहंकाराला जपत आधाराचा शोध",
      description: "श्री विश्वेश्वर स्वामी महाराज त्यांच्या गुरुवार विशेष प्रवचनात म्हणतात: आजच्या या कलियुगात प्रत्येक चैतन्य अतृप्त आहे."
    },
    {
      id: 6,
      title: "रात्र आणि दिवस: आयुष्याचं सृष्टीचक्र",
      description: "विश्वेश्वर स्वामी महाराज त्यांच्या गुरुवार विशेष प्रवचनात म्हणतात: या सृष्टीचक्राची निर्मिती करताना रात्र आणि दिवस एका मागे एक गुंफले गेले."
    },
    {
      id: 7,
      title: "त्रिगुण, त्रिगुणात्मक आणि जीवनाचे शाश्वत सत्य",
      description: "श्री विश्वेश्वर स्वामी महाराज त्यांच्या गुरुवार विशेष प्रवचनात म्हणतात: या सृष्टीची रचना तमस, रजस आणि सत्त्व या तीन गुणांवर झालेली आहे."
    },
    {
      id: 8,
      title: "भगवंत दरवेळी वाचवतो, पण आपण स्वतःला सुधारतो का?",
      description: "श्री विश्वेश्वर स्वामी महाराज त्यांच्या प्रवचनात म्हणतात: भगवंत खूप दयाळू आहे, मायाळू आहे, साक्षात माऊलीस्वरूप आहे."
    }
  ];

  const blog = blogs.find(b => b.id === parseInt(blogId));

  return {
    title: blog ? `${blog.title} | MBSM Trust` : "Blog | MBSM Trust",
    description: blog ? blog.description : "Mangal Bhakt Seva Mandal Trust - Spiritual service and humanitarian organization.",
  };
}

const page = ({ params }) => {
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
        <BreadcrumbOne title='Blog Details' />

        {/* BlogDetail */}
        <BlogDetail blogId={params.id} />

        {/* CtaSectionTwo */}
        <CtaSectionTwo />

        {/* FooterOne */}
        <FooterOne />
      </section>
    </AOSWrap>
  );
};

export default page;
