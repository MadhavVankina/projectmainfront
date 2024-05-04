import React from "react";
import Navbar from "./Navbar";
import MenuTabs from "./MenuTabs";

const Skeleton = ({ children }) => {
  return (
    <div
      className={`w-full relative overflow-auto bg-background-light dark:bg-background-dark`}
    >
      <Navbar />
      <div
        className={`mx-auto md:px-[1%] sm:px-4 px-6 max-w-screen-xl min-h-[100vh] pt-20 flex flex-col gap-4`}
      >
        {children}
      </div>
    </div>
  );
};

export default Skeleton;
