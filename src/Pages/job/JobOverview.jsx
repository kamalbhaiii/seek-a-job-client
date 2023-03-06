import React, { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import JobAccordionData from "../../Components/accordion/jobAccordion/unit/JobAccordionData";
import { jobAction } from "../../redux/index";
import Divider from "../../Components/divider/Divider";
import BasicInfoBar from "../../Components/info-card-recruiter/unit/basicInfoBar/BasicInfoBar";
import JobRole from "../../Components/info-card-recruiter/unit/jobRole/JobRole";
import SkillsRequired from "../../Components/info-card-recruiter/unit/skillsRequired/SkillsRequired";
import Perks from "../../Components/info-card-recruiter/unit/perks/Perks";
import Error from "../error/Error";
import AdditionalInformation from "../../Components/info-card-recruiter/unit/additionalInformation/AdditionalInformation/AdditionalInformation";
import About from "../../Components/info-card-recruiter/unit/about/About";

const JobOverview = () => {
  const location = useLocation();
  const [id, setId] = useState(location?.pathname?.split("/")[2]);
  const [data, setData] = useState(null);
  const dispatch = useDispatch();
  const jobReducer = useSelector((state) => state.jobReducer);

  useEffect(() => {
    dispatch(jobAction.getJobById(Number(id)));
  }, [id]);

  useEffect(() => {
    if (jobReducer.loading === false) {
      if (jobReducer.data) {
        setData(jobReducer?.data);
      }
    }
  }, [jobReducer]);

  return (
    <Fragment>
      {jobReducer?.err ? (
        <Error message={jobReducer.err} />
      ) : (
        <div className="p-5 sm:p-10 sm:pb-5 md:p-20 md:pb-5">
          <JobAccordionData
            companyName={data?.companyName}
            id={data?._id}
            position={data?.position}
            positionType={data?.positionType}
            salary={data?.salary}
            src={data?.src}
            companyUrl={data?.companyUrl}
            location={data?.location}
          />
          <Divider />
          <div className="grid grid-cols-2 md:grid-cols-5 text-xs sm:text-sm md:text-md lg:text-lg gap-x-2">
            <BasicInfoBar
              startDate={data?.startDate}
              applyBy={data?.applyBy}
              duration={data?.duration}
              id={data?._id}
              modeOfWork={data?.modeOfWork}
            />
          </div>
          <Divider />
          <div className="grid grid-cols-1">
            <About about={data?.about} />
          </div>
          <Divider />
          <div className="grid grid-cols-1 text-xs sm:text-sm md:text-md lg:text-lg">
            <JobRole roles={data?.roles} />
          </div>
          <Divider />
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="grid grid-cols-1 text-xs sm:text-sm md:text-md lg:text-lg">
              <SkillsRequired skillsRequired={data?.skillsRequired} />
            </div>
            <div className="grid grid-cols-1 text-xs sm:text-sm md:text-md lg:text-lg">
              <Perks perks={data?.perks} />
            </div>
          </div>
          {data?.additionalInformation ? (
            <>
              <Divider />
              <div className="grid grid-cols-1 text-xs sm:text-sm md:text-md lg:text-lg">
                <AdditionalInformation
                  information={data?.additionalInformation}
                />
              </div>
            </>
          ) : null}
        </div>
      )}
    </Fragment>
  );
};

export default JobOverview;
