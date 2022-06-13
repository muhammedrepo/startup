import React from "react";

import { TopSection, Blog } from "../../components";
import { ScrollToTop } from "../../constants";

import items from "../../constants/blogData";

const BlogGrid = () => {
  return (
    <>
      <ScrollToTop />

      <TopSection title="Blog Page" subtitle="Blog page" />
      <section className="py-[120px]">
        <div className="container mx-auto px-4">
          <Blog items={items} />
          <div className="flex flex-wrap -mx-4">
            <div className="w-full px-4">
              <ul className="flex items-center pt-8 justify-center">
                <li className="mx-1">
                  <a
                    href="/"
                    className="
                    flex
                    items-center
                    justify-center
                    rounded-md
                   
                    bg-[#959cb1]
                    bg-opacity-[15%]
                    hover:bg-[#4a6cf7] hover:bg-opacity-100
                    a1p
                    hover:text-white
                    text-[#959cb1] px-4 text-sm min-w-[36px] h-8
                  "
                  >
                    Prev
                  </a>
                </li>
                <li className="mx-1">
                  <a
                    href="/"
                    className="
                    flex
                    items-center
                    justify-center
                    rounded-md
                    bg-[#959cb1]
                    bg-opacity-[15%]
                     hover:bg-[#4a6cf7] hover:bg-opacity-100
                    a1p
                    hover:aI
                    text-[#959cb1] px-4 text-sm min-w-[36px] h-8
                  "
                  >
                    1
                  </a>
                </li>
                <li className="mx-1">
                  <a
                    href="/"
                    className="
                    flex
                    items-center
                    justify-center
                    rounded-md
                    bg-[rgba(149,156,177,var(--tw-bg-opacity))]
                    bg-opacity-[15%]
                     hover:bg-[#4a6cf7] hover:bg-opacity-100
                    a1p
                    hover:aI
                    text-[#959cb1] px-4 text-sm min-w-[36px] h-8
                  "
                  >
                    2
                  </a>
                </li>
                <li className="mx-1">
                  <a
                    href="/"
                    className="
                    flex
                    items-center
                    justify-center
                    rounded-md
                    bg-[#959cb1]
                    bg-opacity-[15%]
                     hover:bg-[#4a6cf7] hover:bg-opacity-100
                    a1p
                    hover:aI
                    text-[#959cb1] px-4 text-sm min-w-[36px] h-8
                  "
                  >
                    3
                  </a>
                </li>
                <li className="mx-1">
                  <a
                    href="/"
                    className="
                    flex
                    items-center
                    justify-center
                    rounded-md
                    bg-[#959cb1]
                    bg-opacity-[15%]
                    text-[#959cb1]
                    px-4
                    text-sm
                    min-w-[36px]
                    h-8
                    a3i
                  "
                  >
                    ...
                  </a>
                </li>
                <li className="mx-1">
                  <a
                    href="/"
                    className="
                    flex
                    items-center
                    justify-center
                    rounded-md
                    bg-[#959cb1]
                    bg-opacity-[15%]
                     hover:bg-[#4a6cf7] hover:bg-opacity-100
                    a1p
                    hover:aI
                    text-[#959cb1] px-4 text-sm min-w-[36px] h-8
                  "
                  >
                    12
                  </a>
                </li>
                <li className="mx-1">
                  <a
                    href="/"
                    className="
                    flex
                    items-center
                    justify-center
                    rounded-md
                    bg-[#959cb1]
                    bg-opacity-[15%]
                    hover:bg-[#4a6cf7] hover:bg-opacity-100
                    a1p
                    hover:aI
                    text-[#959cb1] px-4 text-sm min-w-[36px] h-8
                  "
                  >
                    Next
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogGrid;
