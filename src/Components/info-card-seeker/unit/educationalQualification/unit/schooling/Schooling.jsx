import React, { Fragment } from "react";
import ListItemOrdered from "../../../../../listItemOrdered/ListItemOrdered";

const Schooling = ({ data }) => {
  return (
    <Fragment>
      <div className="px-4">
        <label className="label font-semibold">SCHOOLING(S)</label>
        <ListItemOrdered list={data.schooling} />
      </div>
    </Fragment>
  );
};

export default Schooling;
