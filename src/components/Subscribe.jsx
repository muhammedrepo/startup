import { FormRow } from "../components";
import { ReactComponent as SubscribeImage } from "../images/subscribe/file.svg";
const Subscribe = () => {
  return (
    <div
      className="bg-main-bg/[3%] relative z-10 mb-5 rounded-md p-8 sm:p-11
                  lg:p-8 xl:p-11"
    >
      <h3 className="mb-4 text-2xl font-bold">
        Subscribe to receive future updates
      </h3>
      <p className="mb-11 border-b border-white/25 pb-11 text-base font-medium">
        Lorem ipsum dolor sited Sed ullam corper consectur adipiscing Mae ornare
        massa quis lectus.
      </p>
      <form>
        <div className="mb-4">
          <FormRow type="text" placeholder="Enter your name" />
        </div>

        <div className="mb-4">
          <FormRow type="email" placeholder="Enter your email" />
        </div>
        <input
          type="submit"
          value="Subscribe"
          className="subscribe-btn w-full"
        />
        <p className="text-center text-base font-medium">
          No spam guaranteed, So please don’t send any spam mail.
        </p>
      </form>
      <div className="absolute top-0 left-0 -z-[1]">
        <SubscribeImage />
      </div>
    </div>
  );
};

export default Subscribe;
