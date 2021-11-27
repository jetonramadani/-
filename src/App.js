import "./App.css";
import React, {useEffect} from "react";
import AddDataToDb from "./components/AddDataToDb";
// import {default as axios} from "./axiosConfig";
import StoreContainer from "./components/shops/StoreContainer";
function App() {
  useEffect(() => {
    // ON MOUNT CONSTRUCTOR

    return () => {
      //ON DISMOUNT DESTRUCTOR
    };
  }, []);
  return (
    <div>
      <div style={{height: "100px", background: "red"}}></div>
      <AddDataToDb />
      <StoreContainer />
      {/* <AddDataToDb /> */}
      {/* <Places /> */}
    </div>
  );
}

export default App;
