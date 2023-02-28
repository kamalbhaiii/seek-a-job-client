import classNames from "classnames";
import React, { Fragment } from "react";

const About = ({ className, about }) => {
  return (
    <Fragment>
      <div className={classNames(className)}>
        <label className="label font-bold">ABOUT</label>
        <label className="label">{about}</label>
      </div>
    </Fragment>
  );
};

export default About;
