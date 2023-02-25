import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const Sidebar = ({ header }) => {
  return (
    <Fragment>
      <ul className="menu p-4 w-max bg-base-100 text-center">
        <h2 className="my-2 font-extrabold text-xl">
          <Link to={"/"}>Seek-a-Job</Link>
        </h2>
        {header?.map((head, key) => {
          return (
            <li key={key}>
              <Link to={head.path}>{head.title}</Link>
            </li>
          );
        })}
      </ul>
    </Fragment>
  );
};

export default Sidebar;
