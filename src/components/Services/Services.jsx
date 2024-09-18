import React from "react";
import writer from "../../assets/writer.svg";
import writerMob from "../../assets/writerMob.svg";
import classes from "./Services.module.css";

const Services = () => {
  return (
    <section id={classes.services} className="bg-dark text-center">
      <div className="container">
        <h3 className="text-white fs-4 fw-600">Services</h3>
        <p className="text-white">
          Strategic services drive digital success with tailored, comprehensive
          approaches
        </p>
        <div className="row justify-content-center mt-5">
          <div className="col-xl-4 col-lg-4 col-md-4 mb-4">
            <div
              className={`${classes.services__card} p-2 p-md-4 min-h-100 rounded-4`}
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
              <p className="text-white text-start d-md-none">
                Enhance your website’s visibility and rank higher on search
                engines with our expert SEO services. We optimize your site’s
                content, structure, and performance to attract more organic
                traffic, ensuring your business stands out in search results.
              </p>
              <button className="btn btn-green fs-12px fw-600 py-2 w-100 d-md-none">
                Read More
              </button>
            </div>
          </div>
          <div className="col-xl-4 col-lg-4 col-md-4 mb-4">
            <div
              className={`${classes.services__card} p-2 p-md-4 min-h-100 rounded-4`}
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
              <p className="text-white text-start d-md-none">
                Enhance your website’s visibility and rank higher on search
                engines with our expert SEO services. We optimize your site’s
                content, structure, and performance to attract more organic
                traffic, ensuring your business stands out in search results.
              </p>
              <button className="btn btn-green fs-12px fw-600 py-2 w-100 d-md-none">
                Read More
              </button>
            </div>
          </div>
          <div className="col-xl-4 col-lg-4 col-md-4 mb-4">
            <div
              className={`${classes.services__card} p-2 p-md-4 min-h-100 rounded-4`}
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
              <p className="text-white text-start d-md-none">
                Enhance your website’s visibility and rank higher on search
                engines with our expert SEO services. We optimize your site’s
                content, structure, and performance to attract more organic
                traffic, ensuring your business stands out in search results.
              </p>
              <button className="btn btn-green fs-12px fw-600 py-2 w-100 d-md-none">
                Read More
              </button>
            </div>
          </div>
          <div className="col-xl-4 col-lg-4 col-md-4 mb-4">
            <div
              className={`${classes.services__card} p-2 p-md-4 min-h-100 rounded-4`}
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
                  PPC
                </h5>
              </div>
              <p className="text-white text-start d-md-none">
                Enhance your website’s visibility and rank higher on search
                engines with our expert SEO services. We optimize your site’s
                content, structure, and performance to attract more organic
                traffic, ensuring your business stands out in search results.
              </p>
              <button className="btn btn-green fs-12px fw-600 py-2 w-100 d-md-none">
                Read More
              </button>
            </div>
          </div>
          <div className="col-xl-4 col-lg-4 col-md-4 mb-4">
            <div
              className={`${classes.services__card} p-2 p-md-4 min-h-100 rounded-4`}
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
              <p className="text-white text-start d-md-none">
                Enhance your website’s visibility and rank higher on search
                engines with our expert SEO services. We optimize your site’s
                content, structure, and performance to attract more organic
                traffic, ensuring your business stands out in search results.
              </p>
              <button className="btn btn-green fs-12px fw-600 py-2 w-100 d-md-none">
                Read More
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
