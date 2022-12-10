import React from "react";

const pagination = ["Prev", "1", "2", "3", "...", "12", "Next"];

export const Pagination = () => {
  return (
    <div className="-mx-4 flex flex-wrap">
      <div className="w-full px-4">
        <ul className="flex items-center justify-center pt-8">
          {pagination.map((item, index) => (
            <li key={index} className="mx-1">
              <a
                href="/"
                className="bg-gray/20 text-gray hover:bg-main-bg flex h-8
                    min-w-[36px] items-center justify-center rounded-md px-4 text-sm hover:text-white
                  "
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
