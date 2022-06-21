import React from "react";
import { Link } from "react-router-dom";
import sample3 from "../assets/images/sample3.png";
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
const ProductDetails = () => {
  const similar = [
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
    <div className="container normalBorder pb-5 mt-5">
      <div className="row align-items-center justify-content-center pt-5">
        <div className="col-md-6">
          <div className="d-flex align-items-center justify-content-between">
            <div className="stroke"></div>
            <p className="text-uppercase title text-center">Product Details</p>
            <div className="stroke"></div>
          </div>
        </div>
      </div>

      <div className="row align-items-start justify-content-between gap-md-0 gap-2 py-5">
        <div className="col-md-4 col-sm-6">
          <img src={sample3} alt="" />
        </div>
        <div className="col-md-6">
          <p className="title">Product name</p>
          <p className="my-5">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex minus
            consequuntur provident eum sunt, debitis eligendi dolore nemo.
            Recusandae aspernatur fugiat eveniet harum quis? Rerum, ad ipsum?
            Error, eos sed!
          </p>
          <a href="tel:1234567890" className="myBtn">
            Get this product
          </a>
          <br />
          <small>(Contact us via call to get this product)</small>
        </div>
      </div>

      <div className="row align-items-center justify-content-center py-5">
        <div className="col-md-6">
          <div className="d-flex align-items-center justify-content-between">
            <div className="stroke"></div>
            <p className="text-uppercase title text-center">Product Details</p>
            <div className="stroke"></div>
          </div>
        </div>
      </div>
      <div className="myCarouselContainer">
        <div className="myCarousel">
          {similar.map((item, index) => {
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
  );
};

export default ProductDetails;
