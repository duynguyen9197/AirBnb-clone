import React from "react";
import TextField from "@mui/material/TextField";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DesktopDatePicker from "@mui/lab/DesktopDatePicker";
import DateAdapter from "@mui/lab/AdapterMoment";
import moment from "moment";
import { Controller } from "react-hook-form";
export default function DatePicker({ control, errors, setValue }) {
  return (
    <LocalizationProvider dateAdapter={DateAdapter}>
      <Controller
        name="birthday"
        control={control}
        render={({ field: { onChange, onBlur, value, name, ref } }) => (
          <DesktopDatePicker
            inputFormat="DD/MM/YYYY"
            onBlur={onBlur}
            onChange={(e) => {
              const date = moment(e?.toString(), "LLLL").format("YYYY-MM-DD");
              const d = date === "Invalid date" ? moment() : date;
              onChange(d);
            }}
            value={value}
            inputRef={ref}
            renderInput={(props) => (
              <TextField
                {...props}
                label="Birthday"
                error={!!errors.birthday}
                helperText={errors.birthday?.message}
              />
            )}
          />
        )}
      />
    </LocalizationProvider>
  );
}
