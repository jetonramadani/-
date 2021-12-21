/* eslint-disable */
import React from "react";
import Checkbox from "@material-ui/core/Checkbox";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import CheckBoxOutlineBlankIcon from "@material-ui/icons/CheckBoxOutlineBlank";
import CheckBoxIcon from "@material-ui/icons/CheckBox";
import classes from "./StoreContainer.module.scss";
const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

const MultipleCheckboxes = ({ onChange, label, value, listValue }) => {
  return (
    <Autocomplete
      multiple
      id="checkboxes-tags-demo"
      options={listValue}
      disableCloseOnSelect
      // filterOptions={}
      limitTags={1}
      onChange={onChange}
      value={value}
      renderOption={(option, { selected }) => (
        <React.Fragment>
          <Checkbox
            icon={icon}
            checkedIcon={checkedIcon}
            style={{ marginRight: 8 }}
            checked={selected}
          />
          {option}
        </React.Fragment>
      )}
      className={classes.checkBoxStyle}
      renderInput={(params) => (
        <TextField
          {...params}
          variant="outlined"
          label={label} /*placeholder="All cities" */
        />
      )}
    />
  );
};


export default MultipleCheckboxes;
