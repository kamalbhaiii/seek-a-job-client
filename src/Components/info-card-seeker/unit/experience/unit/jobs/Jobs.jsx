import React, { Fragment } from "react";
import ListItemOrdered from "../../../../../listItemOrdered/ListItemOrdered";

const Jobs = ({ data }) => {
  return (
    <Fragment>
      <div className="px-4">
        <label className="label font-semibold">JOB(S)</label>
        <ListItemOrdered list={data.job} />
      </div>
    </Fragment>
  );
};

export default Jobs;
