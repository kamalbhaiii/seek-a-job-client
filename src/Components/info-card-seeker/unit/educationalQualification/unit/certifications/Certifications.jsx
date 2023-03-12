import React, { Fragment } from "react";
import JobExperienceCarousel from "../../../../../carousel/JobExperienceCarousel";
import ListItemOrdered from "../../../../../listItemOrdered/ListItemOrdered";

const Certifications = ({ data }) => {
  return (
    <Fragment>
      <div className="px-4">
        <label className="label font-semibold">CERTIFICATION(S)</label>
        <JobExperienceCarousel data={data?.certification} id="certification" />
      </div>
    </Fragment>
  );
};

export default Certifications;
