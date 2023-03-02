import React, { Fragment } from "react";
import ListItemOrdered from "../../../../../listItemOrdered/ListItemOrdered";

const Projects = ({ data }) => {
  return (
    <Fragment>
      <div className="px-4">
        <label className="label font-semibold">PROJECT(S)</label>
        <ListItemOrdered list={data.project} />
      </div>
    </Fragment>
  );
};

export default Projects;
