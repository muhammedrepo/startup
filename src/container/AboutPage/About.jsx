import { ab1, ab2, mark } from "../../images";
import { items, lists } from "./data";

const About = () => {
  return (
    <>
      <section id="about" className="pt-[120px]">
        <div className="container">
          <div
            className="
              mr-5 border-b border-opacity-[.15] pb-[100px]
            "
          >
            <div className="mx-4 flex flex-wrap items-center">
              <div className="w-full px-4 lg:w-1/2">
                <div className="mb-12 max-w-[570px] lg:mb-0">
                  <h2
                    className="
                       mb-6
                      text-3xl font-bold
                      sm:text-4xl md:text-4xl lg:text-2xl xl:text-4xl
                    "
                  >
                    Crafted for Startup, SaaS and Business Sites.
                  </h2>
                  <p className="mb-11 text-base font-medium sm:text-lg">
                    The main ‘thrust’ is to focus on educating attendees on how
                    to best protect highly vulnerable business applications with
                    interactive panel discussions and roundtables.
                  </p>
                  <div className="-mx-3 flex flex-wrap">
                    {lists.map((list, index) => (
                      <p
                        key={index}
                        className="mb-5 flex w-full items-center
                        px-3 text-lg font-medium sm:w-1/2 lg:w-full xl:w-1/2
                        "
                      >
                        <span
                          className="bg-main-bg/10 text-main-bg/100 mr-4 flex
                      h-7 w-7 flex-wrap  items-center justify-center rounded-md"
                        >
                          <img src={mark} alt="mark" />
                        </span>
                        {list}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
              <div className="w-full px-4 lg:w-1/2">
                <div className="text-center lg:text-right">
                  <img
                    src={ab1}
                    alt="aboutImage"
                    className="mx-auto max-w-full lg:mr-0"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pt-[100px] pb-[120px]">
        <div className="container">
          <div className="-mx-4 flex flex-wrap items-center">
            <div className="w-full px-4 lg:w-1/2">
              <div className=" mb-12 text-center lg:mb-0 lg:text-left">
                <img
                  src={ab2}
                  alt="aboutImage2"
                  className="mx-auto max-w-full lg:ml-0"
                />
              </div>
            </div>
            <div className="w-full px-4 lg:w-1/2">
              <div className="max-w-[470px]">
                {items.map((item) => (
                  <div key={item.id} className="mb-9">
                    <h3 className="mb-4 text-xl font-bold sm:text-2xl xl:text-2xl">
                      {item.title}
                    </h3>
                    <p className=" text-base font-medium sm:text-lg">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
