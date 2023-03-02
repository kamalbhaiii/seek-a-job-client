import React, { Fragment } from "react";
import Certifications from "./unit/certifications/Certifications";
import Degree from "./unit/degree/Degree";
import Schooling from "./unit/schooling/Schooling";

const EducationalQualification = ({ data }) => {
  return (
    <Fragment>
      <label className="label font-bold">EDUCATIONAL QUALIFICATION</label>
      {data?.degree && <Degree data={data} />}
      {data?.schooling && <Schooling data={data} />}
      {data?.certification && <Certifications data={data} />}
    </Fragment>
  );
};

export default EducationalQualification;
