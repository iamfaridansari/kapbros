import React from "react";

const Footer = () => {
  return (
    <footer className="container-fluid py-5 secondaryBg bg-gradient">
      <div className="container">
        <div className="row align-items-start justify-content-between gap-5">
          <div className="col-md">
            <h1 className="fw-bold mb-2">
              Want a dress? <br />
              Let's discuss.
            </h1>
            <p>
              Thank you for getting in touch <br />
              Kindly. <br /> Fill the form, Have a great day.
            </p>
          </div>
          <div className="col-md">
            <form className="newsletter">
              <div className="row align-items-start justify-content-between ">
                <div className="col-md-6 mb-4">
                  <input type="text" placeholder="Full name" />
                </div>
                <div className="col-md-6 mb-4">
                  <input type="email" placeholder="Email address" />
                </div>
                <div className="col-md-6 mb-4">
                  <input type="number" placeholder="Phone number" />
                </div>
                <div className="col-md-6 mb-4">
                  <select>
                    <option value="">Country</option>
                    <option value="India">India</option>
                  </select>
                </div>
                <div className="col-12 mb-4">
                  <select>
                    <option value="">Interested in</option>
                    <option value="India">Kurta</option>
                  </select>
                </div>
                <div className="col-12 mb-4">
                  <textarea placeholder="Message"></textarea>
                </div>
              </div>
              <button className="myBtn">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
