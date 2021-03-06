import React, { useContext, useEffect, useRef } from "react";
import { myContext } from "../App";
//
import carouselImg from "../assets/images/carousel.png";
import scissor from "../assets/images/scissor.png";
import route1 from "../assets/images/route1.png";
import route2 from "../assets/images/route2.png";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

const Home = () => {
  const { one, two, three, four, five, six, seven, eight, nine, ten, margin } =
    useContext(myContext);
  const myCarouselImages = [
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
  ];

  const basics = [
    {
      icon: "fa-solid fa-clock mb-2 primaryText infoIcon",
      title: "On time delivery",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit.Molestiae, provident.",
    },
    {
      icon: "fa-solid fa-gem mb-2 primaryText infoIcon",
      title: "In quality we trust",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit.Molestiae, provident.",
    },
    {
      icon: "fa-solid fa-bag-shopping mb-2 primaryText infoIcon",
      title: "100% customer satisfaction",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit.Molestiae, provident.",
    },
  ];

  // gsap
  gsap.registerPlugin(ScrollTrigger);
  const discoverImgRef = useRef(null);
  const img1Ref = useRef(null);
  const img2Ref = useRef(null);
  const img3Ref = useRef(null);
  const leftRef = useRef(null);
  const rightRef = useRef(null);

  useEffect(() => {
    const discoverImg = discoverImgRef.current;
    const img1 = img1Ref.current;
    const img2 = img2Ref.current;
    const img3 = img3Ref.current;
    const left = leftRef.current;
    const right = rightRef.current;

    gsap.from(discoverImg, {
      scale: 0.5,
      duration: 1,
      ease: "linear",
      scrollTrigger: {
        trigger: discoverImg,
        start: "top 80%",
        end: "top 80%",
        toggleActions: "resume none none reverse",
        scrub: 2,
      },
    });

    gsap.from(img1, {
      scale: 0.5,
      duration: 1,
      ease: "linear",
      scrollTrigger: {
        trigger: img1,
        start: "top 80%",
        end: "top 80%",
        toggleActions: "resume none none reverse",
        scrub: 2,
      },
    });
    gsap.from(img2, {
      scale: 0.5,
      duration: 1,
      ease: "linear",
      scrollTrigger: {
        trigger: img2,
        start: "top 80%",
        end: "top 80%",
        toggleActions: "resume none none reverse",
        scrub: 2,
      },
    });
    gsap.from(img3, {
      scale: 0.5,
      duration: 1,
      ease: "linear",
      scrollTrigger: {
        trigger: img3,
        start: "top 80%",
        end: "top 80%",
        toggleActions: "resume none none reverse",
        scrub: 2,
      },
    });

    gsap.from(left, {
      translateX: "-50%",
      duration: 1,
      ease: "linear",
      scrollTrigger: {
        trigger: left,
        start: "top 80%",
        end: "top 80%",
        toggleActions: "resume none none reverse",
        scrub: 2,
      },
    });
    gsap.from(right, {
      translateX: "50%",
      duration: 1,
      ease: "linear",
      scrollTrigger: {
        trigger: right,
        start: "top 80%",
        end: "top 80%",
        toggleActions: "resume none none reverse",
        scrub: 2,
      },
    });

    revealRefs.current.forEach((item) => {
      gsap.from(item, {
        x: 100,
        duration: 1,
        ease: "linear",
        scrollTrigger: {
          trigger: item,
          start: "top 80%",
          end: "top 80%",
          toggleActions: "play none none reverse",
        },
      });
    });

    cardRef.current.forEach((item) => {
      gsap.from(item, {
        y: 100,
        autoAlpha: 0.5,
        duration: 1,
        ease: "linear",
        scrollTrigger: {
          trigger: item,
          start: "center 80%",
          toggleActions: "play none none reverse",
        },
      });
    });
  }, []);

  const revealRefs = useRef([]);
  revealRefs.current = [];

  const addToRef = (el) => {
    if (el && !revealRefs.current.includes(el)) {
      revealRefs.current.push(el);
    }
  };

  const cardRef = useRef([]);
  cardRef.current = [];

  const addCardRef = (item) => {
    if (item && !cardRef.current.includes(item)) {
      cardRef.current.push(item);
    }
  };

  return (
    <>
      <div
        id="carouselExampleCaptions"
        className={margin ? "carousel slide margin" : "carousel slide"}
        data-bs-ride="false"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={carouselImg} className="d-block w-100" alt="" />
            <div className="carousel-caption d-none d-md-block">
              <h2>First slide label</h2>
            </div>
          </div>
          <div className="carousel-item">
            <img src={carouselImg} className="d-block w-100" alt="" />
            <div className="carousel-caption d-none d-md-block">
              <h2>Second slide label</h2>
            </div>
          </div>
          <div className="carousel-item">
            <img src={carouselImg} className="d-block w-100" alt="" />
            <div className="carousel-caption d-none d-md-block">
              <h2>Third slide label</h2>
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
        <div className="row align-items-start justify-content-center gap-md-0 gap-5">
          <div className="col-md-4 col-sm col-8">
            <img
              src={seven}
              className="normalBorder myShadow"
              ref={discoverImgRef}
              alt=""
            />
          </div>
          <div className="col-md-6 col-sm">
            <h2 className="mb-2 text-uppercase space text-center">
              discover the finest
            </h2>
            <div className="d-flex align-items-center justify-content-between">
              <div className="stroke"></div>
              <p className="text-uppercase title text-center">About us</p>
              <div className="stroke"></div>
            </div>
            <p className="my-5">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi
              rem, eligendi officia odit mollitia hic fuga. Minima molestiae
              nostrum vero porro iste alias impedit est, culpa magni optio,
              nesciunt natus?
            </p>
            <a href="/" className="myBtn">
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
              <p className="text-uppercase title text-center">our gallery</p>
              <div className="stroke"></div>
            </div>
          </div>
        </div>

        <div className="myCarouselContainer">
          <div className="myCarousel">
            {myCarouselImages.map((item, index) => {
              return (
                <div
                  className="myImage myRadius myShadow"
                  key={index}
                  ref={addToRef}
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

      <div className="container-fluid dashedBorder scissorPadding mt-5">
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
            <p className="text-uppercase dashedBorder p-1">From basic</p>
          </div>
          <div className="col-md-3 col-sm-6 col-8 order-md-1">
            <img
              src={one}
              className="square myRadius myShadow"
              ref={img1Ref}
              alt=""
            />
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
            <p className="text-uppercase dashedBorder p-1">To occasions</p>
          </div>
          <div className="col-md-3 col-sm-6 col-8 order-md-3">
            <img
              src={seven}
              className="square myRadius myShadow"
              ref={img2Ref}
              alt=""
            />
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
            <p className="text-uppercase dashedBorder p-1">to wedding wear</p>
          </div>
          <div className="col-md-3 col-sm-6 col-8 order-md-1">
            <img
              src={three}
              className="square myRadius myShadow"
              ref={img3Ref}
              alt=""
            />
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

      <div className="container-fluid dashedBorder scissorPadding mt-5">
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

      <div className="container py-5">
        <div className="d-flex align-items-center justify-content-between gap-5 flex-md-row flex-column">
          {basics.map((item, index) => {
            return (
              <div
                className="shadow p-4 text-center myCard"
                key={index}
                ref={addCardRef}
              >
                <div className="min-height">
                  <i className={item.icon}></i>
                  <p className="title text-uppercase mb-2">{item.title}</p>
                  <p>{item.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="container-fluid discuss py-5 secondaryBg bg-gradient">
        <div className="container">
          <div className="row align-items-start justify-content-between gap-5">
            <div className="col-md" ref={leftRef}>
              <h1 className="fw-bold mb-2">
                Want a dress? <br />
                Let's discuss.
              </h1>
              <p>
                Thank you for getting in touch <br />
                Kindly. <br /> Fill the form, Have a great day.
              </p>
            </div>
            <div className="col-md" ref={rightRef}>
              <form className="newsletter">
                <div className="row align-items-start justify-content-between ">
                  <div className="col-md-6 mb-4">
                    <input type="text" placeholder="Full name" />
                  </div>
                  <div className="col-md-6 mb-4">
                    <input type="email" placeholder="Email address" />
                  </div>
                  <div className="col-md-6 mb-4">
                    <input type="number" placeholder="Phone number" />
                  </div>
                  <div className="col-md-6 mb-4">
                    <select>
                      <option value="">Country</option>
                      <option value="India">India</option>
                    </select>
                  </div>
                  <div className="col-12 mb-4">
                    <select>
                      <option value="">Interested in</option>
                      <option value="India">Kurta</option>
                    </select>
                  </div>
                  <div className="col-12 mb-4">
                    <textarea placeholder="Message"></textarea>
                  </div>
                </div>
                <button className="myBtn">Submit</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
