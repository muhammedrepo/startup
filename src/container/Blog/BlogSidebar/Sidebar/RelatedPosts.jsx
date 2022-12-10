import { Link } from "react-router-dom";
import { relatedPosts } from "../../data";

export const RelatedPosts = () => {
  return (
    <div className=" bg-main-bg/10 mb-10 rounded-md">
      <h3 className="border-b border-white/10 py-4 px-8 text-lg font-semibold">
        Related Posts
      </h3>
      <ul className="p-8">
        {relatedPosts.map((post) => (
          <li key={post.id} className="mb-6 border-b border-white/10 pb-6">
            <div className="flex items-center lg:block xl:flex">
              <div className="mr-5 h-[75px] w-full max-w-[85px] overflow-hidden rounded-md font-semibold lg:mb-3 xl:mb-0">
                <img src={post.img} alt="post-one" />
              </div>
              <div className="w-full">
                <h5>
                  <Link
                    to={post.url}
                    className="mb-[6px] block text-base font-medium"
                  >
                    {post.title}
                  </Link>
                </h5>
                <p className="text-xs font-medium">{post.date}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
