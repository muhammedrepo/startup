import React from "react";
import { Link } from "react-router-dom";
import { images } from "../../constants";

const Logo = () => {
  return (
    <div className="w-60 max-w-full px-4">
      <Link to="/" className="block w-full py-8">
        <img src={images.logoWhite} alt="logo" className="w-full" />
      </Link>
    </div>
  );
};

export default Logo;
