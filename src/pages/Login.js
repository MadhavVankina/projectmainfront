import React, { useState, useEffect } from "react";
import PrimaryButton from "../components/formElements/PrimaryButton";
import { RxCross2 } from "react-icons/rx";
import { IoIosArrowForward } from "react-icons/io";
import LoginForm from "../components/Login/LoginForm";
import { useDarkMode } from "../components/common/DarkModeContext";

const Login = () => {
  const { theme, toggleTheme } = useDarkMode();
  const [expand, setExpand] = useState(false);
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    if (expand) {
      const timer = setTimeout(() => {
        setShowText(true);
      }, 1000);

      return () => clearTimeout(timer);
    } else {
      setShowText(false);
    }
  }, [expand]);

  useEffect(() => {
    if (theme === "dark") {
      toggleTheme();
    }
  }, []);

  const toggleExpand = () => {
    setExpand((prev) => !prev);
  };

  return (
    <div className="w-full relative overflow-auto bg-background-light form-background overflow-x-hidden">
      <div className={`w-full min-h-[100vh] md:flex sm:block`}>
        <div
          className={`${expand ? "w-full rounded-[0px]" : "w-1/3 rounded-r-4xl"} login-background transition-all duration-500 h-[100vh] relative md:flex sm:hidden hidden`}
        >
          <button
            onClick={toggleExpand}
            className={`absolute ${
              expand ? "h-7 w-7 top-5 right-5" : "h-14 w-14 top-[45%] -right-7"
            } transition-all duration-700 bg-background-light rounded-[50px] border-2 border-background-dark flex justify-center items-center z-10`}
          >
            {expand ? <RxCross2 /> : <IoIosArrowForward />}
          </button>
          <div
            className={`${
              expand ? "w-1/3 duration-500" : "w-full duration-700"
            } flex flex-col justify-center items-center transition-all h-full -space-y-3`}
          >
            <p
              className={`${expand ? "text-[0px]" : "text-lg"} transition-all duration-500 text-fieldColor-dark`}
            >
              WELCOME TO{" "}
              <span
                className={`${!expand ? "text-[0px]" : "text-lg"} transition-all duration-500 text-fieldColor-dark`}
              >
                WHAT IS
              </span>
            </p>

            <p className="text-fieldColor-dark text-[50px] font-bold">
              Project <span className="font-light">Main</span>{" "}
              <span
                className={`${!expand ? "text-[0px]" : "text-[40px]"} transition-all duration-500 text-fieldColor-dark italic`}
              >
                ?
              </span>
            </p>
          </div>
          <div
            className={`${
              expand
                ? "w-2/3 flex opacity-100 duration-600 ease-in"
                : "w-0 opacity-0 duration-1000 ease-in-out "
            } transition-all h-full p-[2%]`}
          >
            <div
              className={`${
                expand ? "w-full duration-1000 flex p-[5%]" : "w-0 hidden"
              }  ease-linear h-full bg-stone-800/80 text-lg justify-center items-center overflow-auto`}
            >
              <div
                className={`${
                  showText ? "duration-400 opacity-100" : "opacity-0"
                } transition-all ease-in text-fieldColor-dark`}
              >
                Nostrud consectetur irure fugiat culpa fugiat exercitation ut
                minim excepteur cillum in deserunt exercitation. Aliquip laboris
                et consectetur sint elit veniam et nulla eiusmod cillum. Dolor
                do pariatur et consequat dolor eu Lorem in proident aute. Enim
                est reprehenderit aliquip consequat in. Eu id quis eu ea fugiat
                ea veniam. Duis incididunt non pariatur pariatur ullamco elit
                qui sint minim Lorem. Cillum officia qui minim ea. Nostrud
                consectetur irure fugiat culpa fugiat exercitation ut minim
                excepteur cillum in deserunt exercitation. Aliquip laboris et
                consectetur sint elit veniam et nulla eiusmod cillum. Dolor do
                pariatur et consequat dolor eu Lorem in proident aute. Enim est
                reprehenderit aliquip consequat in. Eu id quis eu ea fugiat ea
                veniam. Duis incididunt non pariatur pariatur ullamco elit qui
                sint minim Lorem. Cillum officia qui minim ea. Nostrud
                consectetur irure fugiat culpa fugiat exercitation ut minim
                excepteur cillum in deserunt exercitation. Aliquip laboris et
                consectetur sint elit veniam et nulla eiusmod cillum. Dolor do
                pariatur et consequat dolor eu Lorem in proident aute. Enim est
                reprehenderit aliquip consequat in. Eu id quis eu ea fugiat ea
                veniam. Duis incididunt non pariatur pariatur ullamco elit qui
                sint minim Lorem. Cillum officia qui minim ea. Nostrud
                consectetur irure fugiat culpa fugiat exercitation ut minim
                excepteur cillum in deserunt exercitation. Aliquip laboris et
                consectetur sint elit veniam et nulla eiusmod cillum. Dolor do
                pariatur et consequat dolor eu Lorem in proident aute. Enim est
                reprehenderit aliquip consequat in. Eu id quis eu ea fugiat ea
                veniam. Duis incididunt non pariatur pariatur ullamco elit qui
                sint minim Lorem. Cillum officia qui minim ea.
              </div>
            </div>
          </div>
        </div>
        <div
          className={`${
            expand ? "w-0 opacity-0" : "w-2/3 opacity-100"
          } md:flex sm:hidden hidden transition-all duration-200  justify-center items-center h-[100vh]`}
        >
          <LoginForm />
        </div>
        <div className="md:hidden flex flex-col w-full login-background bg-background-dark h-[100vh] justify-center items-center -space-y-3">
          <p
            className={`${expand ? "text-[0px]" : "text-2xl"} transition-all duration-500 text-fieldColor-dark`}
          >
            Welcome to{" "}
          </p>

          <p className="text-fieldColor-dark text-[50px] font-bold">
            Project <span className="font-light">Main</span>{" "}
            <span
              className={`"text-[40px] transition-all duration-500 text-fieldColor-dark italic`}
            ></span>
          </p>
        </div>
        <div className="md:hidden flex w-full h-[100vh] p-5 justify-center items-center">
          <LoginForm />
        </div>
      </div>
    </div>
  );
};
export default Login;
