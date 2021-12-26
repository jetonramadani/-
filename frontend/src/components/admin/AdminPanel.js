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
        return res
    }


    const updateShop = async (shopData) => {
        const res = await axios.put(`/shop/update/${shopData.id}`, {
            ...shopData,
        }, {
            headers: {
                loginToken: getCookie("loginToken"),
            }
        });
        if (res.data === null) {
            setRedirectToLogin(true);
        } else {
            dispatch(dataActions.updatePlace(res.data));
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
    if (redirectToLogin) {
        return <Navigate to="/login" />
    }
    return (
        <div className={classes.wrapper}>
            {loading ? <LoadingComponent /> : <>
                <AddShop redirect={() => setRedirectToLogin(true)} />
                {places?.map((shop) => <EditShop key={shop.id} {...shop} update={updateShop} delete={deleteShop} />)}
            </>}
        </div>
    )
}

export default AdminPanel
