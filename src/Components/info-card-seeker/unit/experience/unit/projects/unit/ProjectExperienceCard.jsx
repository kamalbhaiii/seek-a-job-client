import React, { Fragment } from "react";
import ProjectExperienceAccordion from "../../../../../../accordion/projectExperienceAccordion/ProjectExperienceAccordion";
import classNames from "classnames";

const ProjectExperienceCard = ({ data, cardShortView }) => {
  return (
    <Fragment>
      <ProjectExperienceAccordion data={data}>
        <h4
          className={classNames(
            "font-light text-md mx-10 mb-10",
            cardShortView ? "hidden" : "flex"
          )}
        >
          <div className="grid grid-cols-8">
            <div className="col-start-2 col-end-8">{data?.description}</div>
          </div>
        </h4>
      </ProjectExperienceAccordion>
    </Fragment>
  );
};

export default ProjectExperienceCard;
