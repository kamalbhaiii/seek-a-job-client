import React, { Fragment } from "react";
import ListItemOrdered from "../../../listItemOrdered/ListItemOrdered";

const JobRole = ({ roles }) => {
  return (
    <Fragment>
      <label htmlFor="roles" className="label font-bold">
        ROLE AND RESPONSIBLITIES
      </label>
      <ListItemOrdered list={roles} />
    </Fragment>
  );
};

export default JobRole;
