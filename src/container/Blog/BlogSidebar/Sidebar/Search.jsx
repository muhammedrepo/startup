import { FormRow } from "../../../../components";
import { ReactComponent as SearchIcon } from "../../../../images/svg/search.svg";

export const Search = () => {
  return (
    <div className="bg-main-bg/5 mb-10 rounded-md p-6 lg:mt-0">
      <form className="flex w-full items-center justify-between">
        <FormRow type="text" placeholder="Search here..." noLabel />

        <button
          type="button"
          className="
          bg-main-bg flex
          h-[50px] w-full max-w-[50px]
          items-center
          justify-center
          rounded-md
          text-white
        "
        >
          <SearchIcon />
        </button>
      </form>
    </div>
  );
};
