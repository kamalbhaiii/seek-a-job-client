import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import Divider from "../divider/Divider";
import AdditionalInformation from "./unit/additionalInformation/AdditionalInformation/AdditionalInformation";
import BasicInfoBar from "./unit/basicInfoBar/BasicInfoBar";
import JobRole from "./unit/jobRole/JobRole";
import Perks from "./unit/perks/Perks";
import SkillsRequired from "./unit/skillsRequired/SkillsRequired";

const InfoCardRecruiter = ({
  startDate,
  applyBy,
  duration,
  location,
  roles,
  skillsRequired,
  perks,
  addtionalInformation,
}) => {
  const selectedReducer = useSelector((state) => state.selectedReducer);
  return (
    <Fragment>
      <Divider />
      <div className="grid grid-cols-2 md:grid-cols-5 text-xs sm:text-sm md:text-md lg:text-lg gap-x-2">
        <BasicInfoBar
          startDate={startDate}
          applyBy={applyBy}
          duration={duration}
          location={location}
          id={selectedReducer?.jobId}
        />
      </div>
      <Divider />
      <div className="grid grid-cols-1 text-xs sm:text-sm md:text-md lg:text-lg">
        <JobRole roles={roles} />
      </div>
      <Divider />
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="grid grid-cols-1 text-xs sm:text-sm md:text-md lg:text-lg">
          <SkillsRequired skillsRequired={skillsRequired} />
        </div>
        <div className="grid grid-cols-1 text-xs sm:text-sm md:text-md lg:text-lg">
          <Perks perks={perks} />
        </div>
      </div>
      {addtionalInformation ? (
        <>
          <Divider />
          <div className="grid grid-cols-1 text-xs sm:text-sm md:text-md lg:text-lg">
            <AdditionalInformation information={addtionalInformation} />
          </div>
        </>
      ) : null}
    </Fragment>
  );
};

export default InfoCardRecruiter;
