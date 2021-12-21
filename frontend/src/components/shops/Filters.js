/* eslint-disable */
import React, { useState, useEffect } from "react";
import Button from "@material-ui/core/Button";
import classes from "./StoreContainer.module.scss";
import TextField from "@material-ui/core/TextField";
import MultipleCheckboxes from "./MultipleCheckboxes";
import useTranslate from "../../hooks/useTranslate";
import { useSelector } from "react-redux";
const Filters = ({ applyFilter }) => {
  const defaultState = {
    nameOrAddres: "",
    categories: [],
    cities: [],
  };
  const cities = useSelector((state) => state.data.cities);
  const categories = useSelector((state) => state.data.categories);
  const [filterData, setFilterData] = useState({
    ...defaultState,
  });
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
            setFilterData((prev) => ({
              ...prev,
              nameOrAddres: event.target.value,
            }))
          }
          value={filterData.nameOrAddres}
          className={classes.textField}
        // helperText={
        //   filterData.nameOrAddres
        //     ? `Се бара: ${translate(filterData.nameOrAddres)}`
        //     : ""
        // }
        />
      </form>
      <div className={classes.checkBoxes}>
        <MultipleCheckboxes
          onChange={(event, values) => {
            setFilterData((prev) => ({
              ...prev,
              cities: values,
            }));
          }}
          label="Град"
          value={filterData.cities}
          listValue={cities}
        />
        <MultipleCheckboxes
          onChange={(event, values) => {
            setFilterData((prev) => ({
              ...prev,
              categories: values,
            }));
          }}
          label="Категорија"
          value={filterData.categories}
          listValue={categories}

        />
        <div style={{ display: "flex", flexDirection: "column", width: "35%" }}>
          <Button
            variant="contained"
            color="primary"
            style={{ width: "80%", marginRight: "6%", marginTop: "1%" }}
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
          <Button
            variant="contained"
            color="primary"
            style={{ width: "80%", marginRight: "6%", marginTop: "1%" }}
            size="large"
            onClick={() => {
              setFilterData({ ...defaultState });
              applyFilter(defaultState);
            }}
          >
            CLEAR
          </Button>
        </div>
      </div>
    </>
  );
};

export default Filters;
