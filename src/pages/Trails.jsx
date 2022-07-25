import React, { useContext } from "react";
import { myContext } from "../App";
import { Link } from "react-router-dom";

const Trails = () => {
  const { one, two, three, four, five, six, seven, eight, nine, ten } =
    useContext(myContext);

  const gallery = {
    kurta: [
      {
        img: one,
        title: "Product name",
      },
      {
        img: two,
        title: "Product name",
      },
      {
        img: three,
        title: "Product name",
      },
      {
        img: four,
        title: "Product name",
      },
      {
        img: five,
        title: "Product name",
      },
      {
        img: six,
        title: "Product name",
      },
      {
        img: seven,
        title: "Product name",
      },
      {
        img: eight,
        title: "Product name",
      },
      {
        img: nine,
        title: "Product name",
      },
      {
        img: ten,
        title: "Product name",
      },
    ],
    rida: [
      {
        img: one,
        title: "Product name",
      },
      {
        img: two,
        title: "Product name",
      },
      {
        img: three,
        title: "Product name",
      },
      {
        img: four,
        title: "Product name",
      },
      {
        img: five,
        title: "Product name",
      },
      {
        img: six,
        title: "Product name",
      },
      {
        img: seven,
        title: "Product name",
      },
      {
        img: eight,
        title: "Product name",
      },
      {
        img: nine,
        title: "Product name",
      },
      {
        img: ten,
        title: "Product name",
      },
    ],
    forKids: [
      {
        img: one,
        title: "Product name",
      },
      {
        img: two,
        title: "Product name",
      },
      {
        img: three,
        title: "Product name",
      },
      {
        img: four,
        title: "Product name",
      },
      {
        img: five,
        title: "Product name",
      },
      {
        img: six,
        title: "Product name",
      },
      {
        img: seven,
        title: "Product name",
      },
      {
        img: eight,
        title: "Product name",
      },
      {
        img: nine,
        title: "Product name",
      },
      {
        img: ten,
        title: "Product name",
      },
    ],
  };
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
            {gallery.kurta.map((item, index) => {
              return (
                <Link
                  to="/productDetails"
                  className="myImage myRadius myShadow"
                  key={index}
                >
                  <img
                    src={item.img}
                    className="square myRadius myShadow"
                    alt=""
                  />
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
            {gallery.rida.map((item, index) => {
              return (
                <div className="myImage myRadius myShadow" key={index}>
                  <img
                    src={item.img}
                    className="square myRadius myShadow"
                    alt=""
                  />
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
            {gallery.forKids.map((item, index) => {
              return (
                <div className="myImage myRadius myShadow" key={index}>
                  <img
                    src={item.img}
                    className="square myRadius myShadow"
                    alt=""
                  />
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
