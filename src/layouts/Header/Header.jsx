import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Logo } from "../../components";

import Navbar from "./Navbar";

const Header = () => {
  const [switchToggled, setSwitchToggled] = useState(false);
  const [topBarScroll, setTopBarScroll] = useState(false);

  const ToggleSwitch = () => {
    setSwitchToggled(!switchToggled);
  };

  const animateTopBar = () => {
    if (window.scrollY >= 100) {
      setTopBarScroll(true);
    } else {
      setTopBarScroll(false);
    }
  };

  window.addEventListener("scroll", animateTopBar);

  return (
    <header
      className={`top-0 left-0 z-40 w-full flex items-center ${
        topBarScroll
          ? "sticky bg-main-bg/20 backdrop-blur-sm shadow transition-all duration-300"
          : "absolute bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex -mx-4 items-center justify-between relative">
          <Logo topBar={topBarScroll} />
          <div className="flex px-4 justify-between items-center w-full">
            <div>
              <button
                onClick={ToggleSwitch}
                aria-label="Mobile Menu"
                className={
                  switchToggled
                    ? "navbarTogglerActive navbarToggler"
                    : "navbarToggler"
                }
              >
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
              </button>
              <Navbar switchToggled={switchToggled} />
            </div>
            <div className="flex justify-end items-center pr-16 lg:pr-0">
              <NavLink
                to="/sign-in"
                className="hidden md:block text-base font-bold hover:opacity-70 py-3 px-7"
              >
                Sign In
              </NavLink>
              <NavLink to="/sign-up" className="btn hidden md:block md:mt-4">
                Sign Up
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
