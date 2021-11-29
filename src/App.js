import "./App.css";
import React, { useEffect } from "react";
import AddDataToDb from "./components/AddDataToDb";
// import {default as axios} from "./axiosConfig";
// import StoreContainer from "./components/shops/StoreContainer";
import Header from "./components/header/Header";
import Categories from "./components/homepage/Categories";
function App() {
  useEffect(() => {
    // ON MOUNT CONSTRUCTOR

    return () => {
      //ON DISMOUNT DESTRUCTOR
    };
  }, []);
  return (
    <div>
      <Header />
      <Categories />
      {/* <div style={{ height: "50px", background: "red" }}></div> */}
      {/* <AddDataToDb /> */}
      {/* <StoreContainer /> */}
      {/* <AddDataToDb /> */}
      {/* <Places /> */}
    </div>
  );
}

export default App;
