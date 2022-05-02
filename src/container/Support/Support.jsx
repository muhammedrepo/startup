import React from "react";
import { FormRow, Subscribe } from "../../components";

const Support = () => {
  return (
    <section id="support" className="pt-[120px] pb-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap -mx-4">
          <div className="w-full lg:w-2/3 px-4">
            <div
              className="
              
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
                    font-bold 
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
                      <FormRow
                        type="text"
                        name="Your Name"
                        placeholder="Enter your name"
                      />
                    </div>
                  </div>
                  <div className="w-full md:w-1/2 px-4">
                    <div className="mb-8">
                      <FormRow
                        type="email"
                        name="Your Email"
                        placeholder="Enter your email"
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
                            bg-opacity-100
                          bg-[rgba(36,43,81,var(--tw-bg-opacity))]
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
            <Subscribe />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Support;
