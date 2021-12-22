import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import classes from "./AdminPanel.module.scss";
import EditShop from './EditShop';
import { default as axios } from "../../axiosConfig";
import { Navigate } from "react-router";

const AdminPanel = () => {
    const [user, setUser] = useState("");
    useEffect(() => {
        const effect = async () => {
            const res = axios.get("/login/isLoggedIn");
            if (!res.data) {
                setUser("redirect:/login")
            } else {
                setUser(res.data);
            }
        }
        effect();
        return () => {

        }
    }, [])
    const places = useSelector((state) => state.data.places);
    console.log(user)
    if (user === "redirect:/login") {
        return <Navigate to="/login" />
    }
    return (
        <div className={classes.wrapper}>
            {places?.map((shop) => <EditShop key={shop.id} {...shop} />)}
        </div>
    )
}

export default AdminPanel
