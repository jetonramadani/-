import "./App.css";
import React, { useEffect } from "react";
import { default as axios } from "./axiosConfig";
import StoreContainer from "./components/shops/StoreContainer";
import SingleShop from "./components/shop/SingleShop";
import { dataActions } from "./store/data-slice";
import { useDispatch } from "react-redux";
import AdminPanel from "./components/admin/AdminPanel";
import {
  Route,
  Routes,
} from "react-router-dom";
import Home from "./components/homepage/Home";
import About from "./components/about/About";
import Header from "./components/header/Header";
import Login from "./components/login/Login";
function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    const loadEffect = async () => {
      const cities = await axios.get("/shop/cities");
      dispatch(dataActions.addCities(cities.data || []));
      const categories = await axios.get("/shop/categories");
      dispatch(dataActions.addCategories(categories.data || []));
      const allShops = await axios.get("/shop/all");
      dispatch(dataActions.addPlaces(allShops.data || []));

    };
    loadEffect();
    // ON MOUNT CONSTRUCTOR
    return () => {
      //ON DISMOUNT DESTRUCTOR
    };
  }, []);
  return (
    <>
      <div>
        <Header />
      </div>
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/admin" element={<AdminPanel />} />
        <Route path="/login" element={<Login />} />
        <Route path="/stores" element={<StoreContainer />} />
        <Route path="/stores/:id" element={<SingleShop />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
