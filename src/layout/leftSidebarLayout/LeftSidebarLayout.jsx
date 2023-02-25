import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import Footer from "../../Components/footer/Footer";
import Navbar from "../../Components/navbar/Navbar";
import Sidebar from "../../Components/sidebar/Sidebar";
import { header } from "../../utils/header";

const LeftSidebarLayout = ({ children }) => {
  return (
    <Fragment>
      <div className="drawer">
        <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col">
          <div className="w-full navbar bg-base-300">
            <div className="flex-none lg:hidden">
              <label htmlFor="my-drawer-3" className="btn btn-square btn-ghost">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block w-6 h-6 stroke-current"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                    fill="white"
                  ></path>
                </svg>
              </label>
            </div>
            <div className="flex-1 px-2 mx-2 font-extrabold text-xl">
              <Link to={"/"}>Seek-a-Job</Link>
            </div>
            <Navbar header={header} />
          </div>
          {children}
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-3" className="drawer-overlay"></label>
          <Sidebar header={header} />
        </div>
      </div>
      <Footer />
    </Fragment>
  );
};

export default LeftSidebarLayout;
