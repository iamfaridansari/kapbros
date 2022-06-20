import React from "react";
import circle1 from "../assets/images/circle1.png";

const About = () => {
  return (
    <>
      <div className="container-fluid" style={{ overflow: "hidden" }}>
        <div className="row m-0 align-items-start justify-content-between">
          <div className="col-md-5 col-sm-8">
            <div className="circle1">
              <img src={circle1} alt="" />
            </div>
          </div>
          <div className="col-md-7 pt-5">
            <h2 className="mb-2 text-uppercase space">discover the finest</h2>
            <div className="d-flex align-items-center justify-content-between">
              <div className="stroke"></div>
              <p className="text-uppercase title">About us</p>
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
