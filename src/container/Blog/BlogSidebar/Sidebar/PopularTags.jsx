import { Tags } from "../../../../components";
import items from "../../../../components/Tags/tagLists";
export const PopularTags = () => {
  return (
    <div className="bg-main-bg/10 mb-10 rounded-md">
      <h3 className="border-b border-white/10 py-4 px-8 text-lg font-semibold">
        Popular Tags
      </h3>
      <Tags items={items} padding="py-6 px-8" />
    </div>
  );
};
