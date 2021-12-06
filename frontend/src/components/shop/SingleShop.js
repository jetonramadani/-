import React, {useEffect, useState} from "react";
import {useParams} from "react-router";
import {default as axios} from "../../axiosConfig";
import Information from "./Information";
const SingleShop = (props) => {
  const [shopData, setShopData] = useState({});
  const {id} = useParams();
  useEffect(() => {
    const loadShop = async () => {
      const data = await axios.get(`/shop/get/${id}`);
      setShopData(data.data);
    };
    loadShop();
  }, []);
  return (
    <div>
      <h1>{shopData.name}</h1>
      <div>
        <Information label="Категорија:" value={shopData.category} />
        <Information label="Адреса:" value={shopData.address} />
        <Information label="Работно време:" value={shopData.opening_hours} />
      </div>
      <div>
        <Information label="E-mail:" value={shopData.email} />
        <Information label="Тел:" value={shopData.phone} />
        <Information label="Веб страна:" value={shopData.website} />
      </div>
    </div>
  );
};

export default SingleShop;
