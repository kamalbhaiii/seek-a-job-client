import React, { Fragment } from "react";
import Internships from "./unit/internships/Internships";
import Jobs from "./unit/jobs/Jobs";
import Projects from "./unit/projects/Projects";

const Experience = ({ data }) => {
  return (
    <Fragment>
      <label className="label font-bold">EXPERIENCE</label>
      {data?.job && <Jobs data={data} />}
      {data?.internship && <Internships data={data} />}
      {data?.project && <Projects data={data} />}
    </Fragment>
  );
};

export default Experience;
