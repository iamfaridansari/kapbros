import React from "react";
import carouselImg from "../assets/images/carousel.png";
import sample1 from "../assets/images/sample1.png";
import sample2 from "../assets/images/sample2.png";
import carousel2 from "../assets/images/carousel2.png";
import carousel3 from "../assets/images/carousel3.png";
import carousel4 from "../assets/images/carousel4.png";
import carousel5 from "../assets/images/carousel5.png";
import carousel6 from "../assets/images/carousel6.png";
import carousel7 from "../assets/images/carousel7.png";
import carousel8 from "../assets/images/carousel8.png";
import carousel9 from "../assets/images/carousel9.png";
import carousel10 from "../assets/images/carousel10.png";
import carousel11 from "../assets/images/carousel11.png";
import scissor from "../assets/images/scissor.png";
import route1 from "../assets/images/route1.png";
import route2 from "../assets/images/route2.png";

const Home = () => {
  const myCarouselImages = [
    {
      img: carousel2,
    },
    {
      img: carousel3,
    },
    {
      img: carousel4,
    },
    {
      img: carousel5,
    },
    {
      img: carousel6,
    },
    {
      img: carousel7,
    },
    {
      img: carousel8,
    },
    {
      img: carousel9,
    },
    {
      img: carousel10,
    },
    {
      img: carousel11,
    },
  ];
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
              <h5>Second slide label</h5>{" "}
            </div>
          </div>
          <div className="carousel-item">
            <img src={carouselImg} className="d-block w-100" alt="" />
            <div className="carousel-caption d-none d-md-block">
              <h5>Third slide label</h5>{" "}
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      <div className="container py-5">
        <div className="row align-items-start justify-content-between gap-md-0 gap-5">
          <div className="col-md-4 col-sm">
            <img src={sample1} alt="" />
          </div>
          <div className="col-md-6 col-sm">
            <h2 className="mb-2 text-uppercase space">discover the finest</h2>
            <div className="d-flex align-items-center justify-content-between">
              <div className="stroke"></div>
              <p className="text-uppercase">About us</p>
              <div className="stroke"></div>
            </div>
            <p className="my-5">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi
              rem, eligendi officia odit mollitia hic fuga. Minima molestiae
              nostrum vero porro iste alias impedit est, culpa magni optio,
              nesciunt natus?
            </p>
            <a href="javascript:void(0)" className="myBtn">
              Know more
            </a>
          </div>
        </div>
      </div>

      <div className="container-fluid py-4 shadow">
        <div className="row align-items-center justify-content-center mb-5">
          <div className="col-md-6">
            <div className="d-flex align-items-center justify-content-between">
              <div className="stroke"></div>
              <p className="text-uppercase">our gallery</p>
              <div className="stroke"></div>
            </div>
          </div>
        </div>

        <div className="myCarouselContainer">
          <div className="myCarousel">
            {myCarouselImages.map((item, index) => {
              return (
                <div className="myImage" key={index}>
                  <img src={item.img} alt="" />
                  <div className="name text-center">
                    <p className="text-white">Product name</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="container-fluid dashedBorder py-2 mt-5">
        <h2 className="text-uppercase space text-center">
          WE DEAL WITH ALL KINDS OF PRODUCTS
        </h2>
        <div className="leftScissor">
          <img src={scissor} alt="" />
        </div>
        <div className="rightScissor">
          <img src={scissor} alt="" />
        </div>
      </div>

      <div className="container py-5">
        <div className="row align-items-center justify-content-center gap-md-0 gap-4 pb-5">
          <div className="col-md-2 order-md-2 text-center">
            <p className="text-uppercase dashedBorder">From basic</p>
          </div>
          <div className="col-md-3 col-sm-6 order-md-1">
            <img src={carousel5} alt="" />
          </div>
          <div className="col-md-6 order-md-3">
            <p className="text-md-start text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
              odit asperiores officia exercitationem reiciendis totam eos
              eligendi, saepe cupiditate autem praesentium suscipit eum placeat
              tenetur, voluptatum ut nobis laborum natus.
            </p>
          </div>
        </div>

        <div className="route">
          <img src={route1} alt="" />
        </div>

        <div className="row align-items-center justify-content-center gap-md-0 gap-4 pb-5">
          <div className="col-md-2 order-md-2 text-center">
            <p className="text-uppercase dashedBorder">To occasions</p>
          </div>
          <div className="col-md-3 col-sm-6 order-md-3">
            <img src={sample2} alt="" />
          </div>
          <div className="col-md-6 order-md-1">
            <p className="text-md-start text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
              odit asperiores officia exercitationem reiciendis totam eos
              eligendi, saepe cupiditate autem praesentium suscipit eum placeat
              tenetur, voluptatum ut nobis laborum natus.
            </p>
          </div>
        </div>

        <div className="route">
          <img src={route2} alt="" />
        </div>

        <div className="row align-items-center justify-content-center gap-md-0 gap-4 pb-5">
          <div className="col-md-2 order-md-2 text-center">
            <p className="text-uppercase dashedBorder">to weading wear</p>
          </div>
          <div className="col-md-3 col-sm-6 order-md-1">
            <img src={carousel6} alt="" />
          </div>
          <div className="col-md-6 order-md-3">
            <p className="text-md-start text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
              odit asperiores officia exercitationem reiciendis totam eos
              eligendi, saepe cupiditate autem praesentium suscipit eum placeat
              tenetur, voluptatum ut nobis laborum natus.
            </p>
          </div>
        </div>
      </div>

      <div className="container-fluid dashedBorder py-2 mt-5">
        <h2 className="text-uppercase space text-center">Our basics</h2>
        <div className="leftScissor">
          <img src={scissor} alt="" />
        </div>
        <div className="rightScissor">
          <img src={scissor} alt="" />
        </div>
      </div>

      <div className="container py-5 text-center">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima ut
          provident vel repellendus, nisi, labore necessitatibus cum nam omnis
          dolorum nihil rem ullam et maxime corrupti error laborum aliquam unde!
        </p>
      </div>
    </>
  );
};

export default Home;