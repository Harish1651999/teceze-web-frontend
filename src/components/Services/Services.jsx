import React from "react";
import writer from "../../assets/writer.svg";
import writerMob from "../../assets/writerMob.svg";
import classes from "./Services.module.css";

const Services = () => {
  return (
    <section id={classes.services} className="bg-black text-center">
      <div className="container">
        <h3 className="text-white fs-4 fw-600">Services</h3>
        <p className="text-white">
          Strategic services drive digital success with tailored, comprehensive
          approaches
        </p>
        <div
          className={`row justify-content-center mt-5 mx-auto ${classes.services__row}`}
        >
          <div className="col-xl-4 col-lg-4 col-md-4 mb-4">
            <div
              className={`${classes.services__card} services__card p-2 p-md-4 min-h-100 rounded-4 position-relative overflow-hidden`}
            >
              <div
                className={`${classes.services__header} d-flex align-items-center flex-md-column justify-content-md-between`}
              >
                <img
                  className={`d-none d-md-block ${classes.sevices__img}`}
                  src={writer}
                />
                <img
                  className={`d-md-none ${classes.sevices__img}`}
                  src={writerMob}
                />
                <h5
                  className={`mb-0 fs-6 fw-600 mt-0 mt-md-3 ms-2 ms-md-0 ${classes.services__heading}`}
                >
                  SEO Marketing
                </h5>
              </div>
              <div className={`${classes.services__body} w-100 min-h-100`}>
                <p className="text-white text-start p-0 m-md-2">
                  Enhance your website’s visibility and rank higher on search
                  engines with our expert SEO services. We optimize your site’s
                  content, structure, and performance to attract more organic
                  traffic, ensuring your business stands out in search results.
                </p>
                <button className="btn btn-green fs-12px fw-600 py-2 w-100">
                  Read More
                </button>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-lg-4 col-md-4 mb-4">
            <div
              className={`${classes.services__card} services__card p-2 p-md-4 min-h-100 rounded-4 position-relative overflow-hidden`}
            >
              <div
                className={`${classes.services__header} d-flex align-items-center flex-md-column justify-content-md-between`}
              >
                <img
                  className={`d-none d-md-block ${classes.sevices__img}`}
                  src={writer}
                />
                <img
                  className={`d-md-none ${classes.sevices__img}`}
                  src={writerMob}
                />
                <h5
                  className={`mb-0 fs-6 fw-600 mt-0 mt-md-3 ms-2 ms-md-0 ${classes.services__heading}`}
                >
                  Content Marketing
                </h5>
              </div>
              <div className={`${classes.services__body} w-100 min-h-100`}>
                <p className="text-white text-start p-0 m-md-2">
                  Engage your audience with high-quality, valuable content that
                  drives traffic and builds trust. Our content marketing
                  strategies include blog posts, articles, infographics, and
                  more, all designed to resonate with your target market and
                  convert visitors into loyal customers.
                </p>
                <button className="btn btn-green fs-12px fw-600 py-2 w-100">
                  Read More
                </button>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-lg-4 col-md-4 mb-4">
            <div
              className={`${classes.services__card} services__card p-2 p-md-4 min-h-100 rounded-4 position-relative overflow-hidden`}
            >
              <div
                className={`${classes.services__header} d-flex align-items-center flex-md-column justify-content-md-between`}
              >
                <img
                  className={`d-none d-md-block ${classes.sevices__img}`}
                  src={writer}
                />
                <img
                  className={`d-md-none ${classes.sevices__img}`}
                  src={writerMob}
                />
                <h5
                  className={`mb-0 fs-6 fw-600 mt-0 mt-md-3 ms-2 ms-md-0 ${classes.services__heading}`}
                >
                  Social Media Management
                </h5>
              </div>
              <div className={`${classes.services__body} w-100 min-h-100`}>
                <p className="text-white text-start p-0 m-md-2">
                  Build a strong online presence with our social media
                  management services. We create and manage content across
                  platforms like Facebook, Instagram, Twitter, and LinkedIn,
                  ensuring your brand connects with your audience and drives
                  meaningful engagement.
                </p>
                <button className="btn btn-green fs-12px fw-600 py-2 w-100">
                  Read More
                </button>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-lg-4 col-md-4 mb-4">
            <div
              className={`${classes.services__card} services__card p-2 p-md-4 min-h-100 rounded-4 position-relative overflow-hidden`}
            >
              <div
                className={`${classes.services__header} d-flex align-items-center flex-md-column justify-content-md-between`}
              >
                <img
                  className={`d-none d-md-block ${classes.sevices__img}`}
                  src={writer}
                />
                <img
                  className={`d-md-none ${classes.sevices__img}`}
                  src={writerMob}
                />
                <h5
                  className={`mb-0 fs-6 fw-600 mt-0 mt-md-3 ms-2 ms-md-0 ${classes.services__heading}`}
                >
                  PPC <span className="d-md-none">(Pay-Per Click)</span>
                </h5>
              </div>
              <div className={`${classes.services__body} w-100 min-h-100`}>
                <p className="text-white text-start p-0 m-md-2">
                  Maximize your ROI with targeted PPC campaigns. We design and
                  manage ads on platforms like Google Ads and social media,
                  ensuring your business reaches the right audience at the right
                  time for optimal conversions.
                </p>
                <button className="btn btn-green fs-12px fw-600 py-2 w-100">
                  Read More
                </button>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-lg-4 col-md-4 mb-4">
            <div
              className={`${classes.services__card} services__card p-2 p-md-4 min-h-100 rounded-4 position-relative overflow-hidden`}
            >
              <div
                className={`${classes.services__header} d-flex align-items-center flex-md-column justify-content-md-between`}
              >
                <img
                  className={`d-none d-md-block ${classes.sevices__img}`}
                  src={writer}
                />
                <img
                  className={`d-md-none ${classes.sevices__img}`}
                  src={writerMob}
                />
                <h5
                  className={`mb-0 fs-6 fw-600 mt-0 mt-md-3 ms-2 ms-md-0 ${classes.services__heading}`}
                >
                  Email Marketing
                </h5>
              </div>
              <div className={`${classes.services__body} w-100 min-h-100`}>
                <p className="text-white text-start p-0 m-md-2">
                  Reach your customers directly with personalized email
                  campaigns. Our email marketing services include crafting
                  compelling messages, segmenting audiences, and analyzing
                  performance to boost engagement and drive repeat business.
                </p>
                <button className="btn btn-green fs-12px fw-600 py-2 w-100">
                  Read More
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
