import React, { Fragment } from "react";
import ListItemOrdered from "../../../../../listItemOrdered/ListItemOrdered";

const Internships = ({ data }) => {
  return (
    <Fragment>
      <div className="px-4">
        <label className="label font-semibold">INTERNSHIP(S)</label>
        <ListItemOrdered list={data.internship} />
      </div>
    </Fragment>
  );
};

export default Internships;
