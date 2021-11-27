/* eslint-disable */
import React, {useState, useEffect} from "react";
import Places from "./Places";
import Map from "./Map";
import Filters from "./Filters";
import classes from "./StoreContainer.module.scss";
import {useSelector} from "react-redux";
import useTranslate from "../../hooks/useTranslate";
const StoreContainer = () => {
  const places = useSelector((state) => state.data.places);
  const translate = useTranslate();
  return (
    <div className={classes.main}>
      <div className={classes.mydata}>
        <Filters />
        <Places />
      </div>
      <div className={classes.mydata}>
        <Map
          markers={places.map((place, index) => ({
            id: index,
            ...place,
            position: {
              lat: +place.lat,
              lng: +place.lon,
            },
          }))}
        />
      </div>
    </div>
  );
};

export default StoreContainer;
