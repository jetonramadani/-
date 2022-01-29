
import React from 'react'
import classes from './Home.module.scss'
import CategoriesSlider from './CategoriesSlider'
import photoImg1 from '../../assets/MapBackground.jpg'

const Home = () => {
    return (
        <div>
            <img src={photoImg1} className={classes.MapBackgroundStyle} />
            <CategoriesSlider />
        </div>
    )
}

export default Home
