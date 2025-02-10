import React from "react";

const Button = ({ children, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="text-white bg-black px-5 py-2 font-semibold rounded-[5px] text-[14px]"
    >
      {children}
    </button>
  );
};

export default Button;
