import React, { useContext, useRef, useEffect } from "react";
import { myContext } from "../App";
import gsap from "gsap";

const About = () => {
  const { five } = useContext(myContext);

  const circleRef = useRef(null);
  useEffect(() => {
    const circle = circleRef.current;

    gsap.from(circle, {
      rotate: "45deg",
      scale: 0.75,
      duration: 1,
      ease: "linear",
    });
  }, []);

  return (
    <>
      <div className="container-fluid" style={{ overflow: "hidden" }}>
        <div className="row m-0 align-items-start justify-content-between">
          <div className="col-md-5 col-sm-8">
            <div className="circle1">
              <img
                src={five}
                className="square myShadow normalBorder circle"
                alt=""
                ref={circleRef}
              />
            </div>
          </div>
          <div className="col-md-7 pt-md-5">
            <h2 className="mb-2 text-uppercase space text-center">
              discover the finest
            </h2>
            <div className="d-flex align-items-center justify-content-between">
              <div className="stroke"></div>
              <p className="text-uppercase title text-center">About us</p>
              <div className="stroke"></div>
            </div>
            <p className="mt-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Laudantium dolor quod unde nisi, perspiciatis quia deserunt vel
              officiis ut recusandae beatae maxime tempora exercitationem
              expedita blanditiis eligendi voluptate. Eum, necessitatibus!
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
