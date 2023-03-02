import React, { Fragment } from "react";
import ListItemOrdered from "../../../../../listItemOrdered/ListItemOrdered";

const Degree = ({ data }) => {
  return (
    <Fragment>
      <div className="px-4">
        <label className="label font-semibold">DEGREE(S)</label>
        <ListItemOrdered list={data.degree} />
      </div>
    </Fragment>
  );
};

export default Degree;
