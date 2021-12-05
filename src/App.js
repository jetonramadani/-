/* eslint-disable*/
import "./App.css";
import React, { useState, useEffect } from "react";
import AddDataToDb from "./components/AddDataToDb";
// import {default as axios} from "./axiosConfig";
import StoreContainer from "./components/shops/StoreContainer";
import DesktopHeader from "./components/header/DesktopHeader";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
  useLocation
} from "react-router-dom";
import Home from "./components/homepage/Home";
import About from "./components/about/About";
function App() {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState("home");
  useEffect(() => {
    if (location.pathname.startsWith("/store")) {
      setActiveTab("store")
    } else if (location.pathname.startsWith("/404")) {
      setActiveTab("404");
    } else if (location.pathname.startsWith("/about")) {
      setActiveTab("about");
    } else if (location.pathname === "/") {
      setActiveTab("home");
    } else {
      setActiveTab("");
    }

    // ON MOUNT CONSTRUCTOR
    return () => {
      //ON DISMOUNT DESTRUCTOR
    };
  }, []);
  return (
    <><div className="headerStyle">
      {activeTab !== "404" && <DesktopHeader onClick={(value) => setActiveTab(value)} />}
    </div>
      <AddDataToDb />
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/stores" element={<StoreContainer />} />
        <Route path="/" element={<Home />} />
      </Routes>
      {/* <AddDataToDb /> */}
      {/* <Places /> */}</>
  );
}

export default App;
