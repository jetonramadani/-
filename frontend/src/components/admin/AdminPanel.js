import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import classes from "./AdminPanel.module.scss";
import EditShop from './EditShop';
import { default as axios } from "../../axiosConfig";
import { Navigate } from "react-router";
import LoadingComponent from "../loading/LoadingComponent";
import AddShop from "./AddShop";
import { dataActions } from '../../store/data-slice';
import { useDispatch } from 'react-redux';
import Filters from '../shops/Filters';
import useTranslate from '../../hooks/useTranslate';
import { Button } from '@mui/material';
const AdminPanel = () => {
    const dispatch = useDispatch();

    // Со следниот метод се упдатнува продавница повик до апи и редирект на логин ако не е логиран
    const updateShop = async (shopData) => {
        const res = await axios.put(`/shop/update/${shopData.id}`, {
            ...shopData,
        });
        if (!res.data) {
            setRedirectToLogin(true);
        } else {
            dispatch(dataActions.updatePlace({ ...res.data }));
        }
    }

    // Со следниот метод се брише продавница повик до апи и редирект на логин ако не е логиран
    const deleteShop = async (shopId) => {
        const res = await axios.delete(`/shop/delete/${shopId}`);

        if (res.data) {
            dispatch(dataActions.deletePlace(shopId));
        } else {
            setRedirectToLogin(true);
        }
    }

    const [redirectToLogin, setRedirectToLogin] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const effect = async () => {
            const res = await axios.get("/login/isLoggedIn");
            if (res.data === "307 TEMPORARY_REDIRECT") {
                setRedirectToLogin(true);
            }
            setLoading(false);
        }
        effect();
        return () => {

        }
    }, [])
    // Сите продавници од redux
    const places = useSelector((state) => state.data.places);
    // Филтрирани продавници
    const [filteredPlaces, setFilteredPlaces] = useState([]);
    // Custom Hook кој се користи за пребарување и споредба на латинични внес со кириличен
    const translate = useTranslate();
    const [filter, setFilter] = useState({}); // Filter criteria
    useEffect(() => {
        applyFilter(filter);
    }, [places])
    const applyFilter = (filterData) => {
        setFilter(filterData); // Чувај податоците за филтрирање
        let helpArr = [...places]; // Креирај помошна низа
        if (filterData.categories?.length) { // Ако имаш да филтрираш по категорија зимајги само продавниците од тие категории
            helpArr = helpArr.filter((place) =>
                filterData.categories.some((cat) => cat === place.category)
            ); // Филтрирај Продавници која има категорија што се наоѓа во избраните категори за пребарување
        }
        if (filterData.cities?.length) { // Ако имаш да филтрираш по град зимајги само продавниците од тие градови
            helpArr = helpArr.filter((place) =>
                filterData.cities.some((city) => place.address.includes(city))
            ); // Филтрирај Продавници која има град што се наоѓа во избраните градови за пребарување
        }
        if (filterData.nameOrAddres) { // Ако е внесено место текст за пребарување
            helpArr = helpArr.filter(
                (place) =>
                    translate(place.name) // Трансформирај го текстот во кирилица
                        .toLowerCase() // со мали букви и провериго прво со адресата па истата постапка и за името
                        .includes(filterData.nameOrAddres) ||
                    translate(place.address)
                        .toLowerCase()
                        .includes(filterData.nameOrAddres) // При што се враќат само тие што во името или адресата го содржуваат внесениот текст
            );
        }
        setFilteredPlaces(helpArr); // Сетирај филтрираните продавници на продавниците што остана
    };
    if (redirectToLogin) {
        return <Navigate to="/login" />
    }
    return (
        <div className={classes.wrapper}>
            {loading ? <LoadingComponent /> : <>
                <div>
                    <Button
                        variant="contained"
                        size="large"
                        style={{ width: "25%", marginLeft: "73%", marginTop: "1%", border: "1px dashed gray" }}
                        onClick={() => {
                            document.cookie = `loginToken="";path=/;`
                            setRedirectToLogin(true);
                        }}
                    >
                        Одјави се
                    </Button>
                </div>
                <Filters applyFilter={applyFilter} />
                <AddShop redirect={setRedirectToLogin.bind(null, true)} />
                {filteredPlaces?.map((shop) => <EditShop key={shop.id} {...shop} update={updateShop} delete={deleteShop} redirect={() => setRedirectToLogin(true)} />)}
            </>}
        </div>
    )
}

export default AdminPanel
