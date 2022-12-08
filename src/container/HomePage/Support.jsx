import { FormRow, Subscribe } from "../../components";

const Support = () => {
  return (
    <section id="support" className="pt-[120px] pb-20">
      <div className="container mx-auto px-4">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4 lg:w-2/3">
            <div
              className="bg-dark-blue mb-12 rounded-md p-11 sm:p-[55px]
                  lg:mb-5 lg:p-11 xl:p-[55px]"
            >
              <h2 className="mb-3 text-2xl font-bold sm:text-3xl lg:text-2xl xl:text-3xl">
                Need Help? Open a Ticket
              </h2>
              <p className="mb-12 text-base font-medium">
                Our support team will get back to you ASAP via email.
              </p>
              <form>
                <div className="-mx-4 flex flex-wrap">
                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-8">
                      <FormRow
                        type="text"
                        name="Your Name"
                        placeholder="Enter your name"
                      />
                    </div>
                  </div>
                  <div className="w-full px-4 md:w-1/2">
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
                        className="text-gray focus:border-main-bg w-full
                            resize-none rounded-md
                            border border-transparent bg-[rgba(36,43,81,1)] px-6
                            py-3 text-base outline
                            outline-2 outline-offset-2 outline-transparent focus:border-opacity-100 focus-visible:shadow-sm
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
          <div className="w-full px-4 lg:w-1/3">
            <Subscribe />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Support;
