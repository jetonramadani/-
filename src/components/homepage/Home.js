/* eslint-disable */
import React from 'react'
import './Home.css'
import CategoriesSlider from './CategoriesSlider'
import photoImg1 from '../../assets/MapBackground.jpg'

const Home = () => {
    return (
        <div>
            {<img src={photoImg1} className='MapBackgroundStyle' />}
            <CategoriesSlider />
        </div>
    )
}

export default Home
