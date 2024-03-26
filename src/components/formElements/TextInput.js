import React, { useState, useEffect, useCallback, useMemo } from "react";

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
}) => {
  const [errorMessage, setErrorMessage] = useState("");
  const [isFocused, setIsFocused] = useState(false);

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
        className="bg-fieldColor-light/10 dark:bg-fieldColor-dark/10 text-fieldColor-light dark:text-fieldColor-dark p-2 focus:outline-none placeholder:text-fieldColor-light/50 placeholder:dark:text-fieldColor-dark/50"
        type="text"
        value={value}
        onChange={onChange}
        onFocus={() => {
          setIsFocused(true);
          onFocus();
        }}
        onBlur={() => setIsFocused(false)}
      />
      {errorMessage && <ErrorMessage message={errorMessage} />}
    </div>
  );
};

const ErrorMessage = ({ message }) => (
  <p className="absolute text-[11px] font-medium -bottom-1 right-1 text-red-600 dark:text-red-300">
    {message}
  </p>
);

export default TextInput;
