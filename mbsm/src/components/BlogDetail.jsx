"use client";
import Link from "next/link";

const BlogDetail = ({ blogId }) => {
  // All 8 blog posts with full content
  const blogs = [
    {
      id: 1,
      image: "blog/one.jpg",
      category: "Spiritual Journey",
      date: "08/01/2025",
      title: "Where Devotion Dwells & Blossoms: The Shankar Maharaj Math in Ahilyanagar",
      author: "MBSM Trust",
      content: `Thursday is an ordinary day for most people. People are engrossed in their daily chores and duties, eagerly waiting for the weekend. But at the Shankar Maharaj Math (pilgrimage) located in the MIDC locality of Ahilyanagar, Maharashtra, "Thursday" carries a different meaning. It is a special day soaked in devotion, peace and quiet miracles. The Math is no less than a beautiful refuge and home of comfort and safety. The Math is a serene place inside the medicine factory of our Guru, Shree Vishweshwar Swami Maharaj (Shree Rajabhau Kothari) to whom we lovingly and respectfully call "Bhaau". The Math is formed by Mangal Bhakt Seva Mandal trust under the loving guidance and leadership of Bhaau. Bhaau chose this location deliberately. Here, stand a lush, dense and sacred Umbar tree and a Peepal tree, growing beyond the roof of the Math. It is said that Datta Prabhu personally resides here, and this is the very place where Bhaau attained his spiritual realization and had divine darshan of various deities.`
    },
    {
      id: 2,
      image: "blog/two.jpg",
      category: "Community Service",
      date: "08/01/2025",
      title: "Come Here to Experience the True Meaning of Service, Devotion, Charity & Humanity!",
      author: "MBSM Trust",
      content: `The Shankar Maharaj Math is simple and warm, but the the energy, the aura it holds is deeply powerful. The Math takes care of every basic need of a devotee. From clean and well-equipped toilets for ladies and gents to tea and food arrangements, everything is taken care of here with willingness and thoughtfulness. All provisions are made to ensure devotees face zero trouble or inconvenience. The true definition of service, charity and humanity is understood here. People here serve with more dedication than many work for salary. Because their reward is not money but contentment and the grace of God. This remuneration is far more valuable than any high-paid salary. Bhaau is the heart of this Math. We firmly believe that the divine powers of Shankar Maharaj are fully active in him. In his last lifetime, he was Swayam Siddhanath Maharaj, and in this life he is named as Shree Vishweshwar Swami Maharaj by God. We all are immeasurably blessed, graced and fortunate to have him as our spiritual Guru. He is a follower of Nathsampraday. So, he's a Nathpanthi.`
    },
    {
      id: 3,
      image: "blog/three.jpg",
      category: "Spiritual Service",
      date: "08/01/2025",
      title: "Repairing Lives & Healing Hearts: The Thursday Gaadi Seva of Shankar Maharaj",
      author: "MBSM Trust",
      content: `Yet, despite being showered with such overwhelming love and reverence by countless disciples, followers, and devotees, it is his greatness that Bhaau still humbly calls himself only a devotee and disciple of Sadguru Shankar Maharaj. His humility makes him even more great and divine. Every Thursday, Bhaau dedicates his entire day and self to devotees. Right from Thursday morning till Friday morning, he compassionately listens to all struggling people and offers them both rational and divine remedies to those who come with various kinds of crises, harships, worries, problems, doubts, fears, and pain. He does not hurry, and he does not rest. No matter how late it gets, he stays until the last devotee is guided. His commitment is unmatched and unbreakable. It teaches everyone what true seva means. In this way, the Gaadi Seva (गादी सेवा) of Shankar Maharaj is carried out throughout the entire day with absolute discipline, devotion and dedication. This seva is not just a ritual here of every week's Thursday; it becomes a turning point when many people stuck in multiple predicaments receive clarity, strength and solutions. Many arrive burdened here and return back lighter, carrying hope and a sense of divine support back with them.`
    },
    {
      id: 4,
      image: "blog/four.jpg",
      category: "Spiritual Guidance",
      date: "08/01/2025",
      title: "\"कर्म\" हाच कलियुगाचा धर्म",
      author: "MBSM Trust",
      content: `श्री विश्वेश्वर स्वामी महाराज ( श्री राजाभाऊ कोठारी) त्यांच्या गुरुवार विशेष प्रवचनात म्हणतात:

बघा किती प्रश्न, किती अडचणी आपण आपल्या जीवनामध्ये निर्माण केल्या आहेत. होय! आपण निर्माण केल्या आहेत. आणि जेव्हा त्या प्रश्नांची, अडचणींची फळं भोगण्याची वेळ येते तेव्हा आपली अवस्था त्या भरकटलेल्या पतंगा सारखी होते, कुठे जाऊन पडेल, काय होईल याचा नेम नाही. सांगता येत नाही. आपल्या जीवनाची ही दशा आपण करून ठेवली आहे. माहित नाही काय कधी होईल. आज प्रत्येक क्षण तणावाचा आहे, काळजीचा आहे, चिंतेचा आहे. हे काही कोणी आणून टाकलं नाही. आपल्या भूतकाळातल्या कर्मांमुळे वर्तमानात आपली ही अवस्था आहे. कारण या कलियुगाचा धर्म कर्म आहे, मी सातत्याने सांगत आलो आहे. ऐकून ऐकून कान विटले असतील तुमचे, परंतु सत्य नाकारता येत नाही. आज वर्तमान काळातली जी अवस्था आहे, आपली जी परिस्थिती आहे ती आपल्याच भूतकाळातल्या कर्मांमुळे आहे. आणि अडचण अशी आहे की आपण भूतकाळात जाऊ शकत नाही, चुकीचे कर्म झालेले दुरुस्त करू शकत नाही. काहीही झालं तरी वर्तमानात जगायचंय. आणि मग जेव्हा आपल्याला कळतं की आपल्या भूतकाळातल्या कर्मांमुळे आपली ही अवस्था आहे मग वर्तमान काळात तरी आपण निष्ठापूर्वक अशी काही धडपड, मेहनत आणि सत्कर्म करायला पाहिजेत की आपला येणारा भविष्य काळ हा उज्वलच असेल. योग्य कर्म केल्याने निश्चितच भगवंताची कृपा प्राप्त होते. कर्म हेच सुखी जीवनाचे मर्म.`
    },
    {
      id: 5,
      image: "blog/five.jpg",
      category: "Spiritual Guidance",
      date: "08/01/2025",
      title: "अहंकाराला जपत आधाराचा शोध",
      author: "MBSM Trust",
      content: `श्री विश्वेश्वर स्वामी महाराज (श्री राजाभाऊ कोठारी) त्यांच्या गुरुवार विशेष प्रवचनात म्हणतात:

आजच्या या कलियुगात प्रत्येक चैतन्य अतृप्त आहे. प्रत्येक चैतन्य अशांत आहे, अस्थिर आहे, आपला स्वतःवर विश्वास नाही. प्रत्येकाला मानसिकरीत्या दुसर्‍याच्या आधाराची गरज आहे. इतकी विकलांगता आपल्या मनाची, आपल्या विचारांची झाली आहे की आपल्याला कुणाच्या न कुणाच्या आधाराची गरज पडते. आपल्याला कोणीतरी, आपल्या दुःखावर फुंकर मारणारा हवा असतो. त्याच्या शोधात आपण आपल्या जीवनाचा प्रत्येक श्वास खर्च करतो. पण तो आधार ही असा हवा की तो लक्षात येता कामा नये कारण माझं नाव, माझी इज्जत, माझी पात्रता, माझी लायकी याला कुठेतरी धक्का बसेल. बघा, आपली खोटी प्रतिष्ठा, अहंकार जपण्यासाठी किती तारेवरची कसरत करावी लागते. मनातल्या सर्व असुरक्षितता, अस्वस्थता, वेदना लपवून आपल्याला आपण बाहेरून किती मजबूत आहोत याचं ढोंग करावं लागतं.`
    },
    {
      id: 6,
      image: "blog/six.jpg",
      category: "Spiritual Guidance",
      date: "08/01/2025",
      title: "रात्र आणि दिवस: आयुष्याचं सृष्टीचक्र",
      author: "MBSM Trust",
      content: `विश्वेश्वर स्वामी महाराज (श्री राजाभाऊ कोठारी) त्यांच्या गुरुवार विशेष प्रवचनात म्हणतात:

या सृष्टीचक्राची निर्मिती करताना रात्र आणि दिवस एका मागे एक गुंफले गेले अगदी तसच आपल्या आयुष्यामध्ये, आपल्या संसारामध्ये, अध्यात्मामध्ये रात्र आणि दिवस आहेत. अडचण म्हणजे रात्र आहे आणि त्याचे उत्तर म्हणजे दिवस आहे. एका रात्रीनंतर एक दिवस, एका रात्रीनंतर एक दिवस, दिवसानंतर परत रात्र, दिवसानंतर परत रात्र, म्हणजेच प्रश्नानंतर उत्तर आणि उत्तरानंतर नवीन प्रश्न, नवीन प्रश्न नंतर परत उत्तर. ज्या बुद्धीचा, ज्या ज्ञानाचा आपल्याला मोठा अहंकार, अभिमान आहे, ते ज्ञान, ती बुद्धी किती तोकडी आहे, किती अपुरी आहे हे जेव्हा आपल्या समोर एक मोठं प्रश्न म्हणुन एखादं कर्म उभं राहतं, पाहायला गेलं तर ते भूतकाळातलं कर्म आहे पण जेव्हा ते वर्तमानात प्रश्न म्हणुन उभं राहतं, तेव्हा कळतं आपल्याला, आपलं ज्ञान, आपली बुद्धी, आपलं स्थान त्याची पात्रता, त्याची लायकी ही काहीच नाही हे तेव्हा आपल्या लक्षात येतं. मात्र ते कळेपर्यंत वेळ निघून गेलेली असते. म्हणून आपण वेळेवर सावध होऊन जास्तीतजास्त सत्कर्म करायला पाहिजेत. आणि ही कायम योग्य मार्गावर चालण्याची सद्बुद्धी आपल्याला भगवंताचे नित्य नामजप आणि ध्यानधारणा यातून प्राप्त होते.`
    },
    {
      id: 7,
      image: "blog/seven.jpg",
      category: "Spiritual Guidance",
      date: "08/01/2025",
      title: "त्रिगुण, त्रिगुणात्मक आणि जीवनाचे शाश्वत सत्य",
      author: "MBSM Trust",
      content: `श्री विश्वेश्वर स्वामी महाराज ( श्री राजाभाऊ कोठारी) त्यांच्या गुरुवार विशेष प्रवचनात म्हणतात:

या सृष्टीची रचना तमस, रजस आणि सत्त्व या तीन गुणांवर झालेली आहे. दत्त महाराज त्रिगुणात्मक आहेत. जो त्राता आहे, ज्याच्या कटी लंगोट, काखेत झोळी, संगे चार श्वान आहेत त्यांना अवधूत चिंतन म्हंटलय. वर्णन पहा. कटी लंगोट, काखेत झोळी. येवढाच संसार, येवढाच प्रपंच तो एका झोळीमध्ये सामावला आहे. हे त्रिकालाबाधित सत्य आहे. आणि हे शाश्वत सत्य आपण विसरतो. जन्म आणि मृत्यू या मधला जो कालखंड आहे हा सगळा अशाश्वत आहे, बदलणारा आहे. मात्र जन्म आणि मृत्यू हे कधी ही न बदलणारी गोष्ट आहे. म्हणुन त्याला या सृष्टीचं शाश्वत सत्य मानलं गेलंय. कारण जो जन्माला येतो त्याच्या जन्माबरोबरच त्याचा मृत्यू देखील जन्माला येतो. हेच शाश्वत आहे. हे सगळं आपल्याला समजतं पण वळत नाही. याचं मुख्य कारण म्हणजे आपला अहंकार आणि षडरिपूंनी ग्रस्त असलेलं आपलं मन.`
    },
    {
      id: 8,
      image: "blog/eight.jpg",
      category: "Spiritual Guidance",
      date: "08/01/2025",
      title: "भगवंत दरवेळी वाचवतो, पण आपण स्वतःला सुधारतो का?",
      author: "MBSM Trust",
      content: `श्री विश्वेश्वर स्वामी महाराज त्यांच्या प्रवचनात म्हणतात:

भगवंत खूप दयाळू आहे, मायाळू आहे, साक्षात माऊलीस्वरूप आहे. आपल्या प्रत्येक चुकीला तो पदरात घालतो, आपले अपराध पोटी घेतो. आणि म्हणूनच आपण सातत्याने चुकांवर चुका करत राहतो. आपण विसरतो की आपण ज्या ज्या अवस्थेत जातो, त्या त्या अवस्थेत भगवंतदेखील आपल्याला योग्य असलेलं उत्तर, योग्य असलेला मार्ग कोणत्यानं कोणत्या रुपात दाखवत असतो. मात्र त्या अवस्थेपर्यंत पोहोचेपर्यंत आपलं किती नुकसान होतं आणि त्या नुकसानाचे दुष्परिणाम आपल्या भावी जीवनावर कसे होणार आहेत, हे सगळं आपण तेव्हा बाजूला ठेवतो. फक्त "आत्ता या क्षणी मला ह्यातून बाहेर काढ" एवढीच आपली परमेश्वराकडे मागणी, भावना असते. हा पुढचा सगळा क्रम टाळण्यासाठी आपण वेळेवरच सावध व्हायला पाहिजे, स्वतःला आणखी चुकीची कर्मं करण्यापासून थांबवलं पाहिजे आणि उचल खाऊन नित्यनियमाने सत्कर्म व आपल्या आराध्यदैवताचे स्मरण, नामजप केले पाहिजे. अशाने आपला नक्कीच उद्धार होतो.`
    }
  ];

  const blog = blogs.find(b => b.id === parseInt(blogId));

  if (!blog) {
    return (
      <section className='blog-main'>
        <div className='container'>
          <div className='row'>
            <div className='col-12'>
              <div className='text-center'>
                <h2>Blog Not Found</h2>
                <Link href='/our-blogs' className='btn--primary'>
                  Back to Blogs
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className='blog-main'>
      <div className='container'>
        <div className='row justify-content-center'>
          <div className='col-12 col-lg-8'>
            <article className='blog__single'>
              <div className='blog__single-thumb'>
                <div>
                  <img
                    src={`/assets/images/${blog.image}`}
                    alt={blog.title}
                  />
                </div>
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
                <h4>{blog.title}</h4>
                <div className='blog-content-text'>
                  {blog.content.split('\n\n').map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                  ))}
                </div>
              </div>
              <div className='blog__single-cta'>
                <Link href='/our-blogs'>
                  <i className='fa-solid fa-arrow-left' /> Back to Blogs
                </Link>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogDetail;
