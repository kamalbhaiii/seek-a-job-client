import classNames from "classnames";
import React, { Fragment } from "react";

const Avatar = ({ src, className }) => {
  return (
    <Fragment>
      <div className="avatar placeholder">
        {src ? (
          <div className={classNames("w-20 rounded", className)}>
            <img src={src} alt="logo" />
          </div>
        ) : (
          <div className="bg-neutral-focus text-neutral-content rounded w-12 h-20 sm:w-20">
            <span className="text-sm lg:text-5xl">?</span>
          </div>
        )}
      </div>
    </Fragment>
  );
};

export default Avatar;
