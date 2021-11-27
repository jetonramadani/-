/* eslint-disable */

import React, { useState, useEffect } from "react";
const Place = (props) => {
    return (
        <div>
            <h2>{props.name}</h2>
            <h4>{props.address}</h4>
        </div>);
}

export default Place;