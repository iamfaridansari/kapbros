import React, { useContext } from "react";
import { myContext } from "../App";

const Service = () => {
  const { two, three, four } = useContext(myContext);
  return (
    <>
      <div className="container py-5">
        <div className="row align-items-start justify-content-between gap-5">
          <div className="col-md">
            <div className="circle2">
              <img
                src={two}
                className="square normalBorder myShadow circle"
                alt=""
              />
            </div>
            <div className="circle3">
              <img
                src={three}
                className="square normalBorder myShadow circle"
                alt=""
              />
            </div>
            <div className="circle4">
              <img
                src={four}
                className="square normalBorder myShadow circle"
                alt=""
              />
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
