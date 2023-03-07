import classNames from "classnames";
import React, { Fragment } from "react";

const Divider = ({ className }) => {
  return (
    <Fragment>
      <div className={classNames("divider", className)}></div>
    </Fragment>
  );
};

export default Divider;
