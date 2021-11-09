import React from "react";
import { useSelector } from "react-redux";
import PlaceCard from "./PlaceCard";

const Places = () => {
  const places = useSelector((state) => state.data.places);
  return (
    <div style={{ with: "50%" }}>
      {places.map((place, index) => (
        <PlaceCard key={place.address} {...place} index={index + 1} />
      ))}
    </div>
  );
};

export default Places;
