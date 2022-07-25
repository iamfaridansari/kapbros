import React, { useContext, useRef, useEffect } from "react";
import { myContext } from "../App";
import { Link } from "react-router-dom";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

const Trails = () => {
  const { one, two, three, four, five, six, seven, eight, nine, ten } =
    useContext(myContext);

  gsap.registerPlugin(ScrollTrigger);
  const kurtaRef = useRef([]);
  kurtaRef.current = [];

  const ridaRef = useRef([]);
  ridaRef.current = [];

  const kidRef = useRef([]);
  kidRef.current = [];

  const addRidaRef = (item) => {
    if (item && !ridaRef.current.includes(item)) {
      ridaRef.current.push(item);
    }
  };

  const addKurtaRef = (item) => {
    if (item && !kurtaRef.current.includes(item)) {
      kurtaRef.current.push(item);
    }
  };

  const addKidRef = (item) => {
    if (item && !kidRef.current.includes(item)) {
      kidRef.current.push(item);
    }
  };

  useEffect(() => {
    kurtaRef.current.forEach((item) => {
      gsap.from(item, {
        x: 100,
        duration: 1,
        ease: "linear",
      });
    });

    ridaRef.current.forEach((item) => {
      gsap.from(item, {
        x: 100,
        duration: 1,
        ease: "linear",
        scrollTrigger: {
          trigger: item,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      });
    });

    kidRef.current.forEach((item) => {
      gsap.from(item, {
        x: 100,
        duration: 1,
        ease: "linear",
        scrollTrigger: {
          trigger: item,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      });
    });
  }, []);

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
                  ref={addKurtaRef}
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
                <div
                  className="myImage myRadius myShadow"
                  key={index}
                  ref={addRidaRef}
                >
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
                <div
                  className="myImage myRadius myShadow"
                  key={index}
                  ref={addKidRef}
                >
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
