import React, { Fragment } from "react";
import { Routes, Route } from "react-router-dom";
import Footer from "./Components/footer/Footer";
import LeftSidebarLayout from "./layout/leftSidebarLayout/LeftSidebarLayout";
import { routes } from "./utils/routes";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <Fragment>
      <LeftSidebarLayout>
        <Routes>
          {routes.map((route, key) => {
            return (
              <Route key={key} path={route.path} element={route.element} />
            );
          })}
        </Routes>
        <ToastContainer />
        <Footer />
      </LeftSidebarLayout>
    </Fragment>
  );
};

export default App;
