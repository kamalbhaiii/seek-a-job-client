import React, { Fragment, useState } from "react";
import { useLocation } from "react-router-dom";

const JobOverview = () => {
  const location = useLocation();
  const [id, setId] = useState(location?.pathname?.split("/")[2]);
  return (
    <Fragment>
      <h1>Job Overview Page: {id}</h1>
    </Fragment>
  );
};

export default JobOverview;
