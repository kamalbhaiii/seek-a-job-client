import React, { Fragment } from "react";
import TestAccordion from "./Accordion/TestAccordion";
import TestButton from "./Button/TestButton";
import TestModal from "./Modal/TestModal";

const Components = () => {
  return (
    <Fragment>
      <h1>Components</h1>
      <div className="mx-auto w-full px-5 md:px-10 grid grid-cols-1 gap-y-5">
        <h1>Job Accordion</h1>
        <TestAccordion />
      </div>
      <div className="mx-auto w-full px-5 md:px-10 grid grid-cols-1 gap-y-5">
        <h1>Test Buttons</h1>
        <TestButton />
      </div>
    </Fragment>
  );
};

export default Components;
