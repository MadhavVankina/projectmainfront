import React, { useState, useEffect, useRef } from "react";
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";
import { FaRegCalendarAlt } from "react-icons/fa";

const DatePicker = ({
  name,
  label,
  value = "",
  onChange = () => {},
  validationRules = [],
  formSubmitted = false,
  onFocus = () => {},
  setIsError = () => {},
  minDate,
  maxDate,
}) => {
  const [showCalendar, setShowCalendar] = useState(false);
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [errorMessage, setErrorMessage] = useState("");
  const [inputValue, setInputValue] = useState("");
  const calendarRef = useRef(null);

  const daysInMonth = new Date(
    currentMonth.getFullYear(),
    currentMonth.getMonth() + 1,
    0
  ).getDate();

  const firstDayOfMonth = new Date(
    currentMonth.getFullYear(),
    currentMonth.getMonth(),
    1
  ).getDay();

  const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  const formatDate = (date) => {
    if (!date) return "";
    const d = new Date(date);
    const month = String(d.getMonth() + 1).padStart(2, "0");
    const day = String(d.getDate()).padStart(2, "0");
    const year = d.getFullYear();
    return `${month}/${day}/${year}`;
  };

  useEffect(() => {
    setInputValue(formatDate(value));
  }, [value]);

  const validateDate = (dateString) => {
    const regex = /^(0[1-9]|1[0-2])\/(0[1-9]|[12]\d|3[01])\/\d{4}$/;
    if (!regex.test(dateString)) return false;

    const [month, day, year] = dateString.split('/').map(Number);
    const date = new Date(year, month - 1, day);
    
    return date.getMonth() === month - 1 && 
           date.getDate() === day && 
           date.getFullYear() === year;
  };

  const handleInputChange = (e) => {
    const newValue = e.target.value;
    setInputValue(newValue);

    if (newValue.length === 10 && validateDate(newValue)) {
      const [month, day, year] = newValue.split('/').map(Number);
      const date = new Date(year, month - 1, day);
      
      if ((!minDate || date >= new Date(minDate)) && 
          (!maxDate || date <= new Date(maxDate))) {
        onChange({ target: { name, value: date } });
        setCurrentMonth(date);
      }
    }
  };

  const handleDateClick = (day) => {
    const selectedDate = new Date(
      currentMonth.getFullYear(),
      currentMonth.getMonth(),
      day
    );
    
    if (minDate && selectedDate < new Date(minDate)) return;
    if (maxDate && selectedDate > new Date(maxDate)) return;

    onChange({ target: { name, value: selectedDate } });
    setShowCalendar(false);
  };

  const isDateDisabled = (day) => {
    const date = new Date(
      currentMonth.getFullYear(),
      currentMonth.getMonth(),
      day
    );
    if (minDate && date < new Date(minDate)) return true;
    if (maxDate && date > new Date(maxDate)) return true;
    return false;
  };

  const handleClickOutside = (event) => {
    if (calendarRef.current && !calendarRef.current.contains(event.target)) {
      setShowCalendar(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    let error = "";
    if (formSubmitted && validationRules.includes("required") && !value) {
      error = "This field is required";
    } else if (inputValue && !validateDate(inputValue)) {
      error = "Please enter a valid date (MM/DD/YYYY)";
    }
    setErrorMessage(error);
    setIsError(error !== "");
  }, [formSubmitted, validationRules, value, inputValue, setIsError]);

  const renderCalendarDays = () => {
    const days = [];
    const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    days.push(
      <div key="header" className="grid grid-cols-7 mb-2">
        {daysOfWeek.map(day => (
          <div key={day} className="text-center text-xs font-medium text-fieldColor-light/60 dark:text-fieldColor-dark/60">
            {day}
          </div>
        ))}
      </div>
    );

    const dateGrid = [];
    for (let i = 0; i < firstDayOfMonth; i++) {
      dateGrid.push(<div key={`empty-${i}`} />);
    }

    for (let day = 1; day <= daysInMonth; day++) {
      const isSelected = value && 
        new Date(value).getDate() === day &&
        new Date(value).getMonth() === currentMonth.getMonth() &&
        new Date(value).getFullYear() === currentMonth.getFullYear();

      const isDisabled = isDateDisabled(day);

      dateGrid.push(
        <button
          key={day}
          onClick={() => !isDisabled && handleDateClick(day)}
          className={`
            p-2 text-sm rounded-full
            ${isSelected ? 
              "bg-blue-500 text-white" : 
              "hover:bg-fieldColor-light/10 dark:hover:bg-fieldColor-dark/10"
            }
            ${isDisabled ? 
              "opacity-30 cursor-not-allowed" : 
              "cursor-pointer"
            }
          `}
          disabled={isDisabled}
        >
          {day}
        </button>
      );
    }

    days.push(
      <div key="dates" className="grid grid-cols-7 gap-1">
        {dateGrid}
      </div>
    );

    return days;
  };

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

      <div className="relative">
        <input
          name={name}
          value={inputValue}
          onChange={handleInputChange}
          placeholder="MM/DD/YYYY"
          className="w-full bg-fieldColor-light/10 dark:bg-fieldColor-dark/10 
                   text-fieldColor-light dark:text-fieldColor-dark p-2 
                   focus:outline-none
                   placeholder:text-fieldColor-light/50 
                   placeholder:dark:text-fieldColor-dark/50 
                   border border-fieldColor-light/10 
                   dark:border-fieldColor-dark/10"
          onFocus={onFocus}
        />
        
        <button 
          onClick={() => setShowCalendar(!showCalendar)}
          className="absolute right-2 top-1/2 -translate-y-1/2 
                   text-fieldColor-light/50 dark:text-fieldColor-dark/50
                   hover:text-fieldColor-light dark:hover:text-fieldColor-dark"
        >
          <FaRegCalendarAlt size={16} />
        </button>

        {showCalendar && (
          <div
            ref={calendarRef}
            className="absolute z-50 mt-1 p-4 bg-white dark:bg-gray-800 
                     shadow-lg rounded-lg border border-fieldColor-light/10 
                     dark:border-fieldColor-dark/10 min-w-[280px]"
          >
            <div className="flex justify-between items-center mb-4">
              <button
                onClick={() => setCurrentMonth(new Date(currentMonth.setMonth(currentMonth.getMonth() - 1)))}
                className="p-1 hover:bg-fieldColor-light/10 dark:hover:bg-fieldColor-dark/10 rounded"
              >
                <FaChevronLeft size={14} />
              </button>
              
              <div className="font-medium">
                {months[currentMonth.getMonth()]} {currentMonth.getFullYear()}
              </div>
              
              <button
                onClick={() => setCurrentMonth(new Date(currentMonth.setMonth(currentMonth.getMonth() + 1)))}
                className="p-1 hover:bg-fieldColor-light/10 dark:hover:bg-fieldColor-dark/10 rounded"
              >
                <FaChevronRight size={14} />
              </button>
            </div>

            {renderCalendarDays()}
          </div>
        )}
      </div>

      {errorMessage && (
        <p className="absolute text-[11px] font-medium -bottom-1 left-1 text-red-600 dark:text-red-300">
          {errorMessage}
        </p>
      )}
    </div>
  );
};

export default DatePicker;