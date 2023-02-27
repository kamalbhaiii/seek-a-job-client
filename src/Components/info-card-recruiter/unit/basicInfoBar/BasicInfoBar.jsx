import React, { Fragment, useEffect, useState } from "react";
import LabelledOutput from "../../../output/labelledOutput/LabelledOutput";
import { FaShare } from "react-icons/fa";
import copy from "copy-to-clipboard";

const BasicInfoBar = ({ startDate, duration, location, applyBy, id }) => {
  const [labels, setLabels] = useState({
    start_Date: "",
    duration: "",
    location: "",
    apply_by: "",
    share: "",
  });

  useEffect(() => {
    setLabels({
      ...labels,
      start_Date: startDate,
      duration: duration,
      location: location,
      apply_by: applyBy,
      share: (
        <FaShare
          onClick={(e) => {
            e.preventDefault();
            copy(`${import.meta.env.VITE_CLIENT_URI}/job/${id}`);
          }}
        />
      ),
    });
  }, [id]);

  return (
    <Fragment>
      {Object?.keys(labels).map((label, key) => {
        return (
          <div className="grid grid-rows-2 grid-cols-1" key={key}>
            <LabelledOutput
              label={label.replace("_", " ")}
              value={Object?.values(labels)[key]}
            />
          </div>
        );
      })}
    </Fragment>
  );
};

export default BasicInfoBar;
