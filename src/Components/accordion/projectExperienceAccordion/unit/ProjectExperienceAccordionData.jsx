import React, { Fragment } from "react";
import Unknown from "../../../../assets/images/Unknown.png";
import Divider from "../../../divider/Divider";
import ListItemOrdered from "../../../listItemOrdered/ListItemOrdered";
ListItemOrdered;
import { convertTime, dateDiffMonths } from "../../../../helpers/timeFormat";
import { Link } from "react-router-dom";

const DurationofJob = ({ data }) => {
  return <span>{dateDiffMonths(data?.joinedDate, data?.leftDate)} Months</span>;
};

const ProjectExperienceAccordionData = ({ data }) => {
  return (
    <Fragment>
      <div className="rounded p-4 w-full text-xs sm:text-sm lg:text-lg font-medium">
        <div className="grid grid-cols-3 md:grid-cols-8">
          <div className="col-span-8 md:col-span-6 grid-rows-2 mb-4 md:mb-0">
            <div>{data?.headline || "Project Name"}</div>
            {data?.projectLink && (
              <Link
                to={`${data?.projectLink}`}
                className="font-normal text-primary underline hover:text-white break-words"
              >
                {data?.projectLink}
              </Link>
            )}
          </div>
          <div className="hidden col-span-0 md:block md:col-span-2 grid-row-3 w-max gap-y-0">
            <div>
              {convertTime(data?.joinedDate, "MMM, YYYY")} -{" "}
              {data?.leftDate
                ? convertTime(data?.leftDate, "MMM, YYYY")
                : "Present"}
            </div>
            <Divider className={"my-0"} />
            <div className="text-center">
              <DurationofJob data={data} />
            </div>
          </div>
        </div>
        <div className="md:hidden text-xs text-center">
          <span>
            {convertTime(data?.joinedDate, "MMM, YYYY")} -{" "}
            {convertTime(data?.leftDate, "MMM, YYYY") || "Present"}
          </span>
          {" | "}
          <DurationofJob data={data} />
        </div>
      </div>
    </Fragment>
  );
};

export default ProjectExperienceAccordionData;
