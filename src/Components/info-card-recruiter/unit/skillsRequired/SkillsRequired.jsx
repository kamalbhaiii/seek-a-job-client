import React, { Fragment } from "react";
import Badge from "../../../badge/Badge";
import Ellipse from "../../../../helpers/ellipsis";

const SkillsRequired = ({ skillsRequired }) => {
  return (
    <Fragment>
      <label htmlFor="roles" className="label font-bold mb-2">
        SKILLS REQUIRED
      </label>
      <div className="grid grid-cols-3 md:grid-cols-4 gap-y-2">
        {skillsRequired?.map((skill, key) => {
          return <Badge key={key} type={"info"} text={Ellipse(skill)} />;
        })}
      </div>
    </Fragment>
  );
};

export default SkillsRequired;
