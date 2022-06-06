import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Link } from "react-scroll";
import { Logo } from "../../components";
import { MdKeyboardArrowDown } from "react-icons/md";

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
                    <Link
                      to="home"
                      className="menu-scroll ml-8"
                      spy={true}
                      smooth={true}
                      duration={1000}
                      exact="true"
                      offset={-80}
                    >
                      Home
                    </Link>
                  </li>
                  <li className="relative">
                    <Link
                      to="about"
                      className="menu-scroll"
                      spy={true}
                      smooth={true}
                      duration={1000}
                      exact="true"
                      offset={-80}
                    >
                      About
                    </Link>
                  </li>
                  <li className="relative">
                    <Link
                      to="pricing"
                      className="menu-scroll"
                      spy={true}
                      smooth={true}
                      duration={1000}
                      exact="true"
                      offset={-80}
                    >
                      Pricing
                    </Link>
                  </li>
                  <li className="relative">
                    <Link
                      to="support"
                      className="menu-scroll"
                      spy={true}
                      smooth={true}
                      duration={1000}
                      exact="true"
                      offset={-80}
                    >
                      Support
                    </Link>
                  </li>
                  <li className="relative submenu-item" onClick={ToggleSwitch}>
                    <a
                      href="#pages"
                      className="
                      menu-scroll flex items-center justify-center"
                    >
                      Pages
                      <MdKeyboardArrowDown className="ml-1 text-2xl" />
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
                        <NavLink
                          key={link.id}
                          to={`${link.url}`}
                          className="sub-link"
                          onClick={ToggleSwitch}
                        >
                          {link.text}
                        </NavLink>
                      ))}
                    </div>
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
