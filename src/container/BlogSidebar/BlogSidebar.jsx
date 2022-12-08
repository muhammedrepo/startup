import React from "react";
import { FormRow, Subscribe } from "../../components";
import { images, ScrollToTop, socialIcon } from "../../constants";
import { lists } from "./data";
import { ReactComponent as BlogSidebarImage } from "../../images/blogSidebar/blogSidebar.svg";
import { ReactComponent as BlogSidebarImage2 } from "../../images/blogSidebar/blogSidebar2.svg";
import { ReactComponent as SearchImage } from "../../images/svg/search.svg";

const BlogSidebar = () => {
  const listToDisplay = socialIcon.slice(0, 3);
  return (
    <>
      <ScrollToTop />
      <section className="pt-[150px] pb-[120px]">
        <div className="container">
          <div className="-mx-4 flex flex-wrap justify-center">
            <div className="w-full px-4 lg:w-2/3">
              <div>
                <h2 className="mb-8 text-3xl font-bold sm:text-4xl">
                  10 amazing sites to download stock photos & digital assets for
                  free
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
                        <img
                          src={images.author2}
                          alt="author"
                          className="w-full"
                        />
                      </div>
                      <div className="w-full">
                        <h4 className="text-gray mb-1 text-base font-medium">
                          By
                          <a
                            href="#home"
                            className="text-gray hover:text-main-bg ml-1"
                          >
                            Musharof Chy
                          </a>
                        </h4>
                      </div>
                    </div>
                    <div className="mb-5 flex items-center">
                      {lists.map((list, index) => (
                        <p
                          key={index}
                          className="
                          fill-gray
                          mr-5
                          flex
                          items-center
                          text-base
                          font-medium
                        "
                        >
                          <span className="mr-3">{list.icon}</span>
                          {list.desc}
                        </p>
                      ))}
                    </div>
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
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occpx-4cat cupidatat.
                  </p>
                  <div className="mb-10 w-full overflow-hidden rounded">
                    <img
                      src={images.blogDetail}
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
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Quis enim lobortis scelerisque fermentum. Neque
                    sodales ut etiam sit amet. Ligula ullamcorper
                    <strong className="text-white"> malesuada </strong>
                    proin libero nunc consequat interdum varius. Quam
                    pellentesque nec nam aliquam sem et tortor consequat.
                    Pellentesque adipiscing commodo elit at imperdiet.
                  </p>
                  <p
                    className="mb-10 text-base
                      font-medium
                      sm:text-lg
                      lg:text-base
                       xl:text-lg
                    "
                  >
                    Semper auctor neque vitpx-4 tempus quam pellentesque nec.
                    <span className="text-white underline">
                      {" "}
                      Amet dictum sit amet justo{" "}
                    </span>
                    donec enim diam. Varius sit amet mattis vulputate enim nulla
                    aliquet porttitor. Odio pellentesque diam volutpat commodo
                    sed.
                  </p>
                  <h3
                    className="
                      lg:a27
                      mb-10
                      font-bold
                      sm:text-2xl
                      
                      xl:text-2xl
                    "
                  >
                    Digital marketplace for Ui/Ux designers.
                  </h3>
                  <p
                    className="mb-10 text-base
                      font-medium
                      sm:text-lg
                      lg:text-base
                       xl:text-lg
                    "
                  >
                    consectetur adipiscing elit in voluptate velit esse cillum
                    dolore eu fugiat nulla pariatur. Excepteur sint occpx-4cat
                    mattis vulputate cupidatat.
                  </p>
                  <ul
                    className="
                      text-gray mb-10 list-inside list-disc
                    "
                  >
                    <li className="blog-detail-list">
                      Consectetur adipiscing elit in voluptate velit.
                    </li>
                    <li className="blog-detail-list">
                      Mattis vulputate cupidatat.
                    </li>
                    <li className="blog-detail-list">
                      Vulputate enim nulla aliquet porttitor odio pellentesque
                    </li>
                    <li className="blog-detail-list">
                      Ligula ullamcorper malesuada proin
                    </li>
                  </ul>
                  <div
                    className="
                      bg-main-bg/10 relative z-10
                      mb-10 flex-wrap
                      overflow-hidden
                      rounded-md
                       p-8 md:p-9 lg:p-8 xl:p-9
                    "
                  >
                    <p
                      className="
                        text-center
                        text-base
                        font-medium
                        italic
                      "
                    >
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod incididunt utionals labore et dolore magna
                      aliqua. Quis lobortis scelerisque fermentum, The Neque ut
                      etiam sit amet.
                    </p>
                    <span className="absolute left-0 top-0 -z-[1]">
                      <BlogSidebarImage />
                    </span>
                    <span className="absolute right-0 bottom-0 -z-[1]">
                      <BlogSidebarImage2 />
                    </span>
                  </div>
                  <p
                    className=" mb-10 text-base
                      font-medium
                      sm:text-lg
                      lg:text-base
                       xl:text-lg
                    "
                  >
                    consectetur adipiscing elit in voluptate velit esse cillum
                    dolore eu fugiat nulla pariatur. Excepteur sint occpx-4cat
                    mattis vulputate cupidatat.
                  </p>
                  <div className="items-center justify-between sm:flex">
                    <div className="mb-5">
                      <h5
                        className="
                          text-gray mb-3 text-sm font-medium
                        "
                      >
                        Popular Tags :
                      </h5>
                      <div className="flex items-center">
                        <a
                          href="#home"
                          className="
                        blog-detail-tag
                          "
                        >
                          Design
                        </a>
                        <a
                          href="#home"
                          className="
                        blog-detail-tag
                          "
                        >
                          Development
                        </a>
                        <a
                          href="#home"
                          className="
                        blog-detail-tag
                          "
                        >
                          Info
                        </a>
                      </div>
                    </div>
                    <div className="mb-5">
                      <h5
                        className="
                          text-gray mb-3 text-sm
                          font-medium
                          sm:text-right
                        "
                      >
                        Share this post :
                      </h5>
                      <div className="flex items-center sm:justify-end">
                        {listToDisplay.map((item, index) => (
                          <a
                            key={index}
                            href={item.url}
                            className="
                            blog-detail-social mr-2 sm:ml-3
                          "
                          >
                            {item.icon}
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar Begin */}

            <div className="px-4 lg:w-1/3">
              <div className="bg-main-bg/5 mb-10 rounded-md p-6 lg:mt-0">
                <form className="flex w-full items-center justify-between">
                  <FormRow type="text" placeholder="Search here..." noLabel />

                  <button
                    type="button"
                    className="
                    bg-main-bg
                    flex
                    h-[50px]
                    w-full
                    max-w-[50px]
                    items-center
                    justify-center
                    rounded-md
                    text-white
                  "
                  >
                    <SearchImage />
                  </button>
                </form>
              </div>
              <div
                className="
              a1Z bg-main-bg/10 mb-10 rounded-md
              "
              >
                <h3
                  className="
                  border-b
                  border-white/10
                  py-4
                  px-8
                  text-lg
                  font-semibold
                "
                >
                  Related Posts
                </h3>
                <ul className="p-8">
                  <li
                    className="
                    mb-6
                    border-b
                    border-white/10
                    
                     pb-6
                  "
                  >
                    <div className="lg:ah flex items-center xl:flex">
                      <div
                        className="
                        aB[85px]
                        at[75px]
                        a2O
                        lg:a30
                        xl:a2t
                        w-full
                        rounded-md
                        font-semibold
                      "
                      >
                        <img src={images.post1} alt="post-one" />
                      </div>
                      <div className="w-full">
                        <h5>
                          <a
                            href="#home"
                            className="
                            a1R a1A
                            aH
                            a3r ah a3s[6px] hover:a1W
                            dark:hover:a1W
                            text-white
                          "
                          >
                            Best way to boost your online sales.
                          </a>
                        </h5>
                        <p className="a3c a1R a1S">20 Mar, 2024</p>
                      </div>
                    </div>
                  </li>
                  <li
                    className="
                    mb-6
                    border-b
                    border-white/10
                    
                     pb-6
                  "
                  >
                    <div className="lg:ah flex items-center xl:flex">
                      <div
                        className="
                        aB[85px]
                        at[75px]
                        a2O
                        lg:a30
                        xl:a2t
                        w-full
                        rounded-md
                        font-semibold
                      "
                      >
                        <img src={images.post2} alt="post two" />
                      </div>
                      <div className="w-full">
                        <h5>
                          <a
                            href="#home"
                            className="
                            a1R a1A
                            aH
                            a3r ah a3s[6px] hover:a1W
                            dark:hover:a1W
                            text-white
                          "
                          >
                            50 Best web design tips & tricks that will help you.
                          </a>
                        </h5>
                        <p className="a3c a1R a1S">15 Feb, 2024</p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="lg:ah flex items-center xl:flex">
                      <div
                        className="
                        aB[85px]
                        at[75px]
                        a2O
                        lg:a30
                        xl:a2t
                        w-full
                        rounded-md
                        font-semibold
                      "
                      >
                        <img src={images.post3} alt="post3" />
                      </div>
                      <div className="w-full">
                        <h5>
                          <a
                            href="#home"
                            className="
                            a1R a1A
                            aH
                            a3r ah a3s[6px] hover:a1W
                            dark:hover:a1W
                            text-white
                          "
                          >
                            The 8 best landing page builders, reviewed
                          </a>
                        </h5>
                        <p className="a3c a1R a1S">05 Jan, 2024</p>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
              <div
                className="
                a1k a1Z
                dark:a29
                mb-10 rounded-md
              "
              >
                <h3
                  className="
                  a1A border-b
                  border-white/10
                  
                  py-4
                  px-8
                  text-lg
                  
                  font-semibold text-white
                "
                >
                  Popular Category
                </h3>
                <ul className="aL px-8">
                  <li>
                    <a
                      href="#home"
                      className="
                      a1R aH a1S
                      hover:a1W
                      a30 a22
                    "
                    >
                      Tailwind Templates
                    </a>
                  </li>
                  <li>
                    <a
                      href="#home"
                      className="
                      a1R aH a1S
                      hover:a1W
                      a30 a22
                    "
                    >
                      Landing page
                    </a>
                  </li>
                  <li>
                    <a
                      href="#home"
                      className="
                      a1R aH a1S
                      hover:a1W
                      a30 a22
                    "
                    >
                      Startup
                    </a>
                  </li>
                  <li>
                    <a
                      href="#home"
                      className="
                      a1R aH a1S
                      hover:a1W
                      a30 a22
                    "
                    >
                      Business
                    </a>
                  </li>
                  <li>
                    <a
                      href="#home"
                      className="
                      a1R aH a1S
                      hover:a1W
                      a30 a22
                    "
                    >
                      Multipurpose
                    </a>
                  </li>
                </ul>
              </div>
              <div
                className="
                a1k a1Z
                dark:a29
                mb-10 rounded-md
              "
              >
                <h3
                  className="
                  a1A border-b
                  border-white/10
                  
                  py-4
                  px-8
                  text-lg
                  
                  font-semibold text-white
                "
                >
                  Popular Tags
                </h3>
                <ul className="flex flex-wrap py-6 px-8">
                  <li>
                    <a
                      href="#home"
                      className="
                      blog-detail-tag mb-3 mr-3
                    "
                    >
                      Themes
                    </a>
                  </li>
                  <li>
                    <a
                      href="#home"
                      className="
                      blog-detail-tag mb-3 mr-3
                    "
                    >
                      UI Kit
                    </a>
                  </li>
                  <li>
                    <a
                      href="#home"
                      className="
                      blog-detail-tag mb-3 mr-3
                    "
                    >
                      Tailwind
                    </a>
                  </li>
                  <li>
                    <a
                      href="#home"
                      className="
                      blog-detail-tag mb-3 mr-3
                    "
                    >
                      Startup
                    </a>
                  </li>
                  <li>
                    <a
                      href="#home"
                      className="
                      blog-detail-tag mb-3 mr-3
                    "
                    >
                      Business
                    </a>
                  </li>
                </ul>
              </div>
              <Subscribe />
            </div>

            {/* Sidebar Stop */}
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogSidebar;
