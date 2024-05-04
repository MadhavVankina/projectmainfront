import React from "react";

const SecondaryButton = ({ onClick, label, widthFull = false }) => {
  return (
    <div onClick={onClick} className="flex justify-center items-center ">
      <button
        className={`${widthFull ? "w-full" : ""} border border-primary-light dark:border-primary-dark text-primary-light dark:text-primary-dark py-3 px-8 font-semibold hover:border-opacity-80 dark:hover:border-opacity-80 transition-all duration-500 hover:bg-primary-light/10 dark:hover:bg-primary-dark/10`}
      >
        {label}
      </button>
    </div>
  );
};

export default SecondaryButton;
