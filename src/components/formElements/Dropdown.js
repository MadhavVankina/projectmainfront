import React, { useRef, useState } from "react";
import { GiCancel } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import { FaSortDown } from "react-icons/fa";

const Dropdown = ({
  label,
  validationRules = [],
  multi = true,
  loading = false,
  selectedvalues = [],
  setSelectedValues = () => {},
  searchable = false,
  selectPlaceholder = "Select an item",
  searchPlaceholder = "Search item",
  options = [],
}) => {
  const dropdownRef = useRef();

  const [searchValue, setSearchValue] = useState("");
  const [showItems, setShowItems] = useState(false);

  const handleDeleteValue = (index) => {
    setSelectedValues((prev) => prev.filter((_, idx) => idx !== index));
  };

  const handleToggleShowItems = () => {
    setShowItems((prev) => !prev);
  };

  const handleHideItems = () => {
    setShowItems(false);
  };

  const handleItemSelect = (item) => {
    const isItemAlreadySelected = selectedvalues.some(
      (value) => value.value === item.value
    );
    if (!isItemAlreadySelected && multi) {
      setSelectedValues((prev) => [...prev, item]);
    } else {
      setSelectedValues([item]);
    }
    setSearchValue("");
    setShowItems(false);
  };

  return (
    <div className="flex flex-col gap-1 pb-4 relative transition-none">
      {label && (
        <label className="text-black/60 dark:text-white/60 text-xs">
          {label}{" "}
          {validationRules.includes("required") && (
            <span className="text-red-600 dark:text-red-300">*</span>
          )}
        </label>
      )}
      <div className="bg-fieldColor-light/10 dark:bg-fieldColor-dark/10 text-fieldColor-light dark:text-fieldColor-dark p-2 focus:outline-none placeholder:text-fieldColor-light/50 placeholder:dark:text-fieldColor-dark/50 border border-fieldColor-light/10 dark:border-fieldColor-dark/10 flex gap-2 justify-between transition-none">
        <div className="flex gap-2 flex-wrap w-full">
          {selectedvalues &&
            multi &&
            selectedvalues.map((value, index) => (
              <div
                key={index}
                className="text-[12px] py-[3px] px-3 bg-accent-dark/80 dark:bg-accent-dark/40 rounded-[4px] flex gap-1 transition-none font-medium"
              >
                <p>{value.label}</p>{" "}
                <IoMdClose
                  onClick={() => handleDeleteValue(index)}
                  size={12}
                  className="ml-1 mt-[2.5px] cursor-pointer transition-none"
                />
              </div>
            ))}
          {!multi && (
            <p className="text-fieldColor-light dark:text-fieldColor-dark">
              {selectedvalues[0]?.label}
            </p>
          )}
          {selectedvalues.length === 0 && !searchable && (
            <p className="text-fieldColor-light/50 dark:text-fieldColor-dark/50 ">
              {selectPlaceholder}
            </p>
          )}
          {searchable && (
            <input
              value={searchValue}
              placeholder={searchPlaceholder}
              className="bg-transparent focus:outline-none placeholder:text-fieldColor-light/50 dark:placeholder:text-fieldColor-dark/60"
              onChange={(event) => {
                setShowItems(true);
                setSearchValue(event.target.value);
              }}
            />
          )}
        </div>
        <button
          ref={dropdownRef}
          className="h-full text-fieldColor-light dark:text-fieldColor-dark transition-none"
          onClick={handleToggleShowItems}
          onBlur={() =>
            setTimeout(() => {
              handleHideItems();
            }, 500)
          }
        >
          <FaSortDown className="mb-[5px]" size={18} />
        </button>
      </div>

      <div className="relative">
        {showItems && (
          <div className="absolute left-0 top-0 w-full z-10 max-h-44 overflow-auto bg-fieldColor-dark dark:bg-fieldColor-light">
            {options
              .filter((item) => {
                if (searchValue.length > 0) {
                  return item.label
                    .toLowerCase()
                    .includes(searchValue.toLowerCase());
                } else {
                  return true;
                }
              })
              .map((item) => {
                const isSelected = selectedvalues.some(
                  (value) => value.value === item.value
                );
                const backgroundColor = isSelected
                  ? "bg-accent-light/20 dark:bg-secondary-dark/20"
                  : "bg-fieldColor-light/20 dark:bg-fieldColor-dark/20";
                const hoverBackground = isSelected
                  ? ""
                  : "hover:bg-fieldColor-light/30 hover:dark:bg-fieldColor-dark/30";

                return (
                  <div
                    key={item.value}
                    onClick={() => handleItemSelect(item)}
                    className={`cursor-pointer p-2 ${backgroundColor} ${hoverBackground} text-fieldColor-light dark:text-fieldColor-dark`}
                  >
                    {item.label}
                  </div>
                );
              })}
          </div>
        )}
      </div>
    </div>
  );
};

export default Dropdown;
