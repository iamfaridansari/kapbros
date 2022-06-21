import React from "react";
import { Link } from "react-router-dom";
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

const Trails = () => {
  const kurta = [
    {
      img: carousel2,
      title: "Product name",
    },
    {
      img: carousel3,
      title: "Product name",
    },
    {
      img: carousel4,
      title: "Product name",
    },
    {
      img: carousel5,
      title: "Product name",
    },
    {
      img: carousel6,
      title: "Product name",
    },
    {
      img: carousel7,
      title: "Product name",
    },
    {
      img: carousel8,
      title: "Product name",
    },
    {
      img: carousel9,
      title: "Product name",
    },
    {
      img: carousel10,
      title: "Product name",
    },
    {
      img: carousel11,
      title: "Product name",
    },
  ];

  const rida = [
    {
      img: carousel2,
      title: "Product name",
    },
    {
      img: carousel3,
      title: "Product name",
    },
    {
      img: carousel4,
      title: "Product name",
    },
    {
      img: carousel5,
      title: "Product name",
    },
    {
      img: carousel6,
      title: "Product name",
    },
    {
      img: carousel7,
      title: "Product name",
    },
    {
      img: carousel8,
      title: "Product name",
    },
    {
      img: carousel9,
      title: "Product name",
    },
    {
      img: carousel10,
      title: "Product name",
    },
    {
      img: carousel11,
      title: "Product name",
    },
  ];

  const forKids = [
    {
      img: carousel2,
      title: "Product name",
    },
    {
      img: carousel3,
      title: "Product name",
    },
    {
      img: carousel4,
      title: "Product name",
    },
    {
      img: carousel5,
      title: "Product name",
    },
    {
      img: carousel6,
      title: "Product name",
    },
    {
      img: carousel7,
      title: "Product name",
    },
    {
      img: carousel8,
      title: "Product name",
    },
    {
      img: carousel9,
      title: "Product name",
    },
    {
      img: carousel10,
      title: "Product name",
    },
    {
      img: carousel11,
      title: "Product name",
    },
  ];
  return (
    <>
      <div className="row align-items-center justify-content-center m-0 pt-5">
        <div className="col-md-6">
          <div className="d-flex align-items-center justify-content-between">
            <div className="stroke"></div>
            <p className="text-uppercase title text-center">our gallery</p>
            <div className="stroke"></div>
          </div>
        </div>
      </div>

      <div className="container py-5">
        <p className="title mb-4">Kurta Saya</p>
        <div className="myCarouselContainer">
          <div className="myCarousel">
            {kurta.map((item, index) => {
              return (
                <Link to="/productDetails" className="myImage" key={index}>
                  <img src={item.img} alt="" />
                  <div className="name text-center">
                    <p className="text-white">{item.title}</p>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>

      <div className="container py-5">
        <p className="title mb-4">Rida</p>
        <div className="myCarouselContainer">
          <div className="myCarousel">
            {rida.map((item, index) => {
              return (
                <div className="myImage" key={index}>
                  <img src={item.img} alt="" />
                  <div className="name text-center">
                    <p className="text-white">{item.title}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="container py-5">
        <p className="title mb-4">For Kids</p>
        <div className="myCarouselContainer">
          <div className="myCarousel">
            {forKids.map((item, index) => {
              return (
                <div className="myImage" key={index}>
                  <img src={item.img} alt="" />
                  <div className="name text-center">
                    <p className="text-white">{item.title}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Trails;
