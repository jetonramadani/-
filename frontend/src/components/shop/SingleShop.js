import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { default as axios } from "../../axiosConfig";
import Map from "../Map";
import Information from "./Information";
import ShopReview from "./ShopReview";
import SingleComment from "./SingleComment";
import classes from "./SingleShop.module.scss";
const SingleShop = (props) => {
  const [shopData, setShopData] = useState({});
  const [showMap, setShowMap] = useState(false);
  const { id } = useParams();
  useEffect(() => {
    const loadShop = async () => {
      const data = await axios.get(`/shop/get/${id}`);
      setShopData(data.data);
      setShowMap(true);
    };
    loadShop();
  }, []);
  return (
    <div className={classes.main}>
      <div className={classes.mydata}>
        <h1>{shopData.name}</h1>
        <div className={`${classes.submain}`}>
          <div>
            <Information label="Категорија:" value={shopData.category} />
            <Information label="Адреса:" value={shopData.address} />
            <Information
              label="Работно време:"
              value={shopData.opening_hours}
            />
          </div>
          <div>
            <Information label="E-mail:" value={shopData.email} />
            <Information label="Тел:" value={shopData.phone} />
            <Information label="Веб страна:" value={shopData.website} />
          </div>
        </div>
        <h2 style={{ marginLeft: '10px' }}>Мислење и оценки:</h2>
        {/* <Link
          to="/stores"
          style={{
            textDecoration: "none",
            color: "inherit",
            padding: ".5rem",
            background: "aqua",
            borderRadius: "15px",
          }}
        >
          {" "}
          Вратисе кај сите продавници{" "}

        </Link> */}

        <ShopReview />
        <div style={{ maxHeight: "500px", overflowY: "auto" }}>
          {shopData?.reviewList?.map((review, index) => <SingleComment key={review.username + index} {...review} />)}
        </div>
      </div>
      <div className={classes.mydata}>
        {showMap ? (
          <Map
            markers={[
              {
                ...shopData,
                position: {
                  lat: +shopData.lat,
                  lng: +shopData.lon,
                },
              },
            ]}
          />
        ) : (
          "Loading..."
        )}
      </div>

    </div>
  );
};

export default SingleShop;
