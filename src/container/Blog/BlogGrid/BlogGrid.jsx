import { TopSection } from "../../../components";
import { ScrollToTop } from "../../../constants";
import { BlogLists } from "../components";
import { blogData } from "../data";
import { Pagination } from "./Pagination";

export const BlogGrid = () => {
  return (
    <>
      <ScrollToTop />

      <TopSection title="Blog Page" subtitle="Blog page" />
      <section className="py-[120px]">
        <div className="container">
          <BlogLists items={blogData} />
          <Pagination />
        </div>
      </section>
    </>
  );
};
