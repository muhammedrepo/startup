import { star } from '../../images';

const stars = [star, star, star, star, star];

const TestimonialItem = ({ item }) => {
  const renderedStars = stars.map((star, index) => (
    <span key={index} className="mr-1 block text-[rgba(251,176,64,1)]">
      <img src={star} alt="" />
    </span>
  ));

  return (
    <div className="w-full px-4 md:w-1/2 lg:w-1/3">
      <div className="bg-dark-blue mb-8 rounded-md p-8 lg:px-5 xl:px-8">
        <div className="mb-5 flex items-center">{renderedStars}</div>
        <p className="border-gray/20 mr-5 mb-8 border-b-2 pb-8 text-base text-white/100">
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
export default TestimonialItem;
