import React from "react";
import classes from "./LoadingComponent.module.scss";

const LoadingCircle = ({ small }) => {
  return (
    <div
      className={`${classes.lds_ring} ${small ? classes.lds_ring_small : ""}`}
    >
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

export default LoadingCircle;
