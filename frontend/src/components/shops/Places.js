
import React, { useState, useEffect } from "react";
import Place from "./Place";
const Places = ({ places }) => {
  return (
    <>
      {places?.map((data) => (
        <Place key={"T" + data.id} {...data} />
      ))}
    </>
  );
};

export default Places;
