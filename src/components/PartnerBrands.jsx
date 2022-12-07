import { brandImage } from "../constants/brandImage";
const PartnerBrands = () => {
  return (
    <section className="pt-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap -mx-4">
          <div className="w-full px-4">
            <div
              className="bg-blue-500/5 
                rounded-md flex flex-wrap
                items-center justify-center py-8 px-8
                sm:px-10 md:py-[40px] md:px-[50px]
                xl:p-[50px] 2xl:py-[60px] 2xl:px-[70px]"
            >
              {brandImage.map((brand, index) => (
                <a
                  key={index}
                  href="#home"
                  target="_blank"
                  rel="nofollow noreferrer"
                  className="
                  flex items-center justify-center
                  lg:max-w-[130px] xl:max-w-[150px]
                  2xl:max-w-[160px]
                  mx-3 sm:mb-3  xl:border-[rgba(74,108,247,.1)]
                  2xl:opacity-60 py-4 grayscale
                  hover:grayscale-0  hover:opacity-10                  
                  dark:opacity-60 dark:hover:opacity-100
                  transition duration-150
                  
                "
                >
                  <img src={brand.img} alt="" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnerBrands;
