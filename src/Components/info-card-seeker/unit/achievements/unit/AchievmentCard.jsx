import classNames from "classnames";
import React, { Fragment } from "react";

const AchievmentCard = ({ data, className }) => {
  return (
    <Fragment>
      <div className="border border-base-300 bg-base-200 rounded-box w-full mx-4 p-4">
        <h3 className={classNames("text-lg", className)}>{data}</h3>
      </div>
    </Fragment>
  );
};

export default AchievmentCard;
