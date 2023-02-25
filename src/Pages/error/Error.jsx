import React, { Fragment } from "react";
import { useNavigate } from "react-router-dom";

const Error = () => {
  const navigate = useNavigate();
  return (
    <Fragment>
      <div className="hero h-full bg-base-200">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold">Error 404</h1>
            <p className="py-6">Page Not Found</p>
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
      </div>
    </Fragment>
  );
};

export default Error;
