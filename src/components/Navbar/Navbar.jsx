import React, { useEffect, useRef, useState } from "react";
import { Header, Nav } from "./NavbarStyles";
import { data } from "../../constants/links";
import { Logo, Button } from "../../components";

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
                className="absolute right-4 top-1/2 block -translate-y-1/2 rounded-lg px-3 py-[6px] ring-primary focus:ring-2 lg:hidden"
                onClick={() => {
                  setShowLinks(!showLinks);
                }}
              >
                <span className="relative my-[6px] block h-[2px] w-[30px] bg-white"></span>
                <span className="relative my-[6px] block h-[2px] w-[30px] bg-white"></span>
                <span className="relative my-[6px] block h-[2px] w-[30px] bg-white"></span>
              </button>
              <Nav ref={linksContainerRef}>
                <ul className="block lg:flex" ref={linksRef}>
                  {data.map((link) => {
                    const { id, url, text } = link;
                    return (
                      <li key={id}>
                        <a
                          href={`${url}`}
                          className="flex py-2 text-base font-medium text-white hover:text-primary lg:ml-12 lg:inline-flex"
                        >
                          {text}
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </Nav>
            </div>
            <div className="hidden justify-end pr-16 sm:flex lg:pr-0">
              <a
                href="#login"
                className="py-3 px-7 text-base font-medium text-white hover:text-primary"
              >
                Login
              </a>

              <Button title="Sign Up" />
            </div>
          </div>
        </div>
      </div>
    </Header>
  );
};

export default Navbar;
