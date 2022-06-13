import React from "react";
import { images } from "../../constants";

const About = () => {
  return (
    <>
      <section id="about" className="pt-[120px]">
        <div className="container mx-auto px-4">
          <div
            className="
              pb-[100px] border-b mr-5 border-opacity-[.15]
            "
          >
            <div className="flex flex-wrap items-center mx-4">
              <div className="w-full lg:w-1/2 px-4">
                <div className="mb-12 lg:mb-0 max-w-[570px]">
                  <h2
                    className="
                      text-opacity-100 text-[rgba(255,255,255,var(--tw-text-opacity))]
                      font-bold
                      text-3xl
                      sm:text-4xl
                      md:text-4xl
                      lg:text-2xl
                      xl:text-4xl
                      mb-6
                    "
                  >
                    Crafted for Startup, SaaS and Business Sites.
                  </h2>
                  <p
                    className="
                      font-medium text-opacity-100 text-[rgba(149,156,177,var(--tw-text-opacity))] text-base
                      sm:text-lg
                      leading-7
                      sm:leading-7
                      mb-11
                    "
                  >
                    The main ‘thrust’ is to focus on educating attendees on how
                    to best protect highly vulnerable business applications with
                    interactive panel discussions and roundtables.
                  </p>
                  <div className="flex flex-wrap -mx-3">
                    <div
                      className="
                        w-full
                        sm:w-1/2
                        lg:w-full
                        xl:w-1/2
                        px-3
                      "
                    >
                      <p
                        className="
                          about-lists
                        "
                      >
                        <span className="mark-svg">
                          <img src={images.mark} alt="mark" />
                        </span>
                        Premium quality
                      </p>
                      <p
                        className="
                          about-lists
                        "
                      >
                        <span
                          className="mark-svg
                          "
                        >
                          <img src={images.mark} alt="mark" />
                        </span>
                        No code required
                      </p>
                      <p
                        className="
                          about-lists
                        "
                      >
                        <span
                          className="mark-svg
                          "
                        >
                          <img src={images.mark} alt="mark" />
                        </span>
                        Use for lifetime
                      </p>
                    </div>
                    <div
                      className="
                        w-full
                        sm:w-1/2
                        lg:w-full
                        xl:w-1/2
                        px-3
                      "
                    >
                      <p
                        className="
                          about-lists
                        "
                      >
                        <span
                          className="mark-svg
                          "
                        >
                          <img src={images.mark} alt="mark" />
                        </span>
                        Regular updates
                      </p>
                      <p
                        className="
                          about-lists
                        "
                      >
                        <span
                          className="mark-svg
                          "
                        >
                          <img src={images.mark} alt="mark" />
                        </span>
                        Rich documentation
                      </p>
                      <p className="about-lists">
                        <span className="mark-svg">
                          <img src={images.mark} alt="mark" />
                        </span>
                        Developer friendly
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full lg:w-1/2 px-4">
                <div className="text-center lg:text-right">
                  <img
                    src={images.ab1}
                    alt="aboutImage"
                    className="max-w-full mx-auto lg:mr-0"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pt-[100px] pb-[120px]">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center -mx-4">
            <div className="w-full lg:w-1/2 px-4">
              <div
                className="
                text-center
                lg:text-left
                mb-12
                lg:mb-0
              "
              >
                <img
                  src={images.ab2}
                  alt="aboutImage2"
                  className="max-w-full mx-auto lg:ml-0"
                />
              </div>
            </div>
            <div className="w-full lg:w-1/2 px-4">
              <div className="max-w-[470px]">
                <div className="mb-9">
                  <h3
                    className="about-list-b
                  "
                  >
                    Bug free code
                  </h3>
                  <p
                    className="about-list-p
                  "
                  >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                </div>
                <div className="mb-9">
                  <h3
                    className="about-list-b
                  "
                  >
                    Premier support
                  </h3>
                  <p
                    className="about-list-p
                  "
                  >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt.
                  </p>
                </div>
                <div className="mb-1">
                  <h3
                    className="about-list-b
                  "
                  >
                    Regular updates
                  </h3>
                  <p
                    className="about-list-p
                  "
                  >
                    Lorem ipsum dolor sit amet, sed do eiusmod tempor incididunt
                    consectetur adipiscing elit setim.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
