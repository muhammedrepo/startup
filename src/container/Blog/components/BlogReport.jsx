import { views } from "../data";

export const BlogReport = () => {
  return (
    <div className="mb-5 flex items-center">
      {views.map((item, index) => (
        <p
          key={index}
          className="fill-gray mr-5 flex items-center text-base font-medium"
        >
          <span className="mr-3">{item.icon}</span>
          {item.desc}
        </p>
      ))}
    </div>
  );
};
