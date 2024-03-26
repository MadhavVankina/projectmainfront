import React, { useEffect, useState } from "react";
import Navbar from "../components/common/Navbar";
import { ToastMe } from "../components/common/Toast";
import TextInput from "../components/formElements/TextInput";
import Skeleton from "../components/common/Skeleton";
import TextAreaInput from "../components/formElements/TextAreaInput";
import Checkbox from "../components/formElements/CheckBox";

const Home = () => {
  const [testValue, setTestValue] = useState("");
  const [isError, setIsError] = useState(true);
  const [formSubmitted, setFormSubmitted] = useState(false);

  return (
    <Skeleton>
      <button onClick={() => setFormSubmitted(true)}>Sublit</button>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-x-4 gap-y-2">
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
          label={"This is a checkbox test. Please click on the box to check it."}
          formSubmitted={formSubmitted}
          validationRules={["required"]}
        />
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
  );
};

export default Home;
