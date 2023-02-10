import { SectionTitle } from '../../components';
import { testimonialsData } from '../../constants';
import { ReactComponent as TestimonialOne } from '../../images/svg/reviewOne.svg';
import { ReactComponent as TestimonialTwo } from '../../images/svg/reviewTwo.svg';
import TestimonialItem from './TestimonialItem';

const Testimonials = () => {
  const renderedData = testimonialsData.map((item, index) => (
    <TestimonialItem key={index} item={item} />
  ));

  return (
    <section className="bg-main-bg/[3%] relative z-10 pt-[120px] pb-20">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="What Our Users Says"
          desc="There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some form."
        />
        <div className="-mx-4 flex flex-wrap">{renderedData}</div>
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

export default Testimonials;
