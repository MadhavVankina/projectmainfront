import React, { useState, useEffect, useCallback, useMemo } from "react";
import { IoIosEye } from "react-icons/io";
import { IoIosEyeOff } from "react-icons/io";

const TextInput = ({
  name,
  placeholder = "",
  label,
  value = "",
  onChange = () => {},
  validationRules = [],
  formSubmitted = false,
  onFocus = () => {},
  setIsError = () => {},
  isPassword = false,
}) => {
  const [errorMessage, setErrorMessage] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const [showPassword, setShowPassword] = useState(isPassword);

  const validateInput = useCallback(
    (inputValue) => {
      let error = "";

      if (
        formSubmitted &&
        validationRules.includes("required") &&
        inputValue.trim() === ""
      ) {
        error = "This field is required";
      }

      if (validationRules.includes("email")) {
        const isValidEmail = /\S+@\S+\.\S+/.test(inputValue);
        if (!isValidEmail && inputValue.length > 0) {
          error = "Please enter a valid email address";
        }
      }

      // Add more validation rules as needed

      return error;
    },
    [validationRules, formSubmitted]
  );

  const validationResult = useMemo(
    () => validateInput(value),
    [validateInput, value]
  );

  useEffect(() => {
    setErrorMessage(validationResult);
    setIsError(validationResult.length > 0);
  }, [validationResult, setIsError]);

  useEffect(() => {
    if (isFocused) {
      setErrorMessage("");
    }
  }, [isFocused]);

  return (
    <div className="flex flex-col gap-1 pb-4 relative">
      {label && (
        <label className="text-black/60 dark:text-white/60 text-xs">
          {label}{" "}
          {validationRules.includes("required") && (
            <span className="text-red-600 dark:text-red-300">*</span>
          )}
        </label>
      )}
      <input
        name={name}
        placeholder={placeholder}
        className="bg-fieldColor-light/10 dark:bg-fieldColor-dark/10 text-fieldColor-light dark:text-fieldColor-dark p-2 focus:outline-none placeholder:text-fieldColor-light/50 placeholder:dark:text-fieldColor-dark/50 border border-fieldColor-light/10 dark:border-fieldColor-dark/10"
        type={showPassword ? "password" : "text"}
        value={value}
        onChange={onChange}
        onFocus={() => {
          setIsFocused(true);
          onFocus();
        }}
        onBlur={() => setIsFocused(false)}
      />
      {errorMessage && <ErrorMessage message={errorMessage} />}
      {isPassword && (
        <PasswordButton
          showPassword={showPassword}
          setShowPassword={setShowPassword}
        />
      )}
    </div>
  );
};

const ErrorMessage = ({ message }) => (
  <p className="absolute text-[11px] font-medium -bottom-1 left-1 text-red-600 dark:text-red-300">
    {message}
  </p>
);

const PasswordButton = ({ showPassword, setShowPassword }) => (
  <button
    onClick={() => setShowPassword((prev) => !prev)}
    className="absolute text-fieldColor-light/50 dark:text-fieldColor-dark/50 top-[30px] right-3"
  >
    {showPassword ? <IoIosEye size={20} /> : <IoIosEyeOff size={20} />}
  </button>
);

export default TextInput;
