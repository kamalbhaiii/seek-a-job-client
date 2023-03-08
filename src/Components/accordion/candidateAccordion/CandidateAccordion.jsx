import React, { Fragment } from "react";
import CandidateAccordionData from "./unit/CandidateAccordionData";

const CandidateAccordion = ({ data, children }) => {
  return (
    <Fragment>
      <div className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box focus:border-primary focus:border-4">
        <input className="w-12 absolute right-0 top-10" type="checkbox" />
        <div className="collapse-title text-xl font-medium">
          <CandidateAccordionData
            candidateName={data?.candidateName}
            highestEduQualification={data?.highestQualification}
            skills={data?.skills}
            src={data?.src}
            id={data?._id}
          />
        </div>
        <div className="collapse-content">
          {children ? (
            children
          ) : (
            <p>tabIndex={0} attribute is necessary to make the div focusable</p>
          )}
        </div>
      </div>
    </Fragment>
  );
};

export default CandidateAccordion;
