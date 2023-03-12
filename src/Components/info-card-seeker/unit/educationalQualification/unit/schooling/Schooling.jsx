import React, { Fragment } from "react";
import ListItemOrdered from "../../../../../listItemOrdered/ListItemOrdered";
import JobExperienceCarousel from "../../../../../carousel/JobExperienceCarousel";

const Schooling = ({ data }) => {
  return (
    <Fragment>
      <div className="px-4">
        <label className="label font-semibold">SCHOOLING(S)</label>
        <JobExperienceCarousel id="schooling" data={data?.schooling} />
      </div>
    </Fragment>
  );
};

export default Schooling;
