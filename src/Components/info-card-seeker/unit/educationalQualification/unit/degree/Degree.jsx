import React, { Fragment } from "react";
import JobExperienceCarousel from "../../../../../carousel/JobExperienceCarousel";
import ListItemOrdered from "../../../../../listItemOrdered/ListItemOrdered";

const Degree = ({ data }) => {
  return (
    <Fragment>
      <div className="px-4">
        <label className="label font-semibold">DEGREE(S)</label>
        <JobExperienceCarousel data={data?.degree} id={"degree"} />
      </div>
    </Fragment>
  );
};

export default Degree;
