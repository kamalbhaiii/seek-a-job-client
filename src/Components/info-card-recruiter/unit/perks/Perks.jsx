import React, { Fragment } from "react";
import Ellipse from "../../../../helpers/ellipsis";
import Badge from "../../../badge/Badge";

const Perks = ({ perks }) => {
  return (
    <Fragment>
      <label htmlFor="roles" className="label font-bold mb-2">
        PERKS
      </label>
      <div className="grid grid-cols-3 md:grid-cols-4 gap-y-2">
        {perks?.map((perk, key) => {
          return <Badge key={key} type={"ghost"} text={Ellipse(perk)} />;
        })}
      </div>
    </Fragment>
  );
};

export default Perks;
