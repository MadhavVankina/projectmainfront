import React, { useState } from "react";
import TextInput from "../formElements/TextInput";
import AccentButton from "../formElements/AccentButton";
import { useNavigate } from "react-router-dom";
import { ToastMe } from "../common/Toast";

const LoginForm = () => {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(true);

  const toggleState = () => {
    setIsLogin((prev) => !prev);
  };

  return (
    <div className="flex flex-col md:w-[450px] sm:w-full gap-5">
      {isLogin ? (
        <>
          <div className="w-full border border-background-dark/10 p-8 bg-white/400 shadow-lg bg-background-light/80">
            <TextInput
              label={"Email address or phone number"}
              validationRules={["required"]}
            />
            <TextInput
              label={"Password"}
              validationRules={["required"]}
              isPassword={true}
            />
            <div className="py-4">
              <AccentButton
                onClick={() => {
                  navigate("/home");
                  ToastMe.success("Welcome, User 👋!");
                }}
                label={"Login"}
                widthFull={true}
              />
            </div>
            <button className="text-sm w-full text-center text-blue-600 hover:underline">
              Forgotten password?
            </button>
          </div>
          <div className="w-full border border-background-dark/10 p-6 bg-white/400 shadow-lg text-sm text-fieldColor-light text-center bg-background-light/80">
            Don't have an account?{" "}
            <span className="text-blue-600 ">
              <button className="hover:underline" onClick={toggleState}>
                {" "}
                Create new account
              </button>
            </span>
          </div>
        </>
      ) : (
        <>
          <div className="w-full border border-background-dark/10 p-8 bg-white/400 shadow-lg bg-background-light/80">
            <div className="grid grid-cols-2 gap-5">
              <TextInput label={"First Name"} validationRules={["required"]} />
              <TextInput label={"Last Name"} validationRules={["required"]} />
            </div>
            <TextInput label={"Email address"} validationRules={["required"]} />
            <TextInput
              label={"Create Password"}
              validationRules={["required"]}
              isPassword={true}
            />
            <div className="py-4">
              <AccentButton label={"Sign Up"} widthFull={true} />
            </div>
          </div>
          <div className="w-full border border-background-dark/10 p-6 bg-white/400 shadow-lg text-sm text-fieldColor-light text-center bg-background-light/80">
            Already have an account?{" "}
            <span className="text-blue-600 ">
              <button className="hover:underline" onClick={toggleState}>
                {" "}
                Login
              </button>
            </span>
          </div>
        </>
      )}
    </div>
  );
};

export default LoginForm;
