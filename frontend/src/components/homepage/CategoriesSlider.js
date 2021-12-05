/* eslint-disable */
import React, { useEffect, useState } from 'react'
import { GrCart } from 'react-icons/gr';
import IconButton from '@mui/material/IconButton';
import './Home.css'
import { BsArrowLeftSquareFill, BsArrowRightSquareFill, BsHeadphones, BsFillGiftFill } from 'react-icons/bs'
import { MdOutlineBakeryDining, MdChair, MdSportsRugby } from 'react-icons/md'
import { GiClothes, GiSonicShoes } from 'react-icons/gi'
import { ImLibrary } from 'react-icons/im'
import { VscTools } from 'react-icons/vsc'
const mkCategries = [
    "Маркети",
    "Пекари",
    "Бутицни",
    "Електроника и компјутери",
    "Книжарници",
    "Мебел",
    "Спортска опрема",
    "Авто-делови",
    "Обувки",
    "Сувенири",
];


const categoryIcons = {
    "Маркети": <GrCart size="4rem" />,
    "Пекари": <MdOutlineBakeryDining size="4rem" />,
    "Бутицни": <GiClothes size="4rem" />,
    "Електроника и компјутери": <BsHeadphones size="4rem" />,
    "Книжарници": <ImLibrary size="4rem" />,
    "Мебел": <MdChair size="4rem" />,
    "Спортска опрема": <MdSportsRugby size="4rem" />,
    "Авто-делови": <VscTools size="4rem" />,
    "Обувки": <GiSonicShoes size="4rem" />,
    "Сувенири": <BsFillGiftFill size="4rem" />

}
const mapedCategories = mkCategries.map((category) =>
    <>
        <div className='categories'>{categoryIcons[category]}</div>
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
            <IconButton onClick={() => setCurentPlace((prev) => prev === 0 ? categoryLength - 1 : prev - 1)} className='prevnext'><BsArrowLeftSquareFill /></IconButton>
            {siteWidth > 1 && <span className='sliderElement'>{mapedCategories[currentPlace % categoryLength]}</span>}
            {siteWidth > 1 && <span className='sliderElements'>{mapedCategories[(currentPlace + 1) % categoryLength]}</span>}
            {siteWidth > 2 && <span className='sliderElements'>{mapedCategories[(currentPlace + 2) % categoryLength]}</span>}
            {siteWidth > 3 && <span className='sliderElement1'>{mapedCategories[(currentPlace + 3) % categoryLength]}</span>}
            <IconButton onClick={() => setCurentPlace((prev) => prev === (categoryLength - 1) ? 0 : prev + 1)} className='prevnext' ><BsArrowRightSquareFill /></IconButton>
        </div>
    )
}

export default CategoriesSlider
