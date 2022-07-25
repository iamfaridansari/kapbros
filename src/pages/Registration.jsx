import React, { useRef, useEffect } from "react";
import logo from "../assets/images/logo.png";
import gsap from "gsap";

const Registration = () => {
  const circleRef = useRef(null);
  const leftRef = useRef(null);
  const rightRef = useRef(null);

  useEffect(() => {
    gsap.from(circleRef.current, {
      rotate: "180deg",
      duration: 1,
      ease: "ease",
    });

    gsap.from(leftRef.current, {
      translateX: "-50%",
      duration: 1,
      ease: "ease",
    });
    gsap.from(rightRef.current, {
      translateX: "50%",
      duration: 1,
      ease: "ease",
    });
  }, []);
  return (
    <>
      <div className="row align-items-center justify-content-center m-0 my-5">
        <div className="col-md-6">
          <div className="d-flex align-items-center justify-content-between">
            <div className="stroke"></div>
            <p className="text-uppercase title text-center">Registration</p>
            <div className="stroke"></div>
          </div>
        </div>
      </div>

      <div className="container normalBorder py-5">
        <div className="row justify-content-center">
          <div className="col-md-4" ref={leftRef}>
            <p className="title text-uppercase mb-4">Login</p>
            <div className="mb-4">
              <input
                type="text"
                className="myInput"
                placeholder="Email address/ Phone number"
              />
            </div>
            <div className="mb-4">
              <input
                type="password"
                className="myInput"
                placeholder="Password"
              />
            </div>
            <button className="myBtn">Proceed</button>
          </div>
          <div
            className="col-md-2 my-md-0 my-5 align-self-center"
            style={{ textAlign: "-webkit-center" }}
          >
            <div className="circleLogo">
              <img src={logo} alt="" ref={circleRef} />
            </div>
          </div>
          <div className="col-md-4" ref={rightRef}>
            <p className="title text-uppercase mb-4">Create your account</p>
            <div className="mb-4">
              <input type="text" className="myInput" placeholder="Full name" />
            </div>
            <div className="mb-4">
              <input
                type="email"
                className="myInput"
                placeholder="Email address"
              />
            </div>
            <div className="mb-4">
              <input
                type="password"
                className="myInput"
                placeholder="create password"
              />
            </div>
            <div className="mb-4">
              <input
                type="password"
                className="myInput"
                placeholder="Confirm password"
              />
            </div>
            <button className="myBtn">Proceed</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Registration;
