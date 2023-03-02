import React, { Fragment } from "react";
import ListItemOrdered from "../../../../../listItemOrdered/ListItemOrdered";

const Certifications = ({ data }) => {
  return (
    <Fragment>
      <div className="px-4">
        <label className="label font-semibold">CERTIFICATION(S)</label>
        <ListItemOrdered list={data.certification} />
      </div>
    </Fragment>
  );
};

export default Certifications;
