import React, { useEffect, useState } from 'react'
import classes from './Home.module.scss'
import {
    mdiCart, mdiBaguette, mdiTshirtCrew,
    mdiHeadphones, mdiBookshelf, mdiBasketball, mdiBedKingOutline,
    mdiCarSeat, mdiShoeFormal, mdiGiftOutline,
    mdiArrowLeftBox, mdiArrowRightBox
} from '@mdi/js';
import Icon from '@mdi/react'
const mkCategries = [
    "Маркети",
    "Пекари",
    "Бутици",
    "Електроника и компјутери",
    "Книжарници",
    "Мебел",
    "Спортска опрема",
    "Авто-делови",
    "Обувки",
    "Сувенири",
];


const categoryIcons = {
    "Маркети": <Icon path={mdiCart} size="4rem" />,
    "Пекари": <Icon path={mdiBaguette} size="4rem" />,
    "Бутици": <Icon path={mdiTshirtCrew} size="4rem" />,
    "Електроника и компјутери": <Icon path={mdiHeadphones} size="4rem" />,
    "Книжарници": <Icon path={mdiBookshelf} size="4rem" />,
    "Мебел": <Icon path={mdiBedKingOutline} size="4rem" />,
    "Спортска опрема": <Icon path={mdiBasketball} size="4rem" />,
    "Авто-делови": <Icon path={mdiCarSeat} size="4rem" />,
    "Обувки": <Icon path={mdiShoeFormal} size="4rem" />,
    "Сувенири": <Icon path={mdiGiftOutline} size="4rem" />
}
const mapedCategories = mkCategries.map((category) =>
    <>
        <div className={classes.categories}>{categoryIcons[category]}</div>
        <div className={classes.categories}>{category}</div>
    </>
)
const CategoriesSlider = () => {
    const [currentPlace, setCurentPlace] = useState(0);
    const categoryLength = mapedCategories.length;

    return (
        <div className={classes.slider}>
            <Icon size={'4rem'} path={mdiArrowLeftBox} onClick={() => setCurentPlace((prev) => prev === 0 ? categoryLength - 1 : prev - 1)} className='prevnext' />
            <span className={classes.sliderElement}>{mapedCategories[currentPlace % categoryLength]}</span>
            <span className={classes.sliderElement}>{mapedCategories[(currentPlace + 1) % categoryLength]}</span>
            <span className={classes.sliderElement}>{mapedCategories[(currentPlace + 2) % categoryLength]}</span>
            <span className={classes.sliderElement}>{mapedCategories[(currentPlace + 3) % categoryLength]}</span>
            <Icon size={'4rem'} path={mdiArrowRightBox} onClick={() => setCurentPlace((prev) => prev === (categoryLength - 1) ? 0 : prev + 1)} className='prevnext' />
        </div>
    )
}

export default CategoriesSlider
