import React, { Fragment } from "react";
import classnames from "classnames";

const SuccessBadge = ({ text, className }) => {
  return (
    <div className={classnames("badge badge-accent", className)}>{text}</div>
  );
};

const DangerBadge = ({ text, className }) => {
  return (
    <div className={classnames("badge badge-secondary", className)}>{text}</div>
  );
};

const InfoBadge = ({ text, className }) => {
  return (
    <div className={classnames("badge badge-primary", className)}>{text}</div>
  );
};

const DefaultBadge = ({ text, className }) => {
  return <div className={classnames("badge", className)}>{text}</div>;
};

const GhostBadge = ({ text, className }) => {
  return (
    <div className={classnames("badge badge-ghost", className)}>{text}</div>
  );
};

const Badge = ({ type, text, className }) => {
  return (
    <Fragment>
      {type === "success" ? (
        <SuccessBadge className={className} text={text} />
      ) : type === "danger" ? (
        <DangerBadge className={className} text={text} />
      ) : type === "info" ? (
        <InfoBadge className={className} text={text} />
      ) : type === "ghost" ? (
        <GhostBadge className={className} text={text} />
      ) : (
        <DefaultBadge className={className} text={text} />
      )}
    </Fragment>
  );
};

export default Badge;
