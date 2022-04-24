import React from "react";
import { SectionTitle } from "../../components";
import { features } from "../../constants/featuresData";

const Features = () => {
  return (
    <section id="features" className="flex-wrap pt-[120px] pb-[50px]">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="Main Features"
          desc="There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some form."
        />
        <div className="flex flex-wrap -mx-4">
          {features.map((feature, index) => (
            <div
              className="w-full md:w-[50%] lg:w-[33.333333%] px-4"
              key={index}
            >
              <div className="mb-[70px]">
                <div
                  className="
                    w-[70px]
                    h-[70px]
                    flex
                    items-center
                    justify-center
                    rounded-md
                    opacity-100
                    bg-[rgba(74,108,247,.1)]   
                    text-[rgba(74,108,247,.1)]
                    mb-10
                  "
                >
                  <img src={feature.icon} alt="" className="fill-current" />
                </div>
                <h3
                  className="
                    font-bold text-[rgba(255,255,255,1)]
                    dark:aI
                    text-xl
                    sm:text-2xl
                    lg:text-xl
                    xl:text-2xl
                    list-disc
                    mb-5
                  "
                >
                  {feature.name}
                </h3>
                <p
                  className="
                  text-[rgba(149,156,177,1)] 
                    block
                    leading-6
                    font-medium
                    pr-2.5
                  "
                >
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
