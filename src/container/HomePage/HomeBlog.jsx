import React, { useState } from "react";
import { Link } from "react-router-dom";
import { SectionTitle } from "../../components";
import Blog from "../BlogGrid/Blog";
import items from "../BlogGrid/blogData";

const HomeBlog = () => {
  const [expanded] = useState(false);
  const dataForDisplay = expanded ? items : items.slice(0, 3);

  return (
    <section id="blog" className="bg-primary bg-opacity-5 pt-[120px] pb-20">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="Our Latest Blogs"
          desc="There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some form."
        />
        <Blog items={dataForDisplay} />

        <div className="flex items-center justify-center">
          <button type="button" className="btn">
            <Link to="/blog-grid"> View More</Link>
          </button>
        </div>
      </div>
    </section>
  );
};

export default HomeBlog;
