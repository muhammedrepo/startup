import React from "react";
import { SectionTitle } from "../../components";
import { brandImage } from "../../constants/brandImage";

const VidSection = () => {
  return (
    <>
      <section className="ad a1H aq[120px]">
        <div className="container mx-auto px-4">
          <SectionTitle
            title="We are ready to help"
            desc="There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some form."
          />
          <div className="a8 a1K ab[-16px]">
            <div className="a7 ae">
              <div
                className="
                a1L aB[770px] a13 a2p
                wow
                fadeInUp
              "
                data-wow-delay=".15s"
              >
                <div className="ad a9 a1x">
                  <img
                    src="images/video/video.jpg"
                    alt="video image"
                    className="a7 a2Q a2R a2S"
                  />
                  <div
                    className="
                    a3
                    a7
                    a2Q
                    a4
                    a_
                    a8
                    a9
                    a1x
                  "
                  >
                    <a
                      href="javascript:void(0)"
                      className="
                      glightbox
                      as[70px]
                      at[70px]
                      a1w
                      a8
                      a9
                      a1x
                      aw
                      a3J
                      a1W
                      hover:a31
                      a1p
                    "
                    >
                      <svg
                        width="16"
                        height="18"
                        viewBox="0 0 16 18"
                        className="a26"
                      >
                        <path d="M15.5 8.13397C16.1667 8.51888 16.1667 9.48112 15.5 9.86602L2 17.6603C1.33333 18.0452 0.499999 17.564 0.499999 16.7942L0.5 1.20577C0.5 0.43597 1.33333 -0.0451549 2 0.339745L15.5 8.13397Z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="a3 a1X a5 a_ a1Y[-1]">
          <img src="images/video/shape.svg" alt="shape" className="a7" />
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
                  xl:border-[rgba(74,108,2470.1)]
                  2xl:aO
                  aq[15px] a3Q
                  hover:a3R
                  aJ
                  hover:a17
                  dark:a3S dark:hover:a17
                  a1p
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
