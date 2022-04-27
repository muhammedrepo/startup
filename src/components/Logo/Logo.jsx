import React from "react";
import { images } from "../../constants";

const Logo = () => {
  return (
    <div className="w-60 max-w-full px-4">
      <a href="#home" className="block w-full py-8">
        <img src={images.logoWhite} alt="logo" className="w-full" />
      </a>
    </div>
  );
};

export default Logo;
