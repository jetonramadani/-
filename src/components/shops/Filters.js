/* eslint-disable */
import React, {useState, useEffect} from "react";
import Button from "@material-ui/core/Button";
import classes from "./StoreContainer.module.scss";
import TextField from "@material-ui/core/TextField";
import MultipleCheckboxes from "./MultipleCheckboxes";
const Filters = () => {
  const [filter, filerData] = useState({});
  return (
    <>
      <div className={classes.topHeader}>
        <h1 className={classes.topHeaderContent}>MAPedonija</h1>
        <Button variant="contained" color="primary" size="large">
          + Add Location
        </Button>
      </div>

      <form noValidate autoComplete="off" className={classes.searchBar}>
        <TextField
          id="outlined-basic"
          label="Search shops by name, city or category"
          variant="outlined"
          onChange={(event) => console.log(event)}
          className={classes.textField}
        />
      </form>
      <div className={classes.checkBoxes}>
        <MultipleCheckboxes />
        <MultipleCheckboxes />
        <Button
          variant="contained"
          color="primary"
          style={{width: "25%", marginRight: "6%"}}
          size="large"
        >
          Apply
        </Button>
      </div>
    </>
  );
};

export default Filters;
