import { SectionTitle } from "../../components";
import { pricingData } from "../../constants/pricingData";
import { ReactComponent as CardImage } from "../../images/svg/pricingCard.svg";
import { ReactComponent as MarkIcon } from "../../images/svg/mark.svg";
import { ReactComponent as PricingBG } from "../../images/svg/pricingBG.svg";
const Pricing = () => {
  return (
    <section id="pricing" className="relative z-10 pt-[120px] pb-20">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="Simple and Affordable Pricing"
          desc="There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some form."
        />
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="mb-16 flex justify-center">
              <span
                className="a1hv monthly mr-4 cursor-pointer text-base font-semibold
                    text-white"
              >
                Monthly
              </span>
              <label
                for="togglePlan"
                className="flex cursor-pointer items-center"
              >
                <div className="relative">
                  <input
                    id="togglePlan"
                    type="checkbox"
                    className="absolute -m-[1px] h-[1px] w-[1px] overflow-hidden p-0"
                    style={{
                      clip: "rect(0,0,0,0)",
                      whiteSpace: "nowrap",
                      borderWidth: 0,
                    }}
                  />
                  <div className="bg-dark-blue h-5 w-[3.5rem] rounded-full shadow-sm"></div>
                  <div className="bg-main-bg absolute left-0 -top-1 flex h-7 w-7 items-center justify-center rounded-full">
                    <span className="active h-4 w-4 rounded-full bg-white"></span>
                  </div>
                </div>
              </label>
              <span
                className="yearly ml-4 cursor-pointer text-base font-semibold
                    text-white"
              >
                Yearly
              </span>
            </div>
          </div>
        </div>

        {/* Pricing Card */}
        <div className="-mx-4 flex flex-wrap">
          {pricingData.map((item) => (
            <div className="w-full px-4 md:w-1/2 lg:w-1/3" key={item.id}>
              <div
                className="aw a1n bg-dark-blue relative z-10
                  mb-10 rounded-md px-8 py-10"
              >
                <div className="flex items-center justify-between">
                  <h3 className="price mb-2 text-3xl font-bold">
                    $<span className="amount">{item.price}</span>
                    <span className="time text-gray ">/mo</span>
                  </h3>
                  <h4 className="mb-2 text-xl font-bold">{item.category}</h4>
                </div>
                <p className="mb-7 text-base">{item.desc}</p>
                <div className="border-gray/30 mb-8 border-b pb-8">
                  <a
                    href="#home"
                    className="price-btn flex w-full items-center justify-center"
                  >
                    Start Free Trial
                  </a>
                </div>

                <div>
                  {item.lists.map((list, index) => (
                    <div key={index} className="mb-3 flex items-center">
                      <span
                        className=" bg-main-bg/10 fill-main-bg mr-3 flex h-[18px]
                        w-full max-w-[18px] items-center justify-center
                        rounded-full
                        
                      "
                      >
                        <MarkIcon />
                      </span>
                      <p
                        className="
                        m-0 text-base font-medium
                      "
                      >
                        {list}
                      </p>
                    </div>
                  ))}
                </div>
                <div className="absolute bottom-0  right-0 -z-[1]">
                  <CardImage />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute left-0 bottom-0 -z-[1]">
        <PricingBG />
      </div>
    </section>
  );
};

export default Pricing;
