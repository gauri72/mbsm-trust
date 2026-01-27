"use client";
import Link from "next/link";

const BlogInner = () => {
  // 10 blog posts
  const blogs = [
    {
      id: 1,
      image: "blog/one.jpg",
      category: "Spiritual Journey",
      date: "08/01/2025",
      title: "Where a Never-Ending Rainfall of Blessings Flows: The Shankar Maharaj Math in Ahilyanagar",
      description: "Thursday is an ordinary day for most people. People are engrossed in their daily chores and duties, eagerly waiting for the weekend. But at the Shankar Maharaj Math (pilgrimage) located in the MIDC locality of Ahilyanagar, Maharashtra, \"Thursday\" carries a different meaning. It is a special day soaked in devotion, peace and quiet miracles.",
      author: "MBSM Trust"
    },
    {
      id: 2,
      image: "blog/two.jpg",
      category: "Community Service",
      date: "08/01/2025",
      title: "Come Here to Experience the True Meaning of Service, Devotion, Charity & Humanity!",
      description: "The Shankar Maharaj Math is simple and warm, but the energy, the aura it holds is deeply powerful. The Math takes care of every basic need of a devotee. From clean and well-equipped toilets for ladies and gents to tea and food arrangements, everything is taken care of with attention, affection and thoughtfulness.",
      author: "MBSM Trust"
    },
    {
      id: 3,
      image: "blog/three.jpg",
      category: "Spiritual Service",
      date: "08/01/2025",
      title: "Repairing Lives & Healing Hearts: The Thursday Gaadi Seva of Shankar Maharaj",
      description: "Yet, despite being showered with such overwhelming love and reverence by countless disciples, followers, and devotees, it is his greatness that Bhaau still humbly calls himself only a devotee and disciple of Sadguru Shankar Maharaj. His humility makes him even more great and divine.",
      author: "MBSM Trust"
    },
    {
      id: 4,
      image: "blog/four.jpg",
      category: "Community Service",
      date: "08/01/2025",
      title: "Thursday Annadan Seva: Food that Fulfills the Hunger & Nourishes the Soul",
      description: "On Thursday, alongside the Gaadi Seva, the Math carries out free Annadan Seva for all visitors throughout the entire day, continuing until the last person is served on Friday. Here, it is believed that \"Annadan Shreshtha Daan!,\" meaning, feeding others is the greatest charity.",
      author: "MBSM Trust"
    },
    {
      id: 5,
      image: "blog/five.jpg",
      category: "Spiritual Guidance",
      date: "08/01/2025",
      title: "\"कर्म\" हाच कलियुगाचा धर्म",
      description: "श्री विश्वेश्वर स्वामी महाराज ( श्री राजाभाऊ कोठारी) त्यांच्या गुरुवार विशेष प्रवचनात म्हणतात: बघा किती प्रश्न, किती अडचणी आपण आपल्या जीवनामध्ये निर्माण केल्या आहेत. होय! आपण निर्माण केल्या आहेत.",
      author: "MBSM Trust"
    },
    {
      id: 6,
      image: "blog/six.jpg",
      category: "Spiritual Guidance",
      date: "08/01/2025",
      title: "अहंकाराला जपत आधाराचा शोध",
      description: "श्री विश्वेश्वर स्वामी महाराज (श्री राजाभाऊ कोठारी) त्यांच्या गुरुवार विशेष प्रवचनात म्हणतात: आजच्या या कलियुगात प्रत्येक चैतन्य अतृप्त आहे. प्रत्येक चैतन्य अशांत आहे, अस्थिर आहे, आपला स्वतःवर विश्वास नाही.",
      author: "MBSM Trust"
    },
    {
      id: 7,
      image: "blog/seven.jpg",
      category: "Spiritual Guidance",
      date: "08/01/2025",
      title: "रात्र आणि दिवस: आयुष्याचं सृष्टीचक्र",
      description: "विश्वेश्वर स्वामी महाराज (श्री राजाभाऊ कोठारी) त्यांच्या गुरुवार विशेष प्रवचनात म्हणतात: या सृष्टीचक्राची निर्मिती करताना रात्र आणि दिवस एका मागे एक गुंफले गेले अगदी तसच आपल्या आयुष्यामध्ये, आपल्या संसारामध्ये, अध्यात्मामध्ये रात्र आणि दिवस आहेत.",
      author: "MBSM Trust"
    },
    {
      id: 8,
      image: "blog/eight.jpg",
      category: "Spiritual Guidance",
      date: "08/01/2025",
      title: "त्रिगुण, त्रिगुणात्मक आणि जीवनाचे शाश्वत सत्य",
      description: "श्री विश्वेश्वर स्वामी महाराज ( श्री राजाभाऊ कोठारी) त्यांच्या गुरुवार विशेष प्रवचनात म्हणतात: या सृष्टीची रचना तमस, रजस आणि सत्त्व या तीन गुणांवर झालेली आहे. दत्त महाराज त्रिगुणात्मक आहेत.",
      author: "MBSM Trust"
    },
    {
      id: 9,
      image: "blog/nine.jpg",
      category: "Spiritual Guidance",
      date: "08/01/2025",
      title: "भगवंत दरवेळी वाचवतो, पण आपण स्वतःला सुधारतो का?",
      description: "श्री विश्वेश्वर स्वामी महाराज त्यांच्या प्रवचनात म्हणतात: भगवंत खूप दयाळू आहे, मायाळू आहे, साक्षात माऊलीस्वरूप आहे. आपल्या प्रत्येक चुकीला तो पदरात घालतो, आपले अपराध पोटी घेतो.",
      author: "MBSM Trust"
    },
    {
      id: 10,
      image: "blog/ten.jpg",
      category: "Spiritual Guidance",
      date: "08/01/2025",
      title: "मानव जन्म, षडरिपू आणि गुरूचे महत्व",
      description: "आपला जन्म हा मानव योनीतला जन्म आहे. मानव योनीतला जन्म म्हणजे वासनेतला जन्म. आपण असेच प्रकट नाही झालो, आपण आपल्या आई वडिलांच्या पोटी जन्म घेतला आहे.",
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


