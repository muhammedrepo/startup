import React from "react";
import { Button, SectionTitle } from "../../components";
import { pricingData } from "../../constants/pricingData";

const Pricing = () => {
  return (
    <section id="pricing" className="relative z-10 pt-[120px] pb-20">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="Simple and Affordable Pricing"
          desc="There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some form."
        />
        <div className="flex flex-wrap -mx-4">
          <div className="w-full px-4">
            <div className="flex justify-center mb-16">
              <span
                className="
                    a1h
                    dark:text-opacity-100
    text-[rgba(255,255,255,var(--tw-text-opacity))]
                    text-base font-semibold mr-4
                    monthly
                    cursor-pointer
                  "
              >
                Monthly
              </span>
              <label
                for="togglePlan"
                className="flex items-center cursor-pointer"
              >
                <div className="relative">
                  <input
                    id="togglePlan"
                    type="checkbox"
                    className="absolute w-[1px] h-[1px] p-0 -m-[1px] overflow-hidden"
                    style={{
                      clip: "rect(0,0,0,0)",
                      whiteSpace: "nowrap",
                      borderWidth: 0,
                    }}
                  />
                  <div
                    className="
                        w-[3.5rem]
                        h-5
                        bg-opacity-100
    bg-[rgba(29,33,68,var(--tw-bg-opacity))]
                        rounded-full
                        a3Y
                      "
                  ></div>
                  <div
                    className="
                        dot
                        absolute
                        a2r
                        a3Z
                        a1k
                        a1w
                        a3_
                        a5
                        a12[-4px]
                        a1p
                        a8
                        a9
                        a1x
                      "
                  >
                    <span className="active a20 a40 a1w aw"></span>
                  </div>
                </div>
              </label>
              <span
                className="
                    a1h
                    dark:text-opacity-100
    text-[rgba(255,255,255,var(--tw-text-opacity))]
                text-base font-semibold ml-4
                    yearly
                    cursor-pointer
                  "
              >
                Yearly
              </span>
            </div>
          </div>
        </div>

        {/* Pricing Card */}
        <div className="flex flex-wrap -mx-4">
          {pricingData.map((item, index) => (
            <div className="w-full md:w-1/2 lg:w-1/3 px-4" key={index}>
              <div
                className="
                  relative z-10 aw
                  dark:bg-opacity-100
    bg-[rgba(29,33,68,var(--tw-bg-opacity))]
                  a1n px-8 py-10 rounded-md mb-10               
                "
              >
                <div className="flex justify-between items-center">
                  <h3
                    className="
                      font-bold a1A
                      dark: text-opacity-100
    text-[rgba(255,255,255,var(--tw-text-opacity))]
                      text-3xl mb-2
                      price
                    "
                  >
                    $<span className="amount">{item.price}</span>
                    <span
                      className="a1h dark:text-opacity-100
    text-[rgba(149,156,177,var(--tw-text-opacity))] time"
                    >
                      /mo
                    </span>
                  </h3>
                  <h4
                    className="text-opacity-100
    text-[rgba(255,255,255,var(--tw-text-opacity))] font-bold text-xl mb-2"
                  >
                    {item.category}
                  </h4>
                </div>
                <p
                  className="text-base text-opacity-100
    text-[rgba(149,156,177,var(--tw-text-opacity))] mb-7"
                >
                  {item.desc}
                </p>
                <div
                  className="
                    border-b border-opacity-100
    border-[rgba(149,156,177,var(--tw-border-opacity))]
                    dark:mr-5
                    border-opacity-10
                    dark:border-opacity-10
                    pb-8 mb-8
                  "
                >
                  <Button title="Start Free Trial" />
                </div>

                <div>
                  <div className="flex items-center mb-3">
                    <span
                      className="
                    bg-opacity-100
    bg-[rgba(74,108,247,var(--tw-bg-opacity))]
                        bg-opacity-10
                        text-opacity-100
    text-[rgba(74,108,247,var(--tw-text-opacity))]
                        max-w-[18px]
                        w-full
                        h-[18px]
                        mr-3
                        flex
                        items-center
                        justify-center
                        rounded-full
                      "
                    >
                      {item.xicon}
                    </span>
                    <p
                      className="
                        text-base font-medium text-opacity-100
    text-[rgba(149,156,177,var(--tw-text-opacity))] m-0
                      "
                    >
                      {item.x1}
                    </p>
                  </div>
                  <div className="flex items-center mb-3">
                    <span
                      className="
                        bg-opacity-100
    bg-[rgba(74,108,247,var(--tw-bg-opacity))]
                        bg-opacity-10
                        text-opacity-100
    text-[rgba(74,108,247,var(--tw-text-opacity))]
                        max-w-[18px]
                        w-full
                        h-[18px]
                        mr-3
                        flex
                        items-center
                        justify-center
                        rounded-full
                      "
                    >
                      {item.xicon}
                    </span>
                    <p
                      className="
                    text-base font-medium text-opacity-100
    text-[rgba(149,156,177,var(--tw-text-opacity))] m-0
                      "
                    >
                      {item.x2}
                    </p>
                  </div>
                  <div className="flex items-center mb-3">
                    <span
                      className="
                        bg-opacity-100
    bg-[rgba(74,108,247,var(--tw-bg-opacity))]
                        bg-opacity-10
                        text-opacity-100
    text-[rgba(74,108,247,var(--tw-text-opacity))]
                        max-w-[18px]
                        w-full
                        h-[18px]
                        mr-3
                        flex
                        items-center
                        justify-center
                        rounded-full
                      "
                    >
                      {item.xicon}
                    </span>
                    <p
                      className="
                    text-base font-medium text-opacity-100
    text-[rgba(149,156,177,var(--tw-text-opacity))] m-0
                      "
                    >
                      {item.x3}
                    </p>
                  </div>
                  <div className="flex items-center mb-3">
                    <span
                      className="
                        bg-opacity-100
    bg-[rgba(74,108,247,var(--tw-bg-opacity))]
                        bg-opacity-10
                        text-opacity-100
    text-[rgba(74,108,247,var(--tw-text-opacity))]
                        max-w-[18px]
                        w-full
                        h-[18px]
                        mr-3
                        flex
                        items-center
                        justify-center
                        rounded-full
                      "
                    >
                      {item.xicon}
                    </span>
                    <p
                      className="
                        text-base font-medium text-opacity-100
    text-[rgba(149,156,177,var(--tw-text-opacity))] m-0
                      "
                    >
                      {item.x4}
                    </p>
                  </div>
                  <div className="flex items-center mb-3">
                    <span
                      className="
                        bg-opacity-100
    bg-[rgba(74,108,247,var(--tw-bg-opacity))]
                        bg-opacity-10
                        text-opacity-100
    text-[rgba(74,108,247,var(--tw-text-opacity))]
                        max-w-[18px]
                        w-full
                        h-[18px]
                        mr-3
                        flex
                        items-center
                        justify-center
                        rounded-full
                      "
                    >
                      {item.xicon}
                    </span>
                    <p
                      className="
                        text-base font-medium text-opacity-100
    text-[rgba(149,156,177,var(--tw-text-opacity))] m-0
                      "
                    >
                      {item.x5}
                    </p>
                  </div>
                  <div className="flex items-center">
                    <span
                      className="
                        bg-opacity-100
    bg-[rgba(74,108,247,var(--tw-bg-opacity))]
                        bg-opacity-10
                        text-opacity-100
    text-[rgba(74,108,247,var(--tw-text-opacity))]
                        max-w-[18px]
                        w-full
                        h-[18px]
                        mr-3
                        flex
                        items-center
                        justify-center
                        rounded-full
                      "
                    >
                      {item.xicon}
                    </span>
                    <p
                      className="
                        text-base font-medium text-opacity-100
    text-[rgba(149,156,177,var(--tw-text-opacity))] a45
                      "
                    >
                      {item.x6}
                    </p>
                  </div>
                </div>
                <div className="absolute bottom-0  right-0 -z-[1]">
                  {item.icon}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* End Pricing Card */}
      </div>

      <div className="absolute left-0 bottom-0 -z-[1]">
        <svg
          width="239"
          height="601"
          viewBox="0 0 239 601"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            opacity="0.3"
            x="-184.451"
            y="600.973"
            width="196"
            height="541.607"
            rx="2"
            transform="rotate(-128.7 -184.451 600.973)"
            fill="url(#paint0_linear_93:235)"
          />
          <rect
            opacity="0.3"
            x="-188.201"
            y="385.272"
            width="59.7544"
            height="541.607"
            rx="2"
            transform="rotate(-128.7 -188.201 385.272)"
            fill="url(#paint1_linear_93:235)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_93:235"
              x1="-90.1184"
              y1="420.414"
              x2="-90.1184"
              y2="1131.65"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#4A6CF7" />
              <stop offset="1" stop-color="#4A6CF7" stop-opacity="0" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_93:235"
              x1="-159.441"
              y1="204.714"
              x2="-159.441"
              y2="915.952"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#4A6CF7" />
              <stop offset="1" stop-color="#4A6CF7" stop-opacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </section>
  );
};

export default Pricing;
