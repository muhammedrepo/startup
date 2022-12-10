import { Subscribe } from "../../../../components";
import { Categories } from "./Categories";
import { RelatedPosts } from "./RelatedPosts";
import { Search } from "./Search";
import { PopularTags } from "./PopularTags";

export const Sidebar = () => {
  return (
    <div className="px-4 lg:w-1/3">
      <Search />
      <RelatedPosts />
      <Categories />
      <PopularTags />
      <Subscribe />
    </div>
  );
};
