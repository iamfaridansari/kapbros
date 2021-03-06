import React, { useRef, useContext, useEffect } from "react";
import logo from "../assets/images/logo.png";
import { NavLink, Link } from "react-router-dom";
import { myContext } from "../App";
import gsap from "gsap";

const Navbar = () => {
  let extraLogo = useRef(null);
  const header = useRef(null);

  const { margin, setMargin, scrollToTop } = useContext(myContext);

  const removeMargin = () => {
    setMargin(!margin);
  };

  window.onscroll = () => {
    if (window.scrollY > 75) {
      header.current.classList.add("active");
      extraLogo.current.classList.remove("extraLogo");
    } else {
      header.current.classList.remove("active");
      extraLogo.current.classList.add("extraLogo");
    }
  };

  // gsap
  const headerRef = useRef(null);
  const navRef = useRef(null);
  useEffect(() => {
    const header = headerRef.current;
    const nav = navRef.current;

    gsap.from(header, {
      y: "-50px",
      opacity: 0.5,
      duration: 1,
      ease: "bounce.out",
    });

    gsap.from(nav, {
      y: "-50px",
      opacity: 0,
      duration: 1,
      delay: 1,
      ease: "bounce.out",
    });
  }, []);

  return (
    <>
      <div className="container-fluid" style={{ zIndex: "80" }} ref={headerRef}>
        <div className="container py-1">
          <div className="d-flex align-items-center justify-content-between">
            <small>info@kapbros.in</small>

            <ul className="list-unstyled d-flex align-items-center justify-content-between gap-2">
              <li>
                <a href="/">
                  <i className="fa-brands fa-facebook text-primary"></i>
                </a>
              </li>
              <li>
                <a href="/">
                  <i className="fa-brands fa-instagram"></i>
                </a>
              </li>
              <li>
                <a href="/">
                  <i className="fa-brands fa-whatsapp text-success"></i>
                </a>
              </li>
              <li>
                <a href="/">
                  <i className="fa-solid fa-envelope text-danger"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <nav className="navbar navbar-expand-lg" ref={navRef}>
        <div className="container py-2 d-flex align-items-center justify-content-lg-center justify-content-between">
          <Link to="/" className="logo">
            <img src={logo} alt="" />
          </Link>
          <div
            className="hamburger navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={removeMargin}
          >
            <i className="fa-solid fa-bars fs-1"></i>
          </div>
        </div>

        <header
          className="collapse navbar-collapse myNavbar"
          id="navbarSupportedContent"
          ref={header}
        >
          <div className="container sticky navbar-nav me-auto mb-lg-0 py-2">
            <ul className="d-flex align-items-center justify-content-center text-center list-unstyled flex-lg-row flex-column links">
              <li className="extraLogo mx-md-4 mb-lg-0 mb-3" ref={extraLogo}>
                <NavLink to="/" className="pb-1 mb-md-0" onClick={scrollToTop}>
                  <div className="extrLogoImg">
                    <img src={logo} alt="" />
                  </div>
                </NavLink>
              </li>
              <li className="mx-md-4 mb-lg-0 mb-3">
                <NavLink to="/" className="pb-1 mb-md-0" onClick={scrollToTop}>
                  Home
                </NavLink>
              </li>
              <li className="mx-md-4 mb-lg-0 mb-3">
                <NavLink
                  to="/about"
                  className="pb-1 mb-md-0"
                  onClick={scrollToTop}
                >
                  About
                </NavLink>
              </li>
              <li className="mx-md-4 mb-lg-0 mb-3">
                <NavLink
                  to="/service"
                  className="pb-1 mb-md-0"
                  onClick={scrollToTop}
                >
                  Our Services
                </NavLink>
              </li>
              <li className="mx-md-4 mb-lg-0 mb-3">
                <NavLink
                  to="/trails"
                  className="pb-1 mb-md-0"
                  onClick={scrollToTop}
                >
                  Trails
                </NavLink>
              </li>
              <li className="mx-md-4 mb-lg-0 mb-3">
                <NavLink
                  to="/contact"
                  className="pb-1 mb-md-0"
                  onClick={scrollToTop}
                >
                  Contact us
                </NavLink>
              </li>
              <li className="mx-md-4 mb-lg-0 mb-3">
                <NavLink
                  to="/registration"
                  className="pb-1 mb-md-0"
                  onClick={scrollToTop}
                >
                  Registration
                </NavLink>
              </li>
            </ul>
          </div>
        </header>
      </nav>
    </>
  );
};

export default Navbar;
