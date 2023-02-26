import React, { Fragment } from "react";
import Badge from "../../../badge/Badge";
import Ellipse from "../../../../helpers/ellipsis";

const CandidateAccordionData = ({
  src,
  candidateName,
  highestEduQualification,
  skills,
}) => {
  return (
    <Fragment>
      <div className="grid grid-cols-4 text-xs sm:text-sm md:text-md lg:text-lg">
        <div className="avatar">
          <div className="w-20 rounded">
            <img src={src} alt="logo" />
          </div>
        </div>
        <div className="grid grid-cols-1 grid-rows-2 col-span-2">
          <div>{candidateName}</div>
          <div>{highestEduQualification}</div>
        </div>
        <div className="grid grid-cols-1 gap-y-2 md:grid-cols-2">
          {skills?.map((skill, key) => {
            return (
              <Badge
                key={key}
                className={"badge-xs"}
                type={"info"}
                text={Ellipse(skill) ? Ellipse(skill) : skill}
              />
            );
          })}
        </div>
      </div>
    </Fragment>
  );
};

export default CandidateAccordionData;
