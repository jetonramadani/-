import React, { useState } from 'react';
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import classes from "./ShopReview.module.scss";
import CustomRating from './Rating';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { width } from '@mui/system';
const initialFormData = {
    username: "",
    rating: 3,
    comment: "",
    gender: ""
}
const ShopReview = () => {
    const [addButton, setAddButton] = useState(false);
    const [formData, setFormData] = useState({ ...initialFormData })
    const setValue = (dataName, value) => {
        setFormData((prev) => ({
            ...prev,
            [dataName]: value
        }))
    }
    const hasError = () => {
        for (const key in formData) {
            if (formData[key] === "") {
                console.log("TESTTT11", key)
                return true;
            }
        }
        return false;
    }
    return (
        <div >
            {!addButton && <div>
                <Button
                    variant="contained"
                    color="primary"
                    size="large"
                    style={{ width: "40%", marginLeft: "25%" }}
                    onClick={() => setAddButton(true)}
                >
                    Додади
                </Button>
            </div>}
            {addButton && <div className={classes.filters}>
                <TextField
                    id="outlined-basic"
                    label="Име"
                    variant="outlined"
                    className={classes.textfield}
                    value={formData.username}
                    onChange={(event) => setValue("username", event.target.value)}
                />
                <div className={classes.rate}>
                    <label>Оценка: </label>
                    <CustomRating onChange={setValue} value={formData.rating} />
                    <div style={{ marginLeft: '2rem' }}>
                        <FormControl component="fieldset" >
                            <FormLabel component="legend">Пол</FormLabel>
                            <RadioGroup row aria-label="gender" name="row-radio-buttons-group" value={formData.gender} onChange={(event) => setValue("gender", event.target.value)}>
                                <FormControlLabel value={0} control={<Radio />} label="Женски" />
                                <FormControlLabel value={1} control={<Radio />} label="Машки" />
                            </RadioGroup>
                        </FormControl>
                    </div>
                </div>
                <TextField
                    id="outlined-multiline-static"
                    label="Мислење"
                    multiline
                    rows={4}
                    variant="outlined"
                    value={formData.comment}
                    onChange={(event) => setValue("comment", event.target.value)}
                />
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
                            console.log(formData, "DATA");
                            setFormData({ ...initialFormData });
                            setAddButton(false);
                        }}
                    >
                        Додади
                    </Button> {/** TO BE IMPLEMENTED */}
                </div>
            </div>
            }
        </div >
    )
}

export default ShopReview
