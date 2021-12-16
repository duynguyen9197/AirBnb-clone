import { InputAdornment, TextField } from "@material-ui/core";
import React, { Fragment } from "react";
import { makeStyles } from "@material-ui/styles";
import ErrorOutlineIcon from "@material-ui/icons/ErrorOutline";

const TextFieldComponent = ({
  handleBlur,
  handleChange,
  touchedInput,
  errorInput,
  label,
  valueInput,
  name,
  type,
  fontSize,
}) => {
  const useStyle = makeStyles(() => ({
    textField: {
      width: "100%",
      marginTop: 15,
    },
  }));
  const classes = useStyle();
  return (
    <Fragment>
      <TextField
        size={fontSize}
        type={type}
        variant="outlined"
        className={classes.textField}
        onBlur={handleBlur}
        onChange={handleChange}
        label={label}
        name={name}
        InputLabelProps={{
          style: { fontSize: 13 },
        }}
        value={valueInput}
        error={touchedInput && errorInput}
        helperText={touchedInput && errorInput}
        InputProps={{
          endAdornment: touchedInput && errorInput && (
            <InputAdornment position="end">
              {<ErrorOutlineIcon color="secondary" />}
            </InputAdornment>
          ),
        }}
      />
    </Fragment>
  );
};

export default TextFieldComponent;
