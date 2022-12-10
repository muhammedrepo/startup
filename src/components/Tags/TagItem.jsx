import { Link } from "react-router-dom";

export const TagItem = ({ tag }) => {
  return (
    <li>
      <Link
        to={tag.url}
        className="bg-main-bg/10  hover:bg-main-bg/100 text-gray
      mb-3 mr-3 inline-flex items-center
      justify-center rounded-md px-4 py-2 hover:text-white"
      >
        {tag.title}
      </Link>
    </li>
  );
};
