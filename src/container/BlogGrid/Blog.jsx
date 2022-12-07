import { Link } from "react-router-dom";

const Blog = ({ items }) => {
  return (
    <div className="-mx-4 flex flex-wrap justify-center">
      {items.map((item) => (
        <div className="w-full px-4 md:w-2/3 lg:w-1/2 xl:w-1/3" key={item.id}>
          <div
            className="relative mb-10 overflow-hidden rounded-md bg-[rgba(29,33,68,var(--tw-bg-opacity))] bg-opacity-100 shadow-sm              
                "
          >
            <a href="#home" className="relative block w-full">
              <span
                className="absolute top-6 right-6 inline-flex
                      items-center justify-center rounded-full
                      bg-blue-500/100 py-2 px-4 text-sm font-semibold
                    "
              >
                {item.category}
              </span>
              <img src={item.blogImg} alt="blogImage" className="w-full" />
            </a>
            <div className="p-6 sm:p-8 md:py-8 md:px-6 lg:p-8  xl:py-8 xl:px-5 2xl:p-8 ">
              <h3>
                <Link
                  to={item.url}
                  className=" mb-4 block text-xl font-bold hover:text-blue-500/100 sm:text-2xl"
                >
                  {item.title}
                </Link>
              </h3>
              <p className="mb-6  border-b border-white/10 pb-6   text-base font-medium">
                {item.desc}
              </p>
              <div className="flex items-center">
                <div
                  className="mr-5 flex items-center border-r
                        border-gray-400/10 pr-5 xl:mr-3 xl:pr-3
                        2xl:mr-5 2xl:pr-5 "
                >
                  <div
                    className="mr-4 h-10 w-full max-w-[40px] overflow-hidden
                          rounded-full"
                  >
                    <img
                      src={item.authorImage}
                      alt="author"
                      className="w-full"
                    />
                  </div>
                  <div className="w-full">
                    <h4 className="mb-1 text-sm font-medium">
                      By
                      <a href="#home" className="hover:text-color-b ml-1">
                        {item.author}
                      </a>
                    </h4>
                    <p className="text-xs ">{item.job}</p>
                  </div>
                </div>
                <div className="inline-block">
                  <h4 className="mb-1 text-sm font-medium">Date</h4>
                  <p className="text-xs ">{item.date}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Blog;
