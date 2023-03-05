import React, { Fragment } from "react";
import ListItemOrdered from "../../../../../listItemOrdered/ListItemOrdered";
import JobExperienceCard from "./unit/JobExperienceCard";

const Jobs = ({ data }) => {
  return (
    <Fragment>
      <div className="px-4">
        <label className="label font-semibold">JOB(S)</label>
        <ListItemOrdered kbd={false} list={data.job}>
          <JobExperienceCard />
        </ListItemOrdered>
      </div>
    </Fragment>
  );
};

export default Jobs;
