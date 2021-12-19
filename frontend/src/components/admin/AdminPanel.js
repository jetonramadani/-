/* eslint-disable */
import React from 'react'
import { useSelector } from 'react-redux';
import classes from "./AdminPanel.module.scss";
import EditShop from './EditShop';
const AdminPanel = () => {
    const places = useSelector((state) => state.data.places);
    return (
        <div className={classes.wrapper}>
            {places?.map((shop) => <EditShop key={shop.id} {...shop} />)}
        </div>
    )
}

export default AdminPanel
