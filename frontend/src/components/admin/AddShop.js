import React, { useState } from 'react';
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import classes from "./AddShop.module.scss";
import SelectInput from './SelectInput';
import { useSelector, useDispatch } from 'react-redux';
import { default as axios } from "../../axiosConfig";
import { dataActions } from "../../store/data-slice";
import LoadingComponent from '../loading/LoadingComponent';
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
function getCookie(cName) {
    const name = cName + "=";
    const cDecoded = decodeURIComponent(document.cookie); //to be careful
    const cArr = cDecoded.split('; ');
    let res;
    cArr.forEach(val => {
        if (val.indexOf(name) === 0) res = val.substring(name.length);
    })
    return res
}
const AddShop = (props) => {
    const [addButton, setAddButton] = useState(false);
    const [formData, setFormData] = useState({ ...initialFormData })
    const [loading, setLoading] = useState(false);
    const categories = useSelector((state) => state.data.categories);
    const dispatch = useDispatch();
    const setValue = (dataName, value) => {
        setFormData((prev) => ({
            ...prev,
            [dataName]: value
        }))
    }
    const postShop = async (shopData) => {
        setLoading(true);
        const res = await axios.post(`/shop/create`, shopData, {
            headers: {
                loginToken: getCookie("loginToken"),
            }
        });
        if (!res.data) {
            props.redirect();
        } else {
            dispatch(dataActions.addPlace(res.data))
            setFormData({ ...initialFormData });
            setAddButton(false);
        }
        setLoading(false);
    }

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
                    onClick={() => setAddButton(true)}
                >
                    Додади нова продавница
                </Button>
            </div>}
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
                            // color="secondary"
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
                        </Button> {/** TO BE IMPLEMENTED */}
                    </div>
                </div> : <LoadingComponent />)
            }
        </div >
    )
}

export default AddShop
