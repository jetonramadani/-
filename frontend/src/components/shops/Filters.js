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
          fullWidth={true}
          className={classes.textField}
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
        <div style={{ display: "flex", flexDirection: "row", width: "50%" }}>
          <Button
            variant="contained"
            color="secondary"
            style={{ width: "50%", marginTop: "1%" }}
            size="large"
            onClick={() => {
              setFilterData({ ...defaultState });
              applyFilter(defaultState);
            }}
          >
            Поништи
          </Button>
          <Button
            variant="contained"
            color="primary"
            style={{ width: "50%", marginLeft: '5%', marginTop: "1%" }}
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
            Пребарај
          </Button>
        </div>
      </div>
    </>
  );
};

export default Filters;
