import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import classes from "./AdminPanel.module.scss";
import EditShop from './EditShop';
import { default as axios } from "../../axiosConfig";
import { Navigate } from "react-router";
import LoadingComponent from "../loading/LoadingComponent";
import AddShop from "./AddShop";
import { dataActions } from '../../store/data-slice';
import { useDispatch } from 'react-redux';
import Filters from '../shops/Filters';
import useTranslate from '../../hooks/useTranslate';
const AdminPanel = () => {
    const dispatch = useDispatch();

    function getCookie(cName) {
        const name = cName + "=";
        const cDecoded = decodeURIComponent(document.cookie); //to be careful
        const cArr = cDecoded.split('; ');
        let res;
        cArr.forEach(val => {
            if (val.indexOf(name) === 0) res = val.substring(name.length);
        })
        return res;
    }


    const updateShop = async (shopData) => {
        const res = await axios.put(`/shop/update/${shopData.id}`, {
            ...shopData,
        }, {
            headers: {
                loginToken: getCookie("loginToken"),
            }
        });
        if (!res.data) {
            setRedirectToLogin(true);
        } else {
            dispatch(dataActions.updatePlace({ ...res.data }));
        }
    }

    const deleteShop = async (shopId) => {
        const res = await axios.delete(`/shop/delete/${shopId}`, {
            headers: {
                loginToken: getCookie("loginToken"),
            }
        });

        if (res.data) {
            dispatch(dataActions.deletePlace(shopId));
        } else {
            setRedirectToLogin(true);
        }
    }

    const [user, setUser] = useState("");
    const [redirectToLogin, setRedirectToLogin] = useState(false);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const effect = async () => {
            const res = await axios.get("/login/isLoggedIn", {
                headers: {
                    loginToken: getCookie("loginToken"),
                }
            });
            if (res.data === "307 TEMPORARY_REDIRECT") {
                setRedirectToLogin(true);
            }
            setLoading(false);
        }
        effect();
        return () => {

        }
    }, [])
    const places = useSelector((state) => state.data.places);
    const [filteredPlaces, setFilteredPlaces] = useState([]);
    const translate = useTranslate();
    const [filter, setFilter] = useState({});
    // useEffect(() => {
    //   setFilteredPlaces([...places]);
    // }, [places?.length]);
    useEffect(() => {
        applyFilter(filter);
    }, [places])
    const applyFilter = (filterData) => {
        setFilter(filterData);
        let helpArr = [...places];
        if (filterData.categories?.length) {
            helpArr = helpArr.filter((place) =>
                filterData.categories.some((cat) => cat === place.category)
            );
        }
        if (filterData.cities?.length) {
            helpArr = helpArr.filter((place) =>
                filterData.cities.some((city) => place.address.includes(city))
            );
        }
        if (filterData.nameOrAddres) {
            helpArr = helpArr.filter(
                (place) =>
                    translate(place.name)
                        .toLowerCase()
                        .includes(filterData.nameOrAddres) ||
                    translate(place.address)
                        .toLowerCase()
                        .includes(filterData.nameOrAddres)
            );
        }
        setFilteredPlaces(helpArr);
    };
    if (redirectToLogin) {
        return <Navigate to="/login" />
    }
    return (
        <div className={classes.wrapper}>
            {loading ? <LoadingComponent /> : <>
                <Filters applyFilter={applyFilter} />
                <AddShop redirect={() => setRedirectToLogin(true)} />
                {filteredPlaces?.map((shop) => <EditShop key={shop.id} {...shop} update={updateShop} delete={deleteShop} redirect={() => setRedirectToLogin(true)} />)}
            </>}
        </div>
    )
}

export default AdminPanel
