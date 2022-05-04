import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Logo from "../Logo/Logo";

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
      className={
        topBarScroll
          ? "sticky top-0 left-0 w-full flex items-center bg-[rgba(74,108,247,var(--tw-bg-opacity))] bg-opacity-20 backdrop-blur-sm shadow-md z-50 transition-all duration-150"
          : "bg-transparent absolute top-0 left-0 z-40 w-full flex items-center"
      }
    >
      <div className="container mx-auto px-4">
        <div className="flex -mx-4 items-center justify-between relative">
          <Logo />
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
                <ul className="aF lg:flex">
                  <li className="relative aG">
                    <NavLink to="/" className="menu-scroll">
                      Home
                    </NavLink>
                  </li>
                  <li className="relative aG">
                    <a href="#about" className="menu-scroll">
                      About
                    </a>
                  </li>
                  <li className="relative aG">
                    <a href="#pricing" className="menu-scroll">
                      Pricing
                    </a>
                  </li>
                  <li className="relative aG">
                    <a href="#support" className="menu-scroll">
                      Support
                    </a>
                  </li>
                  <li className="relative submenu-item" onClick={ToggleSwitch}>
                    <a
                      href="#pages"
                      className="
                      menu-scroll
                        relative
                        after:absolute
                        after:w-2
                        after:h-2
                        after:border-b-2
                        after:border-r-2
                        after:border-current
                        after:rotate-45 after:transform
                        lg:after:-right-4
                        after:right-1
                        after:top-1/2
                        after:-translate-y-1/2 
                        after:mt-[-2px]
                      "
                    >
                      Pages
                    </a>
                    <div
                      className={
                        switchToggled ? "page-submenu-active" : "page-submenu"
                      }
                    >
                      {[
                        { id: 1, text: "About Page", url: "about" },
                        { id: 2, text: "Contact Page", url: "contact" },
                        { id: 3, text: "Blog Grid Page", url: "blog" },
                        {
                          id: 4,
                          text: "Blog Sidebar Page",
                          url: "blog-sidebar",
                        },
                        {
                          id: 5,
                          text: "Blog Details Page",
                          url: "blog-detail",
                        },
                        { id: 6, text: "Sign In Page", url: "register" },
                        { id: 6, text: "Sign Up Page", url: "register" },
                        { id: 7, text: "404 Page", url: "404" },
                      ].map((link) => (
                        <Link
                          key={link.id}
                          to={`${link.url}`}
                          className="sub-link"
                          onClick={ToggleSwitch}
                        >
                          {link.text}
                        </Link>
                      ))}
                    </div>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="flex justify-end items-center pr-16 lg:pr-0">
              <Link
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
              </Link>
              <Link
                to="/register"
                className="
                hidden
                  md:block
                  text-base
                  font-bold
                  
                  bg-opacity-100
  bg-[rgba(74,108,247,var(--tw-bg-opacity))]
                  py-3
                  px-8
                  md:px-9
                  lg:px-6
                  xl:px-9
                  hover:shadow hover:bg-opacity-90
                  rounded-md transition a1q duration-300
                "
              >
                Sign Up
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
