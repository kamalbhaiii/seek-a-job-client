import React, { Fragment } from "react";
import ProjectExperienceAccordion from "../../../../../../accordion/projectExperienceAccordion/ProjectExperienceAccordion";
import classNames from "classnames";
import Badge from "../../../../../../badge/Badge";

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
          <div className="grid grid-cols-8 gap-y-2">
            <div className="col-start-2 col-end-8 h-max">
              {data?.topics?.map((topic, key) => {
                return (
                  <Badge
                    className={"mx-2"}
                    type={"info"}
                    text={topic}
                    key={key}
                  />
                );
              })}
            </div>
            <div className="col-start-2 col-end-8 text-xs sm:text-sm">
              {data?.description}
            </div>
          </div>
        </h4>
      </ProjectExperienceAccordion>
    </Fragment>
  );
};

export default ProjectExperienceCard;
