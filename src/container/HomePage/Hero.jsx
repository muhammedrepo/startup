import { Link } from "react-router-dom";
import { ReactComponent as HeroSvgOne } from "../../images/svg/hero1.svg";
import { ReactComponent as HeroSvgTwo } from "../../images/svg/hero2.svg";

const Hero = () => {
  return (
    <div id="home">
      <div className="relative z-10 pt-[120px] pb-[110px] md:pt-[150px] md:pb-[120px] xl:pt-[180px] xl:pb-[160px] 2xl:pt-[210px]">
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div className="mx-auto flex max-w-[570px]  flex-col items-center justify-center">
                <h1 className="mb-5 text-center text-3xl font-bold sm:text-4xl md:text-5xl xl:text-5xl">
                  Startup Focused Multipurpose Template
                </h1>
                <p
                  className="mb-12 max-w-[540px] text-center text-xl font-medium text-white/100 
    md:text-xl"
                >
                  Tuae nam ex similique incidunt expedita exerci tationem
                  laudantium. Repellendus quisquam numquam perferendis earum
                  sapiente non tempore!
                </p>
                <ul className="flex items-center justify-center">
                  <li>
                    <Link to="sign-up" className="hero-btn mx-2 py-4">
                      Get Started
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="sign-up"
                      className="hero-btn mx-2 border-white/10 bg-white/10 py-4 hover:bg-white/20"
                    >
                      Learn More
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="hidden px-4 lg:block lg:w-1/12"></div>
          </div>
        </div>
        <div class="absolute top-0 right-0 -z-[1]">
          <HeroSvgOne />
        </div>
        <div class="absolute bottom-0 left-0 -z-[1]">
          <HeroSvgTwo />
        </div>
      </div>
    </div>
  );
};

export default Hero;
