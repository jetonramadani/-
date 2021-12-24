import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import classes from "./AdminPanel.module.scss";
import EditShop from './EditShop';
import { default as axios } from "../../axiosConfig";
import { Navigate } from "react-router";
const AdminPanel = () => {
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
        const res = await axios.put("/shop/update", {
            ...shopData,
        }, {
            headers: {
                loginToken: getCookie("loginToken"),
            }
        });
        if (res.data === "307 TEMPORARY_REDIRECT") {
            setRedirectToLogin(true);
        }
    }
    const [user, setUser] = useState("");
    const [redirectToLogin, setRedirectToLogin] = useState(false);
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
            {places?.map((shop) => <EditShop key={shop.id} {...shop} update={updateShop} />)}
        </div>
    )
}

export default AdminPanel
