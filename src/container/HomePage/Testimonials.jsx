import React from "react";
import { SectionTitle } from "../../components";
import { images } from "../../constants";
import { testimonialsData } from "../../constants/testimonialsData";
import { ReactComponent as TestimonialOne } from "../../images/svg/reviewOne.svg";
import { ReactComponent as TestimonialTwo } from "../../images/svg/reviewTwo.svg";

const stars = [images.star, images.star, images.star, images.star, images.star];

const Testimonials = () => {
  return (
    <section className="relative z-10 bg-blue-500 bg-opacity-[3%] pt-[120px] pb-20">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="What Our Users Says"
          desc="There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some form."
        />
        <div className="-mx-4 flex flex-wrap">
          {testimonialsData.map((item, index) => (
            <TestimonialItem key={index} item={item} />
          ))}
        </div>
      </div>
      <div className="absolute top-5 right-0 -z-[1]">
        <TestimonialOne />
      </div>
      <div className="absolute left-0 bottom-5 -z-[1]">
        <TestimonialTwo />
      </div>
    </section>
  );
};

const TestimonialItem = ({ item }) => {
  return (
    <div className="w-full px-4 md:w-1/2 lg:w-1/3">
      <div className="mb-8 rounded-md bg-[rgba(29,33,68,1)] p-8 lg:px-5 xl:px-8">
        <div className="mb-5 flex items-center">
          {stars.map((star, index) => (
            <span key={index} className="mr-1 block text-[rgba(251,176,64,1)]">
              <img src={star} alt="" />
            </span>
          ))}
        </div>
        <p className="mr-5 mb-8 border-b-2 border-gray-400/10 pb-8 text-base text-white/100">
          {item.description}
        </p>
        <div className="flex items-center">
          <div className="mr-4 h-[50px] w-full max-w-[50px] overflow-hidden rounded-full">
            <img src={item.pic} alt="profile" />
          </div>
          <div className="w-full">
            <h5 className="mb-1 text-lg font-semibold lg:text-base xl:text-lg">
              {item.name}
            </h5>
            <p className="text-sm">{item.job}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Testimonials;