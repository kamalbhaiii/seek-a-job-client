import classNames from "classnames";
import React, { Fragment } from "react";
import Kbd from "../../../kbd/Kbd";

const ListItem = ({ id, children, kbd = true, className }) => {
  return (
    <Fragment>
      <div className="flex">
        {kbd && (
          <label className="label">
            <Kbd text={id} />
          </label>
        )}
        {children && (
          <label className={classNames("label w-full", className)}>
            {children}
          </label>
        )}
      </div>
    </Fragment>
  );
};

export default ListItem;
