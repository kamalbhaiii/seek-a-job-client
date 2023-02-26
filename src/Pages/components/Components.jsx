import React, { Fragment } from "react";
import Accordion from "../../Components/accordion/Accordion";
import TestAccordion from "./Accordion/TestAccordion";

const Components = () => {
  return (
    <Fragment>
      <h1>Components</h1>
      <div className="border border-white mx-auto w-3/4 grid grid-cols-1 gap-y-5">
        <h1>Accordion</h1>
        <TestAccordion />
      </div>
    </Fragment>
  );
};

export default Components;
