import React from "react";
import { SectionTitle } from "../../components";
import { images } from "../../constants";

const VidSection = () => {
  return (
    <section className="relative z-10 py-[120px]">
      <div className="container">
        <SectionTitle
          title="We are ready to help"
          desc="There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some form."
        />
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div
              className="
                mx-auto max-w-[770px] overflow-hidden rounded-md"
            >
              <div className="relative items-center justify-center">
                <img
                  src={images.vidPic}
                  alt="videoPic"
                  className="h-full w-full object-cover object-center"
                />
                <div
                  className="
                    absolute top-0 right-0 flex
                    h-full w-full items-center justify-center
                  "
                >
                  <a
                    href={`${images.video}`}
                    className="
                      text-main-bg flex
                      h-[70px] w-[70px] items-center justify-center
                      rounded-full bg-white/75
                      transition-all hover:bg-white/100
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
  );
};

export default VidSection;
