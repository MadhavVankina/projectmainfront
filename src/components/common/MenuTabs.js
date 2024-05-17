import React, { useState } from "react";
import { FaHome } from "react-icons/fa";

const MenuTabs = () => {
  const [active, setActive] = useState(0);
  return (
    <div className="relative w-fit pt-8">
      <div
        style={{ left: `${24 + active * 28 * 4}px` }}
        className={`selected-tab absolute h-16 w-16 bg-secondary-light dark:bg-secondary-dark top-0 rounded-4xl border-[6px] border-background-light dark:border-background-dark transition-all delay-200 duration-500 before:rounded-tr-4xl after:rounded-tl-4xl after:shadow-tabLight dark:after:shadow-tabDark dark:before:shadow-tabDark before:shadow-tabLight`}
      ></div>
      <div className="flex rounded-[16px] bg-primary-light dark:bg-primary-dark w-fit transition-all duration-200">
        {[0, 0, 0, 0, 0, 0, 0].map((_, index) => (
          <button
            className=" text-background-light dark:text-background-dark w-28 h-16 relative transition-all duration-200"
            onClick={() => setActive(index)}
          >
            <FaHome
              size={18}
              className={`absolute ${active === index ? "top-0 text-primary-light dark:text-primary-dark" : "top-1/2"}  left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 transition-all delay-100 duration-500`}
            />
            <p
              className={`${active === index ? "text-[12px]" : "text-[0]"} font-bold tracking-widest absolute top-3/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-all duration-200`}
            >
              Home
            </p>
          </button>
        ))}
      </div>
    </div>
  );
};

export default MenuTabs;
