
import * as React from "react";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const SelectInput = (props) => {
    return (
        <FormControl sx={{ width: "100%" }}>
            <InputLabel id="demo-multiple-name-label">{props.name}</InputLabel>
            <Select
                // labelId="demo-multiple-name-label"
                // id="demo-multiple-name"
                // multiple
                value={props.value}
                onChange={props.onChange}
                input={<OutlinedInput label={props.name} />}
                fullWidth={true}
            >
                {props?.data?.map((name) => (
                    <MenuItem key={name} value={name}>
                        {name}
                    </MenuItem>
                ))}
            </Select>
        </FormControl>
    )
}

export default SelectInput
