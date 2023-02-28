import React, { Fragment } from "react";
import { useNavigate } from "react-router-dom";

const ErrorComponent = ({ message = "Page Not Found" }) => {
  const navigate = useNavigate();
  return (
    <Fragment>
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold">Error 404</h1>
          <p className="py-6">{message}</p>
          <button
            onClick={(e) => {
              e.preventDefault();
              navigate(-1);
            }}
            className="btn btn-success"
          >
            Go back
          </button>
        </div>
      </div>
    </Fragment>
  );
};

export default ErrorComponent;
