import React from 'react';
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

const ShopReview = () => {
    return (
        <div >
            <div>
                <Button
                    variant="contained"
                    color="primary"
                    size="large"
                    style={{ width: "40%", marginLeft: "25%" }}
                >
                    Додади
                </Button>
            </div>
            <div className={classes.filters}>
                <TextField
                    id="outlined-basic"
                    label="Име"
                    variant="outlined"
                    className={classes.textfield}
                />
                <div className={classes.rate}>
                    <label>Оценка: </label>
                    <CustomRating />
                    <div style={{ marginLeft: '2rem' }}>
                        <FormControl component="fieldset" >
                            <FormLabel component="legend">Пол</FormLabel>
                            <RadioGroup row aria-label="gender" name="row-radio-buttons-group">
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
                />
                <Button
                    variant="contained"
                    color="secondary"
                    size="medium"
                >Apply</Button>
            </div>
        </div >
    )
}

export default ShopReview
