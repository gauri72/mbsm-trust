"use client";
import Link from "next/link";

const CommunityOne = () => {
  return (
    <>
      <section className='community'>
        <div className='container'>
          <div className='row'>
            <div className='col-12 col-md-8 col-xl-7'>
              <div
                className='section__header'
                data-aos='fade-up'
                data-aos-duration={1000}
              >
                <span className='sub-title'>
                  <i className='icon-donation' />
                  Where there's less, we give our best!
                </span>
                <h2 className='title-animation_inner'>
                  Support Our <span>Spiritual</span> Mission & Humanitarian Service
                </h2>
              </div>
            </div>
          </div>
          <div className='row'>
            <div className='col-12'>
              <div
                className='community-donation'
                data-aos='fade-up'
                data-aos-duration={1000}
              >
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
                  <div className='cta' style={{ marginTop: '30px', textAlign: 'center' }}>
                    <Link
                      href='/donate-us'
                      aria-label='donate us'
                      title='donate us'
                      className='btn--primary'
                    >
                      Donate Now <i className='fa-solid fa-arrow-right' />
                    </Link>
                  </div>
                </div>
                <div
                  className='community__thumb d-none d-lg-block'
                  data-aos='fade-left'
                  data-aos-duration={1000}
                >
                  <img
                    src='/assets/images/community/thumb.png'
                    alt='Image_inner'
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='community-bg'>
          <img
            src='/assets/images/community/community-bg.png'
            alt='Image_inner'
          />
        </div>
        <div
          className='gift'
          data-aos='fade-up'
          data-aos-duration={1000}
          data-aos-delay={200}
        >
          <img src='/assets/images/community/gift.png' alt='Image_inner' />
        </div>
        <div className='spade'>
          <img
            src='/assets/images/community/spade.png'
            alt='Image_inner'
            className='base-img'
          />
        </div>
      </section>
    </>
  );
};

export default CommunityOne;
