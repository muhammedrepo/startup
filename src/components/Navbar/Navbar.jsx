import React from "react";
import { Header, Nav } from "./NavbarStyles";
import PageLinks from "../../constants/links";
import { Logo, Button } from "../../components";

const Navbar = () => {
  return (
    <Header>
      <div className="container mx-auto px-4">
        <div className="relative -mx-4 flex items-center justify-between">
          <Logo />
          <div className="flex w-full items-center justify-between px-4">
            <div>
              <button className="absolute right-4 top-1/2 block -translate-y-1/2 rounded-lg px-3 py-[6px] ring-primary focus:ring-2 lg:hidden">
                <span className="relative my-[6px] block h-[2px] w-[30px] bg-body-color"></span>
                <span className="relative my-[6px] block h-[2px] w-[30px] bg-body-color"></span>
                <span className="relative my-[6px] block h-[2px] w-[30px] bg-body-color"></span>
              </button>
              <Nav className="nav">
                <PageLinks />
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
