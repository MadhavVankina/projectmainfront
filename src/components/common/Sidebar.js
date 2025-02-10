import React, { useState, useEffect } from "react";
import { FaChevronDown } from "react-icons/fa";

const Sidebar = ({
  currActiveState = {
    title: "Organization",
    subtitle: "Factory",
  },
}) => {
  const data = [
    {
      title: "Organization",
      subtitles: ["Factory", "Floor", "Activity"],
    },
    {
      title: "Products",
      subtitles: ["Product", "Product Component", "Product Type"],
    },
    {
      title: "Partners",
      subtitles: [
        "Contractor",
        "Contractor Rate",
        "Subcontractor",
        "Subcontractor Rate",
        "Subcontractor Client",
      ],
    },
    {
      title: "Users",
      subtitles: ["Roles"],
    },
  ];

  // Initialize with the index of currActiveState.title
  const [openAccordionIndex, setOpenAccordionIndex] = useState(() => {
    return data.findIndex(item => item.title === currActiveState.title);
  });

  // Handle accordion toggle
  const handleAccordionToggle = (index) => {
    setOpenAccordionIndex(prevIndex => prevIndex === index ? null : index);
  };

  return (
    <div className="min-w-[260px] bg-white rounded-[8px] p-3 flex flex-col gap-2">
      {data.map((item, index) => (
        <Accordion
          key={item.title}
          item={item}
          isOpen={openAccordionIndex === index}
          onToggle={() => handleAccordionToggle(index)}
          currActiveState={currActiveState}
        />
      ))}
    </div>
  );
};

const Accordion = ({ item, isOpen, onToggle, currActiveState }) => {
  return (
    <div
      className={`transition-none rounded-[4px] overflow-hidden ${
        isOpen ? "bg-black text-white" : "bg-white text-black"
      } border-2 border-black hover:bg-black hover:text-white`}
    >
      <button
        className="transition-none p-2 w-full text-start text-[14px] font-bold flex justify-between items-center"
        onClick={onToggle}
        type="button"
      >
        {item.title}
        <FaChevronDown 
          className={`transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`} 
        />
      </button>
      {isOpen && (
        <div className="p-2 px-3 gap-4 flex w-full">
          <div className="w-[1px] bg-white/50" />
          <div className="w-full flex flex-col gap-1">
            {item.subtitles.map((subtitle) => (
              <div
                key={subtitle}
                className={`border hover:border-white py-1 px-2 w-full cursor-pointer text-[12px] rounded-[4px] ${
                  currActiveState?.subtitle === subtitle
                    ? "border-white"
                    : "border-black"
                }`}
              >
                {subtitle}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Sidebar;