import React from "react";

const Support = () => {
  return (
    <section id="contact" className="pt-[120px] pb-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap -mx-4">
          <div className="w-full lg:w-2/3 px-4">
            <div
              className="
              bg-opacity-100
    bg-[rgba(74,108,247,var(--tw-bg-opacity))] bg-opacity-[3%]
                  dark:bg-opacity-100
   dark:bg-[rgba(29,33,68,var(--tw-bg-opacity))]
                  rounded-md p-11 mb-12
                  lg:mb-5
                  sm:p-[55px]
                  lg:p-11
                  xl:p-[55px]
                 
                "
            >
              <h2
                className="
                    font-bold text-opacity-100
    text-[rgba(9,14,52,var(--tw-text-opacity))]
                    dark:text-opacity-100
    dark:text-[rgba(255,255,255,var(--tw-text-opacity))]
                    text-2xl
                    sm:text-3xl
                    lg:text-2xl
                    xl:text-3xl
                    mb-3
                  "
              >
                Need Help? Open a Ticket
              </h2>
              <p
                className="text-opacity-100
    text-[rgba(149,156,177,var(--tw-text-opacity))] text-base font-medium mb-12"
              >
                Our support team will get back to you ASAP via email.
              </p>
              <form>
                <div className="flex flex-wrap -mx-4">
                  <div className="w-full md:w-1/2 px-4">
                    <div className="mb-8">
                      <label for="name" className="name-label">
                        Your Name
                      </label>
                      <input
                        type="text"
                        placeholder="Enter your name"
                        className="name-input"
                      />
                    </div>
                  </div>
                  <div className="w-full md:w-1/2 px-4">
                    <div className="mb-8">
                      <label for="email" className="email-label">
                        Your Email
                      </label>
                      <input
                        type="email"
                        placeholder="Enter your email"
                        className="email-input"
                      />
                    </div>
                  </div>
                  <div className="w-full px-4">
                    <div className="mb-8">
                      <label for="message" className="message-label">
                        Your Message
                      </label>
                      <textarea
                        name="message"
                        rows="5"
                        placeholder="Enter your Message"
                        className="
                            w-full border border-transparent
                            dark:bg-opacity-100
                          dark:bg-[rgba(36,43,81,var(--tw-bg-opacity))]
                            rounded-md a33
                            dark:a1n
                            px-6
                            py-3
                            text-opacity-100
                          text-[rgba(149,156,177,var(--tw-text-opacity))]
                            text-base
                            
                            focus-visible:shadow-sm
                            focus:border-opacity-100
                          focus:border-[rgba(74,108,247,var(--tw-border-opacity))]
                            resize-none
                            outline outline-2 outline-offset-2 outline-transparent
                          "
                      ></textarea>
                    </div>
                  </div>
                  <div className="w-full px-4">
                    <a href="#home" className="submit-btn py-4">
                      Submit Ticket
                    </a>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="w-full lg:w-1/3 px-4">
            <div
              className="
                  relative
                  z-10
                rounded-md
                  
                bg-[rgba(74,108,247,var(--tw-bg-opacity))]
                  bg-opacity-[3%]
                  dark:bg-opacity-10
                  p-8
                  sm:p-11
                  lg:p-8
                  xl:p-11
                  mb-5
                "
            >
              <h3
                className="
                text-opacity-100
    text-[rgba(9,14,52,var(--tw-text-opacity))]
                    dark:text-opacity-100
    dark:text-[rgba(255,255,255,var(--tw-text-opacity))]
                    font-bold text-2xl mb-4
                  "
              >
                Subscribe to receive future updates
              </h3>
              <p
                className="
                    font-medium
                    text-base
                    text-opacity-100
                  text-[rgba(149,156,177,var(--tw-text-opacity))]
                    leading-6
                    pb-11
                    mb-11
                    border-b
                    border-opacity-100
                  border-[rgba(149,156,177,var(--tw-border-opacity))]
                    dark:border-[rgba(255,255,255,var(--tw-border-opacity))] dark:border-opacity-25
                  "
              >
                Lorem ipsum dolor sited Sed ullam corper consectur adipiscing
                Mae ornare massa quis lectus.
              </p>
              <form>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  className="name-input mb-4"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  className="email-input mb-4"
                />
                <input
                  type="submit"
                  value="Subscribe"
                  className="subscribe-btn w-full"
                />
                <p
                  className="
                      text-base
                      text-opacity-100
    text-[rgba(149,156,177,var(--tw-text-opacity))]
                      text-center
                      font-medium
                      leading-6
                    "
                >
                  No spam guaranteed, So please don’t send any spam mail.
                </p>
              </form>
              {/* <div className="a3 a4 a5 a1Y[-1]">
                <svg
                  width="370"
                  height="596"
                  viewBox="0 0 370 596"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <mask
                    id="mask0_88:141"
                    style="mask-type: alpha"
                    maskUnits="userSpaceOnUse"
                    x="0"
                    y="0"
                    width="370"
                    height="596"
                  >
                    <rect width="370" height="596" rx="2" fill="#1D2144" />
                  </mask>
                  <g mask="url(#mask0_88:141)">
                    <path
                      opacity="0.15"
                      d="M15.4076 50.9571L54.1541 99.0711L71.4489 35.1605L15.4076 50.9571Z"
                      fill="url(#paint0_linear_88:141)"
                    />
                    <path
                      opacity="0.15"
                      d="M20.7137 501.422L44.6431 474.241L6 470.624L20.7137 501.422Z"
                      fill="url(#paint1_linear_88:141)"
                    />
                    <path
                      opacity="0.1"
                      d="M331.676 198.309C344.398 204.636 359.168 194.704 358.107 180.536C357.12 167.363 342.941 159.531 331.265 165.71C318.077 172.69 318.317 191.664 331.676 198.309Z"
                      fill="url(#paint2_linear_88:141)"
                    />
                    <g opacity="0.3">
                      <path
                        d="M209 89.9999C216 77.3332 235.7 50.7999 258.5 45.9999C287 39.9999 303 41.9999 314 30.4999C325 18.9999 334 -3.50014 357 -3.50014C380 -3.50014 395 4.99986 408.5 -8.50014C422 -22.0001 418.5 -46.0001 452 -37.5001C478.8 -30.7001 515.167 -45 530 -53"
                        stroke="url(#paint3_linear_88:141)"
                      />
                      <path
                        d="M251 64.9999C258 52.3332 277.7 25.7999 300.5 20.9999C329 14.9999 345 16.9999 356 5.49986C367 -6.00014 376 -28.5001 399 -28.5001C422 -28.5001 437 -20.0001 450.5 -33.5001C464 -47.0001 460.5 -71.0001 494 -62.5001C520.8 -55.7001 557.167 -70 572 -78"
                        stroke="url(#paint4_linear_88:141)"
                      />
                      <path
                        d="M212 73.9999C219 61.3332 238.7 34.7999 261.5 29.9999C290 23.9999 306 25.9999 317 14.4999C328 2.99986 337 -19.5001 360 -19.5001C383 -19.5001 398 -11.0001 411.5 -24.5001C425 -38.0001 421.5 -62.0001 455 -53.5001C481.8 -46.7001 518.167 -61 533 -69"
                        stroke="url(#paint5_linear_88:141)"
                      />
                      <path
                        d="M249 40.9999C256 28.3332 275.7 1.79986 298.5 -3.00014C327 -9.00014 343 -7.00014 354 -18.5001C365 -30.0001 374 -52.5001 397 -52.5001C420 -52.5001 435 -44.0001 448.5 -57.5001C462 -71.0001 458.5 -95.0001 492 -86.5001C518.8 -79.7001 555.167 -94 570 -102"
                        stroke="url(#paint6_linear_88:141)"
                      />
                    </g>
                  </g>
                  <defs>
                    <linearGradient
                      id="paint0_linear_88:141"
                      x1="13.4497"
                      y1="63.5059"
                      x2="81.144"
                      y2="41.5072"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="white" />
                      <stop offset="1" stop-color="white" stop-opacity="0" />
                    </linearGradient>
                    <linearGradient
                      id="paint1_linear_88:141"
                      x1="28.1579"
                      y1="501.301"
                      x2="8.69936"
                      y2="464.391"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="white" />
                      <stop offset="1" stop-color="white" stop-opacity="0" />
                    </linearGradient>
                    <linearGradient
                      id="paint2_linear_88:141"
                      x1="338"
                      y1="167"
                      x2="349.488"
                      y2="200.004"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="white" />
                      <stop offset="1" stop-color="white" stop-opacity="0" />
                    </linearGradient>
                    <linearGradient
                      id="paint3_linear_88:141"
                      x1="369.5"
                      y1="-53"
                      x2="369.5"
                      y2="89.9999"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="white" />
                      <stop offset="1" stop-color="white" stop-opacity="0" />
                    </linearGradient>
                    <linearGradient
                      id="paint4_linear_88:141"
                      x1="411.5"
                      y1="-78"
                      x2="411.5"
                      y2="64.9999"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="white" />
                      <stop offset="1" stop-color="white" stop-opacity="0" />
                    </linearGradient>
                    <linearGradient
                      id="paint5_linear_88:141"
                      x1="372.5"
                      y1="-69"
                      x2="372.5"
                      y2="73.9999"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="white" />
                      <stop offset="1" stop-color="white" stop-opacity="0" />
                    </linearGradient>
                    <linearGradient
                      id="paint6_linear_88:141"
                      x1="409.5"
                      y1="-102"
                      x2="409.5"
                      y2="40.9999"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="white" />
                      <stop offset="1" stop-color="white" stop-opacity="0" />
                    </linearGradient>
                  </defs>
                </svg>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Support;
