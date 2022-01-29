import React, { useState } from 'react';
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import classes from "./AddShop.module.scss";
import SelectInput from './SelectInput';
import { useSelector, useDispatch } from 'react-redux';
import { default as axios } from "../../axiosConfig";
import { dataActions } from "../../store/data-slice";
import LoadingComponent from '../loading/LoadingComponent';
// инициален празен објект за продавница
const initialFormData = {
    "address": "",
    "email": null,
    "name": "",
    "phone": null,
    "website": null,
    "opening_hours": null,
    "category": "Маркети",
    "lat": null,
    "lon": null,
    "avgGrade": 0,
    "reviewList": []
}
const AddShop = (props) => {
    // Се користи за динамичко покажување на секцијата за додавање продавница
    const [addButton, setAddButton] = useState(false); // инциално не се покажува
    const [formData, setFormData] = useState({ ...initialFormData }) // на почеток е празен инциален објект
    const [loading, setLoading] = useState(false); // Дали се прави loading на податоци
    // Се зимат од redux сите категории
    const categories = useSelector((state) => state.data.categories);
    const dispatch = useDispatch();

    // Функција за update на статот на продавницата, changeHandler за инпут полињата
    const setValue = (dataName, value) => {
        setFormData((prev) => ({
            ...prev,
            [dataName]: value
        }))
    }

    // Додавање на продавница, на почеток се сетира дека се лоаднува нешто, се прави повик до апи
    // ако се враќа null значи корисникот не е логиран и не може да зачува продавница при што
    // се редиректира во логин страницата, во спротивен случај се додава новата продавница и во 
    // redux и се ресетира формата на нова празна продавница. На крај се става loading на false
    // при што се трга спинерот за лоадирање.
    const postShop = async (shopData) => {
        setLoading(true);
        const res = await axios.post(`/shop/create`, shopData);
        if (!res.data) {
            props.redirect();
        } else {
            dispatch(dataActions.addPlace(res.data))
            setFormData({ ...initialFormData });
            setAddButton(false);
        }
        setLoading(false);
    }

    // Функција која проверува дали се внесени задолжителните податоци
    // Се користи за дизејблирање на копчето Додади продавница се додека не се внесени задолжителните податоци
    const hasError = () => {
        return formData.name === "" || formData.lat === null || formData.lon === null;
    }
    return (
        <div className={classes.padding}>
            {!addButton && <div>
                <Button
                    variant="contained"
                    size="large"
                    style={{ width: "40%", marginLeft: "25%", border: "1px dashed gray" }}
                    onClick={setAddButton.bind(null, true)} // се дава параметар true кој што ќе се користи при повик на сетерот за стате
                >
                    Додади нова продавница
                </Button>
            </div>}
            {/**Ако секцијата за нова продавница е видлива провери дали се прави некој повик и врз 
             * основа на тоа правиприкажување на спинер или форма
             */}
            {addButton && (!loading ?
                <div className={classes.filters}>
                    <div className={classes.editFields}>
                        <div>
                            <TextField
                                id="outlined-basic"
                                label="Име на продавница"
                                variant="outlined"
                                fullWidth={true}
                                className={classes.textfield}
                                value={formData.name}
                                onChange={(event) => setValue("name", event.target.value)}
                                required
                            />
                        </div>
                        <div>
                            <TextField
                                id="outlined-basic"
                                label="Адреса на продавница"
                                variant="outlined"
                                fullWidth={true}
                                className={classes.textfield}
                                value={formData.address}
                                onChange={(event) => setValue("address", event.target.value)}
                            />
                        </div>
                        <div>
                            <SelectInput name="Категорија" data={categories} value={formData.category} onChange={(event) => setValue("category", event.target.value)} />
                        </div>

                        <div>
                            <TextField
                                id="outlined-basic"
                                label="Tелефонски број"
                                variant="outlined"
                                fullWidth={true}
                                className={classes.textfield}
                                value={formData.phone}
                                onChange={(event) => setValue("phone", event.target.value)}
                            />
                        </div>
                        <div>
                            <TextField
                                id="outlined-basic"
                                label="E-mail"
                                variant="outlined"
                                fullWidth={true}
                                className={classes.textfield}
                                value={formData.email}
                                onChange={(event) => setValue("email", event.target.value)}
                                type="email"
                            />
                        </div>
                        <div>
                            <TextField
                                id="outlined-basic"
                                label="Latitude"
                                variant="outlined"
                                fullWidth={true}
                                className={classes.textfield}
                                value={formData.lat}
                                onChange={(event) => setValue("lat", event.target.value)}
                                type="number"
                                required
                            />
                        </div>
                        <div>
                            <TextField
                                id="outlined-basic"
                                label="Longitude"
                                variant="outlined"
                                fullWidth={true}
                                className={classes.textfield}
                                value={formData.lon}
                                onChange={(event) => setValue("lon", event.target.value)}
                                type="number"
                                required
                            />
                        </div>
                        <div>
                            <TextField
                                id="outlined-basic"
                                label="Веб страна"
                                variant="outlined"
                                fullWidth={true}
                                className={classes.textfield}
                                value={formData.website}
                                onChange={(event) => setValue("website", event.target.value)}
                            />
                        </div>
                        <div>
                            <TextField
                                id="outlined-basic"
                                label="Работно време"
                                variant="outlined"
                                fullWidth={true}
                                className={classes.textfield}
                                value={formData.opening_hours}
                                onChange={(event) => setValue("opening_hours", event.target.value)}
                            />
                        </div>

                    </div>
                    <div style={{ display: "flex", justifyContent: "space-between" }}>
                        <Button
                            variant="contained"
                            size="medium"
                            style={{ width: "45%" }}
                            onClick={() => {
                                setAddButton(false);
                                setFormData({ ...initialFormData })
                            }}
                        >
                            Откажи
                        </Button>
                        <Button
                            variant="contained"
                            color="primary"
                            size="medium"
                            style={{ width: "45%" }}
                            disabled={hasError()}
                            onClick={() => {
                                postShop({
                                    ...formData,
                                })
                            }}
                        >
                            Додади
                        </Button>
                    </div>
                </div> : <LoadingComponent />)
            }
        </div >
    )
}

export default AddShop
