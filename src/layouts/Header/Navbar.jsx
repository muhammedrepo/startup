import React, { useState } from "react";
import { navLinks } from "../../constants";
import DropdownMenu from "./DropdownMenu";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

function Navbar({ switchToggled }) {
  return (
    <nav className={switchToggled ? "navbarCollapseActive" : "navbarCollapse"}>
      <ul className="navbar-nav lg:flex">
        {navLinks.map((nav) => (
          <NavItem
            key={nav.id}
            title={nav.title}
            path={nav.path}
            id={`#${nav.id}`}
          />
        ))}

        <NavItem
          title="Page"
          icon={<MdOutlineKeyboardArrowDown className="text-2xl" />}
        >
          <DropdownMenu />
        </NavItem>
      </ul>
    </nav>
  );
}

function NavItem(props) {
  const [open, setOpen] = useState(false);
  return (
    <li className="relative cursor-pointer">
      <a
        href={props.title === "Home" ? props.path : props.id}
        className="ml-8 text-base text-white lg:mr-0 lg:inline-flex lg:py-6 lg:px-0 xl:ml-12"
        onClick={() => setOpen(!open)}
      >
        <span className="mx-8 flex lg:mx-0">
          {props.title}
          <span className="fill-current text-white">{props.icon}</span>
        </span>
      </a>
      {open && props.children}
    </li>
  );
}

export default Navbar;
