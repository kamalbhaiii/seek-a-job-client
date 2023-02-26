import React, { Fragment } from "react";

const AdditionalInformation = ({ information }) => {
  return (
    <Fragment>
      <label className="label font-bold">ADDITIONAL INFORMATION</label>
      <label className="label">{information}</label>
    </Fragment>
  );
};

export default AdditionalInformation;
