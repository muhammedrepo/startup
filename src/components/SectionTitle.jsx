import React from "react";

const SectionTitle = ({ title, desc }) => {
  return (
    <div className="-mx-4 flex flex-wrap">
      <div className="w-full px-4">
        <div className="mx-auto mb-[100px] max-w-[570px] text-center">
          <h2 className="sm:a1P mb-4 font-bold md:text-[45px]">{title}</h2>
          <p className="text-base md:text-base">{desc}</p>
        </div>
      </div>
    </div>
  );
};

export default SectionTitle;
