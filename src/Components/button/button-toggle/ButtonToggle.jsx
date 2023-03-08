import React, { Fragment } from "react";

const ButtonToggle = ({
  yesTitle = "Yes",
  noTitle = "No",
  yesEvent,
  noEvent,
  name,
}) => {
  return (
    <Fragment>
      <div className="btn-group">
        <input
          type="radio"
          name={name}
          data-title={yesTitle}
          className="btn btn-xs"
          onFocus={yesEvent}
          defaultChecked
        />
        <input
          type="radio"
          name={name}
          data-title={noTitle}
          className="btn btn-xs"
          onFocus={noEvent}
        />
      </div>
    </Fragment>
  );
};

export default ButtonToggle;
