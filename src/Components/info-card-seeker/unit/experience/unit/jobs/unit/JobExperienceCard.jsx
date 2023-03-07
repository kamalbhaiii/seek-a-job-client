import React, { Fragment } from "react";
import ExperienceAccordion from "../../../../../../accordion/experienceAccordion/ExperienceAccordion";
import ListItemOrdered from "../../../../../../listItemOrdered/ListItemOrdered";

const JobExperienceCard = ({ data }) => {
  return (
    <Fragment>
      <ExperienceAccordion data={data}>
        <h4 className="font-light w-max text-xs">
          <ListItemOrdered list={data?.roles || [1, 2, 3]} />
        </h4>
      </ExperienceAccordion>
    </Fragment>
  );
};

export default JobExperienceCard;
