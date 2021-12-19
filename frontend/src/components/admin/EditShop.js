import React, { useState } from 'react';
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import classes from "./EditShop.module.scss";
import LoadingComponent from '../loading/LoadingComponent';
const EditShop = () => {
    const [showEditPart, setShowEditPart] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [formData, setFormData] = useState({})
    const setValue = (dataName, value) => {
        setFormData((prev) => ({
            ...prev,
            [dataName]: value
        }))
    }

    const loadShop = async () => {
        // setLoading to true
        // load shop data from backend
        // setFormData 
        // setLoading to false
    }

    return (
        <div >
            <div className={classes.openPart}>
                <div>
                    Инициални податоци за продавница истите што ги покажуваме на делот продавниции
                </div>
                <div className={classes.actions}>
                    <Button
                        variant="contained"
                        color="primary"
                        size="large"
                        onClick={() => setShowEditPart(true)}
                        disabled={showEditPart}
                    >
                        Промени
                    </Button>
                    <Button
                        variant="contained"
                        color="primary"
                        size="large"
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
                                value={formData.username}
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
                                value={formData.username}
                                onChange={(event) => setValue("address", event.target.value)}
                            />
                        </div>
                        <div>Select list for category</div>
                        <div>
                            <TextField
                                id="outlined-basic"
                                label="Tелефонски број"
                                variant="outlined"
                                fullWidth={true}
                                className={classes.textfield}
                                value={formData.username}
                                onChange={(event) => setValue("phone", event.target.value)}
                            />
                        </div>
                        <div>E-mail</div>
                        <div>Number lat</div>
                        <div>Number lon</div>
                    </div>
                    <div>Show Reviews</div>
                    <div style={{ display: "flex", justifyContent: "space-between" }}>
                        <Button
                            variant="contained"
                            // color="secondary"
                            size="medium"
                            style={{ width: "45%" }}
                            onClick={() => {
                                setShowEditPart(false);
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
                                setFormData({});
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
