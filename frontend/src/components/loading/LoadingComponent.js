import React from "react";
import LoadingCircle from "./LoadingCircle";
import classes from "./LoadingComponent.module.scss";

const LoadingComponent = ({ nopadding }) => {
  return (
    <div className={nopadding ? classes.container_nopadding : classes.container}>
      <LoadingCircle />
    </div>
  );
};

export default LoadingComponent;
