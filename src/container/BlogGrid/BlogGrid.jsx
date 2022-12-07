import { TopSection } from "../../components";
import { ScrollToTop } from "../../constants";
import Blog from "./Blog";
import items from "../BlogGrid/blogData";

const pagination = ["Prev", "1", "2", "3", "...", "12", "Next"];

const BlogGrid = () => {
  return (
    <>
      <ScrollToTop />

      <TopSection title="Blog Page" subtitle="Blog page" />
      <section className="py-[120px]">
        <div className="container">
          <Blog items={items} />
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <ul className="flex items-center justify-center pt-8">
                {pagination.map((item, index) => (
                  <li key={index} className="mx-1">
                    <a
                      href="/"
                      className="flex h-8 min-w-[36px] items-center justify-center
                    rounded-md bg-gray-400/20 px-4 text-sm text-gray-400 hover:bg-blue-500/100 hover:text-white
                  "
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogGrid;
