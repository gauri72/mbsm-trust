"use client";

const TopBarOne = () => {
  return (
    <div className="topbar topbar--secondary d-none d-lg-block">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="topbar__inner">
              <div className="row align-items-center">
                <div className="col-12 col-lg-6 col-xxl-4">
                  <div className="topbar__list-wrapper">
                    <ul className="topbar__list">
                      <li>
                        <a href="mailto:mbsmtrust@gmail.com">
                          <i className="fa-regular fa-envelope"></i>
                          mbsmtrust@gmail.com
                        </a>
                      </li>
                      <li>
                        <a href="tel:+917588797788">
                          <i className="fa-solid fa-phone"></i>
                          +91 7588797788
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-12 col-xxl-4 d-none d-xxl-block">
                  <div className="topbar__extra text-center">
                    <p>
                      <i className="icon-heart-hand"></i> Are you ready to help
                      them? Let's become a volunteer!
                    </p>
                  </div>
                </div>
                <div className="col-12 col-lg-6 col-xxl-4">
                  <div className="topbar__items justify-content-end">
                    <a
                      href="https://maps.app.goo.gl/xzwdnNpZWCxWuPX48"
                      target="_blank"
                      rel="noreferrer"
                      className="topbar__address"
                      >
                      <i className="fa-solid fa-location-dot"></i>
                      <span>F.70, MIDC, Ahilyanagar, 414111</span>
                    </a>
                    <div className="social">
                      <a
                        href="https://wa.me/917588797788"
                        target="_blank"
                        rel="noreferrer"
                        title="whatsapp"
                      >
                        <i className="fa-brands fa-whatsapp"></i>
                      </a>
                      <a
                        href="https://www.instagram.com/mangal_bhakta_seva_mandal_?igsh=NDVnb3JhendmcmFs"
                        target="_blank"
                        rel="noreferrer"
                        title="instagram"
                      >
                        <i className="fa-brands fa-instagram"></i>
                      </a>
                      <a
                        href="https://youtube.com/@mangalbhaktasevamandaltrus2349?si=uVc-1P931b2zX2fH"
                        target="_blank"
                        rel="noreferrer"
                        title="youtube"
                      >
                        <i className="fa-brands fa-youtube"></i>
                      </a>
                    </div>
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

export default TopBarOne;
