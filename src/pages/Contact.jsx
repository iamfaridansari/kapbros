import React from "react";
import sample3 from "../assets/images/sample3.png";

const Contact = () => {
  return (
    <>
      <div className="row align-items-center justify-content-center m-0 my-5">
        <div className="col-md-6">
          <div className="d-flex align-items-center justify-content-between">
            <div className="stroke"></div>
            <p className="text-uppercase title text-center">our gallery</p>
            <div className="stroke"></div>
          </div>
        </div>
      </div>

      <div className="container py-5 normalBorder">
        <div className="row align-items-center justify-content-between gap-sm-0 gap-5">
          <div className="col-sm-6">
            <div className="row">
              <div className="col-sm-6 mb-4">
                <input
                  type="text"
                  className="myInput"
                  placeholder="Full name"
                />
              </div>
              <div className="col-sm-6 mb-4">
                <input
                  type="email"
                  className="myInput"
                  placeholder="Email address"
                />
              </div>
              <div className="col-sm-6 mb-4">
                <input
                  type="number"
                  className="myInput"
                  placeholder="Phone number"
                />
              </div>
              <div className="col-sm-6 mb-4">
                <select className="myInput">
                  <option value="">Country</option>
                </select>
              </div>
              <div className="col-12 mb-4">
                <select className="myInput">
                  <option value="">Interested in</option>
                </select>
              </div>
              <div className="col-12">
                <textarea placeholder="Message" className="myInput"></textarea>
              </div>
            </div>
            <button className="myBtn mt-4">Submit</button>
          </div>
          <div className="col-md-4 col-sm-6">
            <img src={sample3} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
