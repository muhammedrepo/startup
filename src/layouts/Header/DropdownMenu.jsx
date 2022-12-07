import React from "react";
import { pageLinks } from "../../constants";

function DropdownMenu() {
  function DropdownItem(props) {
    return (
      <a
        href={props.path}
        className="block text-sm rounded py-[10px] px-4
      text-white/100
        hover:opacity-70"
      >
        {props.title} {props.icon}
      </a>
    );
  }
  return (
    <div
      className="relative lg:absolute w-[250px] top-full lg:top-[110%] left-0 rounded-md
    lg:shadow  p-4 lg:block lg:opacity-100 lg:visible bg-main-dark-bg duration-300"
    >
      {pageLinks.map((page) => (
        <DropdownItem path={page.path} title={page.title} />
      ))}
    </div>
  );
}

export default DropdownMenu;
