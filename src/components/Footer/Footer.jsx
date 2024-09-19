import React from "react";
import classes from "./Footer.module.css";
import clickit from "../../assets/clickit-logo.png";
import mail from "../../assets/mail.svg";
import phone from "../../assets/phone.svg";

const Footer = () => {
  return (
    <footer id={classes.footer} className="bg-black">
      <div className="container">
        <div className="row pb-3 border-bottom border-light">
          <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12 mb-3 mb-lg-0">
            <div>
              <img
                className={`${classes.footer__img} mb-3`}
                src={clickit}
                alt="ClickIt"
              />
              <p className="text-white mb-0">
                Click It - is a leading digital marketing agency dedicated to
                driving success for businesses online. With expertise in SEO,
                PPC, social media, content creation, and more, we offer tailored
                solutions to maximize ROI. In the USA, UK, and Canada working
                with toptier clients, from start-ups to enterprises.
              </p>
            </div>
          </div>
          <div className="col-xl-3 col-lg-3 col-md-4 col-sm-4 col-12 col-sm-4">
            <h5 className="text-green fw-600 mb-3">Our Services</h5>
            <ul className="ps-0">
              <li className="mb-3">
                <a className="text-white fw-500" href="/">
                  SEO Marketing
                </a>
              </li>
              <li className="mb-3">
                <a className="text-white fw-500" href="/">
                  Research Topic Trends
                </a>
              </li>
              <li className="mb-3">
                <a className="text-white fw-500" href="/">
                  Email Marketing
                </a>
              </li>
              <li className="mb-3">
                <a className="text-white fw-500" href="/">
                  Google PPC
                </a>
              </li>
            </ul>
          </div>
          <div className="col-xl-2 col-lg-2 col-md-4 col-sm-4 col-12">
            <h5 className="text-green fw-600 mb-3">Our Location</h5>
            <ul className="ps-0">
              <li className="mb-3">
                <p className="text-white fw-500 mb-0">USA</p>
              </li>
              <li className="mb-3">
                <p className="text-white fw-500 mb-0">UK</p>
              </li>
              <li className="mb-3">
                <p className="text-white fw-500 mb-0">Canada</p>
              </li>
              <li className="mb-3">
                <p className="text-white fw-500 mb-0">Virtual</p>
              </li>
            </ul>
          </div>
          <div className="col-xl-3 col-lg-3 col-md-4 col-sm-4 col-12">
            <h5 className="text-green fw-600 mb-3">Contact us</h5>
            <ul className="ps-0">
              <li className="mb-3">
                <a className="text-white" href="mailto:info@kronix.com">
                  <img
                    className={`me-2 ${classes.footer__contactImg}`}
                    src={mail}
                    alt=""
                  />
                  info@kronix.com
                </a>
              </li>
              <li className="mb-3">
                <a className="text-white" href="tel:00112313435">
                  <img
                    className={`me-2 ${classes.footer__contactImg}`}
                    src={phone}
                    alt=""
                  />
                  (001) 1231 3435
                </a>
              </li>
            </ul>
            <div className="d-flex">
              <div className="me-3">
                <a href="/">
                  <svg
                    className={`${classes.footer__contactSocialImg}`}
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    x="0"
                    y="0"
                    viewBox="0 0 512 512"
                  >
                    <g>
                      <path
                        d="M232.727 197.818v23.273h-23.273V256h23.273v104.727h46.545V256h30.953l3.956-34.909h-34.909v-20.364c0-9.425.931-14.429 15.476-14.429h19.433v-35.026h-31.185c-37.236.001-50.269 17.455-50.269 46.546z"
                        fill="#ffffff"
                        opacity="1"
                        data-original="#000000"
                      ></path>
                      <path
                        d="M256 0C114.615 0 0 114.615 0 256s114.615 256 256 256 256-114.615 256-256S397.385 0 256 0zm0 488.727C127.468 488.727 23.273 384.532 23.273 256S127.468 23.273 256 23.273 488.727 127.468 488.727 256 384.532 488.727 256 488.727z"
                        fill="#ffffff"
                        opacity="1"
                        data-original="#000000"
                      ></path>
                    </g>
                  </svg>
                </a>
              </div>
              <div className="me-3">
                <a href="/">
                  <svg
                    className={`${classes.footer__contactSocialImg}`}
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    x="0"
                    y="0"
                    viewBox="0 0 512.001 512.001"
                  >
                    <g>
                      <path
                        d="M373.406 0H138.594C62.172 0 0 62.172 0 138.594V373.41C0 449.828 62.172 512 138.594 512H373.41C449.828 512 512 449.828 512 373.41V138.594C512 62.172 449.828 0 373.406 0zm108.578 373.41c0 59.867-48.707 108.574-108.578 108.574H138.594c-59.871 0-108.578-48.707-108.578-108.574V138.594c0-59.871 48.707-108.578 108.578-108.578H373.41c59.867 0 108.574 48.707 108.574 108.578zm0 0"
                        fill="#ffffff"
                        opacity="1"
                        data-original="#000000"
                      ></path>
                      <path
                        d="M256 116.004c-77.195 0-139.996 62.8-139.996 139.996S178.804 395.996 256 395.996 395.996 333.196 395.996 256 333.196 116.004 256 116.004zm0 249.976c-60.64 0-109.98-49.335-109.98-109.98 0-60.64 49.34-109.98 109.98-109.98 60.645 0 109.98 49.34 109.98 109.98 0 60.645-49.335 109.98-109.98 109.98zM399.344 66.285c-22.813 0-41.367 18.559-41.367 41.367 0 22.813 18.554 41.371 41.367 41.371s41.37-18.558 41.37-41.37-18.558-41.368-41.37-41.368zm0 52.719c-6.258 0-11.352-5.094-11.352-11.352 0-6.261 5.094-11.351 11.352-11.351 6.261 0 11.355 5.09 11.355 11.351 0 6.258-5.094 11.352-11.355 11.352zm0 0"
                        fill="#ffffff"
                        opacity="1"
                        data-original="#000000"
                      ></path>
                    </g>
                  </svg>
                </a>
              </div>
              <div className="me-3">
                <a href="/">
                  <svg
                    className={`${classes.footer__contactSocialImg}`}
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    x="0"
                    y="0"
                    viewBox="0 0 100 100"
                  >
                    <g>
                      <path
                        d="M90 90V60.7c0-14.4-3.1-25.4-19.9-25.4-8.1 0-13.5 4.4-15.7 8.6h-.2v-7.3H38.3V90h16.6V63.5c0-7 1.3-13.7 9.9-13.7 8.5 0 8.6 7.9 8.6 14.1v26H90zM11.3 36.6h16.6V90H11.3zM19.6 10c-5.3 0-9.6 4.3-9.6 9.6s4.3 9.7 9.6 9.7 9.6-4.4 9.6-9.7-4.3-9.6-9.6-9.6z"
                        fill="#ffffff"
                        opacity="1"
                        data-original="#000000"
                      ></path>
                    </g>
                  </svg>
                </a>
              </div>
              <div className="me-3">
                <a href="/">
                  <svg
                    className={`${classes.footer__contactSocialImg}`}
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    x="0"
                    y="0"
                    viewBox="0 0 448 448"
                  >
                    <g>
                      <path
                        d="M224 448C100.535 448 0 347.465 0 224S100.535 0 224 0s224 100.535 224 224-100.535 224-224 224zm0-426.668C112.266 21.332 21.332 112.266 21.332 224S112.266 426.668 224 426.668 426.668 335.734 426.668 224 335.734 21.332 224 21.332zm0 0"
                        fill="#ffffff"
                        opacity="1"
                        data-original="#000000"
                      ></path>
                      <path
                        d="M308.934 415.066c-5.735-173.734-77.47-320.398-182.668-373.601l9.601-19.067c112.133 56.668 188.399 210.536 194.399 392zm0 0"
                        fill="#ffffff"
                        opacity="1"
                        data-original="#000000"
                      ></path>
                      <path
                        d="M64 224c-18.086.02-36.156-.96-54.133-2.934l2.399-21.199A467.172 467.172 0 0 0 64 202.668c125.066 0 239.734-49.336 306.8-131.867l16.532 13.465C316.266 171.734 195.465 224 64 224zM106.266 400.8l-18.399-10.667C148.934 284.535 241.332 224 341.332 224a247.893 247.893 0 0 1 98.133 20.398L431.066 264a226.777 226.777 0 0 0-89.734-18.668c-92.266 0-177.867 56.668-235.066 155.469zm0 0"
                        fill="#ffffff"
                        opacity="1"
                        data-original="#000000"
                      ></path>
                    </g>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="row pt-3">
          <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
            <ul className="ps-0 d-flex mb-0">
              <li className="me-3">
                <a className="text-white" href="/">
                  Process{" "}
                </a>
              </li>
              <li className="me-3">
                <a className="text-white" href="/">
                  Benefits{" "}
                </a>
              </li>
              <li className="me-3">
                <a className="text-white" href="/">
                  Services{" "}
                </a>
              </li>
              <li className="me-3">
                <a className="text-white" href="/">
                  Portfolio{" "}
                </a>
              </li>
            </ul>
          </div>
          <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
            <p className="mb-0 text-md-end text-white">
              © 2024 RajaramanR3- All Right Reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
