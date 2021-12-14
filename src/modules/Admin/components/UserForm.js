import React from "react";
import { Button, MenuItem } from "@mui/material";
import { Box } from "@mui/system";
import { Controller, useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
// import DatePicker from "../../../components/DatePicker";
import moment from "moment";
import { useDispatch, useSelector } from "react-redux";
// import { registerAction } from "../actions/authActions";
// import { FormInput } from "../components/AuthInput";
import DatePicker from "../../../components/DatePicker";
import { FormInput } from "./FormInput";
const LETTER_REGEX =
  "^[a-zA-Z_ÀÁÂÃÈÉÊẾÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶ" +
  "ẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợ" +
  "ụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\\s]+$";
const INTEGER_REGEX = /^[0-9]+$/;
// const DATE_REGEX = /^\d{4}[-](0?[1-9]|1[012])[/-](0?[1-9]|[12][0-9]|3[01])$/;
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
      // .matches(DATE_REGEX, "Invalid date")
      .test("birthday", "Invalid age", (value) => {
        return moment().diff(moment(value, "YYYY-MM-DD"), "years") >= 18;
      }),
    gender: yup.boolean().required("Please select your gender"),
    type: yup.string().required("Please select type"),
    address: yup.string().required("Address is required"),
  })
  .required();
export default function UserForm({ handleOk, action, values }) {
  const dispatch = useDispatch();
  const { isLoading } = useSelector((state) => state.authReducer);
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: values
      ? values
      : {
          name: "",
          email: "",
          password: "",
          phone: "",
          birthday: "",
          gender: true,
          type: "",
          address: "",
        },
  });
  // console.log(values._id);
  const onSubmit = (data) => {
    dispatch(action(data, values?._id));
    // close modal
    handleOk();
  };
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Box
          flexDirection="column"
          display="flex"
          justifyContent="space-between">
          <Controller
            name="name"
            control={control}
            render={({ field }) => (
              <FormInput
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
              <FormInput
                {...field}
                label="email"
                error={!!errors.email}
                helperText={errors.email?.message}
              />
            )}
          />
          {!values && (
            <Controller
              name="password"
              control={control}
              render={({ field }) => (
                <FormInput
                  {...field}
                  label="password"
                  error={!!errors.password}
                  helperText={errors.password?.message}
                />
              )}
            />
          )}
          <Controller
            name="phone"
            control={control}
            render={({ field }) => (
              <FormInput
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
              <FormInput
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
              </FormInput>
            )}
          />
          <Controller
            name="type"
            control={control}
            render={({ field }) => (
              <FormInput
                {...field}
                select
                label="Type"
                error={!!errors.type}
                helperText={errors.type?.message}>
                <MenuItem key={"ADMIN"} value={"ADMIN"}>
                  ADMIN
                </MenuItem>
                <MenuItem key={"CLIENT"} value={"CLIENT"}>
                  CLIENT
                </MenuItem>
              </FormInput>
            )}
          />
          <Controller
            name="address"
            control={control}
            render={({ field }) => (
              <FormInput
                {...field}
                label="Address"
                error={!!errors.address}
                helperText={errors.address?.message}
              />
            )}
          />
          <DatePicker control={control} errors={errors}></DatePicker>
          <Button
            disabled={isLoading}
            type="submit"
            variant="contained"
            color="primaryBtn">
            SUBMIT
          </Button>
        </Box>
      </form>
    </>
  );
}
