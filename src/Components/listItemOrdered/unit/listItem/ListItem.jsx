import React, { Fragment } from "react";
import Kbd from "../../../kbd/Kbd";

const ListItem = ({ id, item }) => {
  return (
    <Fragment>
      <div className="flex">
        <label className="label">
          <Kbd text={id} />
        </label>
        <label className="label">{item}</label>
      </div>
    </Fragment>
  );
};

export default ListItem;
