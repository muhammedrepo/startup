import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Logo from "../Logo/Logo";

const Header = () => {
  const [switchToggled, setSwitchToggled] = useState(false);

  const ToggleSwitch = () => {
    setSwitchToggled(!switchToggled);
  };
  return (
    <header
      className="header bg-transparent absolute
        top-0
        left-0
        z-40
        w-full
        flex
        items-center
      "
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
                    <NavLink
                      to="/"
                      className="
                        menu-scroll
                        text-base
                        text-dark
                        
                        hover:opacity-70
                        py-6
                        lg:py-6 lg:inline-flex lg:px-0
                        flex mx-8
                        lg:mr-0
                      "
                    >
                      Home
                    </NavLink>
                  </li>
                  <li className="relative aG">
                    <a
                      href="#about"
                      className="
                        menu-scroll
                        text-base
                        
                        hover:opacity-70
                        py-6
                        lg:py-6 lg:inline-flex lg:px-0
                        flex mx-8
                        lg:mr-0 lg:ml-8
                        xl:ml-12
                      "
                    >
                      About
                    </a>
                  </li>
                  <li className="relative aG">
                    <a
                      href="#pricing"
                      className="
                        menu-scroll
                        text-base
                        
                        hover:opacity-70
                        py-6
                        lg:py-6 lg:inline-flex lg:px-0
                        flex mx-8
                        lg:mr-0 lg:ml-8
                        xl:ml-12
                      "
                    >
                      Pricing
                    </a>
                  </li>
                  <li className="relative aG">
                    <a
                      href="#support"
                      className="
                        menu-scroll
                        text-base
                        
                        hover:opacity-70
                        py-6
                        lg:py-6 lg:inline-flex lg:px-0
                        flex mx-8
                        lg:mr-0 lg:ml-8
                        xl:ml-12
                      "
                    >
                      Support
                    </a>
                  </li>
                  <li className="relative submenu-item">
                    <a
                      onClick={ToggleSwitch}
                      href="#pages"
                      className="
                      text-base
                        
                        hover:opacity-70
                        py-6
                        lg:py-6 lg:inline-flex lg:px-0
                        flex mx-8
                        lg:mr-0 lg:ml-8
                        xl:ml-12
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
                      <Link to="about" className="sub-link">
                        About Page
                      </Link>
                      <Link to="contact" className="sub-link">
                        Contact Page
                      </Link>
                      <Link to="blog" className="sub-link">
                        Blog Grid Page
                      </Link>
                      <Link to="blog-sidebar" className="sub-link">
                        Blog Sidebar Page
                      </Link>
                      <Link to="blog-details" className="sub-link">
                        Blog Details Page
                      </Link>
                      <Link to="login" className="sub-link">
                        Sign In Page
                      </Link>
                      <Link to="register" className="sub-link">
                        Sign Up Page
                      </Link>
                      <Link to="404" className="sub-link">
                        404 Page
                      </Link>
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
