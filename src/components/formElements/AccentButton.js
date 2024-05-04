import React from "react";

const AccentButton = ({ onClick, label, widthFull = false }) => {
  return (
    <div onClick={onClick} className="flex justify-center items-center ">
      <button
        className={`${widthFull ? "w-full" : ""} bg-accent-light dark:bg-accent-dark text-white dark:text-fieldColor-light py-3 px-8 font-semibold hover:bg-opacity-80 dark:hover:bg-opacity-80 transition-all duration-500`}
      >
        {label}
      </button>
    </div>
  );
};

export default AccentButton;
