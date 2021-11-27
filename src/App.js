import "./App.css";
import React, {useState, useEffect} from "react";
import AddDataToDb from "./components/AddDataToDb";
import Places from "./components/places/Places";
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
      {/* <AddDataToDb /> */}
      {/* <Places /> */}
    </div>
  );
}

export default App;
