import React, { Fragment } from "react";
import Unknown from "../../../../assets/images/Unknown.png";
import Divider from "../../../divider/Divider";
import ListItemOrdered from "../../../listItemOrdered/ListItemOrdered";
ListItemOrdered;
import {
  convertTime,
  dateDiffMonths,
  dateDiffYears,
} from "../../../../helpers/timeFormat";

const ExperienceAccordionData = ({ data }) => {
  return (
    <Fragment>
      <div className="rounded p-4 w-full text-xs sm:text-sm lg:text-lg font-medium">
        <div className="grid grid-cols-3 md:grid-cols-8">
          <div className="col-span-0 md:col-span-2">
            <div className="avatar">
              <div className="w-20">
                <img
                  className="h-max w-max"
                  alt={"company_logo"}
                  src={data?.src || Unknown}
                />
              </div>
            </div>
          </div>
          <div className="col-span-0 md:col-span-4 col-row-2 w-max">
            <h4>{data?.position || "Position"}</h4>
            <h4 className="font-normal">
              {data?.companyName || "Company Name"}
              {data?.location && `, ${data.location}`}
            </h4>
          </div>
          <div className="col-span-0 md:col-span-2 grid-row-3 w-max gap-y-0">
            <div>
              {convertTime(data?.joinedDate, "MMM, YYYY")} -{" "}
              {convertTime(data?.leftDate, "MMM, YYYY") || "Present"}
            </div>
            <Divider className={"my-0"} />
            <div className="text-center">
              {dateDiffYears(data?.joinedDate, data?.leftDate)} Years
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default ExperienceAccordionData;
