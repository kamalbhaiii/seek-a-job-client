import React, { Fragment } from "react";
import ProjectExperienceCard from "../info-card-seeker/unit/experience/unit/projects/unit/ProjectExperienceCard";

const ProjectExperienceCarousel = ({ data, cardShortView }) => {
  return (
    <Fragment>
      <div className="carousel w-full">
        {data?.map((card, key) => {
          return (
            <div
              key={key}
              id={`project-${key + 1}`}
              className="carousel-item w-full"
            >
              <ProjectExperienceCard
                cardShortView={cardShortView}
                data={card}
              />
            </div>
          );
        })}
      </div>
      <div className="flex justify-center w-full py-2 gap-2">
        {data?.map((card, key) => {
          return (
            <a href={`#project-${key + 1}`} key={key} className="btn btn-xs">
              {key + 1}
            </a>
          );
        })}
      </div>
    </Fragment>
  );
};

export default ProjectExperienceCarousel;
