import classNames from "classnames";
import React, { Fragment } from "react";
import ProjectAccordionData from "./unit/ProjectAccordionData";

const ProjectAccordion = ({ data, children, className }) => {
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

export default ProjectAccordion;
