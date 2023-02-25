import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const Navbar = ({ header }) => {
  return (
    <Fragment>
      <div className="flex-none hidden lg:block">
        <ul className="menu menu-horizontal">
          {header?.map((head, key) => {
            return (
              <li key={key}>
                <Link to={head.path}>{head.title}</Link>
              </li>
            );
          })}
        </ul>
      </div>
    </Fragment>
  );
};

export default Navbar;
