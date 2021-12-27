/* eslint-disable */
import React, { useState } from 'react';
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import classes from "./EditShop.module.scss";
import LoadingComponent from '../loading/LoadingComponent';
import SelectInput from './SelectInput';
import { useSelector } from 'react-redux';
import { default as axios } from "../../axiosConfig";
import EditReview from './EditReview';
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
const EditShop = (props) => {
    const [showEditPart, setShowEditPart] = useState(false);
    const [showReviews, setShowReviews] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [reviewLoading, setReviewLoading] = useState(false);
    const [formData, setFormData] = useState({})
    const categories = useSelector((state) => state.data.categories);

    const setValue = (dataName, value) => {
        setFormData((prev) => ({
            ...prev,
            [dataName]: value
        }))
    }

    const loadShop = async () => {
        setShowEditPart(true);
        setIsLoading(true);
        const shop = await axios.get(`/shop/get/${props.id}`);
        setFormData(shop.data);
        setIsLoading(false);
    }

    const removeReview = async (reviewId) => {
        setReviewLoading(true);
        const res = await axios.delete(`/shop/${props.id}/delete-review?reviewId=${reviewId}`, {
            headers: {
                loginToken: getCookie("loginToken"),
            }
        });

        if (!res.data) {
            props.redirect();
        } else {
            setFormData((prev) => ({
                ...prev,
                reviewList: res.data,
            }))
        }


        setReviewLoading(false);
    }


    return (
        <div >
            <div className={classes.openPart}>
                <div >
                    <h2>{props.name}</h2>
                    <h4>{props.category}</h4>
                    <p>{props.address}</p>
                </div>
                <div className={classes.actions}>
                    <Button
                        variant="contained"
                        color="primary"
                        size="large"
                        onClick={loadShop}
                        disabled={showEditPart}
                    >
                        Промени
                    </Button>
                    <Button
                        variant="contained"
                        color="secondary"
                        size="large"
                        onClick={props.delete.bind(this, props.id)}
                    >
                        Избриши
                    </Button>
                </div>
            </div>
            <div className={classes.closedPart}>
                {!isLoading ? showEditPart && <>
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
                    {formData?.reviewList?.length > 0 && <Button variant="contained" size="large" color="" onClick={() => setShowReviews((prev) => !prev)}>{showReviews ? "Затвори" : "Прикажи"} секција за мислења</Button>}
                    {showReviews &&
                        (reviewLoading ? <LoadingComponent /> : <div className={classes.reviews}>
                            {formData?.reviewList?.map((review, index) => <EditReview key={review.username + index} id={index} {...review} onDelete={removeReview} />)}
                        </div>)}
                    <div style={{ display: "flex", justifyContent: "space-between" }}>
                        <Button
                            variant="contained"
                            // color="secondary"
                            size="medium"
                            style={{ width: "45%" }}
                            onClick={() => {
                                setShowEditPart(false);
                                setShowReviews(false);
                                setFormData({})
                            }}
                        >
                            Откажи
                        </Button>
                        <Button
                            variant="contained"
                            color="primary"
                            size="medium"
                            style={{ width: "45%" }}
                            onClick={() => {
                                // setFormData({});
                                props.update(formData);
                            }}
                        >
                            Промени
                        </Button> {/** TO BE IMPLEMENTED */}
                    </div>
                </>
                    : <LoadingComponent />
                }
            </div>

        </div >
    )
}

export default EditShop;
