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
import Avatar from "../../../avatar/Avatar";
import Badge from "../../../badge/Badge";

const DurationofJob = ({ data }) => {
  return <span>{dateDiffYears(data?.joinedDate, data?.leftDate)} Years</span>;
};

const ExperienceAccordionData = ({ data }) => {
  return (
    <Fragment>
      <div className="rounded p-4 w-full text-xs sm:text-sm lg:text-lg font-medium">
        <div className="grid grid-cols-3 md:grid-cols-8">
          <div className="col-span-0 xl:col-span-2">
            <Avatar src={data?.src} />
          </div>
          <div className="col-span-2 md:col-span-5 xl:col-span-4 grid-rows-2">
            <div>
              {data?.position || "Position"} {data?.board && `(${data?.board})`}
            </div>
            <div className="font-normal">
              {data?.companyName || "Company Name"}
              {data?.location && `, ${data.location}`}
              {data?.topics && (
                <div className="hidden md:flex gap-x-2 mt-2">
                  {data?.topics?.map((topic, key) => {
                    return <Badge type={"info"} key={key} text={topic} />;
                  })}
                </div>
              )}
            </div>
          </div>
          <div className="hidden col-span-0 md:block md:col-span-2 grid-row-3 w-max gap-y-0">
            <div>
              {convertTime(data?.joinedDate, "MMM, YYYY")} -{" "}
              {convertTime(data?.leftDate, "MMM, YYYY") || "Present"}
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
            {data.leftDate
              ? convertTime(data?.leftDate, "MMM, YYYY")
              : "Present"}
          </span>
          {" | "}
          <DurationofJob data={data} />
        </div>
      </div>
    </Fragment>
  );
};

export default ExperienceAccordionData;
