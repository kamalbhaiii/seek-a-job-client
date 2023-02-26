import React, { Fragment } from "react";

const AccordionData = ({ src }) => {
  return (
    <Fragment>
      <div className="grid grid-cols-3">
        <div className="avatar">
          <div className="w-20 rounded">
            <img src={src} alt="logo" />
          </div>
        </div>
        <div className="grid grid-cols-1 grid-row-2">
          <div>Position Name and Type</div>
          <div>Company Name</div>
        </div>
        <div>Salary/Stipend</div>
      </div>
    </Fragment>
  );
};

export default AccordionData;
