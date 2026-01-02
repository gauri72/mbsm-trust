const FaqOne = () => {
  return (
    <section className='faq'>
      <div className='container'>
        <div className='row align-items-center'>
          <div className='col-12 col-lg-8 col-xl-6'>
            <div className='faq__content'>
              <div
                className='section__content'
                data-aos='fade-up'
                data-aos-duration={1000}
              >
                <span className='sub-title'>
                  <i className='icon-donation' />
                  Where there's less, we give our best!
                </span>
                <h2 className='title-animation_inner'>
                  Frequently <span>Asked</span>
                  Questions
                </h2>
              </div>
              <div
                className='faq__content-inner cta'
                data-aos='fade-up'
                data-aos-duration={1000}
                data-aos-delay={100}
              >
                <div className='accordion' id='accordion'>
                  <div className='accordion-item'>
                    <h6 className='accordion-header' id='headingOne'>
                      <button
                        className='accordion-button'
                        type='button'
                        data-bs-toggle='collapse'
                        data-bs-target='#collapseOne'
                        aria-expanded='true'
                        aria-controls='collapseOne'
                      >
                        What services does MBSM Trust provide to the community?
                      </button>
                    </h6>
                    <div
                      id='collapseOne'
                      className='accordion-collapse collapse show'
                      aria-labelledby='headingOne'
                      data-bs-parent='#accordion'
                    >
                      <div className='accordion-body'>
                        <p>
                          MBSM Trust provides comprehensive spiritual and humanitarian services including annadanam (food distribution) programs, educational support through school kit distribution and counseling, medical camps and healthcare services, spiritual guidance and religious education, and community events that strengthen religious harmony and unity.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className='accordion-item'>
                    <h6 className='accordion-header' id='headingTwo'>
                      <button
                        className='accordion-button collapsed'
                        type='button'
                        data-bs-toggle='collapse'
                        data-bs-target='#collapseTwo'
                        aria-expanded='false'
                        aria-controls='collapseTwo'
                      >
                        How can I learn more about MBSM Trust's spiritual mission?
                      </button>
                    </h6>
                    <div
                      id='collapseTwo'
                      className='accordion-collapse collapse'
                      aria-labelledby='headingTwo'
                      data-bs-parent='#accordion'
                    >
                      <div className='accordion-body'>
                        <p>
                          You can learn more about MBSM Trust's spiritual mission and humanitarian work by exploring our projects page, reading about the spiritual journey of Shree Vishweshwar Swami Maharaja, attending our community events, or by contacting us directly at +91 7588797788 or mbsmtrust@gmail.com. We welcome visitors to our center and encourage participation in our spiritual programs, community service initiatives, and educational activities.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className='accordion-item'>
                    <h6 className='accordion-header' id='headingThree'>
                      <button
                        className='accordion-button collapsed'
                        type='button'
                        data-bs-toggle='collapse'
                        data-bs-target='#collapseThree'
                        aria-expanded='false'
                        aria-controls='collapseThree'
                      >
                        Can I volunteer with MBSM Trust's programs?
                      </button>
                    </h6>
                    <div
                      id='collapseThree'
                      className='accordion-collapse collapse'
                      aria-labelledby='headingThree'
                      data-bs-parent='#accordion'
                    >
                      <div className='accordion-body'>
                        <p>
                          Yes, we welcome volunteers who wish to serve the community. You can participate in our annadanam programs, educational initiatives, medical camps, and spiritual events. To volunteer, please contact us at mbsmtrust@gmail.com or call +91 7588797788. We value your time and commitment to making a positive impact.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className='accordion-item'>
                    <h6 className='accordion-header' id='headingFour'>
                      <button
                        className='accordion-button collapsed'
                        type='button'
                        data-bs-toggle='collapse'
                        data-bs-target='#collapseFour'
                        aria-expanded='false'
                        aria-controls='collapseFour'
                      >
                        What makes MBSM Trust different from other organizations?
                      </button>
                    </h6>
                    <div
                      id='collapseFour'
                      className='accordion-collapse collapse'
                      aria-labelledby='headingFour'
                      data-bs-parent='#accordion'
                    >
                      <div className='accordion-body'>
                        <p>
                          MBSM Trust uniquely combines spiritual guidance with humanitarian service, creating a holistic approach to community support. We focus on strengthening religious equality, fostering unity through meaningful social and spiritual events, and providing compassionate service that addresses both material and spiritual needs of individuals and communities.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='col-12 col-lg-4 col-xl-5 offset-xl-1'>
            <div className='faq__thumb d-none d-lg-block'>
              <div className='faq__thumb-inner'>
                <div
                  className='thumb-lg'
                  data-aos='fade-up'
                  data-aos-duration={1000}
                  data-aos-delay={100}
                >
                  <img src='assets/images/faq/thumb-lg.png' alt='Image_inner' />
                </div>
                <div
                  className='thumb-sm'
                  data-aos='fade-left'
                  data-aos-duration={1000}
                  data-aos-delay={300}
                >
                  <img src='assets/images/faq/thumb-sm.png' alt='Image_inner' />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='shape d-none d-lg-block'>
        <img src='assets/images/faq/shape.png' alt='Image_inner' />
      </div>
    </section>
  );
};

export default FaqOne;
