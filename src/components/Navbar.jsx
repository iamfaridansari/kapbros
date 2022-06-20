import React, { useRef } from "react";
import logo from "../assets/images/logo.png";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const navRef = useRef(null);
  window.onscroll = () => {
    if (window.scrollY > 100) {
      navRef.current.classList.add("active");
    } else {
      navRef.current.classList.remove("active");
    }
  };
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container py-2 d-flex align-items-center justify-content-lg-center justify-content-between">
        <div className="logo">
          <img src={logo} alt="" />
        </div>
        <div
          className="hamburger navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i className="fa-solid fa-bars fs-1"></i>
        </div>
      </div>

      <div
        className="collapse navbar-collapse myNavbar"
        id="navbarSupportedContent"
      >
        <div
          className="container sticky navbar-nav me-auto mb-lg-0 py-2"
          ref={navRef}
        >
          <ul className="d-flex align-items-center justify-content-center text-center list-unstyled flex-lg-row flex-column links">
            <li className="mx-md-4 mb-lg-0 mb-3">
              <NavLink to="/" className="pb-1 mb-md-0">
                Home
              </NavLink>
            </li>
            <li className="mx-md-4 mb-lg-0 mb-3">
              <NavLink to="/about" className="pb-1 mb-md-0">
                About
              </NavLink>
            </li>
            <li className="mx-md-4 mb-lg-0 mb-3">
              <NavLink to="/service" className="pb-1 mb-md-0">
                Our Services
              </NavLink>
            </li>
            <li className="mx-md-4 mb-lg-0 mb-3">
              <NavLink to="/trails" className="pb-1 mb-md-0">
                Trails
              </NavLink>
            </li>
            <li className="mx-md-4 mb-lg-0 mb-3">
              <NavLink to="/contact" className="pb-1 mb-md-0">
                Contact us
              </NavLink>
            </li>
            <li className="mx-md-4 mb-lg-0 mb-3">
              <NavLink to="/registration" className="pb-1 mb-md-0">
                Registration
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
