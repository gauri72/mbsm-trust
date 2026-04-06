"use client";
import { useState } from "react";
import ModalVideo from "react-modal-video";
const DifferenceTwo = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("mission");
  return (
    <>
      <section className='difference-two'>
        <div className='container'>
          <div className='row gutter-40 align-items-center'>
            <div className='col-12 col-lg-4 col-xxl-5 d-none d-lg-block'>
              <div className='difference-two__thumb-wrapper'>
                <div className='difference-two__thumb'>
                  <div
                    className='thumb-lg'
                    data-aos='fade-right'
                    data-aos-duration={1000}
                  >
                    <img
                      src='assets/images/difference/thumb-sm.png'
                      alt='Image_inner'
                    />
                    <div className='grid-line'>
                      <img
                        src='assets/images/help/grid.png'
                        alt='Image_inner'
                        className='base-img'
                      />
                    </div>
                    <div className='video-btn-wrapper'>
                      <button
                        onClick={() => setIsOpen(true)}
                        className='open-video-popup'
                      >
                        <i className='icon-play' />
                      </button>
                    </div>
                  </div>
                  <div
                    className='thumb-sm'
                    data-aos='fade-up'
                    data-aos-duration={1000}
                    data-aos-delay={300}
                  >
                    <img
                      src='assets/images/difference/thumb-lg.png'
                      alt='Image_inner'
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className='col-12 col-lg-8 col-xxl-7'>
              <div className='difference-two__tab'>
                <div className='difference-two__content'>
                  <span className='sub-title'>
                    <i className='icon-donation' />
                    Where there's less, we give our best!
                  </span>
                  <h2 className='title-animation_inner'>
                    Our <span>Spiritual</span> Mission & Humanitarian Impact
                  </h2>
                  <p>
                    MBSM Trust is dedicated to serving humanity through spiritual guidance, community support, and compassionate service. We bridge the gap between those in need and those willing to help, creating a unified network of care that strengthens religious harmony and uplifts communities.
                  </p>

                  <div className='difference-two__inner cta'>
                    <div className='difference-two__inner-content'>
                      {/* TABS */}
                      <div className='difference-two__tab'>
                        <div className='difference-two__tab-btns'>
                          <button
                            className={`difference-two__tab-btn ${
                              activeTab === "mission" ? "active" : ""
                            }`}
                            onClick={() => setActiveTab("mission")}
                            aria-label='mission'
                            title='mission'
                          >
                            Our Mission
                          </button>
                          <button
                            className={`difference-two__tab-btn ${
                              activeTab === "vision" ? "active" : ""
                            }`}
                            onClick={() => setActiveTab("vision")}
                            aria-label='vision'
                            title='vision'
                          >
                            Our Vision
                          </button>
                          <button
                            className={`difference-two__tab-btn ${
                              activeTab === "excellence" ? "active" : ""
                            }`}
                            onClick={() => setActiveTab("excellence")}
                            aria-label='excellence'
                            title='excellence'
                          >
                            Excellence
                          </button>
                        </div>

                        <div className='difference-two__tab-content'>
                          {activeTab === "mission" && (
                            <div
                              className='difference-two__content-single'
                              id='mission'
                            >
                              <ul>
                                <li>
                                  <i className='fa-solid fa-check' /> Providing spiritual guidance and religious education to strengthen community values
                                </li>
                                <li>
                                  <i className='fa-solid fa-check' /> Organizing annadanam (food distribution) programs to serve the needy
                                </li>
                                <li>
                                  <i className='fa-solid fa-check' /> Supporting children's education through school kit distribution and counseling
                                </li>
                                <li>
                                  <i className='fa-solid fa-check' /> Conducting medical camps and providing healthcare services to underserved communities
                                </li>
                              </ul>
                            </div>
                          )}
                          {activeTab === "vision" && (
                            <div
                              className='difference-two__content-single'
                              id='vision'
                            >
                              <ul>
                                <li>
                                  <i className='fa-solid fa-check' /> Creating a harmonious society where spiritual values and social service unite communities
                                </li>
                                <li>
                                  <i className='fa-solid fa-check' /> Establishing a network of compassionate service that reaches every corner of need
                                </li>
                                <li>
                                  <i className='fa-solid fa-check' /> Fostering religious equality and unity through meaningful social and spiritual events
                                </li>
                                <li>
                                  <i className='fa-solid fa-check' /> Building a legacy of selfless service that inspires future generations
                                </li>
                              </ul>
                            </div>
                          )}
                          {activeTab === "excellence" && (
                            <div
                              className='difference-two__content-single'
                              id='excellence'
                            >
                              <ul>
                                <li>
                                  <i className='fa-solid fa-check' /> Maintaining transparency and accountability in all our service initiatives
                                </li>
                                <li>
                                  <i className='fa-solid fa-check' /> Delivering quality programs that make a measurable difference in people's lives
                                </li>
                                <li>
                                  <i className='fa-solid fa-check' /> Continuously improving our services through community feedback and engagement
                                </li>
                                <li>
                                  <i className='fa-solid fa-check' /> Upholding the highest standards of integrity and ethical conduct in all activities
                                </li>
                              </ul>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='spade'>
          <img src='assets/images/spade-green-two.png' alt='Image_inner' />
        </div>
      </section>
      <ModalVideo
        channel='youtube'
        autoplay
        isOpen={isOpen}
        videoId='-TlT4V5K2pM'
        onClose={() => setIsOpen(false)}
        allowFullScreen
      />
    </>
  );
};

export default DifferenceTwo;
