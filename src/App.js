import "./App.css";
import React, { useEffect } from "react";
import AddDataToDb from "./components/AddDataToDb";
// import {default as axios} from "./axiosConfig";
// import StoreContainer from "./components/shops/StoreContainer";
import DesktopHeader from "./components/header/DesktopHeader";
function App() {
  useEffect(() => {
    // ON MOUNT CONSTRUCTOR

    return () => {
      //ON DISMOUNT DESTRUCTOR
    };
  }, []);
  return (
    <div>
      <DesktopHeader />
      {/* <div style={{ height: "50px", background: "red" }}></div> */}
      {/* <AddDataToDb /> */}
      {/* <StoreContainer /> */}
      {/* <AddDataToDb /> */}
      {/* <Places /> */}
    </div>
  );
}

export default App;
