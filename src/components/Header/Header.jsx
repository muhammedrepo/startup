import React from "react";
import { Link, NavLink } from "react-router-dom";
import Logo from "../Logo/Logo";

const Header = () => {
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
                id="navbarToggler"
                aria-label="Mobile Menu"
                className="
                  block
                  absolute
                  right-4
                  top-1/2
                  -translate-y-1/2
                  lg:hidden
                  focus:an
                  ring-opacity-100
    ring-[rgba(74, 108, 247, var(--tw-ring-opacity))] px-3 py-1.5 rounded-lg
                "
              >
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
              </button>
              <nav
                id="navbarCollapse"
                className="
                  absolute py-5
                  lg:py-0 lg:px-4
                  xl:px-6
                 bg-opacity-100
    bg-[rgba(29,33,68,var(--tw-bg-opacity))]
                  lg:bg-transparent
                  aA rounded-lg max-w-[250px] w-full
                  lg:max-w-full lg:w-full
                  right-4 top-full hidden
                  lg:block lg:static lg:aE
                "
              >
                <ul className="aF lg:flex">
                  <li className="relative aG">
                    <NavLink
                      to="/"
                      className="
                        menu-scroll
                        text-base
                        text-dark
                        
                        group-hover:aJ
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
                        
                        group-hover:aJ
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
                        
                        group-hover:aJ
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
                        
                        group-hover:aJ
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
                  <li className="relative aG submenu-item">
                    <a
                      href="#page"
                      className="
                      text-base
                        
                        group-hover:aJ
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
                      className="
                        submenu
                        hidden relative
                        lg:absolute
                        w-[250px] top-full
                        lg:top-[110%]
                        left-0 a13
                        lg:aA
                        p-4
                        lg:block lg:opacity-0 lg:invisible
                        group-hover:a17
                        lg:group-hover:a18 lg:group-hover:aC
                         bg-opacity-100 bg-[rgba(29,33,68,var(--tw-bg-opacity))]
                        
                        a19[top] duration-300
                      "
                    >
                      <a href="about.html" className="sub-link">
                        About Page
                      </a>
                      <a href="contact.html" className="sub-link">
                        Contact Page
                      </a>
                      <a href="blog-grids.html" className="sub-link">
                        Blog Grid Page
                      </a>
                      <a href="blog-sidebar.html" className="sub-link">
                        Blog Sidebar Page
                      </a>
                      <a href="blog-details.html" className="sub-link">
                        Blog Details Page
                      </a>
                      <a href="signin.html" className="sub-link">
                        Sign In Page
                      </a>
                      <a href="signup.html" className="sub-link">
                        Sign Up Page
                      </a>
                      <a href="404.html" className="sub-link">
                        404 Page
                      </a>
                    </div>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="flex justify-end items-center pr-16 lg:pr-0">
              <Link
                to="login"
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
                to="register"
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
