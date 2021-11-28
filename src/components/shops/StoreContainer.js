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
  const [filteredPlaces, setFilteredPlaces] = useState([]);
  const translate = useTranslate();
  useEffect(() => {
    setFilteredPlaces([...places]);
  }, [places?.length]);
  const applyFilter = (filterData) => {
    let helpArr = [...places];
    if (filterData.categories) {
    }
    if (filterData.cities) {
    }
    if (filterData.nameOrAddres) {
      console.log("INSDIDE THIS");
      helpArr = helpArr.filter(
        (place) =>
          translate(place.name)
            .toLowerCase()
            .includes(filterData.nameOrAddres) ||
          translate(place.address)
            .toLowerCase()
            .includes(filterData.nameOrAddres)
      );
    }
    setFilteredPlaces(helpArr);
  };
  return (
    <div className={classes.main}>
      <div className={classes.mydata}>
        <Filters applyFilter={applyFilter} />
        <div className={classes.placesDiv}>
          <Places places={filteredPlaces} />
        </div>
      </div>
      <div className={classes.mydata}>
        <Map
          markers={filteredPlaces?.map((place, index) => ({
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
