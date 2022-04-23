import React from "react";
import { Button, ButtonGray } from "../../components";
import { HeroWrap } from "./HeroStyles";

const Hero = () => {
  return (
    <HeroWrap>
      <div className="relative pt-[120px] pb-[110px] lg:pt-[150px]">
        <div className="container mx-auto px-4">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div className="hero-content flex flex-col justify-center  items-center max-w-[540px] mx-auto">
                <h1 className="mb-5 sm:text-[42px] lg:text-[40px] xl:text-5xl font-bold leading-snug text-center">
                  Startup Focused Tailwind CSS Template
                </h1>
                <p className="max-w-[540px] text-xl font-medium mb-12 text-center">
                  A Complete Tailwind CSS Web Template Crafted for - Startup,
                  SaaS, Business, Software and Agencies. Comes with high-quality
                  design and everything you need!
                </p>
                <ul className="flex flex-wrap items-center">
                  <li>
                    <Button title="Get Started" />
                  </li>
                  <li>
                    <ButtonGray title="Learn More" />
                  </li>
                </ul>
              </div>
            </div>
            <div className="hidden px-4 lg:block lg:w-1/12"></div>
          </div>
        </div>
      </div>
    </HeroWrap>
  );
};

export default Hero;
