import React from "react";
import { SectionTitle } from "../../components";

import { blogData } from "../../constants/blogData";

const Blog = () => {
  return (
    <section id="blog" className="bg-primary bg-opacity-5 pt-[120px] pb-20">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="Our Latest Blogs"
          desc="There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some form."
        />
        <div className="flex flex-wrap -mx-4 justify-center">
          {/* Blog Begin */}

          {blogData.map((item, index) => (
            <div className="w-full md:w-2/3 lg:w-1/2 xl:w-1/3 px-4" key={index}>
              <div
                className="
                  ad aw
                  dark:bg-opacity-100 bg-[rgba(29,33,68,var(--tw-bg-opacity))]
                  a33 rounded-md overflow-hidden mb-10              
                "
              >
                <a href="#home" className="w-full block relative">
                  <span
                    className="
                      absolute
                      top-6
                      right-6
                      bg-opacity-100 bg-[rgba(74,108,247,var(--tw-bg-opacity))]
                      rounded-full
                      inline-flex
                      items-center
                      justify-center
                      py-2
                      px-4
                      font-semibold
                      text-sm
                      text-opacity-100 text-[rgba(255,255,255,var(--tw-text-opacity))]
                    "
                  >
                    {item.category}
                  </span>
                  <img src={item.blogImg} alt="blogImage" className="w-full" />
                </a>
                <div
                  className="
                    p-6
                    sm:p-8
                    md:py-8 md:px-6
                    lg:p-8
                    xl:py-8 xl:px-5
                    2xl:p-8
                  "
                >
                  <h3>
                    <a
                      href="#home"
                      className="
                        font-bold a1A
                        dark:text-opacity-100
    text-[rgba(255,255,255,var(--tw-text-opacity))]
                        text-xl
                        sm:text-2xl
                        block mb-4
                        hover:a1W
                        dark:hover:text-opacity-100 hover:text-[rgba(74,108,247,var(--tw-text-opacity))]
                      "
                    >
                      {item.title}
                    </a>
                  </h3>
                  <p
                    className="
                    text-base
                    font-medium
                    text-opacity-100 text-[rgba(149,156,177,var(--tw-text-opacity))]
                    border-b border-opacity-100
    border-[rgba(255,255,255,var(--tw-border-opacity))]                   
                    border-opacity-10
                    dark:border-opacity-10
                    pb-6 mb-6
                    "
                  >
                    {item.desc}
                  </p>
                  <div className="flex items-center">
                    <div
                      className="
                        flex items-center pr-5 mr-5
                        xl:pr-3
                        2xl:pr-5
                        xl:mr-3
                        2xl:mr-5
                        border-r border-opacity-100 border-[rgba(149,156,177,var(--tw-border-opacity))] border-opacity-10
                        dark:mr-5 dark:border-opacity-10
                      "
                    >
                      <div
                        className="
                          max-w-[40px]
                          w-full
                          h-[40px]
                          rounded-full
                          overflow-hidden
                          mr-4
                        "
                      >
                        <img
                          src={item.authorImage}
                          alt="author"
                          className="w-full"
                        />
                      </div>
                      <div className="w-full">
                        <h4
                          className="
                            text-sm font-medium 
                            dark:text-opacity-100
    text-[rgba(255,255,255,var(--tw-text-opacity))]
                            a2K
                          "
                        >
                          By
                          <a
                            href="#home"
                            className="ml-1
                              
                              dark:text-opacity-100
    text-[rgba(255,255,255,var(--tw-text-opacity))]
                              hover:a1W
                              dark:hover:a1W
                            "
                          >
                            {item.author}
                          </a>
                        </h4>
                        <p
                          className="text-xs text-opacity-100
    text-[rgba(149,156,177,var(--tw-text-opacity))]"
                        >
                          {item.job}
                        </p>
                      </div>
                    </div>
                    <div className="inline-block">
                      <h4
                        className="
                          text-sm font-medium 
                          dark:text-opacity-100
    text-[rgba(255,255,255,var(--tw-text-opacity))]
                          a2K
                        "
                      >
                        Date
                      </h4>
                      <p
                        className="text-xs text-opacity-100
    text-[rgba(149,156,177,var(--tw-text-opacity))]"
                      >
                        {item.date}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* First Blog Card End */}
        </div>
      </div>
    </section>
  );
};

export default Blog;
