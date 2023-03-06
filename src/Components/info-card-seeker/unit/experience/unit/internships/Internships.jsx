import React, { Fragment } from "react";
import InternshipExperienceCard from "./unit/InternshipExperienceCard";

const Internships = ({ data }) => {
  return (
    <Fragment>
      <div className="px-4">
        <label className="label font-semibold">INTERNSHIP(S)</label>
        {data?.internship?.map((intern, key) => {
          return <InternshipExperienceCard key={key} data={intern} />;
        })}
      </div>
    </Fragment>
  );
};

export default Internships;
