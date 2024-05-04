import React from "react";

const Tabs = ({
  activeTab,
  titleAndContent,
  setActiveTab,
  tabTextSize = "text-[12px]",
}) => {
  const titles = Object.keys(titleAndContent);
  const content = Object.values(titleAndContent);
  return (
    <>
      <div className="TITLES tab-scroll flex gap-3 overflow-x-auto py-2">
        {titles &&
          titles.map((title, index) => (
            <button
              onClick={() => setActiveTab(index)}
              className={`${tabTextSize} px-4 py-2 ${index === activeTab ? " bg-accent-light dark:bg-secondary-dark/80" : "border border-fieldColor-light/50 dark:border-fieldColor-dark/50 hover:border-secondary-light hover:bg-secondary-light/20 dark:hover:bg-secondary-dark/20 dark:hover:border-secondary-dark"} text-fieldColor-light/80 dark:text-fieldColor-dark/80 rounded-[50px] font-bold whitespace-nowrap`}
            >
              {title}
            </button>
          ))}
      </div>
      <div className="CONTENT text-fieldColor-light dark:text-fieldColor-dark">
        {content[activeTab]}
      </div>
    </>
  );
};

export default Tabs;
