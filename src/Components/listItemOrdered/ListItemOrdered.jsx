import React, { Children, Fragment } from "react";
import JobExperienceCard from "../info-card-seeker/unit/experience/unit/jobs/unit/JobExperienceCard";
import ListItem from "./unit/listItem/ListItem";

const ListItemOrdered = ({ list }) => {
  return (
    <Fragment>
      {list?.map((item, key) => {
        return (
          <>
            <ListItem
              id={key + 1}
              key={key}
              item={<JobExperienceCard data={item} />}
            />
          </>
        );
      })}
    </Fragment>
  );
};

export default ListItemOrdered;
