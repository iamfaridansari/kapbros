import React from "react";
import carouselImg from "../assets/images/carousel.png";

const Home = () => {
  return (
    <>
      <div
        id="carouselExampleCaptions"
        className="carousel slide"
        data-bs-ride="false"
      >
        
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={carouselImg} className="d-block w-100" alt="" />
            <div className="carousel-caption d-none d-md-block">
              <h5>First slide label</h5>
            </div>
          </div>
          <div className="carousel-item">
            <img src={carouselImg} className="d-block w-100" alt="" />
            <div className="carousel-caption d-none d-md-block">
              <h5>Second slide label</h5>            </div>
          </div>
          <div className="carousel-item">
            <img src={carouselImg} className="d-block w-100" alt="" />
            <div className="carousel-caption d-none d-md-block">
              <h5>Third slide label</h5>            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
};

export default Home;
