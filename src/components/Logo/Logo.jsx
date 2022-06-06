import React from "react";
import { NavLink } from "react-router-dom";
import { images } from "../../constants";

const Logo = ({ topBar }) => {
  return (
    <div className="w-60 max-w-full px-4">
      <NavLink to="/" className={`block w-full ${topBar ? "py-2" : "py-8"}`}>
        <img src={images.logoWhite} alt="logo" className="w-full" />
      </NavLink>
    </div>
  );
};

export default Logo;
