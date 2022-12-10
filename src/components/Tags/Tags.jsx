import { TagItem } from "./TagItem";

export const Tags = ({ items, padding }) => {
  return (
    <ul className={`flex flex-wrap ${padding} `}>
      {items?.map((item, index) => (
        <TagItem key={index} tag={item} />
      ))}
    </ul>
  );
};
