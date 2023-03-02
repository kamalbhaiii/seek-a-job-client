import React, { Fragment } from "react";
import Divider from "../divider/Divider";
import Achievements from "./unit/achievements/Achievements";
import BasicInfo from "./unit/basicInfo/BasicInfo";
import EducationalQualification from "./unit/educationalQualification/EducationalQualification";
import Experience from "./unit/experience/Experience";
import WorkSamples from "./unit/workSamples/WorkSamples";

const InfoCardSeeker = ({ data }) => {
  return (
    <Fragment>
      <Divider />
      <BasicInfo data={data} />
      {data.internship || data.job || data.project ? (
        <>
          <Divider />
          <Experience data={data} />
        </>
      ) : null}
      {data.schooling || data.degree || data.certification ? (
        <>
          <Divider />
          <EducationalQualification data={data} />
        </>
      ) : null}
      {data.work ? (
        <>
          <Divider />
          <WorkSamples data={data} />
        </>
      ) : null}
      {data.achievement ? (
        <>
          <Achievements data={data} />
        </>
      ) : null}
    </Fragment>
  );
};

export default InfoCardSeeker;
