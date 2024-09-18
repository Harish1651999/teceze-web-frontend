import React from "react";
import classes from "./WhyChooseUs.module.css";
import meeting1 from "../../assets/meeting1.jpg";
import meeting2 from "../../assets/meeting2.jpg";
import meeting3 from "../../assets/meeting3.jpg";

const WhyChooseUs = () => {
  return (
    <section id={classes.whychooseus}>
      <div className="container">
        <h4
          className={`${classes.whychooseus__title} text-white text-center text-md-start fw-600 mb-5`}
        >
          <span className="px-3 py-1 py-md-0">Why Choose Us?</span>
        </h4>
        <div className="row mb-5">
          <div className="col-xl-6 col-lg-6 col-md-6 mb-3 mb-md-0">
            <div className={`${classes.whychooseus__meetingImgWrap}`}>
              <img
                className="w-100 h-100 object-fit-cover rounded-4"
                src={meeting1}
                alt="Meeting"
              />
            </div>
          </div>
          <div className="col-xl-6 col-lg-6 col-md-6 ps-md-5 text-center text-md-start">
            <h2 className="text-white fw-700 mb-3">
              Solutions Tailored <br /> Specifically to Your <br /> Business
              Needs
            </h2>
            <p className="text-white mb-4">
              We provide customized solutions for your <br /> business needs,
              ensuring relevance and <br /> success.
            </p>
            <button
              className={`btn btn-green ${classes["btn-green"]} fs-12px fw-600 py-2 px-4 rounded-4`}
            >
              Read More
            </button>
          </div>
        </div>
        <div className="row mb-5">
          <div className="col-xl-6 col-lg-6 col-md-6 ps-md-5 mb-3 mb-md-0 order-md-2">
            <div className={`${classes.whychooseus__meetingImgWrap}`}>
              <img
                className="w-100 h-100 object-fit-cover rounded-4"
                src={meeting2}
                alt="Meeting"
              />
            </div>
          </div>
          <div className="col-xl-6 col-lg-6 col-md-6 text-center text-md-start">
            <h2 className="text-white fw-700 mb-3">
              Creative Excellence <br /> Elevates Every Project
            </h2>
            <p className="text-white mb-4">
              Creative excellence drives our work. From <br /> concept to
              execution, we aim for exceptional <br /> results.
            </p>
            <button
              className={`btn btn-green ${classes["btn-green"]} fs-12px fw-600 py-2 px-4 rounded-4`}
            >
              Read More
            </button>
          </div>
        </div>
        <div className="row">
          <div className="col-xl-6 col-lg-6 col-md-6 mb-3 mb-md-0">
            <div className={`${classes.whychooseus__meetingImgWrap}`}>
              <img
                className="w-100 h-100 object-fit-cover rounded-4"
                src={meeting3}
                alt="Meeting"
              />
            </div>
          </div>
          <div className="col-xl-6 col-lg-6 col-md-6 ps-md-5 text-center text-md-start">
            <h2 className="text-white fw-700 mb-3">
              Client Satisfaction is Our <br /> Main Focus
            </h2>
            <p className="text-white mb-4">
              Our main goal is your satisfaction, and we <br /> work tirelessly
              to ensure that you are pleased <br /> with the results we achieve
              together.
            </p>
            <button
              className={`btn btn-green ${classes["btn-green"]} fs-12px fw-600 py-2 px-4 rounded-4`}
            >
              Read More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
