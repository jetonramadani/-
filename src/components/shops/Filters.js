/* eslint-disable */
import React, {useState, useEffect} from "react";
import Button from "@material-ui/core/Button";
import classes from "./StoreContainer.module.scss";
import TextField from "@material-ui/core/TextField";
import MultipleCheckboxes from "./MultipleCheckboxes";
import useTranslate from "../../hooks/useTranslate";
const Filters = ({applyFilter}) => {
  const [filterData, setFilerData] = useState({});
  const translate = useTranslate();
  return (
    <>
      {/* <div className={classes.topHeader}>
        <h1 className={classes.topHeaderContent}>MAPedonija</h1>
        <Button variant="contained" color="primary" size="large">
          + Додади локација
        </Button>
      </div> */}

      <form noValidate autoComplete="off" className={classes.searchBar}>
        <TextField
          id="outlined-basic"
          label="Барај продавница по име или адреса"
          variant="outlined"
          type="search"
          onChange={(event) =>
            setFilerData((prev) => ({
              ...prev,
              nameOrAddres: event.target.value,
            }))
          }
          className={classes.textField}
          helperText={
            filterData.nameOrAddres
              ? `Се бара: ${translate(filterData.nameOrAddres)}`
              : ""
          }
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
          onClick={() =>
            applyFilter({
              ...filterData,
              nameOrAddres: translate(filterData.nameOrAddres || "")
                .toLowerCase()
                .trim(),
            })
          }
        >
          Apply
        </Button>
      </div>
    </>
  );
};

export default Filters;
