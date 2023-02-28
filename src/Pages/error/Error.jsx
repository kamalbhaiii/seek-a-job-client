import React, { Fragment } from "react";
import ErrorComponent from "../../Components/error/Error";

const Error = ({ message }) => {
  return (
    <Fragment>
      <div className="hero h-full bg-base-200">
        <ErrorComponent message={message} />
      </div>
    </Fragment>
  );
};

export default Error;
