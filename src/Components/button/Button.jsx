import classNames from "classnames";
import React, { Fragment } from "react";

const Button = ({ color, className, label, onClick }) => {
  return (
    <Fragment>
      <button
        onClick={onClick}
        className={classNames(`btn ${color}`, className)}
      >
        {label}
      </button>
    </Fragment>
  );
};

export default Button;
