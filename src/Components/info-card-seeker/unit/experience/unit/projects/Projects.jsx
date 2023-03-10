import React, { Fragment, useState } from "react";
import ButtonToggle from "../../../../../button/button-toggle/ButtonToggle";
import ProjectExperienceCarousel from "../../../../../carousel/ProjectExperienceCarousel";

const Projects = ({ data }) => {
  const [cardShortView, setCardShortView] = useState(true);
  return (
    <Fragment>
      <div className="px-4">
        <label className="label font-semibold text-sm">
          <span>PROJECT(S)</span>
          <div>
            <ButtonToggle
              noTitle="Long"
              yesTitle="Short"
              name={"project"}
              noEvent={(e) => {
                setCardShortView(false);
              }}
              yesEvent={(e) => {
                setCardShortView(true);
              }}
            />
          </div>
        </label>
        <ProjectExperienceCarousel
          cardShortView={cardShortView}
          data={data?.project}
        />
      </div>
    </Fragment>
  );
};

export default Projects;
