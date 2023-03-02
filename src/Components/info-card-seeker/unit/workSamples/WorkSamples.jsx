import React, { Fragment } from "react";
import ListItemOrdered from "../../../listItemOrdered/ListItemOrdered";

const WorkSamples = ({ data }) => {
  return (
    <Fragment>
      <label className="label font-bold">PORTFOLIO/WORK SAMPLES</label>
      <ListItemOrdered list={data.work} />
    </Fragment>
  );
};

export default WorkSamples;
