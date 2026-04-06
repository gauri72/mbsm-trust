"use client";
import Link from "next/link";
import React, { useRef } from "react";
import Slider from "react-slick";

const DifferenceOne = () => {
  const sliderRef = useRef(null);
  const settings = {
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
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
  return (
    <>
      <section className='difference'>
        <div className='container'>
          <div className='row justify-content-center'>
            <div className='col-12 col-lg-10 col-xl-8'>
              <div
                className='section__header text-center'
                data-aos='fade-up'
                data-aos-duration={1000}
              >
                <span className='sub-title'>
                  <i className='icon-donation' />
                  Where there's less, We give our best!
                </span>
                <h2 className='title-animation_inner'>
                  Spiritual Service & Unity Mission
                </h2>
                <p>
                  MBSM Trust is a Hindu religious and spiritual organization formed with the intention of supporting humanity, strengthening religious equality, creating unity and guiding people spiritually through various social events and gatherings.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className='difference__inner'>
          <div className='container'>
            <div className='row'>
              <div className='col-12'>
                <div className='difference__slider swiper'>
                  <Slider
                    {...settings}
                    ref={sliderRef}
                    className='swiper-wrapper'
                  >
                    <div className='swiper-slide px-2'>
                      <div className='difference__single-wrapper'>
                        <div
                          className='difference__single difference__single-first'
                          style={{
                            backgroundImage:
                              "url(/assets/images/difference/bg-one.png)",
                          }}
                        >
                          <div className='difference__single-thumb'>
                            <i className='icon-education' />
                          </div>
                          <div className='difference__single-content'>
                            <h5>
                              <Link href='/cause-details'>Child Education</Link>
                            </h5>
                            <p>
                              Providing quality education and learning opportunities to children, ensuring access to knowledge, skills, and spiritual values that empower them for a brighter future.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className='swiper-slide px-2'>
                      <div className='difference__single-wrapper'>
                        <div
                          className='difference__single difference__single-second'
                          style={{
                            backgroundImage:
                              "url(/assets/images/difference/bg-two.png)",
                          }}
                        >
                          <div className='difference__single-thumb'>
                            <i className='icon-food' />
                          </div>
                          <div className='difference__single-content'>
                            <h5>
                              <Link href='/cause-details'>Healthy Food</Link>
                            </h5>
                            <p>
                              Annadanam - the sacred act of food distribution. We provide nutritious meals to those in need, following the spiritual principle of serving humanity with love and compassion.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className='swiper-slide px-2'>
                      <div className='difference__single-wrapper'>
                        <div
                          className='difference__single difference__single-third '
                          style={{
                            backgroundImage:
                              "url(/assets/images/difference/bg-three.png)",
                          }}
                        >
                          <div className='difference__single-thumb'>
                            <i className='icon-health' />
                          </div>
                          <div className='difference__single-content'>
                            <h5>
                              <Link href='/cause-details'>Medical Care</Link>
                            </h5>
                            <p>
                              Providing essential healthcare services, medical support, and health awareness programs to ensure the well-being of our community members in need.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className='swiper-slide px-2'>
                      <div className='difference__single-wrapper'>
                        <div
                          className='difference__single difference__single-second'
                          style={{
                            backgroundImage:
                              "url(/assets/images/difference/bg-two.png)",
                          }}
                        >
                          <div className='difference__single-thumb'>
                            <i className='icon-calendar' />
                          </div>
                          <div className='difference__single-content'>
                            <h5>
                              <Link href='/cause-details'>Community Events</Link>
                            </h5>
                            <p>
                              Organizing spiritual gatherings, religious festivals, and community celebrations that strengthen unity, preserve cultural traditions, and bring people together in devotion and harmony.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className='swiper-slide px-2'>
                      <div className='difference__single-wrapper'>
                        <div
                          className='difference__single difference__single-first'
                          style={{
                            backgroundImage:
                              "url(/assets/images/difference/bg-one.png)",
                          }}
                        >
                          <div className='difference__single-thumb'>
                            <i className='icon-education' />
                          </div>
                          <div className='difference__single-content'>
                            <h5>
                              <Link href='/cause-details'>Child Education</Link>
                            </h5>
                            <p>
                              Providing quality education and learning opportunities to children, ensuring access to knowledge, skills, and spiritual values that empower them for a brighter future.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className='swiper-slide px-2'>
                      <div className='difference__single-wrapper'>
                        <div
                          className='difference__single difference__single-second'
                          style={{
                            backgroundImage:
                              "url(/assets/images/difference/bg-two.png)",
                          }}
                        >
                          <div className='difference__single-thumb'>
                            <i className='icon-food' />
                          </div>
                          <div className='difference__single-content'>
                            <h5>
                              <Link href='/cause-details'>Healthy Food</Link>
                            </h5>
                            <p>
                              Annadanam - the sacred act of food distribution. We provide nutritious meals to those in need, following the spiritual principle of serving humanity with love and compassion.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className='swiper-slide px-2'>
                      <div className='difference__single-wrapper'>
                        <div
                          className='difference__single difference__single-third '
                          style={{
                            backgroundImage:
                              "url(/assets/images/difference/bg-three.png)",
                          }}
                        >
                          <div className='difference__single-thumb'>
                            <i className='icon-health' />
                          </div>
                          <div className='difference__single-content'>
                            <h5>
                              <Link href='/cause-details'>Medical Care</Link>
                            </h5>
                            <p>
                              Providing essential healthcare services, medical support, and health awareness programs to ensure the well-being of our community members in need.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className='swiper-slide px-2'>
                      <div className='difference__single-wrapper'>
                        <div
                          className='difference__single difference__single-second'
                          style={{
                            backgroundImage:
                              "url(/assets/images/difference/bg-two.png)",
                          }}
                        >
                          <div className='difference__single-thumb'>
                            <i className='icon-calendar' />
                          </div>
                          <div className='difference__single-content'>
                            <h5>
                              <Link href='/cause-details'>Community Events</Link>
                            </h5>
                            <p>
                              Organizing spiritual gatherings, religious festivals, and community celebrations that strengthen unity, preserve cultural traditions, and bring people together in devotion and harmony.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Slider>
                </div>
              </div>
            </div>
          </div>
          <div className='slider-navigation'>
            <button
              onClick={() => sliderRef.current.slickPrev()}
              type='button'
              aria-label='prev slide'
              title='prev slide'
              className='prev-difference slider-btn'
            >
              <i className='fa-solid fa-arrow-left' />
            </button>
            <button
              onClick={() => sliderRef.current.slickNext()}
              type='button'
              aria-label='next slide'
              title='next slide'
              className='next-difference slider-btn slider-btn-next'
            >
              <i className='fa-solid fa-arrow-right' />
            </button>
          </div>
        </div>
        <div
          className='shape-hand'
          data-aos='fade-right'
          data-aos-duration={1000}
          data-aos-delay={300}
        >
          <img
            src='/assets/images/difference/shape-hand.png'
            alt='Image_inner'
          />
        </div>
      </section>
    </>
  );
};

export default DifferenceOne;
