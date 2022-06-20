import React from "react";
import circle2 from "../assets/images/circle2.png";
import circle3 from "../assets/images/circle3.png";
import circle4 from "../assets/images/circle4.png";

const Service = () => {
  return (
    <>
      <div className="container py-5">
        <div className="row align-items-start justify-content-between gap-5">
          <div className="col-md">
            <div className="circle2">
              <img src={circle2} alt="" />
            </div>
            <div className="circle3">
              <img src={circle3} alt="" />
            </div>
            <div className="circle4">
              <img src={circle4} alt="" />
            </div>
          </div>
          <div className="col-md">
            <div className="d-flex align-items-center justify-content-between">
              <div className="stroke"></div>
              <p className="text-uppercase title">About us</p>
              <div className="stroke"></div>
            </div>
            <p className="title text-uppercase text-center my-4 fw-bold">
              we provide fit for everyone
            </p>
            <ul className="ms-4">
              <li className="text-uppercase">Kurta saya</li>
              <li className="text-uppercase">Rida</li>
              <li className="text-uppercase">& many more</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Service;
