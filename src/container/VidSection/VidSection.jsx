import React from "react";
import { SectionTitle } from "../../components";
import { images } from "../../constants";
import { brandImage } from "../../constants/brandImage";

const VidSection = () => {
  return (
    <>
      <section className="relative z-10 py-[120px]">
        <div className="container mx-auto px-4">
          <SectionTitle
            title="We are ready to help"
            desc="There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some form."
          />
          <div className="flex flex-wrap -mx-4 bg-[rgba(74,108,247,0.01)]">
            <div className="w-full px-4">
              <div
                className="
                mx-auto max-w-[770px] overflow-hidden rounded-md"
              >
                <div className="relative items-center justify-center">
                  <img
                    src={images.vidPic}
                    alt="videoPic"
                    className="w-full h-full object-cover object-center"
                  />
                  <div
                    className="
                    absolute
                    w-full
                    h-full
                    top-0
                    right-0
                    flex
                    items-center
                    justify-center
                  "
                  >
                    <a
                      href={`${images.video}`}
                      className="
                      glightbox
                      w-[70px]
                      h-[70px]
                      rounded-full
                      flex
                      items-center
                      justify-center
                      opacity-100 bg-[rgba(255,255,255,.75)]
                      z-50
                      text-[rgba(74,108,247,1)]
                      hover:a31
                      transition-all
                    "
                    >
                      <img src={images.play} alt="" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 -z-10">
          <img src={images.shape} alt="shape" className="w-full" />
        </div>
      </section>
      <section className="a3K">
        <div className="container mx-auto px-4">
          <div className="a8 a1K ab[-16px]">
            <div className="a7 ae">
              <div
                className="
                bg-[rgba(29,33,68,0.1)]
                dark:a1k dark:a1Z
                rounded-md
                flex
                flex-wrap
                items-center
                justify-center
                py-8
                px-8
                sm:px-10
                md:py-[40px] md:px-[50px]
                xl:p-[50px]
                2xl:py-[60px] 2xl:px-[70px]
                
              "
              >
                {brandImage.map((brand, index) => (
                  <a
                    key={index}
                    href="#home"
                    target="_blank"
                    rel="nofollow noreferrer"
                    className="
                  flex items-center justify-center
                  lg:max-w-[130px]
                  xl:max-w-[150px]
                  2xl:max-w-[160px]
                  mx-3
                  sm:mb-3
                  opacity-100
                  xl:border-[rgba(74,108,247,.1)]
                  2xl:opacity-60
                  py-[15px] grayscale
                  hover:grayscale-0
                  opacity-70
                  hover:opacity-10                  
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
    </>
  );
};

export default VidSection;
