import React, { Fragment } from "react";
import Button from "../../../Components/button/Button";

const TestButton = () => {
  return (
    <Fragment>
      <Button color={"btn-primary"} label="Button" />
      <Button color={"btn-secondary"} label="Button" />
      <Button color={"btn-accent"} label="Button" />
      <Button color={"btn-ghost"} label="Button" />
      <Button color={"btn-link"} label="Button" />
    </Fragment>
  );
};

export default TestButton;
