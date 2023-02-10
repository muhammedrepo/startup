import { SectionTitle } from '../../components';
import { ReactComponent as PricingBG } from '../../images/svg/pricingBG.svg';
import PricingCards from './PricingCards';

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
                className="monthly mr-4 cursor-pointer text-base font-semibold
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
                      clip: 'rect(0,0,0,0)',
                      whiteSpace: 'nowrap',
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
        <PricingCards />
      </div>

      <div className="absolute left-0 bottom-0 -z-[1]">
        <PricingBG />
      </div>
    </section>
  );
};

export default Pricing;
