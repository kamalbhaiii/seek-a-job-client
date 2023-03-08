import React, { Fragment } from "react";
import ButtonToggle from "../../../../../button/button-toggle/ButtonToggle";
import ListItemOrdered from "../../../../../listItemOrdered/ListItemOrdered";

const Projects = ({ data }) => {
  return (
    <Fragment>
      <div className="px-4">
        <label className="label font-semibold text-sm">
          <span>PROJECT(S)</span>
          <div>
            <ButtonToggle noTitle="Long" yesTitle="Short" name={"project"} />
          </div>
        </label>
        <ListItemOrdered list={data.project} />
      </div>
    </Fragment>
  );
};

export default Projects;
