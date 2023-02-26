import React, { Fragment } from "react";

const Kbd = ({ text }) => {
  return (
    <Fragment>
      <kbd className="kbd">{text}</kbd>
    </Fragment>
  );
};

export default Kbd;
