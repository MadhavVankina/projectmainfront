import React from "react";
import Navbar from "./Navbar";

const Skeleton = ({ children }) => {
  return (
    <div
      className={`min-h-screen w-full relative overflow-auto bg-background-light dark:bg-background-dark`}
    >
      <Navbar />
      <div
        className={`mx-auto px-4 sm:px-6 lg:px-8 max-w-screen-xl min-h-[100vh] pt-20 flex flex-col gap-4  `}
      >
        {children}
      </div>
    </div>
  );
};

export default Skeleton;
