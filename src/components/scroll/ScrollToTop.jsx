import { useEffect, useState } from "react";

import { classNames } from "../../util";

export const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <button
      type="button"
      onClick={scrollToTop}
      className={classNames(
        isVisible ? "opacity-100" : "opacity-0",
        `bg-main-bg/100 fixed bottom-8 right-8 left-auto z-50 h-10 w-10 items-center justify-center rounded-md text-white shadow-sm transition-all duration-300`
      )}
      style={{ display: "flex" }}
    >
      <span
        className="mt-2 h-3 w-3 rotate-45 border-t border-l border-white"
        aria-hidden="true"
      ></span>
    </button>
  );
};
