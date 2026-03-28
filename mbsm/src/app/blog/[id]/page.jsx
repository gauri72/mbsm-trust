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
      title: "Where a Never-Ending Rainfall of Blessings Flows: The Shankar Maharaj Math in Ahilyanagar",
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
      title: "Thursday Annadan Seva: Food that Fulfills the Hunger & Nourishes the Soul",
      description: "On Thursday, alongside the Gaadi Seva, the Math carries out free Annadan Seva for all visitors throughout the entire day, continuing until the last person is served on Friday."
    },
    {
      id: 5,
      title: "\"कर्म\" हाच कलियुगाचा धर्म",
      description: "श्री विश्वेश्वर स्वामी महाराज त्यांच्या गुरुवार विशेष प्रवचनात म्हणतात: बघा किती प्रश्न, किती अडचणी आपण आपल्या जीवनामध्ये निर्माण केल्या आहेत."
    },
    {
      id: 6,
      title: "अहंकाराला जपत आधाराचा शोध",
      description: "श्री विश्वेश्वर स्वामी महाराज त्यांच्या गुरुवार विशेष प्रवचनात म्हणतात: आजच्या या कलियुगात प्रत्येक चैतन्य अतृप्त आहे."
    },
    {
      id: 7,
      title: "रात्र आणि दिवस: आयुष्याचं सृष्टीचक्र",
      description: "विश्वेश्वर स्वामी महाराज त्यांच्या गुरुवार विशेष प्रवचनात म्हणतात: या सृष्टीचक्राची निर्मिती करताना रात्र आणि दिवस एका मागे एक गुंफले गेले."
    },
    {
      id: 8,
      title: "त्रिगुण, त्रिगुणात्मक आणि जीवनाचे शाश्वत सत्य",
      description: "श्री विश्वेश्वर स्वामी महाराज त्यांच्या गुरुवार विशेष प्रवचनात म्हणतात: या सृष्टीची रचना तमस, रजस आणि सत्त्व या तीन गुणांवर झालेली आहे."
    },
    {
      id: 9,
      title: "भगवंत दरवेळी वाचवतो, पण आपण स्वतःला सुधारतो का?",
      description: "श्री विश्वेश्वर स्वामी महाराज त्यांच्या प्रवचनात म्हणतात: भगवंत खूप दयाळू आहे, मायाळू आहे, साक्षात माऊलीस्वरूप आहे."
    },
    {
      id: 10,
      title: "मानव जन्म, षडरिपू आणि गुरूचे महत्व",
      description: "आपला जन्म हा मानव योनीतला जन्म आहे. मानव योनीतला जन्म म्हणजे वासनेतला जन्म. आपण असेच प्रकट नाही झालो, आपण आपल्या आई वडिलांच्या पोटी जन्म घेतला आहे."
    },
    {
      id: 11,
      title: "सुख, शांती आणि समाधानाची दारे कशी उघडतील?",
      description: "आपल्या पात्रते पेक्षा, आपल्या लायकी पेक्षा जास्त ओझं आपण आपल्या मांडीवर, आपल्या पाठीवर ओढून घेतलं आहे."
    },
    {
      id: 12,
      title: "Food is Sacred; Wastage is Strictly Prohibited at the Annadan Seva of MBSM",
      description: "At the serene Shankar Maharaj Math of Mangal Bhakt Seva Mandal in Ahilyanagar, the continuous Annadan Seva is carried out with deep devotion and discipline."
    },
    {
      id: 13,
      title: "What's In a Name? Faith, Peace & Power!",
      description: "William Shakespeare once asked, “What’s in a name?” For the disciples of Shree Vishweshwar Swami Maharaj, this name is a powerful support and source of peace and miracles."
    },
    {
      id: 14,
      title: "मानव जन्म: मुक्तीचा मार्ग",
      description: "या अवघ्या ब्रम्हांडामध्ये एकूण ८४ लाख योनी आहेत. ८४ लाख योनींमध्ये मानव योनी ही सर्वात विशेष आणि सर्वोत्तम योनी आहे."
    },
    {
      id: 15,
      title: "जो खुदको जानता हैं, वहीं मुझे पहचानता हैं|",
      description: "श्री दत्तप्रभूंच्या सप्तशी॔ स्वरुपातलं, शेवटचं, स्वरुप म्हणजे सद्गुरु शंकर महाराज. शंकर महाराज त्यांच्या भक्तांना कायम सांगतात."
    },
    {
      id: 16,
      title: "सद्गुरु कृपा",
      description: "सद्गुरुंची कृपा कधीही शब्दात व्यक्त करता येत नाही. कारण अनुभवाविना ती सांगता येत नाही आणि जरी आपण सांगितलं तरी ते इतरांना मान्य होत नाही."
    },
    {
      id: 17,
      title: "\"अवलिया\", ज्यांच्या शब्दकोशात अशक्य असा शब्दच नाही!",
      description: "ज्यांच्या कटी लंगोट, काखेत झोळी आणि संगे चार श्वान आहेत त्यांना अवधूत चिंतन म्हंटलय. जो स्वयं दाता आहे, ज्याच्या नामातच दातृत्व सामावलं आहे, तो दत्त आहे."
    },
    {
      id: 18,
      title: "आपला भक्तिभाव शुद्ध कसा होईल आणि आपल्याला खरं समाधान कसं मिळेल?",
      description: "आज जर आपण पाहिलं तर एकही मंदिर, मस्जिद, चर्च, गिरिजाघर, कुठेही जा, गर्दीच गर्दी दिसते. कारण अशांतता, अस्वस्थता इतकी वाढली आहे की समाधान कशातच मिळत नाही."
    },
    {
      id: 19,
      title: "आनंदाचा अडथळा, \"अहंकार\"",
      description: "आजच्या या जगामध्ये प्रत्येक चैतन्याला आपल्या ज्ञनाचा, आपल्या बुद्धीचा, आपल्या प्रत्येक कर्माचा इतका अहंकार, अभिमान आहे."
    },
    {
      id: 20,
      title: "MBSM Hanuman Chalisa Pathan & Bhajan Sandhya: Intent & Effect",
      description: "Every year, Mangal Bhakt Seva Mandal (MBSM) devotedly carries out the sacred Hanuman Chalisa Pathan & Bhajan Sandhya for 41 continuous days until Hanuman Jayanti."
    },
    {
      id: 21,
      title: "आपल्याला आपल्या कर्माचं मनोवांछित फळ कसं प्राप्त होईल?",
      description: "आज सगळीकडे अस्थिरता, अशांतता, अस्वस्थता, असमाधान आहे. आपण प्रत्येक श्वास या सुख-शांती आणि समाधानाच्या शोधार्थ खर्च करतो."
    },
    {
      id: 22,
      title: "जीवनात शुद्ध भावाची गरज",
      description: "जोपर्यंत आपण या अध्यात्मातली सर्वोच्च अशी ही तपस्या म्हणा, साधना म्हणा किंवा सेवा म्हणा, भजन आणि नाम-स्मरणात खर्या अर्थाने रममाण होत नाही, एकरूप होत नाही आणि आपला समर्पण भाव त्यामध्ये ओतला जात नाही तोपर्यंत पालथ्या घड्यावर पाणी अशी आपली अवस्था राहते."
    },
    {
      id: 23,
      title: "शंकर महाराज संदेश — जीवनाचा सार",
      description: "दत्तप्रभुंच्या सप्तर्षी स्वरुपातलं शेवटचं स्वरुप म्हणजे शंकर महाराज. कल्याण करणारे शंकर महाराज. \"मैं कैलास का रहनेवाला | मेरा नाम है शंकर || दुनिया को समझाने आया | करले कुछ अपना घर ||\" (शंकर महाराज संदेश). हे महाराजांना का सांगायची वेळ आली? कारण कलियुगाचा धर्म कर्म आहे."
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




