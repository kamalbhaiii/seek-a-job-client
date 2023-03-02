import React, { Fragment } from "react";

const BasicInfo = ({ data }) => {
  return (
    <Fragment>
      <label className="label font-bold">BASIC INFORMATION</label>
      <label className="label">{data?.about}</label>
    </Fragment>
  );
};

export default BasicInfo;
