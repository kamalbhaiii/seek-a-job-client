import React, { Fragment } from "react";
import classNames from "classnames";
import ProjectAccordionData from "./unit/ProjectExperienceAccordionData";

const ProjectExperienceAccordion = ({ data, className, children }) => {
  return (
    <Fragment>
      <div
        className={classNames(
          "border border-base-300 bg-base-200 rounded-box w-full",
          className
        )}
      >
        <div className="text-xl font-medium">
          <ProjectAccordionData data={data} />
        </div>
        <div>{children && children}</div>
      </div>
    </Fragment>
  );
};

export default ProjectExperienceAccordion;
