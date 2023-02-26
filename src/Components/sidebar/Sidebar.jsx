import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { FaWpbeginner } from "react-icons/fa";

const Sidebar = ({ header }) => {
  return (
    <Fragment>
      <ul className="menu p-4 w-max bg-base-100 items-center">
        <h2 className="my-2 font-extrabold text-xl">
          <Link to={"/"}>
            <div className="tooltip tooltip-right" data-tip="Seek-a-Job">
              <FaWpbeginner />
            </div>
          </Link>
        </h2>
        <div className="divider"></div>
        {header?.map((head, key) => {
          return (
            <li key={key}>
              <Link to={head.path}>
                <div className="tooltip tooltip-right" data-tip={head.title}>
                  {head.icon}
                </div>
              </Link>
            </li>
          );
        })}
      </ul>
    </Fragment>
  );
};

export default Sidebar;
