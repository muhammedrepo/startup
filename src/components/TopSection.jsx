import React from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const TopSection = ({ title, subtitle }) => {
  return (
    <section className="relative z-10 pt-[150px] overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap items-center -mx-4">
          <div className="w-full md:w-2/3 lg:w-[58.333333%] px-4">
            <div className="max-w-[570px] mb-3 md:mb-0">
              <h1
                className="
                  font-bold a1A
                  dark:text-white
                  text-2xl
                  sm:a1O
                  mb-5
                "
              >
                {title}
              </h1>
              <p
                className="
                  font-medium
                  text-base
                  text-[#959cb1]
                  a1U
                "
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                varius eros eget sapien consectetur ultrices. Ut quis dapibus
                libero.
              </p>
            </div>
          </div>
          <div className="w-full md:w-1/3 lg:w-2/5 px-4">
            <div className="a2w">
              <ul className="flex items-center md:justify-end">
                <li className="flex items-center">
                  <a
                    href="/"
                    className="
                      font-medium text-base text-[#959cb1] pr-1
                      hover:text-[#4a6cf7]
                    "
                  >
                    Home
                  </a>

                  <MdOutlineKeyboardArrowRight
                    className="
                      block
                      w-6
                      h-6              
                      mr-3
                      text-[#959cb1]
                    "
                  />
                </li>
                <li className="font-medium text-base text-[#4a6cf7]">
                  {subtitle}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div>
        <span className="absolute top-0 left-0 z-[-1]">
          <svg
            width="287"
            height="254"
            viewBox="0 0 287 254"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              opacity="0.1"
              d="M286.5 0.5L-14.5 254.5V69.5L286.5 0.5Z"
              fill="url(#paint0_linear_111:578)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_111:578"
                x1="-40.5"
                y1="117"
                x2="301.926"
                y2="-97.1485"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#4A6CF7" />
                <stop offset="1" stop-color="#4A6CF7" stop-opacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </span>
        <span className="absolute right-0 top-0 z-[-1]">
          <svg
            width="628"
            height="258"
            viewBox="0 0 628 258"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              opacity="0.1"
              d="M669.125 257.002L345.875 31.9983L524.571 -15.8832L669.125 257.002Z"
              fill="url(#paint0_linear_0:1)"
            />
            <path
              opacity="0.1"
              d="M0.0716344 182.78L101.988 -15.0769L142.154 81.4093L0.0716344 182.78Z"
              fill="url(#paint1_linear_0:1)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_0:1"
                x1="644"
                y1="221"
                x2="429.946"
                y2="37.0429"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#4A6CF7" />
                <stop offset="1" stop-color="#4A6CF7" stop-opacity="0" />
              </linearGradient>
              <linearGradient
                id="paint1_linear_0:1"
                x1="18.3648"
                y1="166.016"
                x2="105.377"
                y2="32.3398"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#4A6CF7" />
                <stop offset="1" stop-color="#4A6CF7" stop-opacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </span>
      </div>
    </section>
  );
};

export default TopSection;
