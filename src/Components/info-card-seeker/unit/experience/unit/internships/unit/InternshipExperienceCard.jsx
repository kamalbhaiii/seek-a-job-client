import React, { Fragment } from "react";
import ListItemOrdered from "../../../../../../listItemOrdered/ListItemOrdered";
import ExperienceAccordion from "../../../../../../accordion/experienceAccordion/ExperienceAccordion";

const InternshipExperienceCard = ({ data }) => {
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

export default InternshipExperienceCard;
