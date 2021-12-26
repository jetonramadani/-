/* eslint-disable */
import React, { useState, useEffect } from "react";
import Places from "./Places";
import Map from "../Map";
import Filters from "./Filters";
import classes from "./StoreContainer.module.scss";
import { useSelector } from "react-redux";
import useTranslate from "../../hooks/useTranslate";
import LoadingComponent from "../loading/LoadingComponent";
const StoreContainer = () => {
  const places = useSelector((state) => state.data.places);
  const [filteredPlaces, setFilteredPlaces] = useState([]);
  const translate = useTranslate();
  const [filter, setFilter] = useState({});
  // useEffect(() => {
  //   setFilteredPlaces([...places]);
  // }, [places?.length]);
  useEffect(() => {
    applyFilter(filter)
  }, [places])
  const applyFilter = (filterData) => {
    setFilter({ ...filterData })
    let helpArr = [...places];
    if (filterData.categories?.length) {
      helpArr = helpArr.filter((place) =>
        filterData.categories.some((cat) => cat === place.category)
      );
    }
    if (filterData.cities?.length) {
      helpArr = helpArr.filter((place) =>
        filterData.cities.some((city) => place.address.includes(city))
      );
    }
    if (filterData.nameOrAddres) {
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
    places.length ? <div className={classes.main}>
      <div className={classes.mydata}>
        <Filters applyFilter={applyFilter} />
        <div className={classes.placesDiv}>
          <Places places={filteredPlaces} />
        </div>
      </div>
      <div className={classes.mydata}>
        {places.length ? (
          <Map
            markers={filteredPlaces?.map((place) => ({
              ...place,
              position: {
                lat: +place.lat,
                lng: +place.lon,
              },
            }))}
          />
        ) : (
          <LoadingComponent />
        )}
      </div>
    </div> : <LoadingComponent />
  );
};

export default StoreContainer;
