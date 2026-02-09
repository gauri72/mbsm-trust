"use client";
import Link from "next/link";

const BlogDetail = ({ blogId }) => {
  // All 13 blog posts with full content
  const blogs = [
    {
      id: 1,
      image: "blog/one.jpg",
      category: "Spiritual Journey",
      date: "08/01/2026",
      title: "Where a Never-Ending Rainfall of Blessings Flows: The Shankar Maharaj Math in Ahilyanagar",
      author: "MBSM Trust",
      content: `Thursday is an ordinary day for most people. People are engrossed in their daily chores and duties, eagerly waiting for the weekend. But at the Shankar Maharaj Math (pilgrimage) located in the MIDC locality of Ahilyanagar, Maharashtra, "Thursday" carries a different meaning. It is a special day soaked in devotion, peace and quiet miracles. The Math is no less than a beautiful refuge and home of comfort and safety. The Math is a serene place inside the medicine factory of our Guru, Shree Vishweshwar Swami Maharaj (Shree Rajabhau Kothari) to whom we lovingly and respectfully call "Bhaau". The Math is formed by Mangal Bhakt Seva Mandal trust under the loving guidance and leadership of Bhaau. Bhaau deliberately chose this specific location with the divine instructions of Shankar Maharaj. Here, a sacred Umbar tree and a Peepal tree grow beyond the roof of the Math. It is said that Datta Prabhu himself resides here, and this is the very place where Bhaau attained his spiritual realization and had grand darshan of various deities.`
    },
    {
      id: 2,
      image: "blog/two.jpg",
      category: "Community Service",
      date: "08/01/2026",
      title: "Come Here to Experience the True Meaning of Service, Devotion, Charity & Humanity!",
      author: "MBSM Trust",
      content: `The Shankar Maharaj Math is simple and warm, but the energy, the aura it holds is deeply powerful. The Math takes care of every basic need of a devotee. From clean and well-equipped toilets for ladies and gents to tea and food arrangements, everything is taken care of with attention, affection and thoughtfulness. All provisions are made to ensure devotees face zero trouble or inconvenience. The true definition of service, charity and humanity is understood here. People toil here with more dedication than many work for salary. Because their reward is not money but contentment and the grace of God. This remuneration is far more valuable than any high-paid salary. Bhaau is the heart of this Math. We firmly believe that the divine powers of Shankar Maharaj are fully active in him. In his last lifetime, he was Swayam Siddhanath Maharaj, and in this life he is named as Shree Vishweshwar Swami Maharaj by God. We all are immeasurably blessed, graced and fortunate to have him as our spiritual Guru. He is a follower of Nathsampradaya. So, he's a Nathpanthi.`
    },
    {
      id: 3,
      image: "blog/three.jpg",
      category: "Spiritual Service",
      date: "08/01/2026",
      title: "Repairing Lives & Healing Hearts: The Thursday Gaadi Seva of Shankar Maharaj",
      author: "MBSM Trust",
      content: `Yet, despite being showered with such overwhelming love and reverence by countless disciples, followers, and devotees, it is his greatness that Bhaau still humbly calls himself only a devotee and disciple of Sadguru Shankar Maharaj. His humility makes him even more great and divine. Every Thursday, Bhaau dedicates his entire day and self to devotees. Right from Thursday morning till Friday morning, he compassionately listens to all struggling people and offers them both rational and divine remedies to those who come with various kinds of crises, hardships, worries, problems, doubts, fears, and pain. He does not hurry, and he does not rest. No matter how late it gets, he stays until the last devotee is guided. His commitment is unmatched and unbreakable. It teaches everyone what true seva means. In this way, the Gaadi Seva (गादी सेवा) of Shankar Maharaj is carried out throughout the entire day with absolute discipline, devotion and dedication. Not just the Sevekaris, but the family members of Bhaau also take part in various departments of the Seva. They offer their seva proactively to help the Seva proceed with harmony and efficiency. This seva is not merely a weekly ritual held here on every Thursday. It is a turning point when many people stuck in multiple predicaments receive clarity, strength and solutions. Many arrive burdened here and return back lighter, carrying hope and a sense of divine support back with them.`
    },
    {
      id: 4,
      image: "blog/four.jpg",
      category: "Community Service",
      date: "08/01/2026",
      title: "Thursday Annadan Seva: Food that Fulfills the Hunger & Nourishes the Soul",
      author: "MBSM Trust",
      content: `On Thursday, alongside the Gaadi Seva, the Math carries out free Annadan Seva for all visitors throughout the entire day, continuing until the last person is served on Friday. Here, it is believed that "Annadan Shreshtha Daan!," meaning, feeding others is the greatest charity. The food served here is called "Prasad", a sacred offering to God. Simple, savoury, nourishing prasad is served here with respect, dignity and compassion. The menu sometimes includes only khichadi or pithla or sabji accompanied by roti, rice, achaar, chutney, and a sweet. No one is turned away, the prasad never falls short despite the vast crowd. Whenever the food runs out, the sevekaris prepare it again. What keeps all this running smoothly and without any goof-ups or friction is the immaculate guidance and supervision of Bhaau and wholehearted dedication of all the sevekaris. From Thursday dawn till Friday morning, they work tirelessly. They cook, serve, clean, organize, and manage everything without payment or complaints. Their seva is just driven by devotion and love for Bhaau, Sadguru Shankar Maharaj, Swami Samarth Maharaj, and Datta Maharaj. Mangal Bhakt Seva Mandal is not just a trust, it is a warm community shaped by devotion, selfless intention, willingness, humanity, and a deep sense of responsibility towards the society.`
    },
    {
      id: 5,
      image: "blog/five.jpg",
      category: "Spiritual Guidance",
      date: "08/01/2026",
      title: "\"कर्म\" हाच कलियुगाचा धर्म",
      author: "MBSM Trust",
      content: `श्री विश्वेश्वर स्वामी महाराज ( श्री राजाभाऊ कोठारी) त्यांच्या गुरुवार विशेष प्रवचनात म्हणतात:

बघा किती प्रश्न, किती अडचणी आपण आपल्या जीवनामध्ये निर्माण केल्या आहेत. होय! आपण निर्माण केल्या आहेत. आणि जेव्हा त्या प्रश्नांची, अडचणींची फळं भोगण्याची वेळ येते तेव्हा आपली अवस्था त्या भरकटलेल्या पतंगा सारखी होते, कुठे जाऊन पडेल, काय होईल याचा नेम नाही. सांगता येत नाही. आपल्या जीवनाची ही दशा आपण करून ठेवली आहे. माहित नाही काय कधी होईल. आज प्रत्येक क्षण तणावाचा आहे, काळजीचा आहे, चिंतेचा आहे. हे काही कोणी आणून टाकलं नाही. आपल्या भूतकाळातल्या कर्मांमुळे वर्तमानात आपली ही अवस्था आहे. कारण या कलियुगाचा धर्म कर्म आहे, मी सातत्याने सांगत आलो आहे. ऐकून ऐकून कान विटले असतील तुमचे, परंतु सत्य नाकारता येत नाही. आज वर्तमान काळातली जी अवस्था आहे, आपली जी परिस्थिती आहे ती आपल्याच भूतकाळातल्या कर्मांमुळे आहे. आणि अडचण अशी आहे की आपण भूतकाळात जाऊ शकत नाही, चुकीचे कर्म झालेले दुरुस्त करू शकत नाही. काहीही झालं तरी वर्तमानात जगायचंय. आणि मग जेव्हा आपल्याला कळतं की आपल्या भूतकाळातल्या कर्मांमुळे आपली ही अवस्था आहे मग वर्तमान काळात तरी आपण निष्ठापूर्वक अशी काही धडपड, मेहनत आणि सत्कर्म करायला पाहिजेत की आपला येणारा भविष्य काळ हा उज्वलच असेल. योग्य कर्म केल्याने निश्चितच भगवंताची कृपा प्राप्त होते. कर्म हेच सुखी जीवनाचे मर्म.`
    },
    {
      id: 6,
      image: "blog/six.jpg",
      category: "Spiritual Guidance",
      date: "08/01/2026",
      title: "अहंकाराला जपत आधाराचा शोध",
      author: "MBSM Trust",
      content: `श्री विश्वेश्वर स्वामी महाराज (श्री राजाभाऊ कोठारी) त्यांच्या गुरुवार विशेष प्रवचनात म्हणतात:

आजच्या या कलियुगात प्रत्येक चैतन्य अतृप्त आहे. प्रत्येक चैतन्य अशांत आहे, अस्थिर आहे, आपला स्वतःवर विश्वास नाही. प्रत्येकाला मानसिकरीत्या दुसर्‍याच्या आधाराची गरज आहे. इतकी विकलांगता आपल्या मनाची, आपल्या विचारांची झाली आहे की आपल्याला कुणाच्या न कुणाच्या आधाराची गरज पडते. आपल्याला कोणीतरी, आपल्या दुःखावर फुंकर मारणारा हवा असतो. त्याच्या शोधात आपण आपल्या जीवनाचा प्रत्येक श्वास खर्च करतो. पण तो आधार ही असा हवा की तो लक्षात येता कामा नये कारण माझं नाव, माझी इज्जत, माझी पात्रता, माझी लायकी याला कुठेतरी धक्का बसेल. बघा, आपली खोटी प्रतिष्ठा, अहंकार जपण्यासाठी किती तारेवरची कसरत करावी लागते. मनातल्या सर्व असुरक्षितता, अस्वस्थता, वेदना लपवून आपल्याला आपण बाहेरून किती मजबूत आहोत याचं ढोंग करावं लागतं.`
    },
    {
      id: 7,
      image: "blog/seven.jpg",
      category: "Spiritual Guidance",
      date: "08/01/2026",
      title: "रात्र आणि दिवस: आयुष्याचं सृष्टीचक्र",
      author: "MBSM Trust",
      content: `विश्वेश्वर स्वामी महाराज (श्री राजाभाऊ कोठारी) त्यांच्या गुरुवार विशेष प्रवचनात म्हणतात:

या सृष्टीचक्राची निर्मिती करताना रात्र आणि दिवस एका मागे एक गुंफले गेले अगदी तसच आपल्या आयुष्यामध्ये, आपल्या संसारामध्ये, अध्यात्मामध्ये रात्र आणि दिवस आहेत. अडचण म्हणजे रात्र आहे आणि त्याचे उत्तर म्हणजे दिवस आहे. एका रात्रीनंतर एक दिवस, एका रात्रीनंतर एक दिवस, दिवसानंतर परत रात्र, दिवसानंतर परत रात्र, म्हणजेच प्रश्नानंतर उत्तर आणि उत्तरानंतर नवीन प्रश्न, नवीन प्रश्न नंतर परत उत्तर. ज्या बुद्धीचा, ज्या ज्ञानाचा आपल्याला मोठा अहंकार, अभिमान आहे, ते ज्ञान, ती बुद्धी किती तोकडी आहे, किती अपुरी आहे हे जेव्हा आपल्या समोर एक मोठं प्रश्न म्हणुन एखादं कर्म उभं राहतं, पाहायला गेलं तर ते भूतकाळातलं कर्म आहे पण जेव्हा ते वर्तमानात प्रश्न म्हणुन उभं राहतं, तेव्हा कळतं आपल्याला, आपलं ज्ञान, आपली बुद्धी, आपलं स्थान त्याची पात्रता, त्याची लायकी ही काहीच नाही हे तेव्हा आपल्या लक्षात येतं. मात्र ते कळेपर्यंत वेळ निघून गेलेली असते. म्हणून आपण वेळेवर सावध होऊन जास्तीतजास्त सत्कर्म करायला पाहिजेत. आणि ही कायम योग्य मार्गावर चालण्याची सद्बुद्धी आपल्याला भगवंताचे नित्य नामजप आणि ध्यानधारणा यातून प्राप्त होते.`
    },
    {
      id: 8,
      image: "blog/eight.jpg",
      category: "Spiritual Guidance",
      date: "08/01/2026",
      title: "त्रिगुण, त्रिगुणात्मक आणि जीवनाचे शाश्वत सत्य",
      author: "MBSM Trust",
      content: `श्री विश्वेश्वर स्वामी महाराज ( श्री राजाभाऊ कोठारी) त्यांच्या गुरुवार विशेष प्रवचनात म्हणतात:

या सृष्टीची रचना तमस, रजस आणि सत्त्व या तीन गुणांवर झालेली आहे. दत्त महाराज त्रिगुणात्मक आहेत. जो त्राता आहे, ज्याच्या कटी लंगोट, काखेत झोळी, संगे चार श्वान आहेत त्यांना अवधूत चिंतन म्हंटलय. वर्णन पहा. कटी लंगोट, काखेत झोळी. येवढाच संसार, येवढाच प्रपंच तो एका झोळीमध्ये सामावला आहे. हे त्रिकालाबाधित सत्य आहे. आणि हे शाश्वत सत्य आपण विसरतो. जन्म आणि मृत्यू या मधला जो कालखंड आहे हा सगळा अशाश्वत आहे, बदलणारा आहे. मात्र जन्म आणि मृत्यू हे कधी ही न बदलणारी गोष्ट आहे. म्हणुन त्याला या सृष्टीचं शाश्वत सत्य मानलं गेलंय. कारण जो जन्माला येतो त्याच्या जन्माबरोबरच त्याचा मृत्यू देखील जन्माला येतो. हेच शाश्वत आहे. हे सगळं आपल्याला समजतं पण वळत नाही. याचं मुख्य कारण म्हणजे आपला अहंकार आणि षडरिपूंनी ग्रस्त असलेलं आपलं मन.`
    },
    {
      id: 9,
      image: "blog/nine.jpg",
      category: "Spiritual Guidance",
      date: "08/01/2026",
      title: "भगवंत दरवेळी वाचवतो, पण आपण स्वतःला सुधारतो का?",
      author: "MBSM Trust",
      content: `श्री विश्वेश्वर स्वामी महाराज त्यांच्या प्रवचनात म्हणतात:

भगवंत खूप दयाळू आहे, मायाळू आहे, साक्षात माऊलीस्वरूप आहे. आपल्या प्रत्येक चुकीला तो पदरात घालतो, आपले अपराध पोटी घेतो. आणि म्हणूनच आपण सातत्याने चुकांवर चुका करत राहतो. आपण विसरतो की आपण ज्या ज्या अवस्थेत जातो, त्या त्या अवस्थेत भगवंतदेखील आपल्याला योग्य असलेलं उत्तर, योग्य असलेला मार्ग कोणत्यानं कोणत्या रुपात दाखवत असतो. मात्र त्या अवस्थेपर्यंत पोहोचेपर्यंत आपलं किती नुकसान होतं आणि त्या नुकसानाचे दुष्परिणाम आपल्या भावी जीवनावर कसे होणार आहेत, हे सगळं आपण तेव्हा बाजूला ठेवतो. फक्त "आत्ता या क्षणी मला ह्यातून बाहेर काढ" एवढीच आपली परमेश्वराकडे मागणी, भावना असते. हा पुढचा सगळा क्रम टाळण्यासाठी आपण वेळेवरच सावध व्हायला पाहिजे, स्वतःला आणखी चुकीची कर्मं करण्यापासून थांबवलं पाहिजे आणि उचल खाऊन नित्यनियमाने सत्कर्म व आपल्या आराध्यदैवताचे स्मरण, नामजप केले पाहिजे. अशाने आपला नक्कीच उद्धार होतो.`
    },
    {
      id: 10,
      image: "blog/ten.jpg",
      category: "Spiritual Guidance",
      date: "08/01/2026",
      title: "मानव जन्म, षडरिपू आणि गुरूचे महत्व",
      author: "MBSM Trust",
      content: `आपला जन्म हा मानव योनीतला जन्म आहे. मानव योनीतला जन्म म्हणजे वासनेतला जन्म. आपण असेच प्रकट नाही झालो, आपण आपल्या आई वडिलांच्या पोटी जन्म घेतला आहे. म्हणजे जन्मापासूनच षडरिपू आपल्या सोबत आले आहेत. त्यांनी आपल्याला जन्मापासूनच जकडून ठेवलं आहे. आणि जसा मदारी माकडाला नाचवतो तसे हे सहा रिपू आपल्या मनाला नाचवत असतात. आपला प्रत्येक विचार, आपलं प्रत्येक कर्म हा षडरिपू ठरवत असतात. एकदा का आपण त्या मोह, काम, क्रोध, मत्सर, लोभ आणि अहंकारामध्ये अडकलो की आपल्याला कुठलंही भान राहत नाही. त्यामुळे जीवनात आपल्याकडून अनेकदा नाही नाही ते चुकीचे कर्म घडतात. या सृष्टीच्या नियमाप्रमाणे, आपल्याला आपल्या प्रत्येक चांगल्या आणि वाईट कर्माचं फळ भोगावं लागतं. आपण भूतकाळात केलले चुकीचे कृत्य वर्तमानात आपल्या विविध वेदना आणि कष्टांच्या रूपाने आपल्यापाशी येतात. अडचण अशी आहे की आपण भूतकाळात जाऊन आपल्याकडून झालेले चुकीचे कर्म बदलू शकत नाही, दुरूस्त करू शकत नाही. मग आपले कर्म षडरिपूंचा जास्त परिणाम न होता शुद्ध, सात्त्विक कसे घडतील या करता आपल्याला एका गुरूची आवश्यकता असते. गुरूंची कृपा आपल्याला कधीही भरकटू देत नाही आणि जीवनाच्या प्रत्येक वळणावर योग्य मार्गावर चालण्याची बुद्धी देते. आणि या ब्रम्हांडातला सर्वोच्च गुरु म्हणजे दत्त प्रभु. ज्यांनी या सृष्टीची निर्मिती केली, या ब्रम्हांडाची निर्मिती केली अशा या दत्त प्रभुंच्या व्यतिरिक्त दुसरा कुठलाही त्यांच्याहून श्रेष्ठ गुरु असूच शकत नाही.`
    },
    {
      id: 11,
      image: "blog/eleven.jpg",
      category: "Spiritual Guidance",
      date: "06/02/2026",
      title: "सुख, शांती आणि समाधानाची दारे कशी उघडतील?",
      author: "MBSM Trust",
      content: `आपल्या पात्रते पेक्षा, आपल्या लायकी पेक्षा जास्त ओझं आपण आपल्या मांडीवर, आपल्या पाठीवर ओढून घेतलं आहे. आपल्या विचारांवर आपण इतकं ओझं ओढून घेतलं आहे आणि त्याचाच परिणाम म्हणुन आपण केवळ स्वतःला नव्हे तर जगात अवतीभवती इतरांना देखील पाहिलं तर सगळीकडे अशांतता आहे, अस्थिरता आहे. आपल्याला ज्या शास्त्राचा, सायन्सचा, आधुनिक तंत्रज्ञानाचा इतका अभिमान आहे त्यामुळे आपण पंचमहाभूतांच्या वर्चस्वाला आव्हान देण्याचं कार्य करतोय. हे आपण समजून घ्यायला पाहिजे. आणि म्हणुन उत्तराखंड मधील धराली, मंडी, कुलू सारख्या जगभरामध्ये युद्धजन्य परिस्थिती आहे. आणि या नैसर्गिक आपदा आपण या धराली, मंडी, कुलू, उत्तराखंड मध्ये उत्पन्न केल्या आहेत. आपण डायरेक्ट त्या प्रकृतीला आव्हान दिलं आहे. आपल्या बुद्धीचा, आपल्या ज्ञानाचा आपल्याला इतका अहंकार, अभिमान झाला आणि त्या अहंकार, अभिमानापोटी आपण उत्तराखंडमध्ये इतकं काही विकासाचं कार्य हाती घेतलं, आपण विसरून गेलो की आपण तिथल्या प्रकृतीवर अतिक्रमण करतोय. अतिक्रमण करायला ती कुठलीही जागा किंवा वस्तू नाहीये. ते निसर्ग आहे, पंचमहाभूत आहेत. 2013 साली केदारनाथमध्ये जो काही कहर झाला, तो प्रसंग याचाच एक उत्तम उदाहरण आहे. त्या नंदिने 80 वर्ष जूनं आपलं स्वरूप परत प्राप्त केलं. नदीने आपलं पात्र जसं होतं तसं परी पूर्ववत केलं आणि त्यात मनुष्याने केलंलं सगळं अतिक्रमण एका क्षणात वाहून गेलं. अशीच अवस्था सेम धराली मध्ये सुद्धा आहे. हे कुठेतरी आपल्याला कळतं, परंतु वळत नाही. कारण आपल्या बुद्धीवर आपला मोठा अहंकार, अभिमान विराजमान असतो. परंतु त्याचे दुष्परिणाम काय आहेत हे समजत असूनही आपण त्याच्याकडे सोयीस्करपणे डोळेझाक करतो. आणि त्याच्याच परिणाम स्वरुप अशा भयंकर घटना घडतात. असच काहीसं संसारात, आयुष्यात, जीवनात, व्यवहारात, अध्यात्मिक जगात, राजकारणात, समाजसेवेत प्रत्येक क्षेत्रात आहे. आपण प्रत्येकावर अतिक्रमण करण्याचा प्रयत्न करतो मग ते नातेसंबंध असो, व्यवहार असो, संसार असो, अध्यात्म असो किंवा धर्म असो. आणि यातून प्राप्त काय होतं?, तर असमाधान, अशांतता, अस्थिरता. आपण पाहिलं तर, असमाधान, अशांतता, अस्थिरता, हे सगळे शब्द सुद्धा 'अ' पासून अहंकार, अभिमानामुळे तयार होतात. आणि म्हणुन आजच्या या कलियुगात प्रत्येक चैतन्य अतृप्त आहे. प्रत्येक चैतन्य अशांत आहे, अस्थिर आहे. पूर्णपणे सुखी कोणीच नाहीये. ही पोकळी आपण आपल्यामध्ये निर्माण केली आहे. आपल्या अशा अवस्थेतसाठी आपणच कारणीभूत आहोत. म्हणूनच आपण आपल्या अहंकारावर ताबा ठेवला पाहिजे आणि आपलं ज्ञान हे आपलं नसून परमेश्वराची एक देणगी आहे असं आपलं आचरण असले पाहिजे. ही गोष्ट कळाली आणि आपल्यात खरी नम्रता आली की आपल्याला आपली पात्रता उमगते. नंतर आपल्याला कळतं की आपण काहीच नाही आहोत. आणि तेव्हा आपल्याला एक दिव्य सुख, समाधान आणि शांतीची अनुभुती होते.`
    },
    {
      id: 12,
      image: "blog/twelve.jpg",
      category: "Community Service",
      date: "06/02/2026",
      title: "Food is Sacred; Wastage is Strictly Prohibited at the Annadan Seva of MBSM",
      author: "MBSM Trust",
      content: `At the serene Shankar Maharaj Math (Pilgrimage) of Mangal Bhakt Seva Mandal (MBSM) in MIDC, Ahilyanagar, the continuous Annadan Seva is carried out with deep devotion and discipline on every Thursday, and on grand occasions like Shankar Maharaj Prakat Din, Shankar Maharaj Samadhi Divas, Guru Pournima, and the birth anniversary of our beloved Guru, Shree Vishweshwar Swami Maharaj (Bhaau). Here, during this Annadan Seva, not even a single speck of prasad is allowed to be wasted. Our honourable Bhaau, says and teaches us that “अन्न हे पूर्ण ब्रह्म असतं” (Food is the complete form of the Divine), and therefore leaving even a particle of prasad on the plate is not at all permitted. We must keep this in mind not only while having prasad here but also while having our daily meals. This is the pearl principle and philosophy of Bhaau. With this sacred belief, the sevekaris (volunteers) who collect the plates at the end gently ensure that the Prasad has been consumed completely and with kindness, ask us to finish if anything remains. The Prasad is entirely limitless here, and everyone is welcome to take as much as they wish. The only condition is that our Bhaau and the sevekaris always strictly instruct and politely request us to take only as much as we need, assuring us that more Prasad will be lovingly served, as many times as required. Wasting food is considered a great sin, a crime, and a disrespect to Annapurna Mata (Goddess of Food). We should always value and be grateful for every morsel of the food we receive. This system instills a sense of gratitude and humility for the food we get to eat each day. We think that we earn our bread through hard efforts, but in reality, it is ultimately God who blesses us with the precious food to satisfy our hunger. And a blessing should be sincerely cherished and treated with utmost respect. The culture at the Shankar Maharaj Math of MBSM is pure and selfless, a beautiful tradition of only giving without expecting anything in return. Something splendid, we rarely find nowadays in this self-centered and busy world.`
    },
    {
      id: 13,
      image: "blog/thirteen.jpg",
      category: "Spiritual Journey",
      date: "06/02/2026",
      title: "What's In a Name? Faith, Peace & Power!",
      author: "MBSM Trust",
      content: `William Shakespeare once asked, “What’s in a name?” Well, only the disciples and devotees of our Guru, Shree Vishweshwar Swami Maharaj (Bhaau), know what a name can actually hold. We all have names with different meanings but Shree Vishweshwar Swami Maharaj is not just a name. It is a strong support, a feeling, a pleasant breeze of relief and an assurance. It is a name on which we can rely on our hopes, our breath, and our life. 'Vishweshwar' is a name bestowed personally by God to our Guru and is one of the countless sacred names of Lord Shiva. Vishweshwar to us means 'Vishwas' (faith) and our 'Vishwa' (World). Shree Vishweshwar Swami Maharaj is a powerful name in which the entire power of Sadguru Shankar Maharaj dwells. Those who have deeply fallen in love with this name understand the real depth it carries. Those who trust this name triumph in the most difficult battles of life. Those who surrender their lives to this name find the real meaning of miracles. Faith, devotion, love, positivity, divinity, miracles and grace, everything lies in this one name. The people who have etched this name on their hearts experience the highest peace and protection. We all take pride in recognizing and serving this glorious name. Today is the special day when this beautiful name incarnated again in this world transformed lakhs of lives. We're truly fortunate to be guided and associated with this name. We are blessed and proud that this name has held our hands, like a parent, to show us the way to spiritual and overall progress in life. Mangal Bhakt Seva Mandal wishes our beloved Bhaau, A Many Happy Returns of the Day!`
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




