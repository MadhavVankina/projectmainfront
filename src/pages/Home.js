import React, { useState } from "react";
import { ToastMe } from "../components/common/Toast";
import TextInput from "../components/formElements/TextInput";
import Skeleton from "../components/common/Skeleton";
import TextAreaInput from "../components/formElements/TextAreaInput";
import Checkbox from "../components/formElements/CheckBox";
import PrimaryButton from "../components/formElements/PrimaryButton";
import SecondaryButton from "../components/formElements/SecondaryButton";
import AccentButton from "../components/formElements/AccentButton";
import Dropdown from "../components/formElements/Dropdown";
import Tabs from "../components/common/Tabs";
import Slider from "../components/common/Slider";
import MenuTabs from "../components/common/MenuTabs";

const Home = () => {
  const [testValue, setTestValue] = useState("");
  const [isError, setIsError] = useState(true);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [selectedvalues, setSelectedValues] = useState([]);
  const [activeTab, setActiveTab] = useState(0);

  localStorage.setItem("muted", "1");

  const options = [
    {
      value: 0,
      label: "Algorithms",
    },
    {
      value: 1,
      label: "Matrix",
    },
    {
      value: 2,
      label: "Linear Algebra",
    },
    {
      value: 3,
      label: "Graphs",
    },
    {
      value: 4,
      label: "Binary Tree",
    },
  ];

  return (
    <div className="overflow-hidden">
      <Skeleton>
        <MenuTabs />
        <Tabs
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          titleAndContent={{
            Algorithms: (
              <div className="w-full h-[50vh] bg-secondary-light/10 flex justify-center items-center">
                Algorithms
              </div>
            ),
            "Binary Tree": (
              <div className="w-full h-[50vh] bg-secondary-light/20 flex justify-center items-center">
                Binary Tree
              </div>
            ),
            Recursion: (
              <div className="w-full h-[50vh] bg-secondary-light/30 flex justify-center items-center">
                Recursion
              </div>
            ),
            "Data Structures": (
              <div className="w-full h-[50vh] bg-secondary-light/40 flex justify-center items-center">
                Data Structures
              </div>
            ),
            Matrix: (
              <div className="w-full h-[50vh] bg-secondary-light/50 flex justify-center items-center">
                Matrix
              </div>
            ),
            "Elementry Data Structures": (
              <div className="w-full h-[50vh] bg-secondary-light/60 flex justify-center items-center">
                Elementry Data Structures
              </div>
            ),
            "Hash Tables": (
              <div className="w-full h-[50vh] bg-secondary-light/70 flex justify-center items-center">
                Hash Tables
              </div>
            ),
          }}
        />
        <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-x-4 gap-y-2">
          <Dropdown
            multi={true}
            searchable={true}
            label={"Dropdown"}
            options={options}
            selectedvalues={selectedvalues}
            setSelectedValues={setSelectedValues}
          />
          <TextInput
            name={"test"}
            placeholder={"Placeholder here..."}
            label={"Test Label"}
            value={testValue}
            onChange={(e) => {
              setTestValue(e.target.value);
            }}
            validationRules={["email", "required"]}
            setIsError={(errorMessage) => {
              console.log(errorMessage, "errorMessage");
            }}
            formSubmitted={formSubmitted}
            // isPassword={true}
          />
          <TextInput
            name={"test"}
            placeholder={"Placeholder here..."}
            label={"Test Label"}
          />
          <TextInput
            name={"test"}
            placeholder={"Placeholder here..."}
            label={"Test Label"}
          />
          <TextInput
            name={"test"}
            placeholder={"Placeholder here..."}
            label={"Test Label"}
          />
          <Checkbox
            label={
              "This is a checkbox test. Please click on the box to check it."
            }
            formSubmitted={formSubmitted}
            validationRules={["required"]}
          />
          <Checkbox
            label={
              "This is a checkbox test. Please click on the box to check it."
            }
            formSubmitted={formSubmitted}
            validationRules={["required"]}
          />
          <PrimaryButton label={"Primary Button"} />
          <SecondaryButton label={"Secondary Button"} />
          <AccentButton label={"Accent Button"} />
        </div>
        <TextAreaInput
          name={"test"}
          placeholder={"Placeholder here..."}
          label={"Test Label"}
        />

        <div className="h-40 bg-gradient-to-r  from-secondary-light to-accent-light dark:from-secondary-dark dark:to-accent-dark"></div>
        <button
          onClick={() => ToastMe.success("Toast Completed")}
          className="h-40 bg-primary-light/10 dark:bg-primary-dark/10 col-span-1"
        ></button>
        <button className="h-40 bg-primary-light dark:bg-primary-dark"></button>
        <div className="h-40 bg-secondary-light/40 dark:bg-secondary-dark/40"></div>
        <div className="h-40 bg-primary-light/20 dark:bg-primary-dark/20"></div>
        <div className="h-40 bg-accent-light dark:bg-accent-dark"></div>
        <div className="h-40 bg-accent-light/20 dark:bg-accent-dark/20"></div>
        <div className="h-40 bg-fieldColor-light/10 dark:bg-fieldColor-dark/10"></div>
      </Skeleton>
      <div className="pb-[40vh] pt-[10vh] bg-background-light dark:bg-background-dark flex flex-col gap-[10vh]">
        <Slider
          slidePerView={5}
          aspectRatio={"16/9"}
          data={[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]}
        />
        <Slider
          slidePerView={5}
          aspectRatio={"16/9"}
          data={[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]}
        />

        <div className="h-40 bg-fieldColor-light/10 dark:bg-fieldColor-dark/10">
          {/* <VideoPlayer /> */}
        </div>
      </div>
    </div>
  );
};

export default Home;
