import React from "react";
import logo from "../assets/images/logo.png";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <div className="container py-2 d-flex align-items-center justify-content-md-center justify-content-between">
        <div className="logo">
          <img src={logo} alt="" />
        </div>
        <div className="hamburger d-md-none" id="hamburger">
          <i className="fa-solid fa-bars"></i>
        </div>
      </div>

      <div className="container-fluid myNavbar py-2">
        <div className="container">
          <ul className="d-flex align-items-center justify-content-center text-center list-unstyled flex-md-row flex-column links">
            <li className="mx-md-4 mb-md-0 mb-4">
              <NavLink to="/" className="pb-1 mb-md-0">
                Home
              </NavLink>
            </li>
            <li className="mx-md-4 mb-md-0 mb-4">
              <NavLink to="/about" className="pb-1 mb-md-0">
                About
              </NavLink>
            </li>
            <li className="mx-md-4 mb-md-0 mb-4">
              <NavLink to="/service" className="pb-1 mb-md-0">
                Our Services
              </NavLink>
            </li>
            <li className="mx-md-4 mb-md-0 mb-4">
              <NavLink to="/trails" className="pb-1 mb-md-0">
                Trails
              </NavLink>
            </li>
            <li className="mx-md-4 mb-md-0 mb-4">
              <NavLink to="/contact" className="pb-1 mb-md-0">
                Services
              </NavLink>
            </li>
            <li className="mx-md-4 mb-md-0 mb-4">
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
