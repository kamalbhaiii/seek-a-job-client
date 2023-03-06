import classNames from "classnames";
import React, { Fragment } from "react";
import Kbd from "../../../kbd/Kbd";

const ListItem = ({ id, children, kbd = true, className, item }) => {
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
        {item && !children && (
          <label className={classNames("label w-full", className)}>
            {item}
          </label>
        )}
      </div>
    </Fragment>
  );
};

export default ListItem;
