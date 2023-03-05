import React, { Fragment } from "react";
import Badge from "../../../badge/Badge";
import Ellipse from "../../../../helpers/ellipsis";
import { useNavigate } from "react-router-dom";

const CandidateAccordionData = ({
  src,
  candidateName,
  highestEduQualification,
  skills,
  id,
}) => {
  const navigate = useNavigate();
  const handleIdClick = (id) => {
    navigate(`/candidate/${id}`);
  };
  return (
    <Fragment>
      <div className="grid grid-cols-4 text-xs sm:text-sm md:text-md lg:text-lg">
        <div className="avatar">
          <div className="w-20 rounded">
            <img src={src} alt="logo" />
          </div>
        </div>
        <div className="grid grid-cols-1 grid-rows-3 col-span-2 gap-y-2">
          <div>{candidateName}</div>
          <div>{highestEduQualification}</div>
          <div className="flex gap-x-1">
            Candidate Id:{" "}
            <span
              onClick={(e) => handleIdClick(id)}
              className="text-primary underline flex cursor-pointer hover:text-white"
            >
              {id}
            </span>
          </div>
        </div>
        <div className="hidden md:grid grid-cols-1 gap-y-2 md:grid-cols-2">
          {skills?.map((skill, key) => {
            return (
              <Badge
                key={key}
                className={"badge-xs sm:badge-sm md:badge-md"}
                type={"info"}
                text={Ellipse(skill) ? Ellipse(skill) : skill}
              />
            );
          })}
        </div>
      </div>
      <div className="flex-wrap md:hidden">
        {skills?.map((skill, key) => {
          return (
            <Badge
              key={key}
              className={"badge-xs sm:badge-sm md:badge-md mx-2"}
              type={"info"}
              text={Ellipse(skill) ? Ellipse(skill) : skill}
            />
          );
        })}
      </div>
    </Fragment>
  );
};

export default CandidateAccordionData;
