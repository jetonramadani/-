import React from "react";
import classes from "./PlaceCard.module.scss";
const PlaceCard = (props) => {
  return (
    <div className={classes.card}>
      <h2>{props.index}.</h2>
      <h3>{props.name}</h3>
      <h4>{props.address}</h4>
      <h5>{props.category}</h5>
    </div>
  );
};

export default PlaceCard;
