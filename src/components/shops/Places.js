/* eslint-disable */
import React, {useState, useEffect} from "react";
import dataWithAdress from "../../dataWithAddress.json";
import Place from "./Place";
const Places = () => {
  console.log(dataWithAdress);
  return (
    <>
      {dataWithAdress.map((data, i) => (
        <Place key={"T" + i} {...data} />
      ))}
    </>
  );
};

export default Places;
