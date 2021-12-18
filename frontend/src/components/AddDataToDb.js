import React, {useEffect} from "react";
import {useDispatch} from "react-redux";
import data2 from "../dataWithAddress.json";
import {dataActions} from "../store/data-slice";
import {default as axios} from "../axiosConfig";
const AddDataToDb = () => {
  const pick = (obj, keys) =>
  Object.keys(obj)
    .filter((i) => keys.includes(i))
    .reduce((acc, key) => {
      acc[key] = obj[key];
      return acc;
    }, {});
  const getNeededData = () => {
    const tags =
      "lat|lon|category|name|phone|email|website|opening_hours|address".split(
        "|"
      );
    const mkCategries = {
      supermarket: "Маркети",
      bakery: "Пекари",
      clothes: "Бутицни",
      convenience: "Маркети",
      computer: "Електроника и компјутери",
      electronics: "Електроника и компјутери",
      books: "Книжарници",
      furniture: "Мебел",
      sports: "Спортска опрема",
      car_parts: "Авто-делови",
      copyshop: "Книжарници",
      shoes: "Обувки",
      tyres: "Авто-делови",
      gift: "Сувенири",
    };
    const defaultValue = {
      phone: null,
      email: null,
      website: null,
      opening_hours: null,
    };
    const allCategories = Object.keys(mkCategries);
    return data2
      .filter((item) => allCategories.includes(item.category))
      .forEach((item) => {
        axios.post("/shop/create", {
          ...defaultValue,
          ...pick(item, tags),
          category: mkCategries[item.category],
        });
      });
  };
  useEffect(() => {

    
    
    // dispatch(dataActions.addPlaces(getNeededData()));
  }, []);
  const dispatch = useDispatch();
  return <><button onClick={() => getNeededData()}>ADD</button></>;
};

export default AddDataToDb;