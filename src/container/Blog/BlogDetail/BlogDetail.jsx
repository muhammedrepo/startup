import { socialIcon } from "../../../constants";
import { ReactComponent as BlogSidebarImage } from "../../../images/blogSidebar/blogSidebar.svg";
import { ReactComponent as BlogSidebarImage2 } from "../../../images/blogSidebar/blogSidebar.svg";
import { Tags } from "../../../components";
import items from "../../../components/Tags/tagLists";
import { Link } from "react-router-dom";
import { BlogReport } from "../components";
import { author2, blogDetail } from "../../../images";

const lists = [
  "Consectetur adipiscing elit in voluptate velit.",

  "Mattis vulputate cupidatat.",

  "Vulputate enim nulla aliquet porttitor odio pellentesque",

  "Ligula ullamcorper malesuada proin",
];

export const BlogDetail = () => {
  const listToDisplay = socialIcon.slice(0, 3);
  const tagToDisplay = items.slice(0, 3);
  return (
    <div className="w-full px-4 lg:w-2/3">
      <div>
        <h2 className="mb-8 text-3xl font-bold sm:text-4xl">
          10 amazing sites to download stock photos & digital assets for free
        </h2>
        <div
          className="mb-10 flex flex-wrap items-center justify-between border-b
                    border-white/10 pb-4
                  "
        >
          <div className="flex flex-wrap items-center">
            <div className="mr-10 mb-5 flex items-center">
              <div
                className="
                          mr-4
                          h-[40px]
                          w-full
                          max-w-[40px]
                          overflow-hidden
                          rounded-full
                        "
              >
                <img src={author2} alt="author" className="w-full" />
              </div>
              <div className="w-full">
                <h4 className="text-gray mb-1 text-base font-medium">
                  By
                  <a href="#home" className="text-gray hover:text-main-bg ml-1">
                    Musharof Chy
                  </a>
                </h4>
              </div>
            </div>
            <BlogReport />
          </div>
          <div className="mb-5">
            <span
              className="
                        bg-main-bg
                        inline-flex
                        items-center
                        justify-center
                        overflow-hidden
                        rounded-full
                        py-2
                        px-4
                        text-sm
                        text-white
                      "
            >
              Design
            </span>
          </div>
        </div>
        <div>
          <p
            className="mb-10 text-base
                      font-medium
                      sm:text-lg
                      lg:text-base
                       xl:text-lg
                    "
          >
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occpx-4cat
            cupidatat.
          </p>
          <div className="mb-10 w-full overflow-hidden rounded">
            <img
              src={blogDetail}
              alt="blogDetail"
              className="h-full w-full object-cover object-center"
            />
          </div>
          <p
            className=" mb-8 text-base
                      font-medium
                      sm:text-lg
                      lg:text-base
                       xl:text-lg
                    "
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
            enim lobortis scelerisque fermentum. Neque sodales ut etiam sit
            amet. Ligula ullamcorper
            <strong className="text-white"> malesuada </strong>
            proin libero nunc consequat interdum varius. Quam pellentesque nec
            nam aliquam sem et tortor consequat. Pellentesque adipiscing commodo
            elit at imperdiet.
          </p>
          <p className="mb-10 text-base font-medium sm:text-lg lg:text-base xl:text-lg">
            Semper auctor neque vitpx-4 tempus quam pellentesque nec.
            <span className="text-white underline">
              {" "}
              Amet dictum sit amet justo{" "}
            </span>
            donec enim diam. Varius sit amet mattis vulputate enim nulla aliquet
            porttitor. Odio pellentesque diam volutpat commodo sed.
          </p>
          <h3 className="lg:a27 mb-10 font-bold sm:text-2xl xl:text-2xl">
            Digital marketplace for Ui/Ux designers.
          </h3>
          <p className="mb-10 text-base font-medium sm:text-lg lg:text-base xl:text-lg">
            consectetur adipiscing elit in voluptate velit esse cillum dolore eu
            fugiat nulla pariatur. Excepteur sint occpx-4cat mattis vulputate
            cupidatat.
          </p>
          <ul className=" text-gray mb-10 list-inside list-disc">
            {lists.map((list, index) => (
              <li
                key={index}
                className="mb-2 text-base font-medium sm:text-lg lg:text-base xl:text-lg"
              >
                {list}
              </li>
            ))}
          </ul>
          <div
            className=" bg-main-bg/10 relative z-10  mb-10 flex-wrap overflow-hidden
                      rounded-md p-8 md:p-9 lg:p-8 xl:p-9"
          >
            <p className="text-center text-base font-medium italic">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod incididunt utionals labore et dolore magna aliqua. Quis
              lobortis scelerisque fermentum, The Neque ut etiam sit amet.
            </p>
            <span className="absolute left-0 top-0 -z-[1]">
              <BlogSidebarImage />
            </span>
            <span className="absolute right-0 bottom-0 -z-[1]">
              <BlogSidebarImage2 />
            </span>
          </div>
          <p
            className=" mb-10 text-base font-medium
                      sm:text-lg lg:text-base xl:text-lg"
          >
            consectetur adipiscing elit in voluptate velit esse cillum dolore eu
            fugiat nulla pariatur. Excepteur sint occpx-4cat mattis vulputate
            cupidatat.
          </p>
          <div className="items-center justify-between sm:flex">
            <div className="mb-5">
              <h5 className=" text-gray mb-3 text-sm font-medium">
                Popular Tags :
              </h5>

              <div className="flex items-center">
                <Tags items={tagToDisplay} />
              </div>
            </div>
            <div className="mb-5">
              <h5 className=" text-gray mb-3 text-sm font-medium sm:text-right">
                Share this post :
              </h5>
              <div className="flex items-center sm:justify-end">
                {listToDisplay.map((item, index) => (
                  <Link
                    key={index}
                    to={item.url}
                    className="bg-main-bg/10  hover:bg-main-bg/100 fill-gray mr-2
                    inline-flex items-center justify-center rounded-md
                        px-4 py-2 hover:fill-white sm:ml-3"
                  >
                    {item.icon}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
