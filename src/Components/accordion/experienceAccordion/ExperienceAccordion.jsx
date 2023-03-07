import React, { Fragment } from "react";
import ExperienceAccordionData from "./unit/ExperienceAccordionData";

const ExperienceAccordion = ({ data, children }) => {
  return (
    <Fragment>
      <div
        tabIndex={0}
        className="collapse collapse-arrow border border-base-300 bg-base-200 rounded-box focus:border-primary focus:border-4"
      >
        <div className="collapse-title text-xl font-medium">
          <ExperienceAccordionData data={data} />
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

export default ExperienceAccordion;
