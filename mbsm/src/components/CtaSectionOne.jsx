"use client";
import Link from "next/link";
import { useState } from "react";
import ModalVideo from "react-modal-video";
const CtaSectionOne = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <section className='cta-section'>
        <div className='container-fluid'>
          <div className='row gutter-40'>
            <div className='col-12 col-xxl-4'>
              <div className='cta-section__first cta-section__single'>
                <div
                  className='cta-section__group'
                  data-aos='fade-up'
                  data-aos-duration={1000}
                >
                  <div className='thumb'>
                    <i className='icon-spread-love' />
                  </div>
                  <div className='content'>
                    <span>Where there's less, we give our best</span>
                    <h3 className='title-animation_inner'>
                      Join Our Spiritual Mission?
                    </h3>
                  </div>
                  <div className='cta-s'>
                    <Link
                      href='/contact-us'
                      aria-label='contact us'
                      title='contact us'
                      className='btn--tertiary'
                    >
                      Contact Now
                    </Link>
                  </div>
                </div>
                <div className='cta-img'>
                  <img src='assets/images/cta/one.png' alt='Image_inner' />
                </div>
              </div>
            </div>
            <div className='col-12 col-xxl-4'>
              <div className='cta-section__center cta-section__single'>
                <div className='video-btn-wrapper'>
                  <button
                    onClick={() => setIsOpen(true)}
                    title='video Player'
                    className='open-video-popup'
                  >
                    <i className='icon-play' />
                  </button>
                </div>
                <div className='cta-img'>
                  <img
                    src='assets/images/cta/two.png'
                    alt='Image_inner'
                    className='parallax-image'
                  />
                </div>
              </div>
            </div>
            <div className='col-12 col-xxl-4'>
              <div className='cta-section__last cta-section__single'>
                <div
                  className='cta-section__group'
                  data-aos='fade-up'
                  data-aos-duration={1000}
                  data-aos-delay={300}
                >
                  <div className='thumb'>
                    <i className='icon-spread-love' />
                  </div>
                  <div className='content'>
                    <span>Where there's less, we give our best</span>
                    <h3 className='title-animation_inner'>
                      Explore Our Projects?
                    </h3>
                  </div>
                  <div className='cta-s'>
                    <Link
                      href='/our-causes'
                      aria-label='explore our projects'
                      title='explore our projects'
                      className='btn--primary'
                    >
                      Explore Work
                    </Link>
                  </div>
                </div>
                <div className='cta-img'>
                  <img src='assets/images/cta/three.png' alt='Image_inner' />
                </div>
              </div>
            </div>
          </div>
        </div>

        <ModalVideo
          channel='youtube'
          autoplay
          isOpen={isOpen}
          videoId='6LEbEFVRMSc'
          onClose={() => setIsOpen(false)}
          allowFullScreen
        />
      </section>
    </>
  );
};

export default CtaSectionOne;
