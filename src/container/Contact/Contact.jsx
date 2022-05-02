import React from "react";
import Support from "../Support/Support";

const Contact = () => {
  return (
    <>
      <section class="relative z-10 pt-[150px] overflow-hidden">
        <div class="container mx-auto px-4">
          <div class="flex flex-wrap items-center -mx-4">
            <div class="w-full md:a2q/12 lg:w-[58.333333%] px-4">
              <div class="max-w-[570px] mb-12 md:mb-0">
                <h1
                  class="
                  font-bold 
                  text-2xl
                  sm:text-3xl
                  mb-5
                "
                >
                  Contact Page
                </h1>
                <p class="">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                  varius eros eget sapien consectetur ultrices. Ut quis dapibus
                  libero.
                </p>
              </div>
            </div>

            <div class="w-full md:w-1/3 lg:w-[41.666667%] px-4">
              <div class="a2w">
                <ul class="flex items-center md:justify-end">
                  <li class="flex items-center">
                    <a
                      href="index.html"
                      class="
                      font-medium text-base text-opacity-100
    text-[rgba(149,156,177,var(--tw-text-opacity))] pr-1
                      hover:text-opacity-100
    
                    "
                    >
                      Home
                    </a>
                    <span
                      class="
                      arrow-forward
                    "
                    ></span>
                  </li>
                  <li class="font-medium text-base text-color-b">
                    Contact page
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div>
          <span class="absolute top-0 left-0 -z-[1]">
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
          <span class="absolute right-0 top-0 -z-[1]">
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

      <Support />
    </>
  );
};

export default Contact;
