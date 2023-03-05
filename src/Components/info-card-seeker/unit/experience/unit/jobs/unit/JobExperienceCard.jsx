import React, { Fragment } from "react";
import ListItemOrdered from "../../../../../../listItemOrdered/ListItemOrdered";

const JobExperienceCard = ({ data }) => {
  return (
    <Fragment>
      <div className="rounded bg-gray-700 p-4 w-full text-xs sm:text-sm lg:text-lg font-medium">
        <div className="grid grid-cols-8">
          <div className="col-span-2">
            <img className="h-max w-max" alt={"company_logo"} />
          </div>
          <div className="col-span-4 col-row-3 w-max">
            <h4>{data?.position || "Position"}</h4>
            <h4 className="font-normal">
              {data?.companyName || "Company Name"}
            </h4>
            <h4 className="font-light">
              <ListItemOrdered list={[1, 2, 3, 4, 5, 6]} />
            </h4>
          </div>
          <div className="col-span-2">3</div>
        </div>
      </div>
    </Fragment>
  );
};

export default JobExperienceCard;
