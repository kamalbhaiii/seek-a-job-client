import React, { Fragment } from "react";
import { useNavigate } from "react-router-dom";
import "./JobAccordionData.css";

const JobAccordionData = ({
  src,
  position,
  positionType,
  companyName,
  salary,
  id,
}) => {
  const navigate = useNavigate();
  const handleIdClick = (id) => {
    navigate(`/job/${id}`);
  };

  return (
    <Fragment>
      <div className="grid grid-cols-4 text-xs sm:text-sm md:text-md lg:text-lg">
        <div className="avatar">
          <div className="w-20 rounded">
            <img src={src} alt="logo" />
          </div>
        </div>
        <div className="grid grid-cols-1 grid-rows-3 col-span-2">
          <div>
            {position} ({positionType})
          </div>
          <div className="flex items-center">{companyName}</div>
          <div className="flex gap-x-1">
            Job Id:{" "}
            <span
              onClick={(e) => handleIdClick(id)}
              className="text-primary underline flex cursor-pointer hover:text-white"
            >
              {id}
            </span>
          </div>
        </div>
        <div>Rs. {salary} /month.</div>
      </div>
    </Fragment>
  );
};

export default JobAccordionData;
