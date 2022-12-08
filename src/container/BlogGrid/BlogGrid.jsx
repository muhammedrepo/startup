import { TopSection } from "../../components";
import { ScrollToTop } from "../../constants";
import Blog from "./Blog";
import items from "../BlogGrid/blogData";
import Pagination from "./Pagination";

const BlogGrid = () => {
  return (
    <>
      <ScrollToTop />

      <TopSection title="Blog Page" subtitle="Blog page" />
      <section className="py-[120px]">
        <div className="container">
          <Blog items={items} />
          <Pagination />
        </div>
      </section>
    </>
  );
};

export default BlogGrid;
