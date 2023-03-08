import React, { Fragment } from "react";
import ListItemOrdered from "../../../../../../listItemOrdered/ListItemOrdered";
import ExperienceAccordion from "../../../../../../accordion/experienceAccordion/ExperienceAccordion";
import classNames from "classnames";

const InternshipExperienceCard = ({ data, cardShortView }) => {
  return (
    <Fragment>
      <ExperienceAccordion data={data}>
        <h4
          className={classNames(
            "font-light w-max text-xs mx-10",
            cardShortView ? "hidden" : "block"
          )}
        >
          <ListItemOrdered list={data?.roles || [1, 2, 3]} />
        </h4>
      </ExperienceAccordion>
    </Fragment>
  );
};

export default InternshipExperienceCard;
