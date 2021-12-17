/* eslint-disable*/
import "./App.css";
import React, { useState, useEffect } from "react";
import AddDataToDb from "./components/AddDataToDb";
import { default as axios } from "./axiosConfig";
import StoreContainer from "./components/shops/StoreContainer";
import SingleShop from "./components/shop/SingleShop";
import DesktopHeader from "./components/header/DesktopHeader";
import { dataActions } from "./store/data-slice";
import { useDispatch } from "react-redux";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
  useLocation,
} from "react-router-dom";
import Home from "./components/homepage/Home";
import About from "./components/about/About";
function App() {
  // const location = useLocation();
  // const [activeTab, setActiveTab] = useState("home");
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   if (location.pathname.startsWith("/store")) {
  //     setActiveTab("store");
  //   } else if (location.pathname.startsWith("/404")) {
  //     setActiveTab("404");
  //   } else if (location.pathname.startsWith("/about")) {
  //     setActiveTab("about");
  //   } else if (location.pathname === "/") {
  //     setActiveTab("home");
  //   } else {
  //     setActiveTab("");
  //   }
  //   const loadEffect = async () => {
  //     const cities = await axios.get("/shop/cities");
  //     dispatch(dataActions.addCities(cities.data || []));
  //     const categories = await axios.get("/shop/categories");
  //     dispatch(dataActions.addCategories(categories.data || []));
  //     const allShops = await axios.get("/shop/all");
  //     dispatch(dataActions.addPlaces(allShops.data || []));
  //   };
  //   loadEffect();
  //   // ON MOUNT CONSTRUCTOR
  //   return () => {
  //     //ON DISMOUNT DESTRUCTOR
  //   };
  // }, []);
  return (
    <>
      {/* <div className="headerStyle">
        {activeTab !== "404" && (
          <DesktopHeader onClick={(value) => setActiveTab(value)} />
        )}
      </div>

      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/stores" element={<StoreContainer />} />
        <Route path="/stores/:id" element={<SingleShop />} />
        <Route path="/" element={<Home />} />
      </Routes> */}
      TEST

    </>
  );
}

export default App;
