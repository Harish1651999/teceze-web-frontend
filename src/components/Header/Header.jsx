import React, { useState } from "react";
import appLogo from "../../assets/clickit-logo.png";
import menu from "../../assets/menu.svg";
import close from "../../assets/close.svg";
import classes from "./Header.module.css";

const Header = () => {
  const [open, setOpen] = useState(false);

  function handleMenu() {
    setOpen(!open);
  }

  return (
    <header className="fixed-top d-flex align-items-center bg-black">
      <div className="container">
        <div className="d-flex justify-content-between align-items-center">
          <div className={classes["app-logo-wrap"]}>
            <img
              className="img-fluid w-100 h-100 object-fit-cover"
              src={appLogo}
              alt="Teceze"
              title="Teceze"
            />
          </div>
          <ul
            className={`ps-0 mb-0 d-flex align-items-center header__menu ${
              classes.header__menu
            } ${open ? classes.header__menuActive : null}`}
          >
            <li
              className={`me-4 position-relative d-md-none ${classes.header__closeWrap}`}
            >
              <img
                className={`${classes.header__closeBtn}`}
                src={close}
                alt=""
                onClick={handleMenu}
              />
            </li>
            <li className="me-4">
              <a className="text-white mb-0" href="">
                Process
              </a>
            </li>
            <li className="me-4">
              <a className="text-white mb-0" href="">
                Benefits
              </a>
            </li>
            <li className="me-4">
              <a className="text-white mb-0" href="">
                Services
              </a>
            </li>
            <li className="me-4">
              <a className="text-white mb-0" href="">
                Portfolio
              </a>
            </li>
            <li className="me-4">
              <a className="text-white mb-0" href="">
                FAQ
              </a>
            </li>
            <li className="me-4">
              <button className="btn btn-green fs-12px fw-600 py-2">
                Get Started
              </button>
            </li>
          </ul>
          <div className={`d-md-none ${classes.header__menuBtn}`}>
            <img src={menu} alt="Menu" onClick={handleMenu} />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
