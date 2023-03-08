import React, { Fragment } from "react";
import JobExperienceCard from "../info-card-seeker/unit/experience/unit/jobs/unit/JobExperienceCard";

const ExperienceCarousel = ({ data, cardShortView }) => {
  return (
    <Fragment>
      <div className="carousel w-full">
        {data?.map((card, key) => {
          return (
            <div key={key} id={key + 1} className="carousel-item w-full">
              <JobExperienceCard cardShortView={cardShortView} data={card} />
            </div>
          );
        })}
      </div>
      <div className="flex justify-center w-full py-2 gap-2">
        {data?.map((card, key) => {
          return (
            <a href={`#${key + 1}`} className="btn btn-xs">
              {key + 1}
            </a>
          );
        })}
      </div>
    </Fragment>
  );
};

export default ExperienceCarousel;
