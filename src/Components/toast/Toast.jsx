import React, { Fragment } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const DefaultToast = ({ message }) => {
  return toast(message);
};

const SuccessToast = ({ message }) => {
  return toast.success(message);
};

const DangerToast = ({ message }) => {
  return toast.error(message);
};

const InfoToast = ({ message }) => {
  return toast.info(message);
};

const WarnToast = ({ message }) => {
  return toast.warn(message);
};

const Toast = ({ className, message, active }) => {
  return (
    <Fragment>
      {active ? (
        className === "success" ? (
          <SuccessToast message={message} />
        ) : className === "danger" ? (
          <DangerToast message={message} />
        ) : className === "info" ? (
          <InfoToast message={message} />
        ) : className === "warn" ? (
          <WarnToast message={message} />
        ) : (
          <DefaultToast message={message} />
        )
      ) : null}
    </Fragment>
  );
};

export default Toast;
