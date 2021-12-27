/* eslint-disable */
import React, { useEffect, useState } from 'react'
import './Home.css'
// import {
//     // mdiCart, mdiBaguette, mdiTshirtCrew,
//     // mdiHeadphones, mdiBookshelf, mdiBasketball, mdiBedKingOutline,
//     // mdiCarSeat, mdiShoeFormal, mdiGiftOutline,
//     mdiArrowLeftBox, mdiArrowRightBox
// } from '@mdi/js';
// import Icon from '@mdi/react'
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


// const categoryIcons = {
//     "Маркети": <Icon path={mdiCart} size="4rem" />,
//     "Пекари": <Icon path={mdiBaguette} size="4rem" />,
//     "Бутици": <Icon path={mdiTshirtCrew} size="4rem" />,
//     "Електроника и компјутери": <Icon path={mdiHeadphones} size="4rem" />,
//     "Книжарници": <Icon path={mdiBookshelf} size="4rem" />,
//     "Мебел": <Icon path={mdiBedKingOutline} size="4rem" />,
//     "Спортска опрема": <Icon path={mdiBasketball} size="4rem" />,
//     "Авто-делови": <Icon path={mdiCarSeat} size="4rem" />,
//     "Обувки": <Icon path={mdiShoeFormal} size="4rem" />,
//     "Сувенири": <Icon path={mdiGiftOutline} size="4rem" />
// }
const mapedCategories = mkCategries.map((category) =>
    <>
        {/* <div className='categories'>{categoryIcons[category]}</div> */}
        <div className='categories'>{category}</div>
    </>
)
const CategoriesSlider = () => {
    const [currentPlace, setCurentPlace] = useState(0);
    const [siteWidth, setSiteWidth] = useState(4);
    const categoryLength = mapedCategories.length;
    const resize = () => {
        if (siteWidth > 2 && window.innerWidth < 750) {
            setSiteWidth((prev) => 2);
        } else if (siteWidth >= 2 && window.innerWidth >= 750 && window.innerWidth < 1200) {
            setSiteWidth((prev) => 3);
        } else if (window.innerWidth >= 1200) {
            setSiteWidth((prev) => 4)
        }
    }
    useEffect(resize)
    window.addEventListener("resize", resize);

    return (
        <div className='slider'>
            {/* <Icon size={'4rem'} path={mdiArrowLeftBox} onClick={() => setCurentPlace((prev) => prev === 0 ? categoryLength - 1 : prev - 1)} className='prevnext' /> */}
            {siteWidth > 1 && <span className='sliderElement'>{mapedCategories[currentPlace % categoryLength]}</span>}
            {siteWidth > 1 && <span className='sliderElements'>{mapedCategories[(currentPlace + 1) % categoryLength]}</span>}
            {siteWidth > 2 && <span className='sliderElements'>{mapedCategories[(currentPlace + 2) % categoryLength]}</span>}
            {siteWidth > 3 && <span className='sliderElement1'>{mapedCategories[(currentPlace + 3) % categoryLength]}</span>}
            {/* <Icon size={'4rem'} path={mdiArrowRightBox} onClick={() => setCurentPlace((prev) => prev === (categoryLength - 1) ? 0 : prev + 1)} className='prevnext' /> */}
        </div>
    )
}

export default CategoriesSlider
