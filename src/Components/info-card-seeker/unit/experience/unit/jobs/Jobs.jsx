import React, { Fragment, useState } from "react";
import ButtonToggle from "../../../../../button/button-toggle/ButtonToggle";
import ExperienceCarousel from "../../../../../carousel/Carousel";
import ListItemOrdered from "../../../../../listItemOrdered/ListItemOrdered";
import JobExperienceCard from "./unit/JobExperienceCard";

const Jobs = ({ data }) => {
  const [cardShortView, setCardShortView] = useState(true);
  return (
    <Fragment>
      <div className="px-4">
        <label className="label font-semibold">
          <span>JOB(S)</span>
          <span>
            <ButtonToggle
              name={"jobs"}
              yesTitle="Short"
              noTitle="Long"
              yesEvent={(e) => {
                setCardShortView(true);
              }}
              noEvent={(e) => {
                setCardShortView(false);
              }}
            />
          </span>
        </label>
        <ExperienceCarousel cardShortView={cardShortView} data={data?.job} />
      </div>
    </Fragment>
  );
};

export default Jobs;
