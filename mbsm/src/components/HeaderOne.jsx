"use client";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

const HeaderOne = () => {
  const pathname = usePathname();
  const [mobileMenu, setMobileMenu] = useState(false);
  const [scroll, setScroll] = useState(false);
  const [exploreOpen, setExploreOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScroll(window.pageYOffset > 150);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // close mobile menu on route change
  useEffect(() => {
    setMobileMenu(false);
    setExploreOpen(false);
  }, [pathname]);

  // lock body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = mobileMenu ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileMenu]);

  const exploreActive = ["/our-causes", "/donate-us", "/our-blogs", "/blog"].includes(pathname);

  return (
    <>
      <header className={`header header-secondary ${scroll ? "sticky-header" : ""}`}>
        <div className='container'>
          <div className='row'>
            <div className='col-12'>
              <div className='main-header__menu-box'>
                <nav className='navbar p-0'>

                  {/* Logo */}
                  <div className='navbar-logo'>
                    <Link href='/'>
                      <img src='/assets/images/logo.png' alt='MBSM Trust' />
                    </Link>
                  </div>

                  {/* Desktop nav */}
                  <div className='navbar__menu-wrapper'>
                    <div className='navbar__menu d-none d-xl-block'>
                      <ul className='navbar__list'>
                        <li className={`navbar__item nav-fade ${pathname === "/" ? "active" : ""}`}>
                          <Link href='/'>Home</Link>
                        </li>
                        <li className={`navbar__item nav-fade ${pathname === "/our-updates" ? "active" : ""}`}>
                          <Link href='/our-updates'>Our Updates</Link>
                        </li>
                        <li className={`navbar__item navbar__item--has-children navbar__item--explore nav-fade ${exploreActive ? "active" : ""}`}>
                          <span className='navbar__dropdown-label navbar__dropdown-label--explore'>
                            Explore Work
                          </span>
                          <ul className='navbar__sub-menu navbar__sub-menu--explore'>
                            <li className={pathname === "/our-causes" ? "active" : ""}>
                              <Link href='/our-causes'>
                                <span className='explore-menu__icon'><i className='fa-solid fa-seedling' /></span>
                                <span className='explore-menu__text'>
                                  <strong>Our Projects</strong>
                                  <em>Seva &amp; community initiatives</em>
                                </span>
                              </Link>
                            </li>
                            <li className={pathname === "/donate-us" ? "active" : ""}>
                              <Link href='/donate-us'>
                                <span className='explore-menu__icon'><i className='fa-solid fa-hand-holding-heart' /></span>
                                <span className='explore-menu__text'>
                                  <strong>Donate Us</strong>
                                  <em>Support our spiritual mission</em>
                                </span>
                              </Link>
                            </li>
                            <li className={["/our-blogs", "/blog"].includes(pathname) ? "active" : ""}>
                              <Link href='/our-blogs'>
                                <span className='explore-menu__icon'><i className='fa-solid fa-book-open' /></span>
                                <span className='explore-menu__text'>
                                  <strong>Our Blogs</strong>
                                  <em>Teachings &amp; spiritual insights</em>
                                </span>
                              </Link>
                            </li>
                          </ul>
                        </li>
                        <li className={`navbar__item nav-fade ${pathname === "/about-us" ? "active" : ""}`}>
                          <Link href='/about-us'>About Us</Link>
                        </li>
                        <li className={`navbar__item nav-fade ${pathname === "/contact-us" ? "active" : ""}`}>
                          <Link href='/contact-us'>Contact Us</Link>
                        </li>
                      </ul>
                    </div>
                    <div className='contact-btn'>
                      <div className='contact-icon'>
                        <i className='icon-support' />
                      </div>
                      <div className='contact-content'>
                        <p>Call Us Now</p>
                        <a href='tel:+917588797788'>+91 75887 97788</a>
                      </div>
                    </div>
                  </div>

                  {/* Right actions */}
                  <div className='navbar__options'>
                    <div className='navbar__mobile-options'>
                      <Link href='/donate-us' className='btn--primary d-none d-md-flex'>
                        Get Involved <i className='fa-solid fa-arrow-right' />
                      </Link>
                    </div>
                    <button
                      onClick={() => setMobileMenu(!mobileMenu)}
                      className='open-offcanvas-nav d-flex d-xl-none'
                      aria-label='toggle mobile menu'
                    >
                      <span className='icon-bar top-bar' />
                      <span className='icon-bar middle-bar' />
                      <span className='icon-bar bottom-bar' />
                    </button>
                  </div>

                </nav>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* ── Mobile menu ── */}
      <div className={`mbsm-mobile-nav ${mobileMenu ? "mbsm-mobile-nav--open" : ""}`}>
        <div className='mbsm-mobile-nav__panel'>

          {/* Header row */}
          <div className='mbsm-mobile-nav__head'>
            <Link href='/' onClick={() => setMobileMenu(false)}>
              <img src='/assets/images/logo.png' alt='MBSM Trust' />
            </Link>
            <button
              className='mbsm-mobile-nav__close'
              onClick={() => setMobileMenu(false)}
              aria-label='close menu'
            >
              <i className='fa-solid fa-xmark' />
            </button>
          </div>

          {/* Nav links */}
          <nav className='mbsm-mobile-nav__links'>
            <Link
              href='/'
              className={`mbsm-mobile-nav__link ${pathname === "/" ? "mbsm-mobile-nav__link--active" : ""}`}
              onClick={() => setMobileMenu(false)}
            >
              Home
            </Link>

            <Link
              href='/our-updates'
              className={`mbsm-mobile-nav__link ${pathname === "/our-updates" ? "mbsm-mobile-nav__link--active" : ""}`}
              onClick={() => setMobileMenu(false)}
            >
              Our Updates
            </Link>

            {/* Explore Work accordion */}
            <div className={`mbsm-mobile-nav__group ${exploreActive ? "mbsm-mobile-nav__group--active" : ""}`}>
              <button
                className={`mbsm-mobile-nav__link mbsm-mobile-nav__link--toggle ${exploreActive ? "mbsm-mobile-nav__link--active" : ""}`}
                onClick={() => setExploreOpen(!exploreOpen)}
                aria-expanded={exploreOpen}
              >
                Explore Work
                <i className={`fa-solid fa-chevron-down mbsm-mobile-nav__chevron ${exploreOpen ? "mbsm-mobile-nav__chevron--open" : ""}`} />
              </button>
              <div className={`mbsm-mobile-nav__sub ${exploreOpen ? "mbsm-mobile-nav__sub--open" : ""}`}>
                <Link
                  href='/our-causes'
                  className={`mbsm-mobile-nav__sublink ${pathname === "/our-causes" ? "mbsm-mobile-nav__sublink--active" : ""}`}
                  onClick={() => setMobileMenu(false)}
                >
                  <span className='mbsm-mobile-nav__subicon'><i className='fa-solid fa-seedling' /></span>
                  Our Projects
                </Link>
                <Link
                  href='/donate-us'
                  className={`mbsm-mobile-nav__sublink ${pathname === "/donate-us" ? "mbsm-mobile-nav__sublink--active" : ""}`}
                  onClick={() => setMobileMenu(false)}
                >
                  <span className='mbsm-mobile-nav__subicon'><i className='fa-solid fa-hand-holding-heart' /></span>
                  Donate Us
                </Link>
                <Link
                  href='/our-blogs'
                  className={`mbsm-mobile-nav__sublink ${["/our-blogs", "/blog"].includes(pathname) ? "mbsm-mobile-nav__sublink--active" : ""}`}
                  onClick={() => setMobileMenu(false)}
                >
                  <span className='mbsm-mobile-nav__subicon'><i className='fa-solid fa-book-open' /></span>
                  Our Blogs
                </Link>
              </div>
            </div>

            <Link
              href='/about-us'
              className={`mbsm-mobile-nav__link ${pathname === "/about-us" ? "mbsm-mobile-nav__link--active" : ""}`}
              onClick={() => setMobileMenu(false)}
            >
              About Us
            </Link>

            <Link
              href='/contact-us'
              className={`mbsm-mobile-nav__link ${pathname === "/contact-us" ? "mbsm-mobile-nav__link--active" : ""}`}
              onClick={() => setMobileMenu(false)}
            >
              Contact Us
            </Link>
          </nav>

          {/* CTA */}
          <div className='mbsm-mobile-nav__cta'>
            <Link href='/donate-us' className='btn--primary' onClick={() => setMobileMenu(false)}>
              Get Involved <i className='fa-solid fa-arrow-right' />
            </Link>
          </div>

          {/* Socials */}
          <div className='mbsm-mobile-nav__social'>
            <Link href='https://wa.me/917588797788' target='_blank' rel='noreferrer' aria-label='WhatsApp'>
              <i className='fa-brands fa-whatsapp' />
            </Link>
            <Link href='https://www.instagram.com/mangal_bhakta_seva_mandal_?igsh=NDVnb3JhendmcmFs' target='_blank' rel='noreferrer' aria-label='Instagram'>
              <i className='fa-brands fa-instagram' />
            </Link>
            <Link href='https://youtube.com/@mangalbhaktasevamandaltrus2349?si=uVc-1P931b2zX2fH' target='_blank' rel='noreferrer' aria-label='YouTube'>
              <i className='fa-brands fa-youtube' />
            </Link>
          </div>

        </div>
      </div>

      {/* Backdrop */}
      <div
        className={`mbsm-mobile-nav__backdrop ${mobileMenu ? "mbsm-mobile-nav__backdrop--open" : ""}`}
        onClick={() => setMobileMenu(false)}
      />
    </>
  );
};

export default HeaderOne;
