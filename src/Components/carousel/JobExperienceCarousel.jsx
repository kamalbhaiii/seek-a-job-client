import React, { Fragment } from "react";
import JobExperienceCard from "../info-card-seeker/unit/experience/unit/jobs/unit/JobExperienceCard";

const JobExperienceCarousel = ({ data, cardShortView, id = "job" }) => {
  return (
    <Fragment>
      <div className="carousel w-full">
        {data?.map((card, key) => {
          return (
            <div
              key={key}
              id={`${id}-${key + 1}`}
              className="carousel-item w-full"
            >
              <JobExperienceCard cardShortView={cardShortView} data={card} />
            </div>
          );
        })}
      </div>
      <div className="flex justify-center w-full py-2 gap-2">
        {data?.map((card, key) => {
          return (
            <a href={`#${id}-${key + 1}`} key={key} className="btn btn-xs">
              {key + 1}
            </a>
          );
        })}
      </div>
    </Fragment>
  );
};

export default JobExperienceCarousel;
