import React from "react";
import sandclock from "../../assets/sandclock.svg";
import classes from "./Hero.module.css";

const Hero = () => {
  return (
    <section id={classes.hero} className="bg-dark text-center">
      <div className="container">
        <h1 className="fw-700 text-white mb-4">
          <span className="text-green">Boost</span> Your Brand with <br />{" "}
          Innovative <span className="text-green">Digital Marketing</span>
        </h1>
        <p className={`text-white mb-4 ${classes.hero__sub}`}>
          Drive Engagement and Conversions with Advanced Digital <br />{" "}
          Marketing Strategies.
        </p>
        <div className="mb-4">
          <button className="btn btn-black mx-2 fs-12px fw-600 py-2 px-4 d-lg-none">
            Our Works
          </button>
          <button className="btn btn-green mx-2 fs-12px fw-600 py-2 px-4">
            Start Now
          </button>
        </div>
        <div className="text-center mb-4">
          <span
            className={`py-1 px-2 text-uppercase text-white fs-13px fw-600 ${classes.description}`}
          >
            Trusted by thousand companies
          </span>
        </div>
        <div className={`row py-4 px-2 ${classes.hero__row}`}>
          <div className="col-xl-2 col-lg-2 col-md-4 col-sm-4 col-6 my-3 my-lg-0">
            <div className="d-flex align-items-center justify-content-start justify-content-md-center">
              <img
                className={classes.hero__img}
                src={sandclock}
                alt="Layers"
                title="Layers"
              />
              <h5 className="mb-0 ms-2 text-white fw-600">Layers</h5>
            </div>
          </div>
          <div className="col-xl-2 col-lg-2 col-md-4 col-sm-4 col-6 my-3 my-lg-0">
            <div className="d-flex align-items-center justify-content-start justify-content-md-center">
              <img
                className={classes.hero__img}
                src={sandclock}
                alt="Layers"
                title="Layers"
              />
              <h5 className="mb-0 ms-2 text-white fw-600">Quotient</h5>
            </div>
          </div>
          <div className="col-xl-2 col-lg-2 col-md-4 col-sm-4 col-6 my-3 my-lg-0">
            <div className="d-flex align-items-center justify-content-start justify-content-md-center">
              <img
                className={classes.hero__img}
                src={sandclock}
                alt="Layers"
                title="Layers"
              />
              <h5 className="mb-0 ms-2 text-white fw-600">Circooles</h5>
            </div>
          </div>
          <div className="col-xl-2 col-lg-2 col-md-4 col-sm-4 col-6 my-3 my-lg-0">
            <div className="d-flex align-items-center justify-content-start justify-content-md-center">
              <img
                className={classes.hero__img}
                src={sandclock}
                alt="Layers"
                title="Layers"
              />
              <h5 className="mb-0 ms-2 text-white fw-600">Hourglass</h5>
            </div>
          </div>
          <div className="col-xl-2 col-lg-2 col-md-4 col-sm-4 col-6 my-3 my-lg-0">
            <div className="d-flex align-items-center justify-content-start justify-content-md-center">
              <img
                className={classes.hero__img}
                src={sandclock}
                alt="Layers"
                title="Layers"
              />
              <h5 className="mb-0 ms-2 text-white fw-600">Command+R</h5>
            </div>
          </div>
          <div className="col-xl-2 col-lg-2 col-md-4 col-sm-4 col-6 my-3 my-lg-0">
            <div className="d-flex align-items-center justify-content-start justify-content-md-center">
              <img
                className={classes.hero__img}
                src={sandclock}
                alt="Layers"
                title="Layers"
              />
              <h5 className="mb-0 ms-2 text-white fw-600">Layers</h5>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
