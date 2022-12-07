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
        <div className="flex flex-wrap -mx-4">
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
                    absolute w-full h-full top-0
                    right-0 flex items-center justify-center
                  "
                >
                  <a
                    href={`${images.video}`}
                    className="
                      glightbox
                      w-[70px] h-[70px]
                      rounded-full flex items-center justify-center
                      bg-opacity-75 bg-white text-blue-500/100
                      hover:bg-opacity-100 transition-all
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
