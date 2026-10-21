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

  const exploreItems = [
    { href: "/our-updates", label: "Our Latest News", desc: "What's new at MBSM Trust", icon: "fa-solid fa-bullhorn" },
    { href: "/our-causes", label: "Our Projects", desc: "Seva & community initiatives", icon: "fa-solid fa-seedling" },
    { href: "/our-events", label: "Our Events", desc: "Utsavs & spiritual programs", icon: "fa-solid fa-calendar-days" },
    { href: "/our-publications", label: "Our Publications", desc: "Books & granths", icon: "fa-solid fa-book" },
    { href: "/our-blogs", label: "Our Blogs", desc: "Teachings & spiritual insights", icon: "fa-solid fa-book-open", match: "/blog" },
    { href: "/our-gallery", label: "Our Gallery", desc: "Moments from seva & events", icon: "fa-solid fa-images" },
  ];
  const isExploreItemActive = item =>
    pathname === item.href || (item.match && pathname.startsWith(item.match + "/"));
  const exploreActive = exploreItems.some(isExploreItemActive);

  // direct links shown before and after the Explore Work menu
  const linksBeforeExplore = [
    { href: "/", label: "Home" },
    { href: "/about-us", label: "About Us" },
  ];
  const linksAfterExplore = [
    { href: "/donate-us", label: "Donate Us" },
    { href: "/contact-us", label: "Contact Us" },
  ];

  const renderDesktopLink = link => (
    <li key={link.href} className={`navbar__item nav-fade ${pathname === link.href ? "active" : ""}`}>
      <Link href={link.href}>{link.label}</Link>
    </li>
  );

  const renderMobileLink = link => (
    <Link
      key={link.href}
      href={link.href}
      className={`mbsm-mobile-nav__link ${pathname === link.href ? "mbsm-mobile-nav__link--active" : ""}`}
      onClick={() => setMobileMenu(false)}
    >
      {link.label}
    </Link>
  );

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
                        {linksBeforeExplore.map(renderDesktopLink)}
                        <li className={`navbar__item navbar__item--has-children navbar__item--explore nav-fade ${exploreActive ? "active" : ""}`}>
                          <span className='navbar__dropdown-label navbar__dropdown-label--explore'>
                            Explore Work
                          </span>
                          <ul className='navbar__sub-menu navbar__sub-menu--explore'>
                            {exploreItems.map(item => (
                              <li key={item.href} className={isExploreItemActive(item) ? "active" : ""}>
                                <Link href={item.href}>
                                  <span className='explore-menu__icon'><i className={item.icon} /></span>
                                  <span className='explore-menu__text'>
                                    <strong>{item.label}</strong>
                                    <em>{item.desc}</em>
                                  </span>
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </li>
                        {linksAfterExplore.map(renderDesktopLink)}
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
            {linksBeforeExplore.map(renderMobileLink)}

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
                {exploreItems.map(item => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`mbsm-mobile-nav__sublink ${isExploreItemActive(item) ? "mbsm-mobile-nav__sublink--active" : ""}`}
                    onClick={() => setMobileMenu(false)}
                  >
                    <span className='mbsm-mobile-nav__subicon'><i className={item.icon} /></span>
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>

            {linksAfterExplore.map(renderMobileLink)}
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
