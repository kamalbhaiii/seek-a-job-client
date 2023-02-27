import React, { Fragment, useEffect, useState } from "react";
import LabelledOutput from "../../../output/labelledOutput/LabelledOutput";
import { FaShare } from "react-icons/fa";
import copy from "copy-to-clipboard";
import { toast } from "react-toastify";

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
          className="cursor-pointer"
          onClick={(e) => {
            e.preventDefault();
            copy(`${import.meta.env.VITE_CLIENT_URI}/job/${id}`);
            toast.info("Shareable link has been copied to clipboard.");
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
