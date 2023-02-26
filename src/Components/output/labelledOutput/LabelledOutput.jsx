import React, { Fragment } from "react";

const LabelledOutput = ({ label, value }) => {
  return (
    <Fragment>
      <label htmlFor="startDate" className="label font-bold">
        {label.toUpperCase()}
      </label>
      <label className="label">{value}</label>
    </Fragment>
  );
};

export default LabelledOutput;
