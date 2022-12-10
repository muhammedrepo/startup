import { ScrollToTop } from "../../../constants";
import { author2, blogDetail } from "../../../images";
import { BlogDetail } from "../BlogDetail";

export const BlogSingle = () => {
  return (
    <>
      <ScrollToTop />
      <section className="pt-[150px] pb-[120px]">
        <div className="container mx-auto px-4">
          <div className="-mx-4 flex flex-wrap justify-center">
            <BlogDetail />
          </div>
        </div>
      </section>
    </>
  );
};
