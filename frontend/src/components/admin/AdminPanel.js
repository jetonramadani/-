import React from 'react'
import classes from "./AdminPanel.module.scss";
import EditShop from './EditShop';
const AdminPanel = () => {
    return (
        <div className={classes.wrapper}>
            <EditShop />
        </div>
    )
}

export default AdminPanel
