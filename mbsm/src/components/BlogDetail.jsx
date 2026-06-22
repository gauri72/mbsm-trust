"use client";
import Link from "next/link";

const BlogDetail = ({ blogId }) => {
  // All blog posts with full content
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
      content: `William Shakespeare once asked, “What’s in a name?” Well, only the disciples and devotees of our Guru, Shree Vishweshwar Swami Maharaj (Bhaau), know what a name can actually hold. We all have names with different meanings but Shree Vishweshwar Swami Maharaj is not just a name. It is a strong support, a feeling, a pleasant breeze of relief and an assurance. It is a name on which we can rely on our hopes, our breath, and our life. 'Vishweshwar' is a name bestowed personally by God to our Guru and is one of the countless sacred names of Lord Shiva. Vishweshwar to us means 'Vishwas' (faith) and our 'Vishwa' (World). Shree Vishweshwar Swami Maharaj is a powerful name in which the entire power of Sadguru Shankar Maharaj dwells. Those who have deeply fallen in love with this name understand the real depth it carries. Those who trust this name triumph in the most difficult battles of life. Those who surrender their lives to this name find the real meaning of miracles. Faith, devotion, love, positivity, divinity, miracles and grace, everything lies in this one name. The people who have etched this name on their hearts experience the highest peace and protection. We all take pride in recognizing and serving this glorious name. Today is the special day when this beautiful name incarnated again in this world transformed lakhs of lives. We're truly fortunate to be guided and associated with this name. We are blessed and proud that this name has held our hands, like a parent, to show us the way to spiritual and overall progress in life. Mangal Bhakt Seva Mandal wishes our beloved Bhaau, A Many Happy Returns of the Day!`,
    },
    {
      id: 14,
      image: "blog/fourteen.jpg",
      category: "Spiritual Guidance",
      date: "18/03/2026",
      title: "मानव जन्म: मुक्तीचा मार्ग",
      author: "MBSM Trust",
      content: `या अवघ्या ब्रम्हांडामध्ये एकूण ८४ लाख योनी आहेत. ८४ लाख योनींमध्ये मानव योनी ही सर्वात विशेष आणि सर्वोत्तम योनी आहे. या मानव योनीत जन्म मिळण्यासाठी अपार पुण्य आणि उत्तम नशीब लागतं. आपण खरंच भाग्यवान आहोत की आपल्याला या जन्मात मानव जन्म लाभला आहे.

मानव हा एकमेव प्राणी आहे ज्याला बुद्धी आणि वाणीचं वरदान मिळालं आहे. फक्त मनुष्यालच देवाने विवेक आणि वाणी देऊन पृथ्वीवर पाठवलं आहे. इतर कोणत्याही जीवाकडे या क्षमता नाहीत.

मानव जन्मातच भक्ती करता येते, पुण्य आपल्या खात्यात साठवता येतं आणि ८४ लाख योनींच्या फेऱ्यांतून मुक्ती मिळवता येते. म्हणूनच मानव जन्म हा मुक्तीचा दरवाजा आहे. पण या जन्मात जसा मुक्तीचा दरवाजा खुला होतो, तसाच पुन्हा ८४ लाख योनींचा चक्रव्यूह देखील तयार होतो.

मानव जन्म हे वरदानही आहे आणि परीक्षाही. याचं कारणही आपल्याला मिळालेलं बुद्धी आणि वाणीचं वरदानच आहे. देव, यक्ष आणि गंधर्व सुद्धा मानव जन्म मिळावा यासाठी उत्सुक असतात, कारण ना स्वर्गात साधना, नामस्मरण, पुण्य करता येते, ना नरकात. भक्ती आणि पुण्य फक्त मृत्युलोकात, मानव योनीतच करता येतं.

म्हणून आपण आपल्या बुद्धी आणि वाणीचा योग्य वापर केला पाहिजे. षडरिपूंचा समतोल ठेवला पाहिजे. आपला जन्म वासनेतून झाल्यामुळे षडरिपू जन्मापासून आपल्या प्रत्येकाच्या सोबत आले आहेत. त्यांच्यावर बंधन घालण्याची गरज नाही, फक्त त्यांचा योग्य समतोल राखणं महत्त्वाचं आहे.

हे जर आपण वेळेत केलं नाही, तर आपल्या पुण्यापेक्षा आपल्या पापाचं ओझं जास्त वाढत जाईल, आणि मग पुढचे कित्येक जन्म आपण अनेक वेगवेगळ्या योनींमध्ये फिरत राहू.

आणि हे कलियुग आहे ज्याचा स्वामी रावण, कली आहे. तो आपल्या सर्वांच्या मनावर राज्य करतो. म्हणून कलियुगात या सर्व गोष्टींचं प्रत्येक क्षणी भान ठेवणं अत्यंत आवश्यक आहे.`
    },
    {
      id: 15,
      image: "blog/fifteen.jpg",
      category: "Spiritual Guidance",
      date: "18/03/2026",
      title: "जो खुदको जानता हैं, वहीं मुझे पहचानता हैं|",
      author: "MBSM Trust",
      content: `श्री दत्तप्रभूंच्या सप्तशी॔ स्वरुपातलं, शेवटचं, स्वरुप म्हणजे सद्गुरु शंकर महाराज. "शं" म्हणजे कल्याण आणि "कर" म्हणजे कल्याण करणारा. सर्वांचं कल्याण करणारे शंकर महाराज.

शंकर महाराज त्यांच्या भक्तांना कायम सांगतात "जो खुदको जानता हैं, वहीं मुझे पहचानता हैं|" किती सरळ आणि सोप्प आहे. पण आपल्याला हे वाक्य कळून ही वळत नाही.

आपण स्वतःला ख-या अर्थाने ओळखत नाही. आपण आपली पात्रता ओळखत नाही. आपल्याला फक्त आपलं नाव आणि आपण व्यवसायाने कोण आहोत हे माहीत आहे.

आज आपल्याला कोणी विचारलं की "तू कोण आहेस?" तर आपण पटकन आपलं नाव आणि आपण प्रोफेशनली काय करतो हे सांगु. पण आपल्या अंतर्मनाला, आपल्या आत्म्याला आपण ओळखत नाही.

कारण आपण कधी हे अंतर्मुख होऊन स्वतःला विचारलच नाही की आपण नक्की कोण आहोत. आणि जोपर्यंत त्याचं उत्तर आपल्याला मिळत नाही आणि आपण आपल्याला जाणून घेत नाही तोपर्यंत शंकर महाराज आपल्याला कळणार नाहीत. तोपर्यंत आपल्याला भगवत प्राप्त होणार नाही.

त्यासाठी तर शंकर महाराज म्हणतात, "समझता है तो समझ ले, बाद में पछताना है, मेरा क्या बिघडता है, रोना धोना तेरा हैं|"

अंतिम श्वासाला, वेळ निघून गेल्यावर ह्याची जाणीव होऊन काहीच उपयोग नाही. तेव्हा आपल्याला पश्चात बुद्धी म्हणजेच पश्चाताप होतो.

म्हणुन वेळेत आपण ही शंकर महाराजांची शिकवण, एक अमूल्य सल्ला समजून आमलात आणायला पाहिजे.

जर आपण आपली खरी लायकी ओळखली, आपले गुण दोष ओळखले आणि आपण स्वतःला आपल्या सामाजिक स्थानापलिकडे पाहिलं तरच आपण आपल्याला ओळखू शकु आणि या जन्मात आपलं पृथ्वीवर काय ध्येय आहे हे आपल्याला कळेल.

याने फक्त आध्यात्मिक गती नव्हे तर भौतिक जगात ही गती मिळू शकेल.`
    },
    {
      id: 16,
      image: "blog/sixteen.jpg",
      category: "Spiritual Guidance",
      date: "18/03/2026",
      title: "सद्गुरु कृपा",
      author: "MBSM Trust",
      content: `सद्गुरुंची कृपा कधीही शब्दात व्यक्त करता येत नाही. कारण अनुभवाविना ती सांगता येत नाही आणि जरी आपण सांगितलं तरी ते इतरांना मान्य होत नाही.

अशा या सद्गुरु कृपेचा ज्याने लाभ घेतला, त्याचं जीवन अंतर्बाह्य बदलून जातं. त्याला स्वतःला देखील कळत नाही की आपण कधी इतके बदललो आणि कसे बदललो.

मात्र अशी कृपा, असा साक्षात्कार आणि असा उद्धार प्रत्येकाच्या भाग्यात नसतो. किंबहुना प्रत्येकाच्या भाग्यात असूनही त्याला त्याचा लाभ घेता येत नाही. त्याला त्या अमूल्य कृपेची जाणीव होत नाही.

कारण या जन्मामध्ये, या मानव योनीमध्ये या षडरिपूंचं इतकं प्राबल्य आपल्यावर आहे, इतकं आधिपत्य हे षडरिपू आपल्यावर गाजवत असतात की सगळं समजत असूनही आपल्याला वळत नाही. आणि जेव्हा ते समजतं, वळतं तेव्हा वेळ निघून गेलेली असते.

आपला अहंकार आपल्याला ह्या जाणीवेपासून दूर ठेवतो. प्रत्येक कृपेत आपण फक्त लॉजिक शोधतो.

सद्गुरुंच्या कृपेवर कधीही शंका घ्यायची नसते. कारण या जगात त्यांना अशक्य असं काही नाहिये. आणि त्यांच्या लीला, कार्यपद्धती आपल्या समजण्यापलिकडे असतात. त्यामुळे आपली बुद्धी लावून उपयोग नाही.

शेवटी "मानो तो चमत्कार, ना मानो तो सब बेकार!" म्हणून जीवनात घडणारी प्रत्येक चांगली घटना, नकळत टळलेलं संकट किंवा लहान-मोठा चमत्कार हा केवळ योगायोग न मानता गुरुकृपा मानावी.

जेव्हा कळत नाही की आपल्या कित्तेक अडचणी कशा मिटल्या आणि आपण सहजपणे कसे तरलो तेव्हा समजावं की आपल्यावर आपल्या सद्गुरुंची कृपा झाली आहे.

आपला प्रत्येक श्वासही एक चमत्कार आहे, असे समजून नेहमी कृतज्ञ राहावे. अशी गुरुकृपेची जाणीव झाल्यावर मनात जी अनुभूती उमलते, ती खरंच दिव्य असते.

अशी असीम श्रद्धा असेल तरच गुरुकृपेचा ख-या अर्थाने लाभ घेता येतो आणि आध्यात्मिक गती प्राप्त होते.`
    },
    {
      id: 17,
      image: "blog/seventeen.jpg",
      category: "Spiritual Guidance",
      date: "18/03/2026",
      title: "\"अवलिया\", ज्यांच्या शब्दकोशात अशक्य असा शब्दच नाही!",
      author: "MBSM Trust",
      content: `"अवलिया", ज्यांच्या शब्दकोशात अशक्य असा शब्दच नाही!

ज्यांच्या कटी लंगोट, काखेत झोळी आणि संगे चार श्वान आहेत त्यांना अवधूत चिंतन म्हंटलय. जो स्वयं दाता आहे, ज्याच्या नामातच दातृत्व सामावलं आहे, तो दत्त आहे. तो कधीच काही घेत नाही, तो केवळ सतत मोकळ्या हाताने देत राहतो.

दिगंबर अवस्थेत असल्यामुळे तो दिगंबर आहे. दिगंबर म्हणजे निरंकार, बंधनमुक्त.

असे हे दत्त प्रभु या ब्रह्मांडात सप्तर्षी स्वरूप घेऊन अवतीर्ण झाले आहेत. हे दिव्य सात अवतार म्हणजे स्वयं श्री दत्त गुरु, कृपाळू व करुणामयी आणि दत्तांचे प्रथम अवतार, श्रीपाद श्रीवल्लभ, त्यानंतर नरसिंह सरस्वती, तसेच गजानन महाराज, स्वामी समर्थ महाराज, साईनाथ महाराज आणि सद्गुरु शंकर महाराज.

या सप्तशी॔ स्वरुपांपैकी गजानन महाराज, स्वामी समर्थ महाराज, साईनाथ महाराज आणि शंकर महाराज हे अवलिया स्वरुप भगवंत आहेत.

हे स्वरुप का अवलिया आहेत? कारण ते अयोनी प्रकट झाले आहेत. अयोनी प्रकट झाले आहेत हे म्हणणं सोप्प आहे पण त्या मागचं महात्म्य इतकं मोठं आहे.

वासना रहित जन्म असल्यामुळे षडरिपु विरहित हे प्रत्येक चैतन्य आहे. आपला सगळ्यांचा जन्म वासनेतला, योनीतला आहे. परंतु ही भगवंत अयोनी प्रकट झाले आहेत, त्यांचा वासना रहित जन्म आहे आणि म्हणुन षडरिपु विरहित हे चैतन्य आहे.

आणि जिथे षडरिपु विरहित चैतन्य असतं तिथे पंचमहाभूतांवर आपोआप वर्चस्व प्राप्त होतं. या सृष्टीची निर्मिती पंचमहाभूतांपासून झाली आहे. मग सजीव असो किंवा निर्जीव असो, प्रत्येकाची निर्मितीच पंचमहाभूतांपासून झाली आहे.

या पंचमहाभूतांवर या अवलियांचं वर्चस्व, आधिपत्य आहे. म्हणुन, अशक्य ते शक्य फक्त अवलियाच करू शकतात, भगवंत ही नाही करू शकत.

भगवंताला एक चौकट आहे. या चौकटीच्या बाहेर भगवंत कर्म करू शकत नाहीत. मात्र अवलिया कुठल्याही चौकटीत बसत नाहीत.

आणि म्हणुन या अवलियांच्या डिक्शनरी मध्ये ईमपॉसिबल शब्द नाहिये. There is not a single word that indicates impossible is in my dictionary because "I am possible".

आणि म्हणुन अशक्य ते शक्य करतील स्वामी! आणि हे सर्व अवलिया स्वरुप भगवंत.`
    },
    {
      id: 18,
      image: "blog/eighteen.jpg",
      category: "Spiritual Guidance",
      date: "18/03/2026",
      title: "आपला भक्तिभाव शुद्ध कसा होईल आणि आपल्याला खरं समाधान कसं मिळेल?",
      author: "MBSM Trust",
      content: `आपला भक्तिभाव शुद्ध कसा होईल आणि आपल्याला खरं समाधान कसं मिळेल?

आज जर आपण पाहिलं तर एकही मंदिर, मस्जिद, चर्च, गिरिजाघर, कुठेही जा, गर्दीच गर्दी दिसते. कारण अशांतता, अस्वस्थता इतकी वाढली आहे की समाधान कशातच मिळत नाही.

कितीही दिलं भगवंताने तरीही आपण अतृप्तच असतो. ज्यांच्या कटी लंगोट, काखेत झोळी आणि संगे चार श्वान आहेत त्यांना अवधूत चिंतन म्हंटलय. जो स्वयं दाता आहे, ज्याच्या नामातच दातृत्व सामावलं आहे, तो दत्त आहे. तो केवळ देण्याचं काम करतो. कधी घेत काही नाही.

फक्त आपला भाव शुद्ध पाहिजे. मग, या कलियुगात तो शुद्ध भाव कसा निर्माण होतो? या अस्थिरतेमध्ये आपल्या मनाला स्थिरता कशी प्राप्त होते? या असमाधानी चैतन्याला खरं समाधान कसं प्राप्त होतं?

हे सगळं भगवंताच्या नाम-जपाने प्राप्त होतं. या नाम-जपाची नेमकी महती काय आहे हे आपण जाणून घेऊ या.

नाम शब्दाची जर आपण फोड केली तर त्यामध्ये "मन" सामावलं आहे. मग आपल्याला फक्त इतकच करायचं आहे की मनात "नाम" स्थानापन्न करायचं आहे.

हे वाटतं तितकं सोपं नाही आणि वाटतं तितकं अवघड पण नाही. ती एकरूपता झाली पाहिजे नामाशी. आणि ती तेव्हाच होते जेव्हा मनात नाम स्थानापन्न होतं.

ज्या चैतन्याचं मन आणि नाम एकरूप झालं त्या प्रत्येक चैतन्याला ती अनुभुती, ते सुख आणि ते समाधान मिळाल्या शिवाय राहत नाही.

आणि ते एकरूप नसेल जरी झालं तर वातावरणात जी चमत्कारिक शांतता निर्माण होते ती तो प्रत्येक नाम-जप करणारा किंवा ऐकणारा व्यक्ति अनुभवतोच.

त्या दिव्य नाम-जपाच्या ध्वनी-लहरींनी वातावरण देखील शुद्ध होऊन जातं. नाम-जप आपल्या मनातली आणि वातावरणातली सगळी अशुद्धी आणि नकारात्मकता शोषून घेतं.

इतकी ताकत, इतकं सामर्थ्य नाम-जपात असतं. त्या सद्गुरुंच्या नाम-जपातूनच खरी तृप्तता, संतुष्टता, समाधान, स्थिरता आपल्याला प्राप्त होते.`
    },
    {
      id: 19,
      image: "blog/nineteen.jpg",
      category: "Spiritual Guidance",
      date: "18/03/2026",
      title: "आनंदाचा अडथळा, \"अहंकार\"",
      author: "MBSM Trust",
      content: `आनंदाचा अडथळा, "अहंकार"

आजच्या या जगामध्ये प्रत्येक चैतन्याला आपल्या ज्ञनाचा, आपल्या बुद्धीचा, आपल्या प्रत्येक कर्माचा इतका अहंकार, अभिमान आहे की, ज्याप्रमाणे एका बैलगाडी खाली कुत्रा चालतो आणि ती बैलगाडी थांबली की तो कुत्रा अंग झटकत बाहेर येतो आणि असं दर्शवत असतो की जणू सगळं ओझं मीच ओढलं. पण खरं असं नसतं. ओझं ओढणारा तो बैल असतो. मोठेपण मात्र कुत्रा घेत असतो.

आपल्या दैनंदिन जीवनात आपण देखील असच काहीसं करत असतो. म्हणजे कर्म कोणीतरी दुसरं करत असतं पण आपल्यालाच त्या कर्माचं महत्व, फळ, श्रेय मिळालं पाहिजे अशा वृत्ताने आपण आपलं प्रत्येक शब्द बोलण्याचा आणि प्रत्येक कर्म करण्याचा प्रयत्न करतो.

आज या कलियुगामध्ये सगळीकडे अस्वस्थता आहे, अशांतता आहे. प्रत्येकाला सुख, शांती, समाधान हवं आहे. पण या समाधान, सुख आणि शांतीच्या अगोदर "अ" लागलेला आहे. हा "अ" म्हणजे अहंकाराचा, अभिमानाचा "अ".

आपण जेव्हा भगवंताच्या दरबारात असतो, जेव्हा आपण त्याच्या चरणी नतमस्तक होत असतो तेव्हा आपण आपल्या या अहंकाराची पादत्राणे बाहेर ठेवली पाहिजेत.

मंदिराच्या गर्भगृहात जाण्याआधी आपण नेहमी आपल्या पायातली वाहने, चपला बाहेर काढतो मात्र या अंतःकरणात असलेले अहंकाररुपी, अभिमानरुपी चपला आपण आपल्या बरोबर घेऊन जातो.

आणि मग आपण त्या भगवंताच्या चरणी नतमस्तक होण्याचं नाटक करतो. तेव्हा भगवंत देखील आपल्याला आशिर्वाद देण्याचं नाटकच करतो.

दैवाने दिलं आणि कर्माने घालवलं अशी आपली परिस्थिती आहे. देवाने, भगवंताने आपल्याला भरपूर दिलं पण आपल्या कर्माने आपण ते गमावून बसलो. म्हणुन आपण कर्मदरिद्री ठरतो.`
    },
    {
      id: 20,
      image: "blog/twenty.jpg",
      category: "Spiritual Guidance",
      date: "18/03/2026",
      title: "MBSM Hanuman Chalisa Pathan & Bhajan Sandhya: Intent & Effect",
      author: "MBSM Trust",
      content: `MBSM Hanuman Chalisa Pathan & Bhajan Sandhya: Intent & Effect

Every year, Mangal Bhakt Seva Mandal (MBSM) devotedly carries out the sacred Hanuman Chalisa Pathan & Bhajan Sandhya for 41 continuous days until Hanuman Jayanti. What began as a spiritual initiative 28 years ago under the divine guidance and instructions of Sadguru Shankar Maharaj to our Guru, Shree Vishweshwar Swami Maharaj (Bhaau) has today blossomed into a special annual tradition that countless devotees await with eagerness and devotion.

This divine event was first initiated by MBSM in Ahilyanagar with the noble intent of spreading greater awareness about Sanatan Dharma and offering people a serene pause from worldly stress, worries and responsibilities. For two hours every evening, from 8:30 PM to 10:30 PM, this vibrant and soothing event engrosses devotees in the collective chanting of the Hanuman Chalisa and many soul-stirring Bhajans, crafting an experience that can only be described as divya and aloukik.

A remarkable aspect of this Bhajan Sandhya is its purity and sincerity. No recordings are used here. Unlike many such events, it is not a usual orchestra arranged for musical pleasure and entertainment. And MBSM ensures that it also never becomes one. Every devotional song and Bhajan is delivered live by the melodious singing sevekaris (volunteers) of MBSM. The accompanying expert musicians are also arranged by the MBSM itself. The singers and instrumentalists complement each other beautifully, performing their seva flawlessly and harmoniously. Many singing volunteers have been steadfastly offering seva in this Hanuman Chalisa Pathan and Bhajan Sandhya and with tough practice, devotion, willingness and efforts.

This event is carried out in collaboration with 40 different mandals and individuals. Each of them is personally chosen, selected, and approved by Bhaau himself. All arrangements are made collaboratively, reflecting unity in devotion and collective efforts to please God and serve society. The concluding, 41st Hanuman Chalisa Pathan and Bhajan Sandhya is organized by Mangal Bhakt Seva Mandal (MBSM) itself at the MBSM Math, making the conclusion of this 41-day journey even more fulfilling. Pleasant.

Bhaau remains physically present every single day of this 41-day event. Not only does he guide, oversee, and bless the gathering, but he also contributes by performing the Hanuman Chalisa and several bhajans during the Bhajan Sandhya in his broad voice, holding the softness of devotion and compassion. He often says that Lord Hanuman and Shankar Maharaj themselves remain present and bless the attendees during this Hanuman Chalisa Pathan and Bhajan Sandhya. According to him, anyone who gets the opportunity to attend this grand satsang is himself invited and graced by God. Such a devotee is indeed truly fortunate.

The seating arrangements are thoughtfully made in such a way that every devotee can sit comfortably, no matter how congested the location is, and relish each Bhajan peacefully and delightfully. A large crowd of devotee assembles daily, not just to attend this event, but to engage, recite along, reflect, surrender, soak in the positive energy of the atmosphere and get drenched in the colours of devotion.

What makes this initiative even more commendable is that it is conducted completely voluntarily and free of cost by MBSM along with the collaborating mandals and individuals. It is one of the most challenging sevas and initiatives undertaken by MBSM. Because each member of the MBSM family takes out time from their busy daily routine and strives to make this grand celebration of devotion a success with systematic planning, tireless practice, and smooth execution. Yet, it is executed year after year with the same commitment and reverence.

The Hanuman Chalisa Pathan & Bhajan Sandhya is not just another program. It is a spiritual treat too expensive to miss. It is where every vibration of the music transmits healing. Every pure heart feels the grace of the divine. And every spirit returns home lighter, calmer and happier, leaving behind the baggage of their burdens and carrying back a unique sense of joy and peace that lasts for many days and months.`
    },
    {
      id: 21,
      image: "blog/twenty-one.jpg",
      category: "Spiritual Guidance",
      date: "18/03/2026",
      title: "आपल्याला आपल्या कर्माचं मनोवांछित फळ कसं प्राप्त होईल?",
      author: "MBSM Trust",
      content: `आज सगळीकडे अस्थिरता, अशांतता, अस्वस्थता, असमाधान आहे. आपण प्रत्येक श्वास या सुख-शांती आणि समाधानाच्या शोधार्थ खर्च करतो. मात्र हाती काहीच गवसत नाही. कारण आपला भाव शुद्ध नाही. आपण आपला प्रत्येक श्वास हा सुख-शांती आणि समाधानाच्या शोधार्थ खर्च करतो. पण हा प्रत्येक श्वास ब्रह्मांडातील षड्रिपूंपैकी कुठल्या ना कुठल्या एका रिपूच्या अधिपत्याखाली खर्च होतो.

मग कुठे काम, क्रोध, लोभ, मोह, मद, मत्सर अशा षड्रिपूंपैकी कुठल्या न कुठल्या रिपूच्या अधिपत्याखाली आपलं प्रत्येक कर्म घडतं असतं. आणि म्हणून आपल्या प्रत्येक कर्माचं फळ आपल्याला मनासारखं प्राप्त होत नाही.

जोपर्यंत विशुद्ध भाव, म्हणजेच शुद्ध भावाने आपले कर्म घडत नाहींत तोपर्यंत ज्या देहाचा आपल्याला अहंकार, अभिमान आहे त्या देहातल्या या चैतन्याची जाणीव आपल्याला होत नाही. आणि जेव्हा ती जाणीव होते तेव्हा वेळ निघून गेलेली असते.

आपल्या संसारामध्ये अनेक घटना घटत असतात, घटना घडून जातात आणि घटना घडून गेल्यावर आपल्याला त्याची जाणीव होते, आपल्याला त्याचं भान येतं परंतु आपण तेव्हा काहीही करू शकत नाही. कारण काहीही झालं तरी आपल्याला वर्तमानातच जगायचंय, भूतकाळात जाऊ शकत नाही, झालेल्या चुका दुरुस्त करू शकत नाही आणि भविष्यकाळात डोकावून पाहू शकत नाही.

म्हणूनच आपलं प्रत्येक कर्म जोपर्यंत शुद्ध भावाने होत नाही, आपलं अंतर्मन जागं होऊन, या चैतन्याची जाणीव होऊन जोपर्यंत वाणीतून योग्य शब्द बाहेर पडत नाहीत, देहाच्या माध्यामातून योग्य कर्म घडत नाहींत तोपर्यंत मनोवांछित फळ प्राप्त होत नाही.

आणि हा शुद्ध भाव भगवंताच्या भजनाचे गायन व श्रवणाने आणि नाम-जपाने प्राप्त होतो.

जे मंगल भक्त सेवा मंडळ "हनुमान चालीसा पठण व भजन संध्या" या सेवेच्या माध्यामातून दर वर्षी हनुमान जयंती पर्यंत ४१ दिवस अविरत गेल्या २८ वर्षांपासून अहिल्यानगर शहराच्याच्या रहिवाशांसाठी श्रद्धा, भक्तिभाव आणि समर्पणाने राबवत आहे.`
    },
    {
      id: 22,
      image: "blog/twenty-two.jpg",
      category: "Spiritual Guidance",
      date: "22/03/2026",
      title: "जीवनात शुद्ध भावाची गरज",
      author: "MBSM Trust",
      content: `पूर्वीच्या ब्लॉगची लिंक: <a href="/blog/21" style="color: #007bff; text-decoration: underline;">https://mbsmtrust.org/blog/21</a>

पूर्वीच्या ब्लॉग अनुसार:

जोपर्यंत आपण या अध्यात्मातली सर्वोच्च अशी ही तपस्या म्हणा, साधना म्हणा किंवा सेवा म्हणा, भजन आणि नाम-स्मरणात खर्या अर्थाने रममाण होत नाही, एकरूप होत नाही आणि आपला समर्पण भाव त्यामध्ये ओतला जात नाही तोपर्यंत पालथ्या घड्यावर पाणी अशी आपली अवस्था राहते.

आपल्या संसारामध्ये आपण अनेक अयोग्य कर्म करत असतो. आणि हे कर्म करत असताना आपल्याला ही जाणवत असतं की आपल्याकडून काहीतरी चुकीचं घडतय. मात्र या चुकीच्या कर्मांना समर्थन देण्याच्या नादामध्ये, आपण स्वतःला फसवत असतो. आणि हे स्वतःला फसवणं जेव्हा फळांच्या रुपात आपल्या समोर येतं तेव्हा आपण हतबल होतो, असाह्य होतो. 

आणि मग आपण भगवंताच्या चरणी नतमस्तक होण्याचं नाटक करतो, खरोखर नाटक करतो आपण. कारण "गरज सरो, वैद्य मरो" या उक्ती अनुसार आपली मनोकामना पूर्ण झाली, भगवंताने आपल्याला आशिर्वाद दिला आणि आपल्याला त्या समस्येतून, प्रश्नातून बाहेर काढलं की कोण मी आणि कोण भगवंत अशी आजची वृत्ती, अवस्था आहे.

याला कलियुग उगाच म्हंटल गेलं नाही. कारण या कलियुगाचा देव रावण आहे. आणि म्हणूनच आज रामराज्याची आपल्याला गरज वाटते. आपण याकरिता प्रयत्न करतो. पण हे तेव्हाच शक्य होईल जेव्हा आपले भाव, कर्म आणि वाणी शुद्ध असेल.

आणि म्हणून ही सेवा आपण राबवतो. आणि जेव्हा आपण या सेवेत असतो तेव्हा खऱ्या अर्थाने तन आणि मन तिथेच असणं अत्यंत गरजेचं आहे. जोपर्यंत तन आणि मन एकरूप होत नाहीत तोपर्यंत आपल्या समोर साक्षात भगवंत जरी आला आणि त्याने आपल्या मस्तकावर कृपाशीर्वाद ठेवला तरी पालथ्या घड्यावर पाणी अशीच आपली अवस्था असेल.

आपल्याला सगळं काही हवय. मात्र त्याकरिता कोणतेही कर्म करण्याची आपली मानसिकता नाही. आपल्याला कमी श्रमामध्ये जास्त हवय. कमी कष्टांमध्ये सगळं काही प्राप्त झालं पाहिजे.
आपल्याला मोठेपण हवं मात्र जबाबदारी नकोय. आपण जर अंतर्मुख होऊन विचार केला तर, आपल्या सांसारिक, व्यावहारिक आणि आध्यात्मिक जगामध्ये आपल्याला कमीतकमी श्रमामध्ये जास्तीतजास्त कसं प्राप्त होईल हीच आपली अपेक्षा असते.

आणि जेव्हा आपल्याला काही मोठेपण प्राप्त होतं तेव्हा इतका अहंकार, अभिमान आपल्यामध्ये भरला जातो की आपण त्या अहंकार आणि अभिमानापोटी कधी अधोगतीकडे जातो हे आपल्या लक्षात देखील येत नाही. आणि ह्याची जाण आणि ह्याचं भान जेव्हा आपण भगवंताच्या चरणाशी शुद्ध भावाने नतमस्तक होतो तेव्हाच येतं.

आणि म्हणूनच हा एक छोटासा सेवेचा भाग, प्रयत्न अगदी माझ्यासह, माझ्या या सर्व परिवारासह आपल्या सर्वांसाठी मंगल भक्त सेवा मंडळाच्या माध्यामातून गेले दोन दशकांपासून अविरत, अखंड सुरू आहे.

या सेवेचा आपण लाभ घेतो, भजन, नामस्मरण करतो किंवा ऐकतो, यादरम्यान प्रत्येकाचं मन आणि ही सेवा एकरूप होईलच असं नाही. पण जेव्हा आवर्तनांवर आवर्तनं घडत राहतात तेव्हा जरीही आपलं मन पूर्णपणे एकरूप नसेल आपल्या वातावरणातला जो आपल्याला अचानक एक चमत्कारिक बदल जाणवतो, जी शुद्धता, शांतता निर्माण होते तेच या सेवेच्या महात्म्येचं सगळ्यात मोठं सर्टिफिकेट असतं. 

-श्री विश्वेश्वर स्वामी महाराज (भाऊ)`
    },
    {
      id: 23,
      image: "blog/twenty-three.jpg",
      category: "Spiritual Guidance",
      date: "27/03/2026",
      title: "शंकर महाराज संदेश — जीवनाचा सार",
      author: "MBSM Trust",
      content: `दत्तप्रभुंच्या सप्तर्षी स्वरुपातलं शेवटचं स्वरुप म्हणजे  शंकर महाराज. कल्याण करणारे शंकर महाराज. "मैं कैलास का रहनेवाला | मेरा नाम है शंकर || दुनिया को समझाने आया | करले कुछ अपना घर ||" (शंकर महाराज संदेश). हे महाराजांना का सांगायची वेळ आली? कारण कलियुगाचा धर्म कर्म आहे. जोपर्यंत आपण योग्य कर्म करत नाही तोपर्यंत या कलियुगात जन्म घेणं सार्थक होत नाही. 

आणि म्हणुन, "समझता है तो समझ ले | बाद में पछताना है || मेरा क्या बिघडता है | रोना धोना तेरा है || कुर्बान करी ये दौलत | तो भी सवाल अधुरा है ||" (शंकर महाराज संदेश). समझता है तो समझ ले, बाद में नुकसान तेरा हैं | रडणं, रडगाणं तुझ आहे, माझं काही बिघडत नाही. हे शंकर महाराजांना त्यांच्या संदेशातून आपल्याला सांगायचं आहे. 

जगातली सगळी धनराशी ओतली तरी तुझ्या प्रश्नाचं उत्तर प्राप्त होऊ शकत नाही. असे अयोग्य कर्म तू करून बसला आहेस. "मेरा क्या बिघडता है | रोना धोना तेरा है || कुर्बान करी ये दौलत | तो भी सवाल अधुरा है || मुझे वहीं जानता है | जो खुदको समझता है ||" (शंकर महाराज संदेश). किती गम्मत आहे बघा, या कलियुगात आपण जन्म घेतला आहे. या मानव योनीत आपण जन्माला आलो आणि जन्माला आल्यापासून फक्त "मी आणि माझा" हा अहंकार आपण कुरवाळत आलो, या अहंकाराला, या अभिमानाला जोपासत आलो. म्हणुन हा महाराजांचा संदेश आपल्याला कळतो पण वळत नाही. 

जिथे आपलं ज्ञान संपतं तिथे या अहंकार आणि अभिमानाची सत्ता सुरू होते. हे सगळं माहित असताना देखील मी आणि माझंच आपण करत आलो आहे. "इस दुनिया में कई रंग है | यह रंग निराला है || भेद ना पाया किसने |" (शंकर महाराज संदेश). गम्मत पहा, एकदाका त्या मोह, काम, क्रोध, द्वेष, लोभ, लालसेमध्ये आपण अडकलो की आपल्याला भान राहत नाही. 

भानहीन अवस्थेमध्ये आपण जगतोय आणि तरीही स्वतःमधल्या "मी" ला ओळखत नसताना, त्या मी चा अहंकार आपल्यात आहे. मी खरं सांगतो, आज आपला आपल्यावर विश्वास नाही. आणि तरीदेखील या आत्मविश्वास हरवलेल्या चैतन्याचा इतका अहंकार आहे, इतका अभिमान आहे आपल्यात आणि तरीही आपण भगवंताच्या कृपेपासून वंचित आहोत. "मुझे वहीं जानता है जो खुदको समझता है!" (शंकर महाराज ब्रीदवाक्य). आपल्यात नसलेल्या त्या गोष्टीचा अहंकार, अभिमान आपल्याला आहे. 

आपल्याला भगवंत प्राप्त झाला, आपल्याला भगवंतांची कृपा प्राप्त झाली, अशी मनाची धारणा करून आपण स्वतःला जगतजेता मानतो. शेवटी काय म्हणणार याला, "लिखी पत्थर की दिवारों पर | सुन्ना की लकीरे || वक्त आनेपर याद होंगे | हमारे ही फवारे ||, जब न रहेंगे हम | मैं कैलास का रहने वाला!" (शंकर महाराज संदेश). वेळ निघून गेल्यावर, पंछी चुग गया खेत, फिर पछताने से क्या होगा? कर्म घडून गेल्यानंतर, कर्माचा पश्चाताप करण्यात अर्थ नसतो. आणि म्हणुन वेळेवर सावध व्हायचं असतं.`
    },
    {
      id: 24,
      image: "blog/twenty-four.jpg",
      category: "Spiritual Guidance",
      date: "02/04/2026",
      title: "मारुती रायांची शिकवण आणि आपल्या कर्माप्रति एकनिष्ठता",
      author: "MBSM Trust",
      content: `मारुती रायांची शिकवण आणि आपल्या कर्माप्रति एकनिष्ठता

ज्या देशामध्ये आपण राहतोय त्याला आपण हिंदुस्तान म्हणतो. गेल्या १० वर्षांपासून या हिंदुस्तान मध्ये रामराज्य आणण्याचा संकल्प आपण मनाशी बाळगून प्रत्येक कर्म करत चाललो आहे. परंतु नुसता संकल्प धरून चालत नाही. तर तसं कर्म देखील आपल्या माध्यामातून घडणं तितकच महत्त्वाच आहे.

ज्या मारुती रायांचं आपण आपल्या हनुमान चालीसा आणि भजन संध्येमध्ये कोटीशः नमन करतो आणि हनुमान चालीसाचं पठण करतो, त्या मारुती रायाला धर्म आणि अध्यात्मामध्ये शिष्योत्तम म्हंटल गेलं.
कारण त्यांच्या इतकी जाज्वल्य गुरु भक्ती आणि गुरु निष्ठा आजपर्यंत दुसरीकडे कुठेही दिसली नाही, पहिली नाही आणि झाली ही नाही.

मग ज्या मारुती रायांना आपण शिष्योत्तम म्हणतो हे एकच गुण आपण आपल्या दैनंदिन जीवनामध्ये अंमलात आणण्याचा प्रयत्न केला तरी पुरे आहे. तो समर्पण भाव, ती एकनिष्ठता, ती एकरूपता आपण साध्य केली पाहिजे. मारुती रायांनी आपल्या गुरुप्रति तो एकनिष्ठ भाव, तो एकरूप भाव आणि तो समर्पण भाव व्यक्त केला.

या कलियुगामध्ये आपल्याला ते शक्य नाही. मात्र आपल्या प्रत्येक कर्माशी जर आपण एकनिष्ठ राहीलो, एकरूप राहीलो, प्रत्येक कर्माप्रति आपण आपला समर्पण भाव जागृत ठेवला तर अशक्य काहीही उरत नाही. पण त्याकरिता आपल्या मनाची, आपल्या विचारांची तयारी हवी.

ज्या मानव योनीत आपण जन्म घेतला, त्या मानव योनीला भगवंताने बुद्धी आणि वाणीचं वरदान दिलं.
आणि या बुद्धी आणि वाणीच्या वरदानामुळे आपल्याला इतका अहंकार आणि अभिमान आला आहे की आपण त्या वाणीचा नको तसा, नको तितका वापर करतो. आणि या बुद्धीचा वापर आपण फक्त आणि फक्त स्वार्थासाठी करतो.

हेच स्वार्थ जर आपण आपल्या कर्मांप्रति ठेवलं, ती एकरूपता ठेवली, एकनिष्ठता ठेवली तर आपल्याला अशक्य असं काहीच नाही. मग या हिंदुस्तानाला हिंदूंचा देश बनवणं देखील अवघड नाही.`
    },
    {
      id: 25,
      image: "blog/twenty-five.jpg",
      category: "Spiritual Guidance",
      date: "02/04/2026",
      title: "आपल्या कर्मांप्रति समर्पणच आपल्याला खरं सुख, शांती आणि समाधान मिळवून देऊ शकतं!",
      author: "MBSM Trust",
      content: `आपल्या कर्मांप्रति समर्पणच आपल्याला खरं सुख, शांती आणि समाधान मिळवून देऊ शकतं!

ज्या संसारामध्ये आपण आहोत, त्या संसारातल्या प्रश्न, अडचणी आणि समस्यांचा आपण इतका बाऊ करतो, नको तितका बाऊ आपण करतो की ज्या शुल्लक गोष्टी असतात त्यांना देखील आपण डोंगरा एवढ्या मोठ्या करून ठेवतो. आणि याला कारण फक्त आणि फक्त आपली बुद्धी आहे.

मग या बुद्धि आणि वाणीला जर योग्य दिशा प्राप्त झाली, योग्य मार्गदर्शन झालं तर तो डोंगरा एवढा प्रश्न अगदी कणा एवढा छोटा आपल्याला वाटू शकतो, किंबहुना तो होतोच. फक्त आपली दृष्टी आणि आपले विचार बदलले पाहिजे. आणि जोपर्यंत हे आपल्या माध्यामातून घडत नाही तोपर्यंत हे अस्वस्थता, अशांतता आणि असमाधान हे सातत्याने आपल्या बरोबर असणार.

मग ज्या सुख, शांती आणि समाधानाच्या शोधार्थ आपण आपला प्रत्येक श्वास खर्च करतो, प्रत्येक श्वास आपला या सुख, शांती आणि समाधानाच्या प्राप्तीकरिता पळतोय, धावतोय, ते सुख, शांती आणि समाधान तेव्हाच प्राप्त होतं जेव्हा आपण हाती घेतलेल्या त्या कर्माशी समर्पित होतो, एकरूप होतो आणि एकनिष्ठ होतो.

त्या मारुती रायांना शिष्योत्तम का म्हंटलं गेलं कारण "मेरे रोम रोम में बसे हैं राम, मेरे हर सांस में बसे हैं राम!" असा त्यांचा प्रभू श्री रामांप्रति समर्पण भाव होता. त्यांनी एकदा सीता माईंना त्यांच्या भांगेमध्ये सिंदूर भरताना पहिलं तेव्हा मारुती रायांनी कुतूहलाने विचारलं "आई, हे काय करताय?", त्यावर सीता माईं म्हणाल्या, "माझ्या प्रभूंच्या दीर्घायुष्याकरिता भांगेमध्ये सिंदूर भरलंय."

बघा, त्या मारुती रायांची गुरुनिष्ठा किती जाज्वल्य आहे. त्यांनी विचार केला की सीता माई फक्त त्यांच्या भांगेत सिंदूर भरून जर माझ्या गुरूंचं आयुष्य वाढणार आहे, तर मी पूर्ण देहाला सिंदूर लावून बसतो. माझ्या गुरूंचं दीर्घायुष्य आहे आणि त्यासाठी मी पूर्ण देह सिंदूराने लेपून घेईल.

हे जर मारुती राया आपल्या गुरूप्रति करू शकतात तर आपण आपल्या कर्मांप्रति का करू शकत नाही?`
    },
    {
      id: 26,
      image: "blog/twenty-six.jpg",
      category: "Spiritual Guidance",
      date: "02/04/2026",
      title: "कर्म, अनुभूती आणि खरा गुरु",
      author: "MBSM Trust",
      content: `कर्म, अनुभूती आणि खरा गुरु

जीवनात जेव्हा आपली वाईट वेळ येते तेव्हा अगदी दीन, गरीबवाणा, बापडा चेहरा करून आपण भगवंताच्या समोर नतमस्तक होतो. मग व्यवहारात असेल तर समोरच्या व्यक्तीला भगवंत समजून तिथे नतमस्तक होतो आपण. आणि चूक झाली, माफ कर असं म्हणून आपण त्याचे पाय धरतो. थोडाही आत्मसन्मान तिथे आपण जागा ठेवत नाही. आणि नको तिथे गरजेपेक्षा जास्त आत्मसन्मान जागा ठेवतो.

म्हणून हे सुख-दुःख, पाप-पुण्य, स्थिरता-अस्थिरता, समाधान-असमाधान, शांतता-अशांतता आहे.
हे सगळं आपणच आपल्या कर्मांनी निर्माण करून ठेवलं आहे. या सृष्टीची रचनाच मुळात कर्मांवर आधारित आहे.

हे कलियुग आहे, हे द्वापर, त्रेता युग नाही. आणि हे सत्ययुग तर मुळीच नाही. कारण आपण आपल्या स्वतःशीच, उठल्यापासून रात्री झोपेपर्यंत सातत्याने खोटं बोलत असतो. हे कलियुग आहे ज्याचा स्वामी रावण आहे, "कली" आहे. आणि हा कली ब्रह्मांडातल्या प्रत्येक चैतन्यामध्ये कमी-अधिक प्रमाणात जागा आहे. म्हणून अनीती, अत्याचार सारख्या गोष्टी आहेत.

मग या कलियुगाचा पाया कर्म आहे तर तुम्ही कितीही होम-हवन, पूजापाठ, नामजप, काहीही केलं तरी जोपर्यंत योग्य कर्म आपल्या माध्यमातून घडत नाहीत तोपर्यंत हे होम-हवन, पूजापाठ, नामजप काय, हे रुद्र, लघु रुद्र, महा रुद्र, असे तपस्येचे, साधनेचे बरेच प्रकार आहेत, जे सगळं करून व्यर्थ आहे. पालथ्या घड्यावर पाणी आहे.

मग जो आपल्याला ह्या ख-या सुख शांती आणि समाधानाची अनुभूती करून देतो, अनुभव नाही, शब्द नीट समजून घ्या. अनुभव शब्दबद्ध करता येतो पण अनुभूती जी शब्दात व्यक्त करता येत नाही.

आपण म्हणतो, "मी गेलो होतो MIDC मधल्या शंकर महाराजांच्या मठात, मी तिथे चार तास बसलो होतो. दहा वेळा मनात आलं उठूया, निघूया, काय फायदा आहे इथे बसून. पण पायच निघेना." का पाय निघत नव्हता, काय वाटत होतं, कोणतं सुख, कोणती शांती मिळत होती? ही इथे शब्दात व्यक्त करता येत नाही. अशी अनुभूती जो आपल्याला प्राप्त करून देतो तो आपल्या जीवनातला खरा गुरु असतो.`
    },
    {
      id: 27,
      image: "blog/twenty-seven.jpg",
      category: "Spiritual Guidance",
      date: "07/04/2026",
      title: "अहंकार, पश्चात्ताप आणि वास्तव",
      author: "MBSM Trust",
      content: `अहंकार, पश्चात्ताप आणि वास्तव

जोपर्यंत या देहामध्ये चैतन्य आहे, तोपर्यंत या देहाला अर्थ आहे. एकदा या देहातून चैतन्य बाहेर पडला, की या देहाची किंमत शून्य होते. या चैतन्यावर आपलं नियंत्रण नाही, या देहाची मालकी चैतन्यावर नाही पण या चैतन्याची मालकी देहावर आहे.

परंतु, कर्म करताना, आपण वागताना, आपल्या मुखातून शब्द बाहेर पडताना, आपला अविर्भाव असा असतो की जणू या देहाची मालकी चैतन्यावर आहे, चैतन्य आपल्या नियंत्रणात आहे. अशा या फसव्या अहंकार, अभिमानामध्ये प्रत्येक श्वास आपण घेतो.

परिस्थिती अशी आहे की, ज्या मानव योनीत आपण जन्म घेतला, त्या मानव योनीमध्ये आपल्याला फक्त आणि फक्त वर्तमान काळात जगता येतं. आपल्याला भूतकाळात जाता येत नाही आणि भविष्य काळात डोकावून पाहता येत नाही.

आणि त्याहून पुढची गम्मत अशी आहे की भूतकाळात जे जे कर्म आपल्या माध्यामातून घडले गेले त्या कर्मांमुळे आज आपली वर्तमान काळातली अवस्था आहे. ज्याला आपण पश्चात बुद्धी पश्चात्ताप म्हणतो तसच घडून गेल्यानंतर आपल्याला पश्चात्ताप होतो की "का मी त्या वेळी असं का केलं?, आज मला किती त्रास होतोय".

हा वांझोटा पश्चात्ताप आहे, ज्यातून काहीच निष्पन्न होत नाही, होऊच शकत नाही. तरीदेखील आपण इतका पश्चात्ताप करतो की जणू आपण भूतकाळात जाऊन आपल्या चुकी दुरूस्त करून परत वर्तमान काळात येणार आहोत.

असं जर घडणं शक्य असतं तर आपण भगवंताच्या चरणी कधी शरण गेलोच नसतो कारण आपल्या स्वार्थी मनाला त्याची कधी गरज भासलीच नसती. जेव्हा आपण हतबल, असाह्य होतो, helpless होतो आणि जेव्हा आपली बुद्धी, ज्ञान अपुरं पडतं तेव्हाच आपल्याला भगवंताची आठवण येते.`
    },
    {
      id: 28,
      image: "blog/twenty-eight.jpg",
      category: "Spiritual Guidance",
      date: "07/04/2026",
      title: "स्तुती, मोह आणि करनी का फल",
      author: "MBSM Trust",
      content: `स्तुती, मोह आणि करनी का फल

आपल्या चूका जो आपल्या तोंडावर सांगतो ना तो आपला खरा हितचिंतक असतो, लक्षात घ्या. परंतु आपण इतके स्तुती पाठक झालो आहोत की अवतीभवती आपल्याला सगळे भाट हवे. "अरे साहेब तुम्ही किती मोठे, तुमचं काम किती छान, तुमचं काय बघायचं, तुम्हाला कोण अडवणार!" अशी स्तुती करणारेच लोक आपल्याला सतत हवे. आणि त्या मोह-मायेमध्ये आपण अडकत जातो.

मग जे कर्म आपल्या माध्यमातून घडले पाहिजेत त्यांच्या विपरीत कर्म आपल्याकडून घडतात. ते म्हणतात ना, "करनी करे तो क्यों पछताए, बीज बबूल का बोए तो आम कहाँ से आए?" आपले कर्म जर दुःख निर्माण करणारे असतील तर त्या कर्मांमधून आपल्याला सुख मिळेल हे समजणं मूर्खपणा आहे. ही अपेक्षाच मूर्खता आहे.

नंतर एक वेळ अशी येते की वेळ निघून जाते, कारण "वक्त क्या है, वो तो यूँ ही गुजर जाएगा, दम बडी चीज है!" आणि हा दम आपल्यात नाही. आपल्याला तुरंत दान महापुण्य पाहिजे. मी आत्ता काही केलं की मला त्याचं फळ लगेच हवंय, अशी आपली वृत्ती आहे. पण वास्तव्यात ते शक्य नाही.

अरे, तू काही कनिफनाथ आहेस हत्तीच्या कानातून जन्म घ्यायला, का मच्छिंद्रनाथ आहेस माश्याच्या पोटातून जन्मलेला, का गोरक्षनाथ आहेस राखेतून जन्म झालेला. मुळीच नाही. आपला जन्म सामान्य, वासनेतला, योनीतला आहे. आणि म्हणूनच प्रत्येक कर्माचे फळ आपल्याला भोगावेच लागतात. योग्य कर्म, संयम आणि कठोर परिश्रमांनीच आपल्याला मनोवांछित फळ प्राप्त करता येतं. जे तप, जी साधना नाथांनी ही केली. मग आपण कोण!`
    },
    {
      id: 29,
      image: "blog/twenty-nine.jpg",
      category: "Spiritual Guidance",
      date: "24/04/2026",
      title: "अंतर्मनाची जाणीव",
      author: "MBSM Trust",
      content: `आपल्या प्रत्येक चूक किंवा अयोग्य कर्माला समर्थन देण्याकरिता शब्दांच्या किती कोलांटी उड्या आपण दिवसभरात मारत असतो हे देखील शब्दबद्ध करता येत नाही. उठल्यापासून रात्री झोपेपर्यंत या चेहर्‍यावर इतके मुखवटे बदलत असतात सातत्याने की आपला मूळ चेहरा आपण विसरतो, अशी आपली अवस्था आहे.

आणि जेव्हा केव्हा आपला मूळ चेहरा  आपल्यासमोर येतो, म्हणजे आपलं अंतर्मन अखेर जागं होतं, आणि ते आपल्याला सांगतं ना, "बाळा, चूक केलीस", आपण समर्थन द्यायला लागतो, "काय करू, तेव्हा परिस्थितीच तशी होती, मला तसं करावं लागलं, मला ही कळत होतं की हे करणं अयोग्य आहे."

आपल्यासमोर शेण, माती आणि बासुंदीची वाटी जर ठेवली तर, आपण काय खाणार? आपण शेण नाही खाणार, आपण माती नाही खाणार तर आपण बासुंदीच खाणार. तिथे मात्र आपली बुद्धी चालते, मग कर्म करताना का नाही चालत? या ८४ लाख योनींमध्ये फक्त मानव योनीला भगवंताने बुद्धी आणि वाणीचं वरदान दिलं आहे.

मग त्या बुद्धी आणि वाणीचा योग्य वापर करणं गरजेचं आहे. आणि ते होत नाही कारण कली जागा आहे. तो कली का जागा आहे कारण त्या षड्रिपूंच्या अधीन आपला देह आणि मन आहे. मग या बाह्य मनाच्या अधिपत्याखाली असलेल्या या देहाला, या चैतन्याला कुठेतरी अंतर्मनाची जाणीव होणं महत्त्वाचं आहे.

आणि म्हणून या सृष्टीची रचना लय, विलय, विध्वंस म्हणजेच तम, रज आणि सत्त्व या तीन गुणांवर झाली. हेच त्रिदेव, ब्रह्मा, विष्णु, महेश ज्यांना आपण त्रिगुणात्मक म्हणतो, अवधूत चिंतन, दत्त, दिगंबर अत्रीनंदन म्हणतो. ज्याच्या कटी लंगोट, काखेत झोळी आणि संगे चार श्वान, तोच दत्त. काही नाहिये यांच्याकडे. एक झोळी आहे.

मात्र त्या झोळीमध्ये पूर्ण ब्रह्मांड सामावलं आहे. ज्यांच्या नामात दातृत्व आहे म्हणून ते दत्त आहेत. जे देण्याचं काम करतात, घेत काही नाही. जे दिगंबर अवस्थेत आहेत म्हणून ते दिगंबर आहेत. अशा दत्तप्रभूंच्या सप्तशी॔ स्वरूपातील शेवटचा स्वरूप सद्गुरु शंकर महाराज आहेत.

ज्यांनी सांगितलं, "समझता है तो समझ ले | बाद में पछताना है ||" गम्मत बघा, किती सोप्या शब्दात आपल्याला सांगितलं सद्गुरुंनी. "समझता है तो समझ ले | बाद में पछताना है || मेरा क्या बिगडता है | रोना धोना तेरा है ||" असं शंकर महाराज म्हणतात. हे शंकर महाराज कोण आहेत?

दत्तांचं जे सप्तशी॔ स्वरुप म्हणजेच सात ऋषींचं स्वरूप या ब्रह्मांडात आहे, त्यातलं हे कलियुगातील अयोनी प्रकट झालेलं दत्तांचं अवलिया स्वरुप आहे. "कुर्बान करी ये दौलत | तो भी सवाल अधूरा है ||" किती हतबलता, असहायता आहे. अखिल ब्रह्मांडातील धनराशी ओतली तरी आपल्यासमोर असलेल्या अशा काही प्रश्नांची उत्तरं आहेत की जी आपल्याला प्राप्त होऊ शकत नाहीत.`
    },
    {
      id: 30,
      image: "blog/thirty.jpg",
      category: "Spiritual Guidance",
      date: "24/04/2026",
      title: "\"जे जे होईल, ते ते पहावे, तुका म्हणे उगी राहावे.\"",
      author: "MBSM Trust",
      content: `आपल्याला भूतकाळात जाता येत नाही, आपल्याला भविष्यकाळामध्ये पाऊल टाकता येत नाही. काहीही झालं तरी आपल्याला वर्तमानातच जगावं लागतं. मात्र आपली आजची परिस्थिती अशी आहे की देह आपला वर्तमानात असतो आणि मन भूतकाळ आणि भविष्यकाळ यामध्ये सातत्याने दोलायमान होत असतं. आणि म्हणून संत श्रेष्ठ शिरोमणी, तुकोबारायांना सांगण्याची वेळ आली, "जे जे होईल, ते ते पहावे, तुका म्हणे उगी राहावे."

कारण भूतकाळात आपल्याकडून झालेल्या चूका आपण दुरूस्त करू शकत नाही आणि भविष्यकाळाच्या गर्भामध्ये काय दडलय हे पाहू शकत नाही. मग भूतकाळातल्या अनेक गोष्टींचा परिणाम म्हणून वर्तमानात आपला स्टेटस, स्थान, परिस्थिती आहे. या वर्तमान काळात समोर आलेल्या प्रश्नांना हिमतीने जाता जाता असे काही कर्म घडले पाहिजेत की आपला येणारा भविष्यकाळ हा उज्वल असेल.

"इस दुनिया में कई रंग है | यह रंग निराला है || भेद ना पाया किसने | यह गहराही गहरा है |" (शंकर महाराज संदेश) हा भगवंताचा रंग आहे, भल्या-भल्यांना याचा अंत लागला नाही. तुम्ही आम्ही तर मरते मानव आहोत. षड्रिपू असल्यामुळे आपल्याला ते उलगडत नाही. या ब्रह्मांडात विविध रंग, भाव-भावना आहेत, या सगळ्यांपेक्षा हा भगवंताचा भाव वेगळा आहे. आपल्याला आपल्या संसारामध्ये, दैनंदिन जीवनामध्ये पश्चात बुद्धी पश्चात्ताप, म्हणजे वेळेनंतर पश्चाताप कितीदा होत असेल.

लिखी पत्थर की दिवारों पर | सुन्ना की लकीरे || वक्त आनेपर याद होंगे | हमारे ही फवारे || जब न रहेंगे हम | मैं कैलास का रहने वाला | मेरा नाम है शंकर || (शंकर महाराज संदेश) वेळ निघून गेल्यावर ज्यांनी ज्यांनी आपल्याला अक्कल देण्याचा प्रयत्न केलेला असतो तो प्रत्येक व्यक्ति आपल्याला आठवतो. अरे तो जीव तोडून सांगत होता, "ते करू नका हो, तुम्ही त्रासात याल." पण नाही, आपल्याला या अहंकार, अभिमानापोटी आपण कर्म केले मात्र नंतर त्यांच्या फळांना तोंड देण्याचं सामर्थ्य, हिम्मत आपल्यात नसतं. मग आपल्याला भगवंत आठवतो.

आणि म्हणूनच, आपण कुठल्याही भगवंत, अल्लाह, येशू म्हणा किंवा जिथे पॉझिटिव्हिटी असते, अशा स्थानी आपल्याला नेहमीच गर्दी दिसते. त्याचं ताजं उदाहरण म्हंटल तर गेल्या १० वर्षांमध्ये पंढरीच्या वारीमध्ये तरुणांची संख्या वाढली आहे. काय मिळतं त्या वारीत जाऊन? ते वारकरी ४०० किलोमीटर पायी जातात ऊन, वारा, पाऊस याची कोणतीही चिंता न बाळगता. मिळेल ते खायचं, पडेल तिथे झोपायचं, काही नाही, फक्त एकच आस त्या पांडुरंगाच्या दर्शनाची.

"२८ युगे उभा एका विटेवरी, कर दोन्ही कटेवरी!" तो पांडुरंग विठ्ठल आहे. त्याच्या नुसत्या चरणस्पर्शातून जी अनुभूती प्राप्त होते ना ती सगळे आपले ३६४ दिवस जगण्याची ऊर्जा देते.`
    },
    {
      id: 31,
      image: "blog/thirty-one.jpg",
      category: "Spiritual Guidance",
      date: "24/04/2026",
      title: "हरिनाम, चमत्कार आणि आत्मभानाचा अखंड प्रवास",
      author: "MBSM Trust",
      content: `वारी हा कलियुगामध्ये एक चमत्कार आहे. अगदी ८०, ८३ वर्षांचे ज्येष्ठ पायी चालतात. घरून पुढच्या चौकात जायचं असेल, वॉकिंग डिस्टन्स फक्त २ मिनिटाचा जरी असेल तरी घडीला किक मारली जाते आणि २ मिनिटात तो तरुण त्या स्थानी पोहोचतो. तो विचार करत नाही की पायी जावं.

मात्र त्या वारीमध्ये कसं सहज ३०० किलोमीटरचं अंतर पार होतं! तो वारकरी इतरांना सांगतो, "कळलंच नाही राव, मी कसा चाललो, माझ्याच्याने शक्यच नव्हतं." खरंतर ते तू चालला नाहीस बाळ, त्या पांडुरंगाने तुला खांद्यावर उचलून स्वतःच्या पावलांनी चालवलं.

कारण तुझ्या मुखातून सातत्याने हरिनामाचा गजर होता. ते तसं वातावरण निर्माण होत असतं त्या वारीमध्ये की 24/7, every breath, प्रत्येक श्वास, "विठ्ठल, विठ्ठल, विठ्ठल" आपल्या मुखातून पडतं. आणि त्या मुखातल्या हरीनामाच्या गर्जाने इतकी ऊर्जा प्राप्त होते की आपण कधी पोहोचलो हे आपल्याला देखील कळत नाही.

मग असा चमत्कार या कलियुगात अनेक घडतात फक्त भाव शुद्ध असला पाहिजे. आपली लायकी, पात्रता आपल्याला कळली पाहिजे. कौन जानता है मुझे? "मुझे वही जानता है | जो खुद को समझता है ||" आपली आपली लायकी, पात्रता, ज्ञान, याच्या लक्ष्मणरेषेची जाणीव होणं गरजेचं आहे.

तरच आपलं प्रत्येक कर्म भानावर राहुन घडतं. आणि जेव्हा भानावर राहुन आपलं कर्म घडतं तेव्हा जे सुख, शांती आणि समाधान आपल्याला हवं होतं ते प्राप्त झाल्याची अनुभूती आपल्याला येते.`
    },
    {
      id: 32,
      image: "blog/thirty-two.jpg",
      category: "Spiritual Guidance",
      date: "24/04/2026",
      title: "शंकर महाराजांच्या संदेशाचा गूढ अर्थ",
      author: "MBSM Trust",
      content: `"शं" म्हणजे कल्याण आणि "कर" म्हणजे करणारा. कल्याण करणारा तो शंकर आहे. मग अशा सद्गुरुंनी सहज सोप्या एका वाक्यामध्ये जीवनाचा सार सांगितला. "मुझे वही जानता है | जो खुद को समझता है ||" किती सोपं आहे. आपण फक्त आपली लायकी, आपली पात्रता समजून घेणं आवश्यक आहे. एकदाका आपल्याला आपली लायकी, आपली पात्रता समजली की भगवंत आपल्याला आपोआप प्राप्त होतो.

म्हणजे काय? संतुष्टी, समाधान, स्थिरता, सुख, हे सगळं आपल्या चरणाशी लोळण घेतं. "मैं कैलास का रहने वाला | मेरा नाम है शंकर || दुनिया को बतलाने आया | कर ले कुछ अपना घर ||" कशासाठी अवतीर्ण झाले भगवंत? प्रत्येकाला आपलं कर्म समजून सांगण्याकरता भगवंताने अवलिया रूप धारण केलं.
"इस दुनिया में कई रंग है | यह रंग निराला है || भेद ना पाया किसने | यह गहराही गहरा है ||" ज्या षड्रिपूंच्या आधीन जगामध्ये आपण जगतो तिथे अगणित रंग आहेत, अगणित भाव-भावना आहेत.

मात्र या सगळ्या रंगीन जगामध्ये, या भगवंताचा रंग वेगळा, निराळा आहे. "भेद ना पाया किसने |", म्हणजे तो समजण्याच्या पलीकडचा आहे. "यह गहराही गहरा है ||", अर्थात, ज्याप्रमाणे माऊलींनी ज्ञानेश्वरी लिहिली, त्या ज्ञानेश्वरीच्या ओव्या आपण जितक्या वेळा पठण करू, तितक्या वेळा त्या ओव्यांचे नवीन-नवीन अर्थ आपल्याला लागतात. त्याचा अंत नाही. अनुषंगाने, त्या भगवंताच्या रंगाचा देखील अंत नाही.

"समझता है तो समझ ले | बाद में पछताना है || मेरा क्या बिघडता है | रोना धोना तेरा है || विचारपूर्वक जर कर्म केले तर रडण्याची वेळ आपल्यावर येत नाही. आणि म्हणून या मुखातून, या वाणीतून प्रत्येक शब्द बाहेर पडताना, तो विचारपूर्वक पडला पाहिजे.
या देहाच्या माध्यमातून घडणारं प्रत्येक कर्म, ते घडण्याअगोदर आपण त्याचा विचार केला पाहिजे.

अविचाराने केलेलं प्रत्येक कर्म आणि अविचाराने बोललेला प्रत्येक शब्दाचा पश्चात्ताप नंतर करायचाच आहे, "बाद में पछताना है", पश्चात्तापाशिवाय काही उरत नाही. आणि मग जेव्हा अशी वेळ येते तेव्हा भगवंत म्हणतो "मेरा क्या बिघडता है". तुझी बुद्धी, तुझी वाणी, तू कर्म केले, तू भोगायचे. माझं काय आहे! "कुर्बान करी ये दौलत | तो भी सवाल अधुरा है ||" अशा अशा कर्मांची फळं आपण भोगतोय, ब्रह्मंडातील संपूर्ण धनराशी ओतली तरी त्या प्रश्नांची उत्तरे आपल्याला प्राप्त होऊ शकत नाहीत.`
    },
    {
      id: 33,
      image: "blog/thirty-three.jpg",
      category: "Spiritual Guidance",
      date: "24/04/2026",
      title: "अशीच आईसारखी माया शंकर महाराज आपल्या भक्तांवर करतात!",
      author: "MBSM Trust",
      content: `दत्तप्रभूंचं सप्तर्शी स्वरूप या ब्रह्मांडात वास करतं. आणि या सप्तर्शी स्वरुपातलं शेवटचं स्वरूप म्हणजे सद्गुरु शंकर महाराज. "मुझे वही जानता है | जो खुद को समझता है ||" या कलियुगात प्रत्येक जण स्वतःला खूप चांगल्या पद्धतीने ओळखतो, असा प्रत्येकाचा गैरसमज आहे. मात्र वेळ आल्यावर, आपली लायकी, पात्रता आपल्या लक्षात येते आणि आपण हतबल होतो. मग त्या वेळी आपल्याला भगवंत आठवतो.

अशा कलियुगात तो भगवंत शंकर महाराजांच्या रुपात अवतीर्ण झाला आहे. तो म्हणतो "तू जसा आहे तसा ये. एकदा का तू माझ्या वलयात आला की तुझ्या आयुष्याचं नियंत्रण माझ्या हातामध्ये येईल." इतर भगवंतांसारखं त्यांचं कार्य नाही. "बाळ अवखळ आहे ना, दहा वेळा सांगितलं तरी नाही ऐकत, एकदा चटका बसू दे. बरं कसं करायचं ते मी पाहिन. पण तुला एकदा चटका बसूच दे, तुला कळत नाही ना." असं त्या भगवंताचं स्वरूप आहे. अशी त्यांची त्यांच्या मुलांना योग्य मार्गावर आणण्याची निराळी पद्धत.

"समझता है तो समझ ले | बाद में पछताना है || मेरा क्या बिघडता है | रोना धोना तेरा है || कुर्बान करी ये दौलत | तो भी सवाल अधुरा है || मुझे वही जानता है | जो खुद को समझता है ||" परत कुठे आणून सोडलं त्यांनी? आपल्यावरच आणून सोडलं. शंकर महाराज म्हणतात "तू जसा, तसा मी!" आता एखाद्या आईला चार मुलं असतात. त्यातला एक मूल खूपच व्रात्य आणि उनाड असतं, ऐकत नाही. म्हणून ती आई काही त्या बाळाला सोडत नाही.

ती आई सतत त्या बाळाला सांगते, "असं करू नको, त्रास होईल, तसं करू नको, पडशील, तुला लागेल". तरीपण ते बाळ काही ऐकत नाही. ते धडपडतं आणि त्याला लागतं. मग ती आई त्या बाळाला सांगते, "बघ मी तुला सांगत होते, तू ऐकलं नाही आणि तुला लागलं." ती पडलेल्या त्या बाळाला जवळ घेते, मलम लावते, शेक देते आणि चिडते सुद्धा. ती आई चिडते आणि माया ही तितकीच करत असते.

असच आईसारखं स्वरूप त्या शंकर महाराजांचं आहे. आज या कलियुगात प्रत्येक चैतन्याला एक मोठा अहंकार, अभिमान आहे. मी म्हणजे कोण आणि "मी कोण आहे तुला माहित नाहीये का!", असं आपलं वर्तन असतं. अरे आपल्यालाच माहित नाहीये मी कोण आहे याचं उत्तर आणि आपण लोकांना म्हणतो "मी कोण आहे तुला माहित नाहीये का!". अशा भानरहित अवस्थेमध्ये जेव्हा आपली जीवननौका असते तेव्हा त्या दिशारहित नौकेचं सुकाणू आपल्या ताब्यात घेणारं हे दैवत आहे.`
    },
    {
      id: 34,
      image: "blog/thirty-four.jpg",
      category: "Spiritual Guidance",
      date: "13/05/2026",
      title: "प्रवाहाविरुद्ध पोहण्याची कसरत Part 1",
      author: "MBSM Trust",
      content: `या पंचमहाभूतांवर या त्रिगुणात्मकांचा अधिकार, वर्चस्व आहे. खरं पाहिला गेलं तर आपल्या जीवनातल्या प्रत्येक प्रश्न, अडचण, समस्येच्या मुळाशी आपलं कुठेतरी एक प्रथम कर्म असतं. बी पेरल्याशिवाय रोप प्रकट होत नाही. खूप सहज, साधं मानवाचं जीवन भगवंताने ठेवलं आहे. आज केलेल्या कर्मांची काही फळं तासाभराने, काही दिवसांनी, आठवड्यांनी, महिन्यांनी, वर्षांनी, दशकांनी, अगदी ३०-४० वर्षांनीही मिळतात. कधी-कधी आपल्या कर्मांची फळं भोगण्याची वेळ ४० वर्षांनंतरही येते. कारण या कलियुगाचा पाया, धर्म हा कर्म आहे.

हे शक्ति महात्म्याचं युग आहे, व्यक्ति महात्म्याचं नव्हे.

मग अशा या कलियुगात प्रत्येक जण अस्थिर, असमाधानी आहे याचं कारणच मुळात कलियुग या शब्दाच्या महात्म्यामध्ये दडलं गेलं आहे. कलियुगाचा धर्म हा कर्म आहे. ज्या बुद्धी आणि वाणीचा मोठा अहंकार, अभिमान आपण करतो, ती बुद्धी आणि वाणी असे काही कर्म आपल्याकडून करून घेते की त्या कर्मांची जेव्हा फळं भोगण्याची वेळ येते तेव्हा आपली सगळी ताकद, हिम्मत, आपलं आर्थिक आणि सामाजिक स्थान काहीही कुठे करू शकत नाही. आणि मग आपल्याला भगवंताची कृपा, त्यांचा दरबार, त्यांचे चरण आपल्याला आठवतात.

कलियुग म्हणजे अधर्माचं राज्य आहे. आणि अशा या अधर्माच्या राज्यामध्ये धर्म आपल्याला टिकवायचा आहे, सत्य जागं ठेवायचं आहे. जिथे असत्याचा बोलबाला आहे, प्रवाह विरुद्ध पोहायचं आहे. ही जी कसरत असते ना, ही कसरत या कलियुगामध्ये सज्जनांना, संतांना, साधूंना, तपस्वींना सुद्धा करावी लागते. हे जे भोग आहेत ते सोपे कसे होतील? जिथे आभाळ फाटलं आहे, ठिगळं कुठवर लावणार आपण! मग अशावेळी ठिगळं लावायच्या भानगडीत पडायचं नाही. आपल्या अवतीभवती अभेद्य असे सुरक्षा कवच आपण निर्माण केलं पाहिजे.

आणि ते सुरक्षा कवच तेव्हाच प्राप्त होतं जेव्हा भगवंताची कृपा, त्यांचा आशीर्वाद असतो. पण हे कसं प्राप्त होतं?

Part 2 पुढील ब्लॉगमध्ये आहे. नक्की वाचा!`
    },
    {
      id: 35,
      image: "blog/thirty-five.jpg",
      category: "Spiritual Guidance",
      date: "13/05/2026",
      title: "प्रवाहाविरुद्ध पोहण्याची कसरत Part 2",
      author: "MBSM Trust",
      content: `या अध्यात्माचा आणि धर्माचा सध्याच्या या युगामध्ये बोलबाला आहे. सगळीकडे अध्यात्म, योग, नामस्मरण, विविध तप, साधना आहे. यांचा बाजार मांडला आहे. आपल्या सगळ्या अस्थिरतेचा, अशांततेचा, असमाधानाचा स्पष्टपणे बाजार मांडला आहे. आणि त्या बाजारामध्ये आपण ग्राहक म्हणून उभे आहोत. साधू-संतांनी दुकाने लावली आहेत. आणि त्या दुकानांपुढे आपण लाईनमध्ये ग्राहक म्हणून उभे आहोत. आपली बुद्धी भ्रष्ट झाली.

आपलं ज्ञान तोकडं पडलं आणि आपली वाणी अपुरी पडली. आणि आपण असमाधान, अशांतता, असुख अस्थिरता, या 'अ' च्या मालिकेत अडकत गेलो. कारण हा प्रत्येक 'अ', अहंकार आणि अभिमान दर्शवतो. आज प्रत्येक चैतन्यामध्ये इतका अहंकार, अभिमान आहे की त्या अहंकार आणि अभिमानापोटी अनंत नको-नको असे कर्म आपल्या माध्यमातून घडत आहेत.

गुरु हा गुरु असतो. शिष्य कितीही ज्ञानी झाला तरी गुरुच्या मांडीला मांडी लावून बसण्याची त्याची पात्रता कधी निर्माण होत नाही. जो गुरूत भेद करतो तो शिष्य होण्याच्या लायकीचा नाही. आणि जो शिष्यात भेद करतो तो गुरूपदी होण्याच्या पात्रतेचा नाही. जिथे शक्ति महात्म्य आज तिथे आज आपण व्यक्ति महात्म्य करतोय. आणि हीच आपल्या अधोगतीचं सगळ्यात मुख्य कारण नव्हे तर यामुळेच आपल्या अधोगतीला सुरूवात झाली आहे.

मग अशा या वातावरणामध्ये सर्वोच्च साधना, तपस्या ही नामजपाची सांगितली गेली आहे. कारण 'नाम' शब्दाची जर आपण फोड केली तर त्यात 'मन' दडलं आहे. आपल्याला फक्त मनात नाम जागं करायचं आहे. वेगळं काहीही करायचं नाहीये. एकदा का या मनात नाम स्थानापन्न, विराजमान झालं की आपल्या कोणत्याही समस्या, अडचणी, प्रश्न शुल्लक उरत नाही. यानेच ते अभेद्य कवच प्राप्त होतं.

कारण अवस्था अशी निर्माण होते की तिथे ते शून्य तत्त्व कार्यरत होतं. आणि हे शून्य तत्त्व काय कार्य करतं? आपल्यातला त्या शून्याला जागं करतं. ज्या शून्याच्या अवतीभवती अहंकार, अभिमानाचं जाळं आपण निर्माण करून ठेवलं आणि जी आपली लायकी, पात्रता नाही, ती लायकी आणि पात्रता सिद्ध करण्यासाठी आपण अहोरात्र कर्म करत राहतो, त्या अवस्थेचं ज्ञान आपल्याला प्राप्त होतं या नाम जपाने.

मन आणि नाम यांचा संपर्क आहे, भगवंत आणि आपला संपर्क आहे, म्हणून श्वास सुरू आहे. ज्या क्षणी भगवंत आपल्याशी असलेला संपर्क तोडेल, आपला देह स्मशानात, चितेवर असेल.`
    },
    {
      id: 36,
      image: "blog/thirty-six.jpg",
      category: "Spiritual Guidance",
      date: "14/06/2026",
      title: "कलियुगात उद्धाराचा एकच मार्ग: कर्म",
      author: "MBSM Trust",
      content: `भगवंताला कोणी अल्लाह ताला म्हणतं, कोणी येशू म्हणतं. कोणी माता म्हणतं, कोणी सुपर पॉवर म्हणतं, तर कोणी अज्ञात शक्ती म्हणतं. मात्र हे जे काही आहे ते अगदी बुद्धी आणि शब्दांच्या पालिकेकडचं आहे. जिथे आपली बुद्धी संपते, तिथे भगवंताचा प्रांत सुरू होतो.

आणि म्हणुन, या मानव योनीत जन्म घेतला की आपल्या प्रत्येक श्वासात भगवंताची कृपा आपल्याला प्राप्त होत असते. आपले कर्म आपलं भविष्य ठरवत असतात. भगवंताने भूत आणि भविष्य हे मानवासाठी वर्ज्य ठेवलं आहे. तो म्हणतो, "जा, जे करायचं आहे ते कर." मागे जाऊन कर्मांची दुरुस्ती करता येत नाही आणि भविष्यात डोकावून पाहता येत नाही. काहीही झालं तरी वर्तमानाशिवाय पर्याय उरत नाही.

आणि म्हणुनच या कलियुगाची निर्मिती कर्मावर झाली आहे. या कलियुगाचा धर्म हा कर्म आहे. कितीही कृपा, आशीर्वाद प्राप्त झाले आणि जर आपल्या माध्यामातून योग्य कर्म घडले नाही, तर त्या कृपाशीर्वादाला अर्थ राहत नाही. आणि हे जेव्हा आपल्या लक्षात येतं तेव्हा वेळ निघून गेलेली असते.

या निघून गेलेल्या वेळेचा पश्चाताप करायचा का आपल्यासमोर जो वेळ आहे, त्या वेळेला योग्य कर्म केले पाहिजे ह्याचं ज्ञान ज्याने प्राप्त केलं, तो या ब्रम्हांडात सुखी झाला. आणि हीच शिकवण सद्गुरु दत्त प्रभूंनी अखिल मानव जातीला, या सृष्टीला दिली.

तमस, रजस आणि सत्व, या तीन गुणांवर या सृष्टीची रचना आहे. आणि हे तीन गुण जिथे एकत्र झाले त्यांना त्रिगुणात्मक, दत्त म्हणतात. ज्याच्या कटी लंगोट, काखेत झोळी आणि संगे चार श्वान आहेत त्यांना अवधूत चिंतन म्हंटलं गेलं. त्यांच्या नामात दातृत्व आहे, म्हणुन त्यांना दत्त म्हणतात.`
    },
    {
      id: 37,
      image: "blog/thirty-seven.jpg",
      category: "Spiritual Guidance",
      date: "14/06/2026",
      title: "कलियुगातून रामराज्याकडे!",
      author: "MBSM Trust",
      content: `आपल्या जीवनात कितीतरी प्रश्न, अडचणी आणि समस्या असतात. आणि त्यांचं निराकरण होईपर्यंत आपल्याला स्वस्थता लाभत नाही. जी शांतता आपल्याला हवी असते, जे सुख आणि समाधान आपण शोधत असतो, त्याच्या जितकं आपण पाठीशी धावतो, तितकंच ते आपल्यापासून दूर जातं. असं आपल्याला केवळ वाटायला लागत नाही, तर ते तसच खरोखर होत असतं. जसं वाळवंटात मृगजळ दिसतं, तसं. आपल्याला समोर पाणी असल्याचा आपल्याला भास होतो आणि आपण जसं त्याच्या मागे जाऊ लागलो, ते आणखी दूर सरकत जातं.

आपल्या जीवनामध्येही असंच घडतं. आपण एखादी गोष्ट प्राप्त करण्यासाठी सातत्याने प्रयत्न करत असतो, परंतु जितकं आपण तिच्या मागे धावतो, तितकी ती पुढे सरकत जाते. अशी ही अस्थिर अवस्था निर्माण होते. खरंतर या युगाला कलियुग म्हणुनच म्हंटलं गेलं आहे. सगळीकडे अशांतता आणि असमाधान आहे. मग अशा या कलियुगात सुख, शांती आणि समाधान मिळवणं, म्हणजे शिव धनुष्य पेलण्यासारखं आहे.

कारण आज आपलं आपल्या मनावर नियंत्रण नाहीये. आणि मनावर नियंत्रण नाही म्हणुन आपल्या कर्मांवर आपलं नियंत्रण नाही. या कलियुगाचा प्रचंड बोलबाला आहे, कलियुगाचा देव हा रावण आहे. आणि कलियुगाचा देव हा रावण असल्यामुळे आपल्याला रामराज्य आणण्याची गरज वाटते. मग ते रामराज्य कधी प्राप्त होईल? "मुझे वही जानता है | जो खुद को समझता है ||" आपण स्वतःला जाणलं, ओळखलं पाहिजे.

आपण दुसर्‍यांच्या चुका एका सेकंदात सांगतो, दाखवतो, बोलतो आणि त्याच्याबद्दल चर्चा ही करतो. मात्र या सगळ्यात, आपण स्वतःकडे अंतर्मुख होऊन पाहणं विसरून जातो. आपल्या चुकांवर मात्र आपण पांघरून घालतो. आणि दुसऱ्यांवर आपल्या त्या चुकांचं खापर फोडण्यात आपल्याला धन्यता वाटते. आपण स्वतःला सहीसलामत बाजूला काढतो. मी किती योग्य आणि बरोबर आहे हे सिद्ध करण्यात आपण आपली ऊर्जा खर्च करतो.

हा सगळा प्रवास, ही सगळी वणवण आपल्याला नकोशी वाटते. आणि जे हवसं वाटतं ते आपल्याला मिळत नाही. जे मिळतय ते नकोसं वाटतय. जेव्हा अशी परिस्थिती निर्माण होते तेव्हा भगवंताशिवाय तरणोपाय राहत नाही. आणि भगवंत काही लगेच आपल्याला प्राप्त होत नाही. भगवंताची अनुभुती लगेचच आपल्याला प्राप्त येत नाही. त्याकरिता खूप कष्ट, मेहनत आणि म्हणजे साधना लागते. त्यासाठी कोणी ध्यानधारणा करतं तर कोणी तप-तपस्या करतं, कोणी साधना करतं तर कोणी नाम-जप करतं.

मग या सगळ्या मार्गांमध्ये सर्वोच्च स्थान नाम-जपाचं आहे. या नामाचं महात्म्य इतकं मोठं आहे, की या नामाने अखिल जगाला कितीतरी संत निर्माण करून दिले. की या संतांनी सुख, शांती आणि समाधानाचा मंत्र प्रत्येक मानावाला दिला. मात्र आज मानव फक्त आकार-उकाराने मानव आहे. मानवाचे विचार आणि त्याचे कर्म जर आपण पाहिले तर ते राक्षसापेक्षाही खालच्या पातळीचे आहेत. इतकी अनीती, इतका अत्याचार, इतके अविवेकी विचार आपल्यामध्ये सुरू असतात आणि तरी आपण स्वतःला मानव म्हणतो. आपली आपल्याला लाज वाटत नाही. आपले कर्म आणि आपल्या विचारांकडे आपण डोळेझाक करतो. आणि स्वतःला मानव म्हणून घेतो.`
    },
    {
      id: 38,
      image: "blog/thirty-eight.jpg",
      category: "Spiritual Guidance",
      date: "21/06/2026",
      title: "पंचमहाभूतांवर राज करणारे सद्गुरु शंकर महाराज",
      author: "MBSM Trust",
      content: `जे दिगंबर अवस्थेत आहेत म्हणुन त्यांना दिगंबर म्हंटलं जातं. कोणी त्यांना अत्रीनंदन म्हणतं, तर कोणी दातृत्व ठायी ठायी भरलं आहे म्हणुन दत्त म्हणतं. अशा दत्तप्रभूंचं सप्तर्शी या ब्राह्मण्डात प्रचलित आहे. त्यातलं शेवटचं स्वरुप म्हणजे सद्गुरु शंकर महाराज. ह्यांच्या नावातच कल्याण आहे.

शंकर, शं म्हणजे आणि कर म्हणजे कल्याण करणारा. कल्याण करणारं हे दैवत, अवलिया स्वरुप आहे. शंकर महाराज या भूमंडळी अयोनी प्रकट झाले आहेत. बिना माता-पित्याच्या जन्माला अयोनी जन्म म्हंटलं गेलं आहे. तुमचा, माझा जन्म हा वासनेतला, योनीतला आहे.

मात्र भगवंत या भुवरी अयोनी प्रकट झाला. त्यांचा जन्म वासना रहित म्हणजेच षड्रिपू रहित आहे. आणि जिथे षड्रिपू नाहीत तिथे अशक्य असं काहीच नाही.

कारण या पंचमहाभूतांवर या अवलियांचं वर्चस्व, आधिपत्य आणि नियंत्रण आहे. आणि जिथे पंचमहाभूतांवर वर्चस्व, आधिपत्य आणि नियंत्रण आहे तिथे अशक्य काही उरतच नाही कारण मुळातच या सृष्टीची निर्मिती या पंचमहाभूतांवर झाली आहे.`
    },
    {
      id: 39,
      image: "blog/thirty-nine.jpg",
      category: "Spiritual Guidance",
      date: "21/06/2026",
      title: "षड्रिपूंचे व्हायरस",
      author: "MBSM Trust",
      content: `मनात नाम स्थानापन्न झालं की जी अनुभुती येते ती शब्दात व्यक्त होत नाही. ती अनुभवावीच लागते. जसं मोबाईलचं रीचार्ज होतं तसं आपल्या जीवनाचं रीचार्ज नाम-जपाने होतं. एक नवीन ऊर्जा प्राप्त होते, एक विश्वास निर्माण होतो. जे हवय ते मिळाल्याचं समाधान प्राप्त होतं.

जो पैसा, जी प्रतिष्ठा, जी लक्झरी, मिळवण्याकरिता आपण आपला प्रत्येक श्वास खर्च करतो, सकाळी उठल्यापासून अगदी रात्री झोपेपर्यंत. इतकी धावपळ करतो, इतका ताण-तणाव सहन करतो. हाती मात्र काहीही गवसत नाही. आणि जेव्हा आपल्याला ती गोष्ट प्राप्त होते, तेव्हा वेळ निघून गेलेली असते.

याची अनुभूती जेव्हा आपल्याला होते तेव्हा ती अनुभवानंतरची अनुभूती असते. अनुभव हा शब्दात व्यक्त करता येतो. अनुभुती शब्दबद्ध करता येत नाही.

मग अशा या कलियुगातील जीवनामध्ये आपल्यातल्या "मी" वर षड्रिपूंनी अतिक्रमण केलय. ज्याप्रमाणे एखाद्या सॉफ्टवेअरमध्ये व्हायरस जातो की ते मन मानेल त्या ऑर्डर्स, कमांड्स देऊ लागतो. त्याचप्रमाणे, या आपल्या मनावर षड्रिपूंचं अतिक्रमण झाल्यानंतर होतं.

असे काही कर्म आपल्यामाध्यामातून होतात की जेव्हा आपण ते कर्म आठवतो, आपल्यालाच प्रश्न पडतो "की मी असा वागू शकतो"

आणि म्हणुन शंकर महाराजांनी या कलियुगात म्हंटलंय,

"मुझे वही जानता है | जो खुद को समझता है ||"

किती छान आणि सोपं वाक्य आहे!

इथे स्वतःची इतकी जाणीव आहे, इतका मीपणा आहे आपल्यामध्ये की आपण आपल्यातल्या खर्या "मी" ला म्हणजेच अंतर्मनाला विसरून गेलो आहोत. आपला प्रत्येक श्वास हा षड्रिपूंच्या अधिपत्याखाली येतं.

आज आपल्यातल्या "मी" ला शोधण्याची गरज पडली आहे. या युगाला कलियुग का म्हंटलं गेल कारण इथे प्रत्येक चेहर्‍यावर अनेक मुखवटे आहेत. एक ही चेहरा ओरिजिनल नाही.

आणि या मुखवटांमागे जो चेहरा आहे, षड्रिपूंचं आपल्या मनावर जे अतिक्रमण झालंय, त्या अतिक्रमणांचे भोग म्हणजे हा उपभोगामागचा चेहरा आहे.

या अंतर्मनाची जाणीव आणि जागृती झाली तरच या मानवयोनीत जन्म घेणं सार्थक होतं.

ही अनुभूती आणि जागृती सद्गुरु शंकर महाराजांनी अखिल मानवजातीला दिली.`
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
                  {blog.id === 22 ? (
                    <div dangerouslySetInnerHTML={{ __html: blog.content.replace(/\n\n/g, '</p><p>').replace(/^/, '<p>').replace(/$/, '</p>') }} />
                  ) : (
                    blog.content.split('\n\n').map((paragraph, index) => (
                      <p key={index}>{paragraph}</p>
                    ))
                  )}
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




