import React, { useRef } from "react";
import classes from "./Testimonial.module.css";
import Slider from "react-slick";
import youtube from "../../assets/youtube.svg";
import diana from "../../assets/diana.jpg";

const Testimonial = () => {
  const sliderRef = useRef();

  const testimonialSliderPrev = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };

  const testimonialSliderNext = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };

  const settings = {
    arrows: false,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          dots: true,
        },
      },
    ],
  };

  return (
    <section id={classes.testimonial} className="bg-light">
      <div className="container">
        <h6 className="text-uppercase fs-13px text-center">testimonial</h6>
        <h2 className="text-dark text-center fw-700 mb-4">
          Customer is Our Top <br /> Priority
        </h2>
        <p className="text-center fw-500">
          We survey all of our clients, the results of which go directly <br />{" "}
          to our CEO.
        </p>
        <div className={`position-relative ${classes.testimonial__slider}`}>
          <Slider {...settings} ref={sliderRef}>
            <div
              className={`${classes.testimonial__item} p-4 p-lg-5 rounded-5 mt-4 border border-1`}
            >
              <div className="row align-items-center">
                <div className="col-xl-8 col-lg-7 col-md-6 col-sm-12 col-12">
                  <div className={classes.testimonial__img}>
                    <img
                      className="w-100 h-100 object-fit-contain"
                      src={youtube}
                      alt="Icon"
                    />
                  </div>
                  <h4 className="fw-700 mb-3">
                    Kornix is the best digital agency i have ever seen! Highly
                    Recommende
                  </h4>
                  <p className="mb-4">
                    I recently hired <strong>Ideapeel</strong> for a custom web
                    development project and couldn't be happier with the
                    results. The team was able to bring my unique ideas to life
                    and create a website that truly stands out.
                  </p>
                  <h6 className="fw-700">Diana Loreza</h6>
                  <p>
                    Director of{" "}
                    <strong className="text-uppercase">Gymstory</strong>
                  </p>
                </div>
                <div className="col-xl-4 col-lg-5 col-md-6 col-sm-12 col-12">
                  <div
                    className={`${classes.testimonial__userImg} d-none d-md-block`}
                  >
                    <img
                      className="w-100 h-100 object-fit-cover rounded-circle"
                      src={diana}
                      alt="Diana"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div
              className={`${classes.testimonial__item} p-4 p-lg-5 rounded-5 mt-4 border border-1`}
            >
              <div className="row align-items-center">
                <div className="col-xl-8 col-lg-7 col-md-6 col-sm-12 col-12">
                  <div className={classes.testimonial__img}>
                    <img
                      className="w-100 h-100 object-fit-contain"
                      src={youtube}
                      alt="Icon"
                    />
                  </div>
                  <h4 className="fw-700 mb-3">
                    Kornix is the best digital agency i have ever seen! Highly
                    Recommende
                  </h4>
                  <p className="mb-4">
                    I recently hired <strong>Ideapeel</strong> for a custom web
                    development project and couldn't be happier with the
                    results. The team was able to bring my unique ideas to life
                    and create a website that truly stands out.
                  </p>
                  <h6 className="fw-700">Diana Loreza</h6>
                  <p>
                    Director of{" "}
                    <strong className="text-uppercase">Gymstory</strong>
                  </p>
                </div>
                <div className="col-xl-4 col-lg-5 col-md-6 col-sm-12 col-12">
                  <div
                    className={`${classes.testimonial__userImg} d-none d-md-block`}
                  >
                    <img
                      className="w-100 h-100 object-fit-cover rounded-circle"
                      src={diana}
                      alt="Diana"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div
              className={`${classes.testimonial__item} p-4 p-lg-5 rounded-5 mt-4 border border-1`}
            >
              <div className="row align-items-center">
                <div className="col-xl-8 col-lg-7 col-md-6 col-sm-12 col-12">
                  <div className={classes.testimonial__img}>
                    <img
                      className="w-100 h-100 object-fit-contain"
                      src={youtube}
                      alt="Icon"
                    />
                  </div>
                  <h4 className="fw-700 mb-3">
                    Kornix is the best digital agency i have ever seen! Highly
                    Recommende
                  </h4>
                  <p className="mb-4">
                    I recently hired <strong>Ideapeel</strong> for a custom web
                    development project and couldn't be happier with the
                    results. The team was able to bring my unique ideas to life
                    and create a website that truly stands out.
                  </p>
                  <h6 className="fw-700">Diana Loreza</h6>
                  <p>
                    Director of{" "}
                    <strong className="text-uppercase">Gymstory</strong>
                  </p>
                </div>
                <div className="col-xl-4 col-lg-5 col-md-6 col-sm-12 col-12">
                  <div
                    className={`${classes.testimonial__userImg} d-none d-md-block`}
                  >
                    <img
                      className="w-100 h-100 object-fit-cover rounded-circle"
                      src={diana}
                      alt="Diana"
                    />
                  </div>
                </div>
              </div>
            </div>
          </Slider>
          <div className="slide-arrow clearfix">
            <ul className={`${classes["rel-slide-icon"]} m-0`}>
              <li className="position-absolute cursor-pointer">
                <svg
                  onClick={testimonialSliderPrev}
                  width="41"
                  height="41"
                  viewBox="0 0 41 41"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g filter="url(#filter0_b_363_3841)">
                    <circle
                      cx="20.5"
                      cy="20.5"
                      r="20.5"
                      transform="matrix(-1 0 0 1 41 0)"
                      fill="white"
                      fillOpacity="0.52"
                    />
                  </g>
                  <path
                    d="M22.6276 13.5381L24.1729 15.0833L19.1536 20.1136L24.1729 25.1438L22.6276 26.689L16.0521 20.1136L22.6276 13.5381Z"
                    fill="black"
                  />
                  <defs>
                    <filter
                      id="filter0_b_363_3841"
                      x="-1.6"
                      y="-1.6"
                      width="44.2"
                      height="44.2"
                      filterUnits="userSpaceOnUse"
                      colorInterpolationFilters="sRGB"
                    >
                      <feFlood floodOpacity="0" result="BackgroundImageFix" />
                      <feGaussianBlur
                        in="BackgroundImageFix"
                        stdDeviation="0.8"
                      />
                      <feComposite
                        in2="SourceAlpha"
                        operator="in"
                        result="effect1_backgroundBlur_363_3841"
                      />
                      <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="effect1_backgroundBlur_363_3841"
                        result="shape"
                      />
                    </filter>
                  </defs>
                </svg>
              </li>
              <li className="position-absolute cursor-pointer">
                <svg
                  onClick={testimonialSliderNext}
                  width="41"
                  height="41"
                  viewBox="0 0 41 41"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g filter="url(#filter0_b_363_3837)">
                    <circle
                      cx="20.5"
                      cy="20.5"
                      r="20.5"
                      fill="white"
                      fillOpacity="0.52"
                    />
                  </g>
                  <path
                    d="M18.3724 13.5381L16.8271 15.0833L21.8464 20.1136L16.8271 25.1438L18.3724 26.689L24.9479 20.1136L18.3724 13.5381Z"
                    fill="black"
                  />
                  <defs>
                    <filter
                      id="filter0_b_363_3837"
                      x="-1.6"
                      y="-1.6"
                      width="44.2"
                      height="44.2"
                      filterUnits="userSpaceOnUse"
                      colorInterpolationFilters="sRGB"
                    >
                      <feFlood floodOpacity="0" result="BackgroundImageFix" />
                      <feGaussianBlur
                        in="BackgroundImageFix"
                        stdDeviation="0.8"
                      />
                      <feComposite
                        in2="SourceAlpha"
                        operator="in"
                        result="effect1_backgroundBlur_363_3837"
                      />
                      <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="effect1_backgroundBlur_363_3837"
                        result="shape"
                      />
                    </filter>
                  </defs>
                </svg>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
