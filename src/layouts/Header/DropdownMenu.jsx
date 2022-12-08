import React from "react";
import { pageLinks } from "../../constants";

function DropdownMenu() {
  function DropdownItem(props) {
    return (
      <a
        href={props.path}
        className="block rounded py-[10px] px-4 text-sm
      text-white
        hover:opacity-70"
      >
        {props.title} {props.icon}
      </a>
    );
  }
  return (
    <div
      className="relative top-full left-0 w-[250px] rounded-md bg-main-dark-bg p-4
    duration-300  lg:visible lg:absolute lg:top-[110%] lg:block lg:opacity-100 lg:shadow"
    >
      {pageLinks.map((page) => (
        <DropdownItem path={page.path} title={page.title} />
      ))}
    </div>
  );
}

export default DropdownMenu;
