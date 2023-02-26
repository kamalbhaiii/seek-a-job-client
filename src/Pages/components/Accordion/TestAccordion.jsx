import React, { Fragment } from "react";
import CandidateAccordion from "../../../Components/accordion/candidateAccordion/CandidateAccordion";
import JobAccordion from "../../../Components/accordion/jobAccordion/JobAccordion";
import InfoCardRecruiter from "../../../Components/info-card-recruiter/InfoCardRecruiter";
import InfoCardSeeker from "../../../Components/info-card-seeker/InfoCardSeeker";
import { sampleCandidateData, sampleJobData } from "../../../utils/sampleData";

const TestAccordion = () => {
  return (
    <Fragment>
      <div className="grid gap-y-5">
        {sampleJobData?.map((data, key) => {
          return (
            <JobAccordion key={key} data={data}>
              <InfoCardRecruiter />
            </JobAccordion>
          );
        })}
      </div>
      <div className="grid gap-y-5">
        {sampleCandidateData?.map((data, key) => {
          return (
            <CandidateAccordion key={key} data={data}>
              <InfoCardSeeker />
            </CandidateAccordion>
          );
        })}
      </div>
    </Fragment>
  );
};

export default TestAccordion;
