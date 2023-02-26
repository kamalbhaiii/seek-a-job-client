import React, { Fragment } from "react";
import AccordionData from "./unit/AccordionData";

const Accordion = ({ data, children }) => {
  return (
    <Fragment>
      <div
        tabIndex={0}
        className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box"
      >
        <div className="collapse-title text-xl font-medium">
          <AccordionData src={data?.src} />
        </div>
        <div className="collapse-content">
          {children ? (
            children
          ) : (
            <p>tabIndex={0} attribute is necessary to make the div focusable</p>
          )}
        </div>
      </div>
    </Fragment>
  );
};

export default Accordion;
