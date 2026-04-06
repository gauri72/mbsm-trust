"use client";
import Link from "next/link";

const BlogInner = () => {
  // 13 blog posts
  const blogs = [
    {
      id: 1,
      image: "blog/one.jpg",
      category: "Spiritual Journey",
      date: "08/01/2026",
      title: "Where a Never-Ending Rainfall of Blessings Flows: The Shankar Maharaj Math in Ahilyanagar",
      description: "Thursday is an ordinary day for most people. People are engrossed in their daily chores and duties, eagerly waiting for the weekend. But at the Shankar Maharaj Math (pilgrimage) located in the MIDC locality of Ahilyanagar, Maharashtra, \"Thursday\" carries a different meaning. It is a special day soaked in devotion, peace and quiet miracles.",
      author: "MBSM Trust"
    },
    {
      id: 2,
      image: "blog/two.jpg",
      category: "Community Service",
      date: "08/01/2026",
      title: "Come Here to Experience the True Meaning of Service, Devotion, Charity & Humanity!",
      description: "The Shankar Maharaj Math is simple and warm, but the energy, the aura it holds is deeply powerful. The Math takes care of every basic need of a devotee. From clean and well-equipped toilets for ladies and gents to tea and food arrangements, everything is taken care of with attention, affection and thoughtfulness.",
      author: "MBSM Trust"
    },
    {
      id: 3,
      image: "blog/three.jpg",
      category: "Spiritual Service",
      date: "08/01/2026",
      title: "Repairing Lives & Healing Hearts: The Thursday Gaadi Seva of Shankar Maharaj",
      description: "Yet, despite being showered with such overwhelming love and reverence by countless disciples, followers, and devotees, it is his greatness that Bhaau still humbly calls himself only a devotee and disciple of Sadguru Shankar Maharaj. His humility makes him even more great and divine.",
      author: "MBSM Trust"
    },
    {
      id: 4,
      image: "blog/four.jpg",
      category: "Community Service",
      date: "08/01/2026",
      title: "Thursday Annadan Seva: Food that Fulfills the Hunger & Nourishes the Soul",
      description: "On Thursday, alongside the Gaadi Seva, the Math carries out free Annadan Seva for all visitors throughout the entire day, continuing until the last person is served on Friday. Here, it is believed that \"Annadan Shreshtha Daan!,\" meaning, feeding others is the greatest charity.",
      author: "MBSM Trust"
    },
    {
      id: 5,
      image: "blog/five.jpg",
      category: "Spiritual Guidance",
      date: "08/01/2026",
      title: "\"कर्म\" हाच कलियुगाचा धर्म",
      description: "श्री विश्वेश्वर स्वामी महाराज ( श्री राजाभाऊ कोठारी) त्यांच्या गुरुवार विशेष प्रवचनात म्हणतात: बघा किती प्रश्न, किती अडचणी आपण आपल्या जीवनामध्ये निर्माण केल्या आहेत. होय! आपण निर्माण केल्या आहेत.",
      author: "MBSM Trust"
    },
    {
      id: 6,
      image: "blog/six.jpg",
      category: "Spiritual Guidance",
      date: "08/01/2026",
      title: "अहंकाराला जपत आधाराचा शोध",
      description: "श्री विश्वेश्वर स्वामी महाराज (श्री राजाभाऊ कोठारी) त्यांच्या गुरुवार विशेष प्रवचनात म्हणतात: आजच्या या कलियुगात प्रत्येक चैतन्य अतृप्त आहे. प्रत्येक चैतन्य अशांत आहे, अस्थिर आहे, आपला स्वतःवर विश्वास नाही.",
      author: "MBSM Trust"
    },
    {
      id: 7,
      image: "blog/seven.jpg",
      category: "Spiritual Guidance",
      date: "08/01/2026",
      title: "रात्र आणि दिवस: आयुष्याचं सृष्टीचक्र",
      description: "विश्वेश्वर स्वामी महाराज (श्री राजाभाऊ कोठारी) त्यांच्या गुरुवार विशेष प्रवचनात म्हणतात: या सृष्टीचक्राची निर्मिती करताना रात्र आणि दिवस एका मागे एक गुंफले गेले अगदी तसच आपल्या आयुष्यामध्ये, आपल्या संसारामध्ये, अध्यात्मामध्ये रात्र आणि दिवस आहेत.",
      author: "MBSM Trust"
    },
    {
      id: 8,
      image: "blog/eight.jpg",
      category: "Spiritual Guidance",
      date: "08/01/2026",
      title: "त्रिगुण, त्रिगुणात्मक आणि जीवनाचे शाश्वत सत्य",
      description: "श्री विश्वेश्वर स्वामी महाराज ( श्री राजाभाऊ कोठारी) त्यांच्या गुरुवार विशेष प्रवचनात म्हणतात: या सृष्टीची रचना तमस, रजस आणि सत्त्व या तीन गुणांवर झालेली आहे. दत्त महाराज त्रिगुणात्मक आहेत.",
      author: "MBSM Trust"
    },
    {
      id: 9,
      image: "blog/nine.jpg",
      category: "Spiritual Guidance",
      date: "08/01/2026",
      title: "भगवंत दरवेळी वाचवतो, पण आपण स्वतःला सुधारतो का?",
      description: "श्री विश्वेश्वर स्वामी महाराज त्यांच्या प्रवचनात म्हणतात: भगवंत खूप दयाळू आहे, मायाळू आहे, साक्षात माऊलीस्वरूप आहे. आपल्या प्रत्येक चुकीला तो पदरात घालतो, आपले अपराध पोटी घेतो.",
      author: "MBSM Trust"
    },
    {
      id: 10,
      image: "blog/ten.jpg",
      category: "Spiritual Guidance",
      date: "08/01/2026",
      title: "मानव जन्म, षडरिपू आणि गुरूचे महत्व",
      description: "आपला जन्म हा मानव योनीतला जन्म आहे. मानव योनीतला जन्म म्हणजे वासनेतला जन्म. आपण असेच प्रकट नाही झालो, आपण आपल्या आई वडिलांच्या पोटी जन्म घेतला आहे.",
      author: "MBSM Trust"
    },
    {
      id: 11,
      image: "blog/eleven.jpg",
      category: "Spiritual Guidance",
      date: "06/02/2026",
      title: "सुख, शांती आणि समाधानाची दारे कशी उघडतील?",
      description:
        "आपल्या पात्रते पेक्षा, आपल्या लायकी पेक्षा जास्त ओझं आपण आपल्या मांडीवर, आपल्या पाठीवर ओढून घेतलं आहे. आपल्या विचारांवर आपण इतकं ओझं ओढून घेतलं आहे आणि त्याचाच परिणाम म्हणुन आपण केवळ स्वतःला नव्हे तर जगात अवतीभवती इतरांना देखील पाहिलं तर सगळीकडे अशांतता आहे, अस्थिरता आहे.",
      author: "MBSM Trust"
    },
    {
      id: 12,
      image: "blog/twelve.jpg",
      category: "Community Service",
      date: "06/02/2026",
      title: "Food is Sacred; Wastage is Strictly Prohibited at the Annadan Seva of MBSM",
      description:
        "At the serene Shankar Maharaj Math (Pilgrimage) of Mangal Bhakt Seva Mandal (MBSM) in MIDC, Ahilyanagar, the continuous Annadan Seva is carried out with deep devotion and discipline on every Thursday and on grand occasions.",
      author: "MBSM Trust"
    },
    {
      id: 13,
      image: "blog/thirteen.jpg",
      category: "Spiritual Journey",
      date: "06/02/2026",
      title: "What's In a Name? Faith, Peace & Power!",
      description:
        "William Shakespeare once asked, “What’s in a name?” Well, only the disciples and devotees of our Guru, Shree Vishweshwar Swami Maharaj (Bhaau), know what a name can actually hold.",
      author: "MBSM Trust"
    },
    {
      id: 14,
      image: "blog/fourteen.jpg",
      category: "Spiritual Guidance",
      date: "18/03/2026",
      title: "मानव जन्म: मुक्तीचा मार्ग",
      description: "या अवघ्या ब्रम्हांडामध्ये एकूण ८४ लाख योनी आहेत. ८४ लाख योनींमध्ये मानव योनी ही सर्वात विशेष आणि सर्वोत्तम योनी आहे.",
      author: "MBSM Trust"
    },
    {
      id: 15,
      image: "blog/fifteen.jpg",
      category: "Spiritual Guidance",
      date: "18/03/2026",
      title: "जो खुदको जानता हैं, वहीं मुझे पहचानता हैं|",
      description: "श्री दत्तप्रभूंच्या सप्तशी॔ स्वरुपातलं, शेवटचं, स्वरुप म्हणजे सद्गुरु शंकर महाराज. शंकर महाराज त्यांच्या भक्तांना कायम सांगतात.",
      author: "MBSM Trust"
    },
    {
      id: 16,
      image: "blog/sixteen.jpg",
      category: "Spiritual Guidance",
      date: "18/03/2026",
      title: "सद्गुरु कृपा",
      description: "सद्गुरुंची कृपा कधीही शब्दात व्यक्त करता येत नाही. कारण अनुभवाविना ती सांगता येत नाही आणि जरी आपण सांगितलं तरी ते इतरांना मान्य होत नाही.",
      author: "MBSM Trust"
    },
    {
      id: 17,
      image: "blog/seventeen.jpg",
      category: "Spiritual Guidance",
      date: "18/03/2026",
      title: "\"अवलिया\", ज्यांच्या शब्दकोशात अशक्य असा शब्दच नाही!",
      description: "ज्यांच्या कटी लंगोट, काखेत झोळी आणि संगे चार श्वान आहेत त्यांना अवधूत चिंतन म्हंटलय. जो स्वयं दाता आहे, ज्याच्या नामातच दातृत्व सामावलं आहे, तो दत्त आहे.",
      author: "MBSM Trust"
    },
    {
      id: 18,
      image: "blog/eighteen.jpg",
      category: "Spiritual Guidance",
      date: "18/03/2026",
      title: "आपला भक्तिभाव शुद्ध कसा होईल आणि आपल्याला खरं समाधान कसं मिळेल?",
      description: "आज जर आपण पाहिलं तर एकही मंदिर, मस्जिद, चर्च, गिरिजाघर, कुठेही जा, गर्दीच गर्दी दिसते. कारण अशांतता, अस्वस्थता इतकी वाढली आहे की समाधान कशातच मिळत नाही.",
      author: "MBSM Trust"
    },
    {
      id: 19,
      image: "blog/nineteen.jpg",
      category: "Spiritual Guidance",
      date: "18/03/2026",
      title: "आनंदाचा अडथळा, \"अहंकार\"",
      description: "आजच्या या जगामध्ये प्रत्येक चैतन्याला आपल्या ज्ञनाचा, आपल्या बुद्धीचा, आपल्या प्रत्येक कर्माचा इतका अहंकार, अभिमान आहे.",
      author: "MBSM Trust"
    },
    {
      id: 20,
      image: "blog/twenty.jpg",
      category: "Spiritual Guidance",
      date: "18/03/2026",
      title: "MBSM Hanuman Chalisa Pathan & Bhajan Sandhya: Intent & Effect",
      description: "Every year, Mangal Bhakt Seva Mandal (MBSM) devotedly carries out the sacred Hanuman Chalisa Pathan & Bhajan Sandhya for 41 continuous days until Hanuman Jayanti.",
      author: "MBSM Trust"
    },
    {
      id: 21,
      image: "blog/twenty-one.jpg",
      category: "Spiritual Guidance",
      date: "18/03/2026",
      title: "आपल्याला आपल्या कर्माचं मनोवांछित फळ कसं प्राप्त होईल?",
      description: "आज सगळीकडे अस्थिरता, अशांतता, अस्वस्थता, असमाधान आहे. आपण प्रत्येक श्वास या सुख-शांती आणि समाधानाच्या शोधार्थ खर्च करतो.",
      author: "MBSM Trust"
    },
    {
      id: 22,
      image: "blog/twenty-two.jpg",
      category: "Spiritual Guidance",
      date: "22/03/2026",
      title: "जीवनात शुद्ध भावाची गरज",
      description: "जोपर्यंत आपण या अध्यात्मातली सर्वोच्च अशी ही तपस्या म्हणा, साधना म्हणा किंवा सेवा म्हणा, भजन आणि नाम-स्मरणात खर्या अर्थाने रममाण होत नाही, एकरूप होत नाही आणि आपला समर्पण भाव त्यामध्ये ओतला जात नाही तोपर्यंत पालथ्या घड्यावर पाणी अशी आपली अवस्था राहते.",
      author: "MBSM Trust"
    },
    {
      id: 23,
      image: "blog/twenty-three.jpg",
      category: "Spiritual Guidance",
      date: "27/03/2026",
      title: "शंकर महाराज संदेश — जीवनाचा सार",
      description: "दत्तप्रभुंच्या सप्तर्षी स्वरुपातलं शेवटचं स्वरुप म्हणजे शंकर महाराज. कल्याण करणारे शंकर महाराज. \"मैं कैलास का रहनेवाला | मेरा नाम है शंकर || दुनिया को समझाने आया | करले कुछ अपना घर ||\" (शंकर महाराज संदेश). हे महाराजांना का सांगायची वेळ आली? कारण कलियुगाचा धर्म कर्म आहे.",
      author: "MBSM Trust"
    },
    {
      id: 24,
      image: "blog/twenty-four.jpg",
      category: "Spiritual Guidance",
      date: "02/04/2026",
      title: "मारुती रायांची शिकवण आणि आपल्या कर्माप्रति एकनिष्ठता",
      description: "ज्या देशामध्ये आपण राहतोय त्याला आपण हिंदुस्तान म्हणतो. गेल्या १० वर्षांपासून या हिंदुस्तान मध्ये रामराज्य आणण्याचा संकल्प आपण मनाशी बाळगून प्रत्येक कर्म करत चाललो आहे. परंतु नुसता संकल्प धरून चालत नाही. तर तसं कर्म देखील आपल्या माध्यामातून घडणं तितकच महत्त्वाच आहे.",
      author: "MBSM Trust"
    },
    {
      id: 25,
      image: "blog/twenty-five.jpg",
      category: "Spiritual Guidance",
      date: "02/04/2026",
      title: "आपल्या कर्मांप्रति समर्पणच आपल्याला खरं सुख, शांती आणि समाधान मिळवून देऊ शकतं!",
      description: "ज्या संसारामध्ये आपण आहोत, त्या संसारातल्या प्रश्न, अडचणी आणि समस्यांचा आपण इतका बाऊ करतो, नको तितका बाऊ आपण करतो की ज्या शुल्लक गोष्टी असतात त्यांना देखील आपण डोंगरा एवढ्या मोठ्या करून ठेवतो. आणि याला कारण फक्त आणि फक्त आपली बुद्धी आहे.",
      author: "MBSM Trust"
    },
    {
      id: 26,
      image: "blog/twenty-six.jpg",
      category: "Spiritual Guidance",
      date: "02/04/2026",
      title: "कर्म, अनुभूती आणि खरा गुरु",
      description: "जीवनात जेव्हा आपली वाईट वेळ येते तेव्हा अगदी दीन, गरीबवाणा, बापडा चेहरा करून आपण भगवंताच्या समोर नतमस्तक होतो. मग व्यवहारात असेल तर समोरच्या व्यक्तीला भगवंत समजून तिथे नतमस्तक होतो आपण. आणि चूक झाली, माफ कर असं म्हणून आपण त्याचे पाय धरतो.",
      author: "MBSM Trust"
    }
  ];

  return (
    <section className='blog'>
      <div className='container'>
        <div className='row justify-content-center'>
          <div className='col-12 col-md-8 col-xl-7'>
            <div
              className='section__header mb-60 text-center'
              data-aos='fade-up'
              data-aos-duration={1000}
            >
              <span className='sub-title'>
                <i className='icon-donation' />
                Where there's less, we give our best!
              </span>
              <h2 className='title-animation_inner'>
                Our <span>Blogs</span> & Stories
              </h2>
              <p>
                Explore inspiring stories, spiritual insights, and updates about our community service initiatives and spiritual mission.
              </p>
            </div>
          </div>
        </div>
        <div className='row gutter-30'>
          {blogs.map((blog, index) => (
            <div key={blog.id} className='col-12 col-md-6 col-xl-3 col-xxl-3'>
              <div
                className='blog__single'
                data-aos='fade-up'
                data-aos-duration={1000}
                data-aos-delay={index % 4 === 0 ? 0 : index % 4 === 1 ? 300 : index % 4 === 2 ? 600 : 900}
              >
                <div className='blog__single-thumb'>
                  <Link href={`/blog/${blog.id}`}>
                    <img
                      src={`/assets/images/${blog.image}`}
                      alt={blog.title}
                    />
                  </Link>
                </div>
                <div className='blog__single-meta'>
                  <p>
                    <i className='fa-solid fa-calendar-days' /> {blog.date}
                  </p>
                  <p>
                    <i className='fa-solid fa-user' /> {blog.author}
                  </p>
                </div>
                <div className='blog__single-content'>
                  <h5>
                    <Link href={`/blog/${blog.id}`}>
                      {blog.title}
                    </Link>
                  </h5>
                </div>
                <div className='blog__single-cta'>
                  <Link href={`/blog/${blog.id}`}>
                    Read More <i className='fa-solid fa-arrow-right' />
                  </Link>
                </div>
                <div className='spade-two'>
                  <img src='/assets/images/blog/spade.png' alt='Image_inner' />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className='spade'>
        <img src='/assets/images/blog/spade-base.png' alt='Image_inner' />
      </div>
      <div className='blog-bg'>
        <img src='/assets/images/blog/blog-bg.png' alt='Image_inner' />
      </div>
    </section>
  );
};

export default BlogInner;




