import "./App.css";
import React, {useState, useEffect} from "react";
import AddDataToDb from "./components/AddDataToDb";
import Places from "./components/places/Places";
import {default as axios} from "./axiosConfig";
import StoreContainer from "./components/shops/StoreContainer";
function App() {
  useEffect(() => {
    // ON MOUNT CONSTRUCTOR
    axios.get("/shop/get/shop_2").then((response) => {
      console.log(response.data);
    });
    return () => {
      //ON DISMOUNT DESTRUCTOR
    };
  }, []);
  return (
    <div>
      <div style={{height: "100px", background: "red"}}></div>
      <StoreContainer/>
      {/* <AddDataToDb /> */}
      {/* <Places /> */}
    </div>
  );
}

export default App;
