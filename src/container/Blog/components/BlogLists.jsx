import BlogItem from "./BlogItem";

export const BlogLists = ({ items }) => {
  return (
    <div className="-mx-4 flex flex-wrap justify-center">
      {items?.map((item) => (
        <BlogItem key={item.id} item={item} />
      ))}
    </div>
  );
};
