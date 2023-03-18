import React, { Fragment } from "react";
import AchievmentsCarousel from "../../../carousel/AchievmentsCarousel";

const Achievements = ({ data }) => {
  return (
    <Fragment>
      <label className="label font-bold">ACCOMPLISHMENTS/ACHIEVEMENTS</label>
      {/* <ListItemOrdered list={data.achievement} /> */}
      <AchievmentsCarousel id="ach" data={data?.achievement} />
    </Fragment>
  );
};

export default Achievements;
