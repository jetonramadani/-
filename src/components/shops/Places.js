/* eslint-disable */
import React, {useState, useEffect} from "react";
import Place from "./Place";
const Places = ({places}) => {
  return (
    <>
      {places?.map((data, i) => (
        <Place key={"T" + i} {...data} />
      ))}
    </>
  );
};

export default Places;
