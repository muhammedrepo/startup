import { Link } from "react-router-dom";
import { catLists } from "../../data";

export const Categories = () => {
  return (
    <div className="bg-main-bg/10 mb-10 rounded-md">
      <h3 className="border-b border-white/10 py-4 px-8 text-lg font-semibold">
        Popular Category
      </h3>
      <ul className="py-6 px-8">
        {catLists.map((cat, index) => (
          <li key={index}>
            <Link
              to={cat.url}
              className="text-gray mb-3 inline-block text-base font-medium"
            >
              {cat.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
