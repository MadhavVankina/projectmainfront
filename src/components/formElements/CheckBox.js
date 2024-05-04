import React, { useState, useEffect, useCallback } from "react";

const Checkbox = ({
  label,
  checked = false,
  onChange = () => {},
  validationRules = [],
  formSubmitted = false,
  setIsError = () => {},
}) => {
  const [isChecked, setIsChecked] = useState(checked);
  const [errorMessage, setErrorMessage] = useState("");

  const validateInput = useCallback(() => {
    let error = "";

    if (formSubmitted && validationRules.includes("required") && !isChecked) {
      error = "This checkbox is required";
    }

    // Add more validation rules as needed

    return error;
  }, [isChecked, formSubmitted, validationRules]);

  const validationResult = validateInput();

  useEffect(() => {
    setErrorMessage(validationResult);
    setIsError(validationResult.length > 0);
  }, [validationResult, setIsError]);

  const handleChange = (e) => {
    const newValue = e.target.checked;
    setIsChecked(newValue);
    onChange(newValue);
  };

  return (
    <div className="flex items-center gap-2 py-4 relative">
      <input
        type="checkbox"
        checked={isChecked}
        onChange={handleChange}
        className="border border-fieldColor-light/50 dark:border-fieldColor-dark/50 checked:before:bg-fieldColor-light dark:checked:before:bg-fieldColor-dark"
      />
      {label && (
        <label className="text-black/60 dark:text-white/60 text-sm">
          {label}
        </label>
      )}
      {errorMessage && <ErrorMessage message={errorMessage} />}
    </div>
  );
};

const ErrorMessage = ({ message }) => (
  <p className="absolute text-[11px] font-medium -bottom-1 left-1 text-red-600 dark:text-red-300">
    {message}
  </p>
);

export default Checkbox;
