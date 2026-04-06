"use client";
import Link from "next/link";

const FooterOne = () => {
  return (
    <>
      <footer className='footer-two'>
        <div className='container'>
          <div className='row gutter-60'>
            <div className='col-12 col-md-6 col-xl-3'>
              <div
                className='footer-two__widget'
                data-aos='fade-up'
                data-aos-duration={1000}
              >
                <div className='footer-two__widget-logo'>
                  <Link href='/'>
                    <img src='/assets/images/logo-light.png' alt='Image_inner' />
                  </Link>
                </div>
                <div className='footer-two__widget-content'>
                  <p>
                    MBSM Trust is a Hindu religious and spiritual organization dedicated to serving humanity through compassionate service.
                  </p>
                </div>
              </div>
            </div>
            <div className='col-12 col-md-6 col-xl-2 offset-xl-1'>
              <div
                className='footer-two__widget'
                data-aos='fade-up'
                data-aos-duration={1000}
                data-aos-delay={200}
              >
                <div className='footer-two__widget-intro'>
                  <h5>Quick Links</h5>
                  <div className='line'>
                    <span className='large-line' />
                    <span className='small-line' />
                    <span className='small-line' />
                  </div>
                </div>
                <div className='footer-two__widget-content'>
                  <ul>
                    <li>
                      <Link href='/'>
                        <i className='fa-solid fa-arrow-right' />
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link href='/about-us'>
                        <i className='fa-solid fa-arrow-right' />
                        About Us
                      </Link>
                    </li>
                    <li>
                      <Link href='/our-causes'>
                        <i className='fa-solid fa-arrow-right' />
                        Our Projects
                      </Link>
                    </li>
                    <li>
                      <Link href='/donate-us'>
                        <i className='fa-solid fa-arrow-right' />
                        Donate Us
                      </Link>
                    </li>
                    <li>
                      <Link href='/our-blogs'>
                        <i className='fa-solid fa-arrow-right' />
                        Our Blogs
                      </Link>
                    </li>
                    <li>
                      <Link href='/contact-us'>
                        <i className='fa-solid fa-arrow-right' />
                        Contact Us
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className='col-12 col-md-6 col-xl-3'>
              <div
                className='footer-two__widget footer-two__widget--alternate'
                data-aos='fade-up'
                data-aos-duration={1000}
                data-aos-delay={400}
              >
                <div className='footer-two__widget-intro'>
                  <h5>Our Services</h5>
                  <div className='line'>
                    <span className='large-line' />
                    <span className='small-line' />
                    <span className='small-line' />
                  </div>
                </div>
                <div className='footer-two__widget-content'>
                  <ul>
                    <li>
                      <Link href='/our-causes'>
                        <i className='fa-solid fa-arrow-right' />
                        Spiritual Services
                      </Link>
                    </li>
                    <li>
                      <Link href='/our-causes'>
                        <i className='fa-solid fa-arrow-right' />
                        Annadanam Programs
                      </Link>
                    </li>
                    <li>
                      <Link href='/our-causes'>
                        <i className='fa-solid fa-arrow-right' />
                        Education Initiatives
                      </Link>
                    </li>
                    <li>
                      <Link href='/our-causes'>
                        <i className='fa-solid fa-arrow-right' />
                        Medical Care Services
                      </Link>
                    </li>
                    <li>
                      <Link href='/our-causes'>
                        <i className='fa-solid fa-arrow-right' />
                        Community Events
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className='col-12 col-md-6 col-xl-3'>
              <div
                className='footer-two__widget footer-two__widget--alternate'
                data-aos='fade-up'
                data-aos-duration={1000}
                data-aos-delay={600}
              >
                <div className='footer-two__widget-intro'>
                  <h5>Get In Touch</h5>
                  <div className='line'>
                    <span className='large-line' />
                    <span className='small-line' />
                    <span className='small-line' />
                  </div>
                </div>
                <div className='footer-two__widget-content footer-two__widget-content--contact'>
                  <ul>
                    <li>
                      <Link
                        href='https://maps.app.goo.gl/xzwdnNpZWCxWuPX48'
                        target='_blank'
                        rel='noreferrer'
                      >
                        <i className='fa-solid fa-location-dot' />
                        F.70, MIDC, Ahilyanagar, 414111
                      </Link>
                    </li>
                    <li>
                      <Link href='tel:+917588797788'>
                        <i className='fa-solid fa-phone' />
                        +91 7588797788
                      </Link>
                    </li>
                    <li>
                      <Link href='mailto:mbsmtrust@gmail.com'>
                        <i className='fa-regular fa-envelope' />
                        mbsmtrust@gmail.com
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='footer-two__copyright'>
          <div className='container'>
            <div className='row'>
              <div className='col-12'>
                <div className='footer-two__copyright-inner text-center'>
                  <p>
                    Copyright © <span id='copyrightYear' />{" "}
                    <Link href='/'>MBSM Trust</Link>. All rights reserved.
                  </p>
                  <p style={{ marginTop: '10px', fontSize: '14px', color: '#ffffff' }}>
                    Designed and developed by Gauri Kolekar
                  </p>
                  <div className='social footer-copyright-social' style={{ marginTop: '15px' }}>
                    <Link
                      href='https://wa.me/917588797788'
                      target='_blank'
                      rel='noreferrer'
                      aria-label='contact us on whatsapp'
                      title='whatsapp'
                    >
                      <i className='fa-brands fa-whatsapp' />
                    </Link>
                    <Link
                      href='https://www.instagram.com/mangal_bhakta_seva_mandal_?igsh=NDVnb3JhendmcmFs'
                      target='_blank'
                      rel='noreferrer'
                      aria-label='follow us on instagram'
                      title='instagram'
                    >
                      <i className='fa-brands fa-instagram' />
                    </Link>
                    <Link
                      href='https://youtube.com/@mangalbhaktasevamandaltrus2349?si=uVc-1P931b2zX2fH'
                      target='_blank'
                      rel='noreferrer'
                      aria-label='subscribe to our youtube channel'
                      title='youtube'
                    >
                      <i className='fa-brands fa-youtube' />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='sprade' data-aos='zoom-in' data-aos-duration={1000}>
          <img
            src='/assets/images/sprade.png'
            alt='Image_inner'
            className='base-img'
          />
        </div>
        <div
          className='sprade-light'
          data-aos='zoom-in'
          data-aos-duration={1000}
        >
          <img src='/assets/images/sprade-light.png' alt='Image_inner' />
        </div>
      </footer>
    </>
  );
};

export default FooterOne;
