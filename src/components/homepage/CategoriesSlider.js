import React, { useEffect, useState } from 'react'
import { GrCart } from 'react-icons/gr';
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
    "Маркети": <GrCart size="4rem" />
}
const mapedCategories = mkCategries.map((category) =>
    <>
        <div>{categoryIcons[category]}</div>
        <div>{category}</div>
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
        <div>
            <button onClick={() => setCurentPlace((prev) => prev === 0 ? categoryLength - 1 : prev - 1)}>PREV</button>
            {siteWidth > 1 && <span style={{ width: "20%", display: "inline-block" }}>{mapedCategories[currentPlace % categoryLength]}</span>}
            {siteWidth > 1 && <span style={{ width: "20%", display: "inline-block" }}>{mapedCategories[(currentPlace + 1) % categoryLength]}</span>}
            {siteWidth > 2 && <span style={{ width: "20%", display: "inline-block" }}>{mapedCategories[(currentPlace + 2) % categoryLength]}</span>}
            {siteWidth > 3 && <span style={{ width: "20%", display: "inline-block" }}>{mapedCategories[(currentPlace + 3) % categoryLength]}</span>}
            <button onClick={() => setCurentPlace((prev) => prev === (categoryLength - 1) ? 0 : prev + 1)}>NEXT</button>
        </div>
    )
}

export default CategoriesSlider
