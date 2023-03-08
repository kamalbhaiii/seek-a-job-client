import classNames from "classnames";
import React, { Fragment } from "react";
import ExperienceAccordion from "../../../../../../accordion/experienceAccordion/ExperienceAccordion";
import ListItemOrdered from "../../../../../../listItemOrdered/ListItemOrdered";

const JobExperienceCard = ({ data, cardShortView }) => {
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

export default JobExperienceCard;
