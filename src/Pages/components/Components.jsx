import React, { Fragment } from "react";
import Alert from "../../Components/alert/Alert";
import TestAccordion from "./Accordion/TestAccordion";

const Components = () => {
  return (
    <Fragment>
      <Alert
        type={"info"}
        message="The data shown in this page is a sample data not a real-time data."
      />
      <h1>Components</h1>
      <div className="mx-auto w-full px-5 md:px-10 grid grid-cols-1 gap-y-5">
        <h1>Job Accordion</h1>
        <TestAccordion />
      </div>
    </Fragment>
  );
};

export default Components;
