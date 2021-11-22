import React from "react";
import { Typography, Button, MenuItem } from "@mui/material";
import { Box } from "@mui/system";
import { Controller, useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import DatePicker from "../components/Datepicker";
import moment from "moment";
import { useDispatch, useSelector } from "react-redux";
import { registerAction } from "../actions/authActions";
import { useHistory } from "react-router";
import { AuthInput } from "../components/AuthInput";
const LETTER_REGEX =
  "^[a-zA-Z_ÀÁÂÃÈÉÊẾÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶ" +
  "ẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợ" +
  "ụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\\s]+$";
const INTEGER_REGEX = /^[0-9]+$/;
const DATE_REGEX = /^\d{4}[-](0?[1-9]|1[012])[/-](0?[1-9]|[12][0-9]|3[01])$/;
const schema = yup
  .object({
    name: yup
      .string()
      .required("Name is required")
      .trim()
      .matches(LETTER_REGEX, "Only alphabets are allowed for this field "),
    email: yup.string().required("Email is required").email("Email invalid"),
    password: yup
      .string()
      .required("Password is required")
      .min(6, "Minimum 6 characters"),
    phone: yup
      .string()
      .required("Phone is required")
      .matches(INTEGER_REGEX, "Phone numbers must be an integer numbers ")
      .length(10, " Require 10 numbers"),

    birthday: yup
      .string()
      .nullable(true)
      .required("Date is required")
      .matches(DATE_REGEX, "Invalid date")
      .test("birthday", "Invalid age", (value) => {
        return moment().diff(moment(value, "YYYY-MM-DD"), "years") >= 18;
      }),
    gender: yup.boolean().required("Please select your gender"),
    address: yup.string().required("Address is required"),
  })
  .required();
export default function Register() {
  const dispatch = useDispatch();
  const history = useHistory();
  const { isLoading } = useSelector((state) => state.authReducer);
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      phone: "",
      birthday: "",
      gender: true,
      address: "",
    },
  });

  const goToPage = (page) => {
    history.push(page);
  };
  const onSubmit = (data) => {
    dispatch(registerAction(data, goToPage("/")));
  };
  console.log("render");
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Typography variant="body1" color="initial">
          Already have an account?
          <Button
            variant="text"
            color="primaryBtn"
            onClick={() => {
              goToPage("/login");
            }}>
            LOG IN
          </Button>
        </Typography>
        <Box
          flexDirection="column"
          display="flex"
          justifyContent="space-between">
          <Controller
            name="name"
            control={control}
            render={({ field }) => (
              <AuthInput
                {...field}
                label="Name"
                error={!!errors.name}
                helperText={errors.name?.message}
              />
            )}
          />
          <Controller
            name="email"
            control={control}
            render={({ field }) => (
              <AuthInput
                {...field}
                label="email"
                error={!!errors.email}
                helperText={errors.email?.message}
              />
            )}
          />
          <Controller
            name="password"
            control={control}
            render={({ field }) => (
              <AuthInput
                {...field}
                label="password"
                error={!!errors.password}
                helperText={errors.password?.message}
              />
            )}
          />
          <Controller
            name="phone"
            control={control}
            render={({ field }) => (
              <AuthInput
                {...field}
                label="Telephone"
                error={!!errors.phone}
                helperText={errors.phone?.message}
              />
            )}
          />
          <Controller
            name="gender"
            control={control}
            render={({ field }) => (
              <AuthInput
                {...field}
                select
                label="Gender"
                error={!!errors.gender}
                helperText={errors.gender?.message}>
                <MenuItem key={"Male"} value={true}>
                  Male
                </MenuItem>
                <MenuItem key={"Female"} value={false}>
                  Female
                </MenuItem>
              </AuthInput>
            )}
          />
          <Controller
            name="address"
            control={control}
            render={({ field }) => (
              <AuthInput
                {...field}
                label="Address"
                error={!!errors.address}
                helperText={errors.address?.message}
              />
            )}
          />
          <DatePicker control={control} errors={errors} />
          <Button
            disabled={isLoading}
            type="submit"
            variant="contained"
            color="primaryBtn">
            SIGN UP
          </Button>
        </Box>
      </form>
    </>
  );
}
