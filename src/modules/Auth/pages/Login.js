import React from "react";
import { Typography, Button } from "@mui/material";
import { Box } from "@mui/system";
import { Controller, useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useDispatch, useSelector } from "react-redux";
import { AuthInput } from "../components/AuthInput";
import { useHistory } from "react-router";
import { loginAction } from "../actions/authActions";
const schema = yup
  .object({
    email: yup.string().required("Email is required").email("Email invalid"),
    password: yup
      .string()
      .required("Password is required")
      .min(6, "Minimum 6 characters"),
  })
  .required();
export default function Login() {
  const history = useHistory();
  const dispatch = useDispatch();
  const { isLoading, error } = useSelector((state) => state.authReducer);
  console.log(error);
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (data) => {
    console.log(data);
    dispatch(loginAction(data, () => goToPage("/")));
  };
  const goToPage = (page) => {
    history.push(page);
  };
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Typography variant="body1" color="initial">
          Don't have an account?
          <Button
            variant="text"
            color="primaryBtn"
            onClick={() => {
              goToPage("/register");
            }}>
            Register
          </Button>
        </Typography>
        <Box
          flexDirection="column"
          display="flex"
          justifyContent="space-between">
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

          <Button
            disabled={isLoading}
            type="submit"
            variant="contained"
            color="primaryBtn">
            LOG IN
          </Button>
          {error && (
            <Typography variant="inherit" color="error">
              {error}
            </Typography>
          )}
        </Box>
      </form>
    </>
  );
}
