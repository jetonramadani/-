import React from 'react'
import classes from "./Categories.module.scss";
const Categories = () => {
    return (
        <>
            <div className={classes.all}>
                <div className={classes.lefter}>
                    <div className={classes.text}>Hosting</div>
                </div>
                <div className={classes.left}>
                    <div className={classes.text}>Web Design</div>
                </div>
                <div className={classes.center}>
                    <div className={classes.explainer}><span>Hover me</span></div>
                    <div className={classes.text}>Frontend Development</div>
                </div>
                <div className={classes.right}>
                    <div className={classes.text}>Backend Development</div>
                </div>
                <div className={classes.righter}>
                    <div className={classes.text}>SEO</div>
                </div>
            </div>

        </>
    )
}

export default Categories
