"use client";
import Link from "next/link";
import { useState } from "react";
import ModalVideo from "react-modal-video";

const HelpOne = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <section className='help'>
        <div className='container'>
          <div className='row align-items-center gutter-40'>
            <div className='col-12 col-lg-5 col-xxl-6 d-none d-lg-block'>
              <div className='help__thumb'>
                <div className='help__thumb-inner'>
                  <div className='thumb-top thumb'>
                    <img
                      src='/assets/images/help/thumb-top.png'
                      alt='Image_inner'
                    />
                  </div>
                  <div
                    className='thumb-lg thumb'
                    data-aos='fade-left'
                    data-aos-duration={1000}
                  >
                    <img
                      src='/assets/images/help/thumb-lg.png'
                      alt='Image_inner'
                    />
                    <div className='video-btn-wrapper'>
                      <span
                        onClick={() => setIsOpen(true)}
                        className='open-video-popup'
                      >
                        <i className='icon-play' />
                      </span>
                    </div>
                  </div>
                  <div className='thumb thumb-bottom'>
                    <img
                      src='/assets/images/help/thumb-bottom.png'
                      alt='Image_inner'
                    />
                  </div>
                  <div className='line'>
                    <img src='/assets/images/help/line.png' alt='Image_inner' />
                  </div>
                  <div className='grid-line'>
                    <img
                      src='/assets/images/help/grid.png'
                      alt='Image_inner'
                      className='base-img'
                    />
                  </div>
                  <div className='vertical-text'>
                    <h5>
                      Where there's less, We give our best!
                    </h5>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-12 col-lg-7 col-xxl-6'>
              <div className='help__content'>
                <span className='sub-title'>
                  <i className='icon-donation' />
                  Where there's less, We give our best!
                </span>
                <h2 className='title-animation_inner'>
                  Serving Humanity Through <span>Spiritual</span> Unity
                </h2>
                <p>
                  MBSM Trust brings communities together through spiritual guidance, social support, and compassionate service, creating lasting bonds of unity and harmony.
                </p>
                <div className='help__content-icon-group'>
                  <div className='help__content-icon'>
                    <div className='thumb'>
                      <i className='icon-make-donation' />
                    </div>
                    <div className='content'>
                      <h6>Spiritual Guidance</h6>
                      <p>
                        Providing spiritual direction and support to help individuals find inner peace and purpose through our religious gatherings and events.
                      </p>
                    </div>
                  </div>
                  <div className='help__content-icon'>
                    <div className='thumb'>
                      <i className='icon-support-heart' />
                    </div>
                    <div className='content'>
                      <h6>Community Support</h6>
                      <p>
                        Strengthening religious equality and creating unity through various social initiatives, events, and humanitarian programs.
                      </p>
                    </div>
                  </div>
                </div>
                <div className='help__content-list'>
                  <ul>
                    <li>
                      <i className='fa-solid fa-circle-check' /> Supporting humanity through spiritual service and compassionate outreach programs.
                    </li>
                    <li>
                      <i className='fa-solid fa-circle-check' /> Strengthening religious equality and fostering unity across diverse communities.
                    </li>
                    <li>
                      <i className='fa-solid fa-circle-check' /> Guiding people spiritually through various social events, gatherings, and religious ceremonies.
                    </li>
                  </ul>
                </div>
                <div className='help__content-cta cta'>
                  <Link
                    href='/about-us'
                    aria-label='more about us'
                    title='about us'
                    className='btn--primary'
                  >
                    More About Us
                  </Link>
                  <div className='contact-btn'>
                    <div className='contact-icon'>
                      <i className='icon-phone' />
                    </div>
                    <div className='contact-content'>
                      <p>Phone</p>
                      <a href='tel:+917588797788'>+91 7588797788</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='hand'>
          <img src='/assets/images/help/hand.png' alt='Image_inner' />
        </div>
        <div className='parasuit'>
          <img src='/assets/images/parasuit.png' alt='Image_inner' />
        </div>
        <div className='spade'>
          <img src='/assets/images/help/spade.png' alt='Image_inner' />
        </div>

        <ModalVideo
          channel='youtube'
          autoplay
          isOpen={isOpen}
          videoId='BJt3dVPyp8o'
          onClose={() => setIsOpen(false)}
          allowFullScreen
        />
      </section>
    </>
  );
};

export default HelpOne;
