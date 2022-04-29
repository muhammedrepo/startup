import React, { useEffect, useRef, useState } from "react";
import { Header, Nav } from "./NavbarStyles";
import { data } from "../../constants/links";
import { Logo } from "../../components";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);
  const linksContainerRef = useRef(null);
  const linksRef = useRef(null);

  useEffect(() => {
    const linksHeight = linksRef.current.getBoundingClientRect().height;
    if (showLinks) {
      linksContainerRef.current.style.height = `${linksHeight}px`;
    } else {
      linksContainerRef.current.style.height = "0px";
    }
  }, [showLinks]);

  return (
    <Header>
      <div className="container mx-auto px-4">
        <div className="relative -mx-4 flex items-center justify-between">
          <Logo />
          <div className="flex w-full items-center justify-between px-4">
            <div>
              <button
                className="absolute right-4 top-1/2 block transform -translate-y-1/2 rounded-lg px-3 py-[6px] ring-[rgba(74, 108, 247, var(--tw-ring-opacity))] lg:hidden"
                onClick={() => {
                  setShowLinks(!showLinks);
                }}
              >
                <span
                  className="relative my-[6px] block h-[2px] w-[30px] bg-opacity-100
    bg-[rgba(255,255,255,var(--tw-bg-opacity))]"
                ></span>
                <span
                  className="relative my-[6px] block h-[2px] w-[30px] bg-opacity-100
    bg-[rgba(255,255,255,var(--tw-bg-opacity))]"
                ></span>
                <span
                  className="relative my-[6px] block h-[2px] w-[30px] bg-opacity-100
    bg-[rgba(255,255,255,var(--tw-bg-opacity))]"
                ></span>
              </button>
              <Nav ref={linksContainerRef}>
                <ul className="block lg:flex" ref={linksRef}>
                  {data.map((link) => {
                    const { id, url, text } = link;
                    return (
                      <li key={id} className="relative">
                        <NavLink
                          to={`${url}`}
                          className="flex py-2 text-base font-medium hover:text-opacity-70 lg:ml-8 lg:inline-flex lg:mr-0 lg:py-3 lg:px-0 xl:ml-12"
                        >
                          {text}
                        </NavLink>
                      </li>
                    );
                  })}
                </ul>
              </Nav>
            </div>
            <div className="flex items-center justify-end pr-16 lg:pr-0">
              <Link
                to="login"
                className="hidden py-3 px-7 text-base font-bold hover:text-opacity-70 md:block"
              >
                Sign In
              </Link>

              <Link
                to="register"
                class="
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
    </Header>
  );
};

export default Navbar;
