import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Logo } from "../../components";

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
      className={`top-0 left-0 z-50 w-full flex items-center ${
        topBarScroll
          ? "sticky bg-main-bg bg-opacity-20 backdrop-blur-sm shadow transition-all duration-150"
          : "bg-transparent absolute"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex -mx-4 items-center justify-between relative">
          <Logo topBar={topBarScroll} />
          <div className="flex px-4 justify-between items-center w-full">
            <div>
              <button
                onClick={ToggleSwitch}
                id="navbarToggler"
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
              <nav
                id="navbarCollapse"
                className={
                  switchToggled ? "navbarCollapseActive" : "navbarCollapse"
                }
              >
                <ul className="lg:flex">
                  <li className="relative aG">
                    <NavLink to="/" className="menu-scroll">
                      Home
                    </NavLink>
                  </li>
                  <li className="relative">
                    <NavLink to="about" className="menu-scroll">
                      About
                    </NavLink>
                  </li>
                  <li className="relative">
                    <NavLink to="service" className="menu-scroll">
                      Services
                    </NavLink>
                  </li>
                  <li className="relative">
                    <NavLink to="blog-grid" className="menu-scroll">
                      Blog
                    </NavLink>
                  </li>
                  <li className="relative">
                    <NavLink to="contact" className="menu-scroll">
                      Contact
                    </NavLink>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="flex justify-end items-center pr-16 lg:pr-0">
              <NavLink
                to="/register"
                className="
                  hidden
                  md:block
                  text-base font-bold
                  
                  hover:opacity-70
                  py-3 px-7
                "
              >
                Sign In
              </NavLink>
              <NavLink to="/register" className="btn hidden md:block md:mt-4">
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
