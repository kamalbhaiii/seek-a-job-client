import React, { Fragment } from "react";
import { Routes, Route } from "react-router-dom";
import Footer from "./Components/footer/Footer";
import LeftSidebarLayout from "./layout/leftSidebarLayout/LeftSidebarLayout";
import { routes } from "./utils/routes";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Alert from "./Components/alert/Alert";

const App = () => {
  return (
    <Fragment>
      <LeftSidebarLayout>
        <Alert
          type={"info"}
          message="The application is currently under development. All the data shown here is fake/sample data."
        />
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
