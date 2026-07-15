"use client";
import { useState } from "react";

const FounderStory = () => {
  const sections = [
    {
      title: "The Divine Selection & Early Life",
      image: "/assets/images/about/about-1.png",
      content: [
        "Shri Shankar Maharaj is a very special and powerful spiritual master. His life and teachings are amazing and beyond ordinary understanding. Even today, he appears to his followers in visions and helps them do good work. He does not care about caste, religion, country, or time. He chooses the right people and helps them serve society.",
        "Shree Vishweshwar Swami Maharaja is one such blessed person. He was a young medicine maker from the Jain-Marwadi community. He had never heard of Shankar Maharaj and did not believe in God or religion. But Maharaj chose him and blessed him. He took control of Shree Vishweshwar Swami Maharaja's body and mind and used him to do great social work that continues even today.",
        "Shree Vishweshwar Swami Maharaja's full name is Rajesh Hiralal Kothari. Everyone calls him Shree Vishweshwar Swami Maharaja. He was born in Nagar (Ahmednagar) on February 6, 1968, into a Jain-Marwadi family. As a child, he was very playful and mischievous. No one could have guessed that he would do such great work later in life.",
        "He studied in Nagar and Chandwad. After finishing high school in science, he studied Pharmacy and joined his family's medicine business."
      ]
    },
    {
      title: "The Kothari Family Background",
      image: "/assets/images/about/about-2.png",
      content: [
        "The Kothari family originally comes from Rajasthan. Their home village is Burunda in Sojat Tehsil, near Jodhpur. Their old house, fields, and farmland are still there. The family worships Sindhu Morkhana Devi, their family goddess, whose temple is located about thirty kilometers from the Bikaner-Jodhpur highway.",
        "About 110 years ago, his great-grandfather Kaluramji Kothari left Rajasthan for business and came to Nagar. There, he started selling Ayurvedic medicines. This family business became famous for checking patients' pulse to find diseases and providing very effective treatments. Many families in Nagar trusted them.",
        "Shree Vishweshwar Swami Maharaja's grandfather Mangalchand and father Hiralal were famous traditional doctors in Nagar. They were very good at checking pulse to diagnose diseases. Their medicine shop is near the Adatbazar Vegetable Market in Ganjbazar. This shop has been running for over one hundred years. The good work done by three generations of the family helped Shree Vishweshwar Swami Maharaja."
      ]
    },
    {
      title: "Shree Vishweshwar Swami Maharaja and the Business",
      image: "/assets/images/about/about-3.png",
      content: [
        "Shree Vishweshwar Swami Maharaja has two brothers. One brother runs the shop, and the other manages the office accounts. Shree Vishweshwar Swami Maharaja, who has a Pharmacy degree, makes the medicines.",
        "As a science student, he always tested everything with logic and science. He speaks his mind and does not flatter anyone. He does not believe anything without proof or personal experience. As the youngest son, he was loved very much. At first, he did not believe in God. He did not like visiting temples or doing religious rituals. His belief was to do your work well, do good deeds, and run business honestly.",
        "Although his mother and grandmother did many religious activities at home, and he grew up in a religious environment, his father Hiralal was a truthful and principled man. He treated medicine as a service to people. His honesty and dedication were passed on to his son Shree Vishweshwar Swami Maharaja.",
        "All three brothers, including Shree Vishweshwar Swami Maharaja, are married and work in the medical field. Their father Hiralal Kothari passed away on December 8, 2010. Even today, hundreds of patients remember him fondly."
      ]
    },
    {
      title: "Datta's Grace at Dattache Shingave",
      image: "/assets/images/about/about-4.png",
      content: [
        "Shree Vishweshwar Swami Maharaja has a very attractive and bright personality. Though playful by nature, he never hurt anyone or did anything wrong. Since childhood, he had a strong desire to fight against injustice. Even though he did not believe in God, he always believed in helping people.",
        "Because of his business, he met people from all communities and all religions. This made him more understanding and knowledgeable.",
        "One day, Shree Vishweshwar Swami Maharaja, who had never visited any temple, suddenly felt like going. He took a friend and went to the Datta temple on the Nagar-Aurangabad road for the evening prayer ceremony.",
        "This happened on March 29, 1983. Dattache Shingave, near Pandhari Bridge, is an ancient and powerful spiritual place. Shree Vishweshwar Swami Maharaja came here with his friend on a bicycle to see the temple. It was exactly the time of the prayer ceremony.",
        "During the prayer, he felt something changing in his body. He felt great joy. His whole body felt bright and full of new energy. He returned to Nagar feeling the same way. He continued to feel this change in his body and mind, but he did not pay much attention to it.",
        "This was his first step on the spiritual path."
      ]
    },
    {
      title: "Vision of Datta and Shiva at Pachora",
      image: "/assets/images/about/about-5.png",
      content: [
        "In April 1983, Shree Vishweshwar Swami Maharaja went to Pachora for a relative's wedding. After dinner, he went to sleep.",
        "He slept for three or four hours and woke up early in the morning before dawn. He smelled a beautiful fragrance everywhere. The atmosphere felt peaceful. He felt light in his body.",
        "Then he felt someone waking him by placing a hand under his neck. When he opened his eyes, he saw bright, clean light everywhere. In that light, he saw Datta with one face. Then he saw Datta with three faces, which disappeared quickly. After that, he saw Lord Shiva in a dark, glowing form.",
        "Dattatreya, after showing himself in three forms, woke Shree Vishweshwar Swami Maharaja up. He blew into both his ears as a blessing, gave him a special prayer, and told him to leave Pachora immediately. He promised, \"Wherever you go, I am always with you.\"",
        "This sudden and unexpected vision made Shree Vishweshwar Swami Maharaja think deeply. His attitude and behavior slowly started to change. He felt a big change happening inside his body. As instructed, he returned to Nagar from Pachora.",
        "He focused on his business. He started feeling that Datta Guru was always with him. However, he was not the type to believe things easily. So he chose to ignore this. His attitude was, \"Show me proof, or I won't believe it.\"",
        "Even though Datta Guru was kind to him, Shree Vishweshwar Swami Maharaja was not ready to accept it. Datta Guru started appearing in the factory while he worked, and Shree Vishweshwar Swami Maharaja began arguing with him. Shree Vishweshwar Swami Maharaja tried to avoid him, saying, \"I cannot handle your religious ways; don't follow me.\" But the Guru did not leave his side."
      ]
    },
    {
      title: "Datta's Shrine at MIDC",
      image: "/assets/images/about/about-6.png",
      content: [
        "In 1977, a medicine factory was built on an eleven-thousand-square-foot plot in the MIDC area of Nagar. On this plot, a Holy Fig tree (Audumbar) had grown on its own. A Neem and Peepal tree also grew from its trunk.",
        "The factory watchman was very religious. He started cleaning the area under the Audumbar tree and lighting a lamp there. He asked Shree Vishweshwar Swami Maharaja to do the same, but Shree Vishweshwar Swami Maharaja said, \"I cannot do this. If you have faith, you do it.\"",
        "Shree Vishweshwar Swami Maharaja realized that Dattatreya lived there forever and was always watching over him.",
        "Datta Guru himself chose a girl from Junnar for Shree Vishweshwar Swami Maharaja's marriage. In 1993, at the age of twenty-five, he got married.",
        "During the ten years from 1983 to 1993, the Guru knowingly and unknowingly helped Shree Vishweshwar Swami Maharaja grow. He changed his nature. He tested him and made him better. Shree Vishweshwar Swami Maharaja rejected and insulted him at every step, but Datta Guru ignored it.",
        "The Guru was confident that this \"child\" would accept him one day. That is why he stayed with Shree Vishweshwar Swami Maharaja like a shadow, day and night."
      ]
    },
    {
      title: "The Lamp of Knowledge Was Lit, The Truth Was Established",
      image: "/assets/images/about/about-7.png",
      content: [
        "The Audumbar tree that grew near the factory entrance had six stems. The watchman lit a lamp there every day. Datta Guru was always present, but Shree Vishweshwar Swami Maharaja had no clear proof. They argued about it.",
        "Shree Vishweshwar Swami Maharaja challenged Datta Guru, saying, \"You are God, so prove it! Give me an experience; only then will I believe. This Audumbar tree has six stems. Remove one stem and make it five-stemmed.\"",
        "Datta Guru immediately accepted this challenge. The very next day, one of the tree's stems had disappeared from the ground, leaving Shree Vishweshwar Swami Maharaja shocked. This was an extraordinary event.",
        "After this, proof started appearing at every step. Shree Vishweshwar Swami Maharaja had to accept that Datta Guru existed.",
        "For the first time, he went to light the lamp under the Audumbar tree himself. He took a matchbox, opened it, took out a matchstick, and was about to light it when suddenly the lamp wick caught fire on its own. The lamp lit by itself, and Shree Vishweshwar Swami Maharaja experienced the reality of the Guru. All his doubts were cleared.",
        "People started looking to Shree Vishweshwar Swami Maharaja with hope. Their problems began to disappear. People started feeling better through his treatments. Wherever he went, he started guiding people. Many followers gathered around him. Many troubled young men changed their ways and settled into family life. Some got jobs, some got married; people's problems were being solved.",
        "Shree Vishweshwar Swami Maharaja regularly visits his family goddess and also has deep faith in the temples of Girija Balaji, Ganagapur, and Tuljapur. He visits them whenever he feels like it.",
        "While managing his factory, business, and family life, he quickly became a respected spiritual leader. With Datta's blessing, he gained special spiritual abilities. He learned the art of instant travel, the ability to enter another body, and knowledge of past, present, and future.",
        "By showing proof in every possible way, Datta Guru led Shree Vishweshwar Swami Maharaja to the front of the path of devotion."
      ]
    },
    {
      title: "Meeting with Yogiraj Shankar Maharaj Himself",
      image: "/assets/images/about/about-8.png",
      content: [
        "The MIDC area of Nagar was once the farming land of Nimbalak village, but now it is full of industries and factories. To its east are Vridheshwar, Kanifnath, and Machindranath, and to the north is Gorakshanath. This holy area is protected by Vridheshwar Mahadev.",
        "Shankar Maharaj has visited this place. During his seventeen to eighteen years of living in Nagar, he often came to Nimbalak village.",
        "In 1999, Shankar Maharaj's blessing came to Shree Vishweshwar Swami Maharaja. Shree Vishweshwar Swami Maharaja was very lucky; Maharaj appeared before him in person and blessed him.",
        "He first saw Shankar Maharaj at the exact spot where his office is today. He had never seen this form before. Maharaj, with a bright form, long arms, and a slightly bent posture, stood before him and gave him a command: \"Serve the poor by giving them medicine, help the land, and work to make people into good human beings.\" Shree Vishweshwar Swami Maharaja's life became blessed.",
        "Before this, he had already seen Dattatreya, Kali Mata, and Shri Swami Samarth in person. During his pilgrimages, he had many spiritual experiences and met many enlightened souls. With the blessing of Yogiraj Shankar Maharaj, his spiritual journey reached its highest point.",
        "Since then, Maharaj's blessing has been with him continuously. Shankar Maharaj has adopted him, appearing to him in many forms: sometimes in simple clothes, sometimes in royal dress, and sometimes as Datta or Swami.",
        "The spirit of Shankar Maharaj works through Shree Vishweshwar Swami Maharaja, and through him, Maharaj achieves impossible things."
      ]
    },
    {
      title: "Mangal Products, Good Work, and Continuous Public Service",
      image: "/assets/images/about/about-9.png",
      content: [
        "The family was already well-known throughout the district because of their family business in Ayurvedic medicines, making medicines, finding diseases, and planning treatments. The respect they had earned in society was because of this work. Their business also did well.",
        "In Shree Vishweshwar Swami Maharaja's factory, \"Mangal Products\" are made, such as Dukh Bhagao Lep (a pain-relieving cream), Shinkani (a medicine like snuff), and a strong medicine for diabetes. These products are in great demand.",
        "Although Shree Vishweshwar Swami Maharaja is a businessman, his attitude is not like a typical trader. Even though he belongs to the Marwadi community, he is not greedy; instead, he is generous and open-hearted.",
        "He runs his business with honesty. Every task is done carefully and with complete faith. He spends generously for religious and social causes. He makes sure that every item used is of excellent quality. When making donations, he ensures that the grains, milk, ghee, and oil are of high quality and pure.",
        "Gradually, Shree Vishweshwar Swami Maharaja's work expanded. He became famous, and many people were drawn to him.",
        "In Nagar city, he started reciting the Hanuman Chalisa for forty days every evening from 8 to 10 PM before Hanuman Jayanti. This spiritual activity received an amazing response.",
        "After this, he organized blood donation camps.",
        "For 12 years, he ran a free clinic (OPD) in Agadgaon, located 28 km from Nagar. This work helped revive the Kalbhairav temple there, bringing new life to the neglected temple. Every Sunday, simple meals were distributed as blessed food.",
        "In Sarola village, 20 km away, he solved the water problem by building a large water tank.",
        "He gave proper guidance and involved the uneducated, unemployed youth of Sarola and nearby areas in spiritual practice. A group of two hundred such boys was formed in Sarola, and Shree Vishweshwar Swami Maharaja receives the blessings of an equal number of families."
      ]
    },
    {
      title: "Welfare Activities: Selfless Work for Public Service",
      image: "/assets/images/about/about-10.png",
      content: [
        "At this center, there are no donations, receipt books, or money transactions of any kind. There is no show, no strict religious rules. Guidance and food are provided completely free.",
        "Shankar Maharaj, working through Shree Vishweshwar Swami Maharaja, says, \"I am here to give, not to take.\" He wishes that everyone may prosper and the darkness of evil may disappear. Maharaj tells Shree Vishweshwar Swami Maharaja, \"You are vast,\" and through him, gets this huge work done.",
        "He buys cows from butchers, feeds and waters them well, and then gives them to needy people. Shree Vishweshwar Swami Maharaja has done countless cow donations.",
        "A water boiler was provided to the Sant Gadge Baba Ashram School through Shree Vishweshwar Swami Maharaja's trust.",
        "Many social benefit activities are done, such as giving three-wheeled cycles to disabled people, groceries to poor and needy families, hearing aids to deaf and mute children, and essential items to orphanages.",
        "Shree Vishweshwar Swami Maharaja constantly feels the presence of Shankar Maharaj and has even made silver wooden sandals for Maharaj. When sitting on his seat, he wears a saffron cloth and a vest. At other times, he wears pants, a shirt, or other clothes. His overall impressive personality is very attractive.",
        "He cures patients by giving them Shankar Maharaj's sacred ash. Shree Vishweshwar Swami Maharaja, being a science student, says: \"Ash is an antibiotic in its pure form. It will definitely work.\" Similarly, he says that lemon helps digestion and health. He believes that there is a cause-and-effect relationship and science behind everything. Knowing this makes the work easier.",
        "Shree Vishweshwar Swami Maharaja has been given the name Vishveshwar Swaminath or Shri Swayamsiddhanath Maharaj.",
        "Because of his work, he has been honored and received many awards in various places. However, he has never shown any pride or ego.",
        "Shree Vishweshwar Swami Maharaja worships Dhanvantari (the Hindu God of Medicine), and Dhanvantari blesses him. His promise of healthcare through medicine and human service through spiritual guidance continues as per Shankar Maharaj's command.",
        "He often visits places and temples that are important to Shankar Maharaj. He knows all the families blessed by Shankar Maharaj in Nagar, Mumbai, Pune, and Solapur. People blessed by Shankar Maharaj also visit Shree Vishweshwar Swami Maharaja's center, where they are given proper respect. Maharaj inspires Shree Vishweshwar Swami Maharaja to visit many holy places, and he travels there to see them.",
        "He enjoys bathing at Ramghat in Nashik. He has been lucky enough to perform worship and apply sandalwood to the formless sandals at Ganagapur. When he visits Balaji temple, he does not need to stand in line; his entry is arranged beforehand, and he gets easy access. The deities of those temples invite him and make arrangements for his visit."
      ]
    },
    {
      title: "Special Welcome at Ajmer Dargah",
      image: "/assets/images/about/about-11.png",
      content: [
        "Shree Vishweshwar Swami Maharaja received a special invitation from the Dargah of Khwaja Moinuddin Chishti in Ajmer. There was a huge crowd, and it would have taken six or seven hours to stand in line.",
        "However, a man arrived early in the morning, specifically looking for him. After finding Shree Vishweshwar Swami Maharaja, the man took him for viewing, gave him hospitality, and presented him with a shawl as a blessing from the Dargah.",
        "When asked, it was found that this man was a Trustee there, and he had come looking for Shree Vishweshwar Swami Maharaja based on a vision he had received. He then served him and saw him off with respect.",
        "There are countless such stories of blessings and miracles."
      ]
    },
    {
      title: "Challenges and The Path Forward",
      image: "/assets/images/about/about-12.png",
      content: [
        "Some difficult incidents also happened. He faced trouble and false accusations, but Shree Vishweshwar Swami Maharaja, who has the support of Shankar Maharaj and the blessing of Datta Guru, was and will remain unaffected by any of it.",
        "His work continues today through the Mangal Bhakt Seva Mandal (Mangal bhakt Service Association) and will continue forever.",
        "Shankar Maharaj used to say: \"The words I speak are the prayer, the path I walk is the circle around the temple, and selfless action is my worship and that itself is the easy state of peace and joy.\"",
        "Shree Vishweshwar Swami Maharaja's work is exactly like this. Shankar Maharaj himself speaks through his mouth. He helps people according to their devotion and provides the experience of peace and joy to those who seek spiritual growth."
      ]
    }
  ];

  const [active, setActive] = useState(0);
  const current = sections[active];

  const goTo = (index) => {
    if (index >= 0 && index < sections.length) {
      setActive(index);
    }
  };

  return (
    <section className='founder-story'>
      <div className='container'>
        <div className='row'>
          <div className='col-12'>
            <div
              className='section__header text-center'
              data-aos='fade-up'
              data-aos-duration={1000}
            >
              <span className='sub-title'>
                <i className='icon-donation' />
                Where there's less, we give our best!
              </span>
              <h2 className='title-animation_inner'>
                The Spiritual Journey of <span className='founder-story__name'>Shree Vishweshwar Swami Maharaja</span>
              </h2>
            </div>
          </div>
        </div>

        <div className='founder-reader'>
          <div className='row g-4 g-lg-4'>
            {/* Chapter index (hidden on mobile & tablet) */}
            <div className='col-lg-4 founder-reader__index-col'>
              <aside className='founder-reader__index'>
                <div className='founder-reader__index-head'>
                  <span className='founder-reader__index-eyebrow'>
                    <i className='fa-solid fa-book-open' />
                    The Chapters
                  </span>
                  <span className='founder-reader__index-count'>
                    01 &ndash; {String(sections.length).padStart(2, '0')}
                  </span>
                </div>
                <ul className='founder-reader__list'>
                  {sections.map((section, index) => (
                    <li key={index}>
                      <button
                        type='button'
                        className={`founder-reader__chapter ${active === index ? 'is-active' : ''}`}
                        onClick={() => goTo(index)}
                        aria-current={active === index ? 'true' : undefined}
                      >
                        <span className='founder-reader__chapter-num'>
                          {String(index + 1).padStart(2, '0')}
                        </span>
                        <span className='founder-reader__chapter-title'>
                          {section.title}
                        </span>
                        <i className='fa-solid fa-chevron-right founder-reader__chapter-arrow' />
                      </button>
                    </li>
                  ))}
                </ul>
              </aside>
            </div>

            {/* Reading pane */}
            <div className='col-lg-8'>
              <article
                key={active}
                className='founder-reader__content'
              >
                <div className='founder-reader__content-head'>
                  <span className='founder-reader__kicker'>
                    <i className='fa-solid fa-om' />
                    Chapter {active + 1} of {sections.length}
                  </span>
                  <h3 className='founder-reader__title'>{current.title}</h3>
                </div>

                <div className='founder-reader__body'>
                  <figure className='founder-reader__media'>
                    <div className='founder-reader__media-frame'>
                      <img src={current.image} alt={current.title} />
                    </div>
                    <span className='founder-reader__seal' aria-hidden='true'>
                      <i className='fa-solid fa-spa' />
                    </span>
                  </figure>

                  {current.content.map((paragraph, i) => (
                    <p key={i}>{paragraph}</p>
                  ))}
                </div>

                <div className='founder-reader__nav'>
                  <button
                    type='button'
                    className='founder-reader__nav-btn'
                    onClick={() => goTo(active - 1)}
                    disabled={active === 0}
                  >
                    <i className='fa-solid fa-chevron-left' />
                    <span>Previous</span>
                  </button>
                  <span className='founder-reader__nav-progress'>
                    {String(active + 1).padStart(2, '0')}
                    <em> / {String(sections.length).padStart(2, '0')}</em>
                  </span>
                  <button
                    type='button'
                    className='founder-reader__nav-btn'
                    onClick={() => goTo(active + 1)}
                    disabled={active === sections.length - 1}
                  >
                    <span>Next</span>
                    <i className='fa-solid fa-chevron-right' />
                  </button>
                </div>
              </article>
            </div>
          </div>
        </div>
      </div>

      <div className='shape d-none d-lg-block'>
        <img src='assets/images/shape.png' alt='Image_inner' />
      </div>
      <div
        className='shape-left'
        data-aos='fade-right'
        data-aos-duration={1000}
        data-aos-delay={300}
      >
        <img src='assets/images/cta/shape-left.png' alt='Image_inner' />
      </div>
      <div
        className='sprade'
        data-aos='zoom-in'
        data-aos-duration={1000}
      >
        <img
          src='assets/images/sprade-base.png'
          alt='Image_inner'
          className='base-img'
        />
      </div>
      <div className='founder-story__grid-line'>
        <img
          src='assets/images/help/grid.png'
          alt='Image_inner'
          className='base-img'
        />
      </div>
    </section>
  );
};

export default FounderStory;
