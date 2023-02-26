import React, { Fragment } from "react";
import "./JobAccordionData.css";

const JobAccordionData = ({
  src,
  position,
  positionType,
  companyName,
  salary,
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
          <div>
            {position} ({positionType})
          </div>
          <div>{companyName}</div>
        </div>
        <div>Rs. {salary} /month.</div>
      </div>
    </Fragment>
  );
};

export default JobAccordionData;
