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
    text-[rgba(255,255,255,var(--tw-text-opacity))] font-bold text-xl mb-20"
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
                      <svg
                        width="8"
                        height="6"
                        viewBox="0 0 8 6"
                        className="a26"
                      >
                        <path d="M2.90567 6.00024C2.68031 6.00024 2.48715 5.92812 2.294 5.74764L0.169254 3.43784C-0.0560926 3.18523 -0.0560926 2.78827 0.169254 2.53566C0.39461 2.28298 0.74873 2.28298 0.974086 2.53566L2.90567 4.66497L7.02642 0.189715C7.25175 -0.062913 7.60585 -0.062913 7.83118 0.189715C8.0566 0.442354 8.0566 0.839355 7.83118 1.09198L3.54957 5.78375C3.32415 5.92812 3.09882 6.00024 2.90567 6.00024Z" />
                      </svg>
                    </span>
                    <p
                      className="
                        text-base font-medium text-opacity-100
    text-[rgba(149,156,177,var(--tw-text-opacity))] m-0
                      "
                    >
                      All UI Components
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
                      <svg
                        width="8"
                        height="6"
                        viewBox="0 0 8 6"
                        className="a26"
                      >
                        <path d="M2.90567 6.00024C2.68031 6.00024 2.48715 5.92812 2.294 5.74764L0.169254 3.43784C-0.0560926 3.18523 -0.0560926 2.78827 0.169254 2.53566C0.39461 2.28298 0.74873 2.28298 0.974086 2.53566L2.90567 4.66497L7.02642 0.189715C7.25175 -0.062913 7.60585 -0.062913 7.83118 0.189715C8.0566 0.442354 8.0566 0.839355 7.83118 1.09198L3.54957 5.78375C3.32415 5.92812 3.09882 6.00024 2.90567 6.00024Z" />
                      </svg>
                    </span>
                    <p
                      className="
                    text-base font-medium text-opacity-100
    text-[rgba(149,156,177,var(--tw-text-opacity))] m-0
                      "
                    >
                      Use with Unlimited Projects
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
                      <svg
                        width="8"
                        height="6"
                        viewBox="0 0 8 6"
                        className="a26"
                      >
                        <path d="M2.90567 6.00024C2.68031 6.00024 2.48715 5.92812 2.294 5.74764L0.169254 3.43784C-0.0560926 3.18523 -0.0560926 2.78827 0.169254 2.53566C0.39461 2.28298 0.74873 2.28298 0.974086 2.53566L2.90567 4.66497L7.02642 0.189715C7.25175 -0.062913 7.60585 -0.062913 7.83118 0.189715C8.0566 0.442354 8.0566 0.839355 7.83118 1.09198L3.54957 5.78375C3.32415 5.92812 3.09882 6.00024 2.90567 6.00024Z" />
                      </svg>
                    </span>
                    <p
                      className="
                    text-base font-medium text-opacity-100
    text-[rgba(149,156,177,var(--tw-text-opacity))] m-0
                      "
                    >
                      Commercial Use
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
                      <svg
                        width="8"
                        height="6"
                        viewBox="0 0 8 6"
                        className="a26"
                      >
                        <path d="M2.90567 6.00024C2.68031 6.00024 2.48715 5.92812 2.294 5.74764L0.169254 3.43784C-0.0560926 3.18523 -0.0560926 2.78827 0.169254 2.53566C0.39461 2.28298 0.74873 2.28298 0.974086 2.53566L2.90567 4.66497L7.02642 0.189715C7.25175 -0.062913 7.60585 -0.062913 7.83118 0.189715C8.0566 0.442354 8.0566 0.839355 7.83118 1.09198L3.54957 5.78375C3.32415 5.92812 3.09882 6.00024 2.90567 6.00024Z" />
                      </svg>
                    </span>
                    <p
                      className="
                        text-base font-medium text-opacity-100
    text-[rgba(149,156,177,var(--tw-text-opacity))] m-0
                      "
                    >
                      Email Support
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
                      <svg
                        width="8"
                        height="8"
                        viewBox="0 0 8 8"
                        className="a26 a1C"
                      >
                        <path
                          d="M1.40102 0.95486C1.27421 0.828319 1.07219 0.828354 0.945421 0.954965C0.818519 1.08171 0.818519 1.28389 0.945421 1.41063L0.945612 1.41083L3.54915 4.00184L0.955169 6.60202C0.955106 6.60209 0.95504 6.60215 0.954978 6.60222C0.828263 6.72897 0.82833 6.93101 0.955169 7.05769C1.01288 7.11533 1.09989 7.15024 1.17815 7.15024C1.25641 7.15024 1.34342 7.11533 1.40113 7.05769L1.29513 6.95156L1.40113 7.05769L4.00493 4.45706L6.59917 7.0575L6.59936 7.05769C6.65707 7.11533 6.74408 7.15024 6.82234 7.15024C6.9006 7.15024 6.98761 7.11533 7.04532 7.05769C7.17215 6.93102 7.17222 6.729 7.04553 6.60224C7.04546 6.60217 7.04539 6.6021 7.04532 6.60202L4.46051 4.00165L7.05507 1.4009C7.05511 1.40085 7.05516 1.4008 7.05521 1.40076L7.05526 1.40071L6.94907 1.29477L1.40102 0.95486ZM1.40102 0.95486C1.40106 0.954895 1.40109 0.95493 1.40113 0.954965L1.40102 0.95486Z"
                          stroke-width="0.3"
                        />
                      </svg>
                    </span>
                    <p
                      className="
                        text-base font-medium text-opacity-100
    text-[rgba(149,156,177,var(--tw-text-opacity))] m-0
                      "
                    >
                      Lifetime Access
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
                      <svg
                        width="8"
                        height="8"
                        viewBox="0 0 8 8"
                        className="a26 a1C"
                      >
                        <path
                          d="M1.40102 0.95486C1.27421 0.828319 1.07219 0.828354 0.945421 0.954965C0.818519 1.08171 0.818519 1.28389 0.945421 1.41063L0.945612 1.41083L3.54915 4.00184L0.955169 6.60202C0.955106 6.60209 0.95504 6.60215 0.954978 6.60222C0.828263 6.72897 0.82833 6.93101 0.955169 7.05769C1.01288 7.11533 1.09989 7.15024 1.17815 7.15024C1.25641 7.15024 1.34342 7.11533 1.40113 7.05769L1.29513 6.95156L1.40113 7.05769L4.00493 4.45706L6.59917 7.0575L6.59936 7.05769C6.65707 7.11533 6.74408 7.15024 6.82234 7.15024C6.9006 7.15024 6.98761 7.11533 7.04532 7.05769C7.17215 6.93102 7.17222 6.729 7.04553 6.60224C7.04546 6.60217 7.04539 6.6021 7.04532 6.60202L4.46051 4.00165L7.05507 1.4009C7.05511 1.40085 7.05516 1.4008 7.05521 1.40076L7.05526 1.40071L6.94907 1.29477L1.40102 0.95486ZM1.40102 0.95486C1.40106 0.954895 1.40109 0.95493 1.40113 0.954965L1.40102 0.95486Z"
                          stroke-width="0.3"
                        />
                      </svg>
                    </span>
                    <p
                      className="
                        text-base font-medium text-opacity-100
    text-[rgba(149,156,177,var(--tw-text-opacity))] a45
                      "
                    >
                      Free Lifetime Updates
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* End Pricing Card */}
      </div>
    </section>
  );
};

export default Pricing;
