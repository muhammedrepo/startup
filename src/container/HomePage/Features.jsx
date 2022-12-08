import { SectionTitle } from "../../components";
import { features } from "../../constants/featuresData";

const Features = () => {
  return (
    <>
      <section id="features" className="flex-wrap pt-[120px] pb-[50px]">
        <div className="container mx-auto px-4">
          <SectionTitle
            title="Main Features"
            desc="There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some form."
          />
          <div className="-mx-4 flex flex-wrap">
            {features.map((feature) => (
              <FeatureItem key={feature.id} feature={feature} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

function FeatureItem({ feature }) {
  return (
    <div className="w-full px-4 md:w-1/2 lg:w-1/3" key={feature.id}>
      <div className="mb-[70px]">
        <div
          className="bg-main-bg/10 mb-10 flex h-[70px] w-[70px]
                    items-center  justify-center rounded-md
                  "
        >
          <img src={feature.icon} alt="" className="fill-current" />
        </div>
        <h3
          className="mb-5 list-disc text-xl font-bold text-white/100
                    sm:text-2xl lg:text-xl xl:text-2xl"
        >
          {feature.name}
        </h3>
        <p className="block pr-2.5 font-medium">{feature.description}</p>
      </div>
    </div>
  );
}

export default Features;
