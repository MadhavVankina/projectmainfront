import React from "react";
import { useDarkMode } from "./DarkModeContext";
import { IoMoon } from "react-icons/io5";
import { RiSunFill } from "react-icons/ri";
import { FaUserCircle } from "react-icons/fa";

const Navbar = () => {
  const { theme, toggleTheme } = useDarkMode();
  return (
    <div className="fixed w-full bg-background-light dark:bg-background-dark border-b border-black/20 dark:border-white/20 z-50">
      <div
        className={`flex justify-between items-center h-16 mx-auto md:px-[1%] sm:px-4 px-6 max-w-screen-xl `}
      >
        <p className="text-lg font-light text-fieldColor-light dark:text-fieldColor-dark">
          <span className="font-bold transition-all duration-0">Project </span>{" "}
          Main
        </p>
        <div className="flex gap-6">
          <button onClick={toggleTheme}>
            {theme === "dark" ? (
              <RiSunFill size={22} color=" #F1A73F" />
            ) : (
              <IoMoon size={20} color="#1B1A18" />
            )}
          </button>
          <FaUserCircle
            className="text-fieldColor-light dark:text-fieldColor-dark"
            size={22}
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
