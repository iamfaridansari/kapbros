import React from "react";
import carouselImg from "../assets/images/carousel.png";

const Home = () => {
  return (
    <>
      <div
        id="carouselExampleCaptions"
        class="carousel slide"
        data-bs-ride="false"
      >
        
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src={carouselImg} class="d-block w-100" alt="" />
            <div class="carousel-caption d-none d-md-block">
              <h5>First slide label</h5>
            </div>
          </div>
          <div class="carousel-item">
            <img src={carouselImg} class="d-block w-100" alt="" />
            <div class="carousel-caption d-none d-md-block">
              <h5>Second slide label</h5>            </div>
          </div>
          <div class="carousel-item">
            <img src={carouselImg} class="d-block w-100" alt="" />
            <div class="carousel-caption d-none d-md-block">
              <h5>Third slide label</h5>            </div>
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
};

export default Home;
