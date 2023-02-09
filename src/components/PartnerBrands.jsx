import { b1, b2, b3, b4, b5 } from '../images';

const brandImage = [b1, b2, b3, b4, b5];

const renderedBrands = brandImage.map((brand, index) => (
  <a
    key={index}
    href="#home"
    className="xl:border-main-bg/10 mx-3 flex items-center justify-center
    py-4 opacity-60 grayscale transition duration-150 hover:opacity-100
    hover:grayscale-0 sm:mb-3 lg:max-w-[130px] xl:max-w-[150px]
    2xl:max-w-[160px] 2xl:opacity-60
  "
  >
    <img src={brand} alt="" />
  </a>
));

const PartnerBrands = () => {
  return (
    <section className="pt-16">
      <div className="container mx-auto px-4">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div
              className="bg-main-bg/5 
                flex flex-wrap items-center justify-center rounded-md py-8 px-8 sm:px-10 md:py-[40px] md:px-[50px]
                xl:p-[50px] 2xl:py-[60px] 2xl:px-[70px]"
            >
              {renderedBrands}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnerBrands;
