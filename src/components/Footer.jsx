import React from "react";
import logo from "../assets/images/logo.png";

const Footer = () => {
  const quickLinks = [
    {
      name: "Product",
      link: "javascript:void(0)",
    },
    {
      name: "Company",
      link: "javascript:void(0)",
    },
    {
      name: "Information",
      link: "javascript:void(0)",
    },
    {
      name: "About us",
      link: "javascript:void(0)",
    },
    {
      name: "Contact us",
      link: "javascript:void(0)",
    },
  ];
  return (
    <footer className="container py-5">
      <div className="row align-items-start justify-content-between gap-md-0 gap-5">
        <div className="col-md">
          <div className="logo mb-2">
            <img src={logo} alt="" />
          </div>
          <a href="tel:1 (7635) 547-12-97" className="pb-2 title">
            +1 (7635) 547-12-97
          </a>{" "}
          <br />
          <a href="mailto:support@abc.agency" className="title">
            support@abc.agency
          </a>
          <ul className="social d-flex align-items-center justify-content-start list-unstyled mt-5">
            <li className="me-5">
              <a href="javascript:void(0)">
                <i className="fa-brands fa-linkedin-in"></i>
              </a>
            </li>
            <li className="me-5">
              <a href="javascript:void(0)">
                <i className="fa-brands fa-facebook-f"></i>
              </a>
            </li>
            <li>
              <a href="javascript:void(0)">
                <i className="fa-brands fa-twitter"></i>
              </a>
            </li>
          </ul>
        </div>
        <div className="col-md">
          <h2 className="mb-4">Quick links</h2>
          <ul className="row align-items-start justify-content-between list-unstyled">
            {quickLinks.map((item, index) => {
              return (
                <li className="col-6 mb-2" key={index}>
                  <a href={item.link}>{item.name}</a>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="col-md">
          <h2 className="mb-4">Subscribe</h2>

          <form className="subscribe mb-5">
            <input type="text" placeholder="Email address" />
            <button>
              <i className="fa-solid fa-arrow-right-long"></i>
            </button>
          </form>

          <p className="title">© 2022 Kapbros. All rights reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
