import { pricingData } from '../../constants/pricingData';
import { ReactComponent as CardImage } from '../../images/svg/pricingCard.svg';
import { ReactComponent as MarkIcon } from '../../images/svg/mark.svg';

const PricingCards = () => {
  const renderedData = pricingData.map((item) => (
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
  ));

  return <div className="-mx-4 flex flex-wrap">{renderedData}</div>;
};
export default PricingCards;
