import React, { Fragment } from "react";
import { useDispatch } from "react-redux";
import JobAccordionData from "./unit/JobAccordionData";
import { selectedAction } from "../../../redux/index";

const JobAccordion = ({ data, children }) => {
  const dispatch = useDispatch();
  return (
    <Fragment>
      <div
        tabIndex={0}
        className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box focus:border-primary focus:border-4 p-2"
        onFocus={() => {
          dispatch(selectedAction.setSelectedJob(data?._id));
        }}
      >
        <div className="collapse-title text-xl font-medium">
          <JobAccordionData
            src={data?.src}
            companyName={data?.companyName}
            position={data?.position}
            positionType={data?.positionType}
            salary={data?.salary}
            id={data?._id}
            companyUrl={data?.companyUrl}
            location={data?.location}
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

export default JobAccordion;
