import React, { Fragment } from "react";
import {
  convertTime,
  differenceBetweenTime,
} from "../../../../../../../helpers/timeFormat";
import ListItemOrdered from "../../../../../../listItemOrdered/ListItemOrdered";
import Unknown from "../../../../../../../assets/images/Unknown.png";
import Divider from "../../../../../../divider/Divider";

const InternshipExperienceCard = ({ data }) => {
  return (
    <Fragment>
      <div className="rounded bg-gray-700 p-4 w-full text-xs sm:text-sm lg:text-lg font-medium">
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
          <div className="col-span-0 md:col-span-4 col-row-3 break-words">
            <h4>{data?.position || "Position"}</h4>
            <h4 className="font-normal">
              {data?.companyName || "Company Name"}
              {data?.location && `, ${data.location}`}
            </h4>
            <h4 className="font-light w-max text-xs">
              <ListItemOrdered list={data?.roles || [1, 2, 3]} />
            </h4>
          </div>
          <div className="col-span-0 md:col-span-2 grid-row-3 w-max">
            <div>
              {convertTime(data?.joinedDate, "MMM, YYYY")} -{" "}
              {convertTime(data?.leftDate, "MMM, YYYY") || "Present"}
            </div>
            <Divider />
            <div className="text-center">
              {differenceBetweenTime(data?.joinedDate, data?.leftDate)}
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default InternshipExperienceCard;
