"use client";
import { useRef } from "react";
import Slider from "react-slick";
import Link from "next/link";

const CauseOne = () => {
  const sliderRef = useRef(null);

  const settings = {
    infinite: true,
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    arrows: false,
    dots: true,

    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  // All 30 causes data in order: Child Education, Healthy Food, Medical Care, Events
  const causes = [
    // Child Education (3 cards)
    { image: "education-1.jpg", category: "Child Education", title: "School Kit Distribution", description: "Providing essential school supplies and educational materials to children, ensuring they have the tools needed for academic success." },
    { image: "education-2.jpg", category: "Child Education", title: "Parental Support Program", description: "Empowering parents with guidance and resources to support their children's educational journey and development." },
    { image: "education-3.jpg", category: "Child Education", title: "Counseling Services", description: "Offering educational counseling and guidance services to help children and families navigate academic challenges and opportunities." },
    // Healthy Food (10 cards)
    { image: "Annadanam-1.jpg", category: "Healthy Food", title: "Sankashti Chaturthi Khichdi", description: "Serving nutritious khichdi during Sankashti Chaturthi, a sacred day of fasting and devotion in Hindu tradition." },
    { image: "Annadanam-2.jpg", category: "Healthy Food", title: "Shankar Gita Recitation", description: "Providing meals during Shankar Gita recitation sessions, combining spiritual learning with nourishment." },
    { image: "Annadanam-3.jpg", category: "Healthy Food", title: "Gaushala Support", description: "Supporting gaushalas (cow shelters) with food and resources, honoring the sacred cow in Hindu tradition." },
    { image: "Annadanam-4.jpg", category: "Healthy Food", title: "Grocery Distribution", description: "Distributing essential groceries and food items to families in need, ensuring food security in our community." },
    { image: "Annadanam-5.jpg", category: "Healthy Food", title: "Weekly Mahaprasad", description: "Organizing weekly Mahaprasad distribution, sharing blessed food with devotees and community members." },
    { image: "Annadanam-6.jpg", category: "Healthy Food", title: "Food Donation Program", description: "Regular food donation programs that provide nutritious meals to those facing food insecurity." },
    { image: "Annadanam-7.jpg", category: "Healthy Food", title: "Snehalaya Support", description: "Supporting orphanages and care homes with regular food supplies and nutritious meals for children." },
    { image: "Annadanam-8.jpg", category: "Healthy Food", title: "Police Department Support", description: "Providing meals and support to police personnel as a gesture of gratitude for their service to society." },
    { image: "Annadanam-9.jpg", category: "Healthy Food", title: "Ganesh Festival Service", description: "Serving meals and prasad during Ganesh Festival celebrations, spreading joy and devotion." },
    { image: "Annadanam-10.jpg", category: "Healthy Food", title: "Kushtdham Sweet Meal", description: "Providing special sweet meals at Kushtdham, serving devotees with love and spiritual devotion." },
    // Medical Care (6 cards)
    { image: "wellness-1.jpg", category: "Medical Care", title: "Tricycle Distribution", description: "Distributing tricycles to differently-abled individuals, enhancing their mobility and independence." },
    { image: "wellness-2.jpg", category: "Medical Care", title: "Free Medical Treatment", description: "Providing free medical treatment and healthcare services to those who cannot afford medical care." },
    { image: "wellness-3.jpg", category: "Medical Care", title: "Natural Calamity Support", description: "Offering medical aid and support during natural disasters and calamities, helping communities recover." },
    { image: "wellness-4.jpg", category: "Medical Care", title: "Weekly Medical Service", description: "Conducting weekly medical camps and health check-ups for community members in need." },
    { image: "wellness-5.jpg", category: "Medical Care", title: "Blood Donation Camp", description: "Organizing blood donation camps to support hospitals and save lives in our community." },
    { image: "wellness-6.jpg", category: "Medical Care", title: "Medical Guidance", description: "Providing medical guidance, health awareness, and preventive care information to community members." },
    // Events (11 cards)
    { image: "events-1.jpg", category: "Events", title: "Shree Vishweshwar Swami Maharaja Janmdin", description: "Celebrating the birth anniversary of Shree Vishweshwar Swami Maharaja with devotion, prayers, and community service." },
    { image: "events-2.jpg", category: "Events", title: "Maha Shivratri Kavad Yatra", description: "Organizing the sacred Kavad Yatra during Maha Shivratri, a pilgrimage of devotion to Lord Shiva." },
    { image: "events-3.jpg", category: "Events", title: "Hanuman Chalisa Path", description: "Conducting Hanuman Chalisa recitation sessions, invoking the blessings of Lord Hanuman for strength and protection." },
    { image: "events-4.jpg", category: "Events", title: "Hanuman Jayanti", description: "Celebrating Hanuman Jayanti with prayers, bhajans, and community gatherings honoring Lord Hanuman." },
    { image: "events-5.jpg", category: "Events", title: "Shree Shankar Maharaj Samadhi Sohala", description: "Observing the Samadhi Sohala of Shree Shankar Maharaj with reverence, prayers, and spiritual discourse." },
    { image: "events-6.jpg", category: "Events", title: "Guru Purnima", description: "Celebrating Guru Purnima, honoring spiritual teachers and gurus with devotion and gratitude." },
    { image: "events-7.jpg", category: "Events", title: "Gauri-Ganapati Utsav", description: "Celebrating Gauri-Ganapati Utsav with traditional rituals, prayers, and community festivities." },
    { image: "events-8.jpg", category: "Events", title: "Shree Shankar Maharaj Prakat Din", description: "Commemorating the appearance day of Shree Shankar Maharaj with special prayers and spiritual programs." },
    { image: "events-9.jpg", category: "Events", title: "Shree Datta Jayanti", description: "Celebrating Datta Jayanti, the birth anniversary of Lord Dattatreya, with devotion and spiritual activities." },
    { image: "events-10.jpg", category: "Events", title: "Dattak Gaav Yojana", description: "Organizing Dattak Gaav Yojana, a special program dedicated to Lord Dattatreya and village development." },
    { image: "events-11.jpg", category: "Events", title: "Bhajan Sandhya", description: "Hosting Bhajan Sandhya, evening devotional singing sessions that bring the community together in spiritual harmony." },
  ];

  return (
    <section
      className='cause'
      style={{
        backgroundImage: "url(/assets/images/cause/cause-bg.png)",
      }}
    >
      <div className='container'>
        <div className='row gutter-30 align-items-center'>
          <div className='col-12 col-md-8 col-xl-7'>
            <div className='section__header'>
              <span className='sub-title'>
                <i className='icon-donation' />
                Where there's less, We give our best!
              </span>
              <h2 className='title-animation_inner'>
                Our <span>Spiritual</span> Service Initiatives
              </h2>
            </div>
          </div>
          <div className='col-12 col-md-4 col-xl-5'>
            <div className='slider-navigation'>
              <button
                onClick={() => sliderRef.current.slickPrev()}
                type='button'
                aria-label='prev slide'
                title='prev slide'
                className='prev-cause slider-btn'
              >
                <i className='fa-solid fa-arrow-left' />
              </button>
              <button
                onClick={() => sliderRef.current.slickNext()}
                type='button'
                aria-label='next slide'
                title='next slide'
                className='next-cause slider-btn slider-btn-next'
              >
                <i className='fa-solid fa-arrow-right' />
              </button>
            </div>
          </div>
        </div>
        <div className='row'>
          <div className='col-12'>
            <div className='cause__slider-wrapper'>
              <div className='cause__slider swiper'>
                <Slider
                  {...settings}
                  ref={sliderRef}
                  className='swiper-wrapper'
                >
                  {causes.map((cause, index) => (
                    <div key={index} className='swiper-slide'>
                      <div className='cause__slider-inner'>
                        <div className='cause__slider-single'>
                          <div className='thumb'>
                            <div>
                              <img
                                src={`/assets/images/cause/${cause.image}`}
                                alt={cause.title}
                              />
                            </div>
                            <div className='tag'>
                              <Link href='/our-causes'>{cause.category}</Link>
                            </div>
                          </div>
                          <div className='content'>
                            <h6>
                              <span>{cause.title}</span>
                            </h6>
                            <p>{cause.description}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='spade'>
        <img src='/assets/images/help/spade.png' alt='Image_inner' />
      </div>
    </section>
  );
};

export default CauseOne;
