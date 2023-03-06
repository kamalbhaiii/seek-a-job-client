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
              <InfoCardRecruiter
                startDate={data?.startDate}
                applyBy={data?.applyBy}
                duration={data?.duration}
                location={data?.location}
                modeOfWork={data?.modeOfWork}
                roles={data?.roles}
                skillsRequired={data?.skillsRequired}
                perks={data?.perks}
                addtionalInformation={data?.additionalInformation}
              />
            </JobAccordion>
          );
        })}
      </div>
      <h1>Candidate Accordion</h1>
      <div className="grid gap-y-5">
        {sampleCandidateData?.map((data, key) => {
          return (
            <CandidateAccordion key={key} data={data}>
              <InfoCardSeeker data={data} />
            </CandidateAccordion>
          );
        })}
      </div>
    </Fragment>
  );
};

export default TestAccordion;
