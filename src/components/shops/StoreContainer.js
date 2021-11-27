/* eslint-disable */
import React, {useState, useEffect} from "react";
import Places from "./Places";
import Map from "./Map";
import Filters from "./Filters";
import classes from "./StoreContainer.module.scss";
const StoreContainer = () => {
    return ( 
        <div className={classes.main}>
           <div className={classes.mydata}> 
               <Filters/>
               <Places/>
           </div>
           <div className={classes.mydata}> 
               <Map/>
           </div>
        </div>
     );
}
 
export default StoreContainer;