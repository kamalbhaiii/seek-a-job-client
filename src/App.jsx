import React, { Fragment } from "react";
import { Routes, Route } from "react-router-dom";
import LeftSidebarLayout from "./layout/leftSidebarLayout/LeftSidebarLayout";
import { routes } from "./utils/routes";

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
      </LeftSidebarLayout>
    </Fragment>
  );
};

export default App;
