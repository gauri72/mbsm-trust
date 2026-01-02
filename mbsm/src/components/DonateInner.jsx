"use client";
import Link from "next/link";

const DonateInner = () => {
  return (
    <div className='cm-details donate-us community checkout faq'>
      <div className='container'>
        <div className='row gutter-60'>
          <div className='col-12 col-xl-8'>
            <div className='cm-details__content'>
              <div
                className='cm-details__poster'
                data-aos='fade-up'
                data-aos-duration={1000}
                data-aos-delay={100}
              >
                <img
                  src='assets/images/event/poster-two.png'
                  alt='Image_inner'
                />
              </div>
              <div
                className='donate-inner'
                data-aos='fade-up'
                data-aos-duration={1000}
                data-aos-delay={100}
              >
                <div className='cm-group'>
                  <h3 className='title-animation_inner'>
                    Support Our Spiritual Mission & Humanitarian Service
                  </h3>
                  <p>
                    MBSM Trust is dedicated to serving humanity through spiritual guidance, community support, and compassionate service. Your contribution helps us continue our mission of providing annadanam (food distribution), educational support, medical care, and organizing spiritual events that strengthen community harmony and unity.
                  </p>
                </div>
                <div className='cta'>
                  <div className='community-donation'>
                    <div className='community-donation__inner'>
                      <h4>Your Contribution Makes a Difference</h4>
                      <div style={{ textAlign: 'center', marginTop: '30px' }}>
                        <img
                          src='/assets/images/community/donate-qr-code.png'
                          alt='Donate QR Code'
                          style={{ maxWidth: '300px', width: '100%', height: 'auto', borderRadius: '10px' }}
                        />
                        <p style={{ marginTop: '20px', fontSize: '14px', color: 'var(--secondary-color)', fontWeight: '600' }}>
                          Scan to donate and support our spiritual mission
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='award'>
              <div className='container'>
                <div className='row gutter-24'>
                  <div className='col-12 col-lg-8'>
                    <div
                      className='award__single'
                      data-aos='fade-up'
                      data-aos-duration={1000}
                    >
                      <div className='thumb'>
                        <Link href='/event-details'>
                          <img
                            src='assets/images/award/one.png'
                            alt='Image_inner'
                          />
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className='col-12 col-lg-4'>
                    <div
                      className='award__single'
                      data-aos='fade-up'
                      data-aos-duration={1000}
                      data-aos-delay={200}
                    >
                      <div className='thumb'>
                        <Link href='/event-details'>
                          <img
                            src='assets/images/award/four.png'
                            alt='Image_inner'
                          />
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className='col-12 col-lg-5'>
                    <div
                      className='award__single'
                      data-aos='fade-up'
                      data-aos-duration={1000}
                      data-aos-delay={100}
                    >
                      <div className='thumb'>
                        <Link href='/event-details'>
                          <img
                            src='assets/images/award/two.png'
                            alt='Image_inner'
                          />
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className='col-12 col-lg-7'>
                    <div
                      className='award__single'
                      data-aos='fade-up'
                      data-aos-duration={1000}
                      data-aos-delay={300}
                    >
                      <div className='thumb'>
                        <Link href='/event-details'>
                          <img
                            src='assets/images/award/three.png'
                            alt='Image_inner'
                          />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className='faq__content-inner'
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
                      Why should I donate to MBSM Trust?
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
                        Donating to MBSM Trust means supporting a registered charitable organization dedicated to spiritual service and humanitarian work. Your contribution directly helps us provide annadanam (food distribution) to the needy, support children's education through school kits and counseling, offer free medical care and health camps, and organize spiritual community events that strengthen harmony and unity. Every donation, regardless of size, makes a real difference in the lives of those we serve. By contributing, you become part of a mission that combines spiritual guidance with compassionate service to create lasting positive impact in the community.
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
                      How secure is the donation process through QR code?
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
                        The QR code donation process is completely secure and uses the same trusted UPI payment infrastructure that millions of Indians use daily for transactions. When you scan the QR code, you are redirected to your preferred UPI payment app (Google Pay, PhonePe, Paytm, etc.), which handles the transaction through secure, encrypted channels. MBSM Trust does not store or have access to your payment details, bank information, or personal financial data. The transaction is processed directly through your bank or payment service provider, ensuring the highest level of security. We only receive confirmation of the donation amount, and you receive a transaction receipt from your payment app immediately.
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
                      What impact will my donation have on the community?
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
                        Your donation creates meaningful impact across multiple areas of community service. Through annadanam programs, your contribution helps feed families in need during special occasions and regular distributions. Educational donations support children with school supplies, books, and counseling services that help them succeed academically. Medical contributions enable free health camps, blood donation drives, and healthcare services for those who cannot afford medical treatment. Spiritual event donations help organize community gatherings, religious celebrations, and programs that promote harmony and unity. Every rupee donated is carefully allocated to maximize benefit, ensuring that your contribution directly improves lives and strengthens the community we serve together.
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
                      How can I stay updated about how my donation is being used?
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
                        MBSM Trust values transparency and keeps donors informed about how their contributions are utilized. After making a donation, you can contact us at mbsmtrust@gmail.com or +91 7588797788 to request updates on specific programs or general reports on our service activities. We regularly share information about our ongoing initiatives, upcoming events, and the impact of our services through various communication channels. You can also visit our website to see updates on our service programs and community events. For donors who wish to be more involved, we can provide detailed reports on how funds are allocated across different service categories, ensuring you understand the direct impact of your generous contribution.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='col-12 col-xl-4'>
            <div className='cm-details__sidebar'>
              <div
                className='cm-sidebar-widget'
                data-aos='fade-up'
                data-aos-duration={1000}
                data-aos-delay={100}
              >
                <div className='intro'>
                  <h5>Quick Contact</h5>
                </div>
                <div className='donate-contact-info'>
                  <div className='contact-item'>
                    <i className='fa-solid fa-phone' />
                    <div>
                      <p style={{ margin: 0, fontWeight: '600', color: 'var(--secondary-color)' }}>Phone</p>
                      <a href='tel:+917588797788' style={{ color: 'var(--black)', textDecoration: 'none' }}>+91 7588797788</a>
                    </div>
                  </div>
                  <div className='contact-item' style={{ marginTop: '20px' }}>
                    <i className='fa-solid fa-envelope' />
                    <div>
                      <p style={{ margin: 0, fontWeight: '600', color: 'var(--secondary-color)' }}>Email</p>
                      <a href='mailto:mbsmtrust@gmail.com' style={{ color: 'var(--black)', textDecoration: 'none' }}>mbsmtrust@gmail.com</a>
                    </div>
                  </div>
                  <div className='contact-item' style={{ marginTop: '20px' }}>
                    <i className='fa-solid fa-location-dot' />
                    <div>
                      <p style={{ margin: 0, fontWeight: '600', color: 'var(--secondary-color)' }}>Address</p>
                      <p style={{ margin: 0, color: 'var(--black)' }}>F.70, MIDC, Ahilyanagar, 414111</p>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className='cm-sidebar-widget'
                data-aos='fade-up'
                data-aos-duration={1000}
                data-aos-delay={100}
              >
                <div className='intro'>
                  <h5>Our Active Service Programs</h5>
                </div>
                <div className='cm-sidebar-post'>
                  <div className='single-item'>
                    <div className='thumb'>
                      <Link href='/our-causes'>
                        <img
                          src='assets/images/cause/Annadanam-1.jpg'
                          alt='Sankashti Chaturthi Khichdi'
                        />
                      </Link>
                    </div>
                    <div className='content'>
                      <p>
                        <i className='fa-solid fa-calendar-days' />{" "}
                        <span>Ongoing</span>
                      </p>
                      <p>
                        <Link href='/our-causes'>
                          Sankashti Chaturthi Khichdi
                        </Link>
                      </p>
                    </div>
                  </div>
                  <div className='single-item'>
                    <div className='thumb'>
                      <Link href='/our-causes'>
                        <img
                          src='assets/images/cause/education-1.jpg'
                          alt='School Kit Distribution'
                        />
                      </Link>
                    </div>
                    <div className='content'>
                      <p>
                        <i className='fa-solid fa-calendar-days' />{" "}
                        <span>Ongoing</span>
                      </p>
                      <p>
                        <Link href='/our-causes'>
                          School Kit Distribution
                        </Link>
                      </p>
                    </div>
                  </div>
                  <div className='single-item'>
                    <div className='thumb'>
                      <Link href='/our-causes'>
                        <img
                          src='assets/images/cause/wellness-2.jpg'
                          alt='Free Medical Treatment'
                        />
                      </Link>
                    </div>
                    <div className='content'>
                      <p>
                        <i className='fa-solid fa-calendar-days' />{" "}
                        <span>Ongoing</span>
                      </p>
                      <p>
                        <Link href='/our-causes'>
                          Free Medical Treatment
                        </Link>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className='cm-sidebar-widget'
                data-aos='fade-up'
                data-aos-duration={1000}
                data-aos-delay={100}
              >
                <div className='intro'>
                  <h5>Service Categories</h5>
                </div>
                <div className='tag-wrapper'>
                  <Link href='/our-causes'>Annadanam</Link>
                  <Link href='/our-causes'>Education</Link>
                  <Link href='/our-causes'>Medical Care</Link>
                  <Link href='/our-causes'>Spiritual Events</Link>
                  <Link href='/our-causes'>Community Service</Link>
                  <Link href='/our-causes'>Social Welfare</Link>
                </div>
              </div>
              <div
                className='cm-sidebar-overview'
                data-aos='fade-up'
                data-aos-duration={1000}
                data-aos-delay={100}
              >
                <div className='cm-logo'>
                  <img src='assets/images/event/logo.png' alt='Image_inner' />
                </div>
                <div className='cm-content'>
                  <p>Your Support Creates Lasting Change</p>
                  <h4>Spiritual Service & Humanitarian Impact</h4>
                </div>
                <div className='cm-cta'>
                  <Link
                    href='/contact-us'
                    aria-label='contact us'
                    title='contact us'
                    className='btn--primary'
                  >
                    Contact Us <i className='fa-solid fa-arrow-right' />
                  </Link>
                </div>
                <div
                  className='parallax-image-wrap'
                  style={{ overflow: "hidden" }}
                >
                  <div className='parallax-image-inner'>
                    <img
                      src='assets/images/event/overview.png'
                      alt='Image_inner'
                      className='parallax-image'
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DonateInner;
