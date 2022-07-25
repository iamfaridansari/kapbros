import React, { useContext, useRef, useEffect } from "react";
import { myContext } from "../App";
import gsap from "gsap";

const Contact = () => {
  const { eight } = useContext(myContext);

  const imgRef = useRef(null);

  useEffect(() => {
    gsap.from(imgRef.current, {
      scale: 0.5,
      duration: 1,
      ease: "linear",
    });
  }, []);
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

      <div className="container p-2 normalBorder">
        <div className="row align-items-center justify-content-center gap-sm-0 gap-5">
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
          <div className="col-md-4 col-sm-6 col-8">
            <img
              src={eight}
              className="normalBorder rounded myShadow"
              ref={imgRef}
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
