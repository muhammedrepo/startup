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
      className={`top-0 left-0 z-40 flex w-full items-center ${
        topBarScroll
          ? "sticky bg-main-bg/20 shadow backdrop-blur-sm transition-all duration-300"
          : "absolute bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="relative -mx-4 flex items-center justify-between">
          <Logo topBar={topBarScroll} />
          <div className="flex w-full items-center justify-between px-4">
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
            <div className="flex items-center justify-end pr-16 lg:pr-0">
              <NavLink
                to="/sign-in"
                className="hidden py-3 px-7 text-base font-bold hover:opacity-70 md:block"
              >
                Sign In
              </NavLink>
              <NavLink to="/sign-up" className="btn hidden md:mt-4 md:block">
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
