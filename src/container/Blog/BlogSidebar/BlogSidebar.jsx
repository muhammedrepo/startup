import { ScrollToTop } from "../../../constants";
import { BlogDetail } from "../BlogDetail";

import { Sidebar } from "./Sidebar";

export const BlogSidebar = () => {
  return (
    <>
      <ScrollToTop />
      <section className="pt-[150px] pb-[120px]">
        <div className="container">
          <div className="-mx-4 flex flex-wrap justify-center">
            <BlogDetail />
            <Sidebar />
          </div>
        </div>
      </section>
    </>
  );
};
