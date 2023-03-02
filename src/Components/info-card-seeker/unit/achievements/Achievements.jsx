import React, { Fragment } from "react";
import ListItemOrdered from "../../../listItemOrdered/ListItemOrdered";

const Achievements = ({ data }) => {
  return (
    <Fragment>
      <label className="label font-bold">ACCOMPLISHMENTS/ACHIEVEMENTS</label>
      <ListItemOrdered list={data.achievement} />
    </Fragment>
  );
};

export default Achievements;
