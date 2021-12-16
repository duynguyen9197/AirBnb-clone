import {
  Box,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  TextField,
} from "@material-ui/core";
import { useFormik } from "formik";
import moment from "moment";
import React from "react";
import { useDispatch } from "react-redux";
import * as yup from "yup";
import ButtonSubmit from "../../../components/ButtonSubmit";
import TextFieldComponent from "../../../components/Login/TextField";
import { addUserAction } from "../../../store/action/ManageUserAction";
import useStyles from "./style";
import { useSnackbar } from "notistack";
import { useHistory } from "react-router";

const schema = yup.object().shape({
  name: yup.string().required("*FulName is required"),
  password: yup
    .string()
    .required("*Password is required")
    .min(6, "*Password must be least 6 character"),
  confirmPassword: yup
    .string()
    .required("*Confirm Password is required")
    .oneOf([yup.ref("password"), null], "*Password must match"),
  email: yup.string().required("*Email is required").email("*Email is Invalid"),
  phone: yup.number().required("*Phone is required"),
  address: yup.string().required("*Address is required"),
});
const AddUser = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();
  const history = useHistory();

  const formik = useFormik({
    validateOnMount: true,
    validationSchema: schema,
    initialValues: {
      email: "",
      password: "",
      confirmPassword: "",
      name: "",
      phone: "",
      gender: "",
      address: "",
      birthday: "",
      type: "CLIENT",
    },
  });
  const handleChangeDate = (e) => {
    formik.setFieldValue(
      "birthday",
      moment(e.target.value).format("YYYY/MM/DD")
    );
  };
  const handleChangeGender = (e) => {
    formik.setFieldValue("gender", e.target.value);
  };
  const handleChangeType = (e) => {
    formik.setFieldValue("type", e.target.value);
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();
    if (!formik.isValid) return;
    dispatch(
      addUserAction(
        formik.values,
        (mes) => {
          enqueueSnackbar(mes, { variant: "success" });
        },
        () => history.push("/admin/user")
      )
    );
  };
  return (
    <form onSubmit={handleSubmitForm}>
      <TextFieldComponent
        {...formik}
        label="Email"
        name="email"
        valueInput={formik.values.email}
        errorInput={formik.errors.email}
        touchedInput={formik.touched.email}
      />
      <TextFieldComponent
        {...formik}
        type="password"
        label="Password"
        name="password"
        valueInput={formik.values.password}
        errorInput={formik.errors.password}
        touchedInput={formik.touched.password}
      />
      <TextFieldComponent
        {...formik}
        type="password"
        label="Confirm PassWord"
        name="confirmPassword"
        valueInput={formik.values.confirmPassword}
        errorInput={formik.errors.confirmPassword}
        touchedInput={formik.touched.confirmPassword}
      />

      <TextFieldComponent
        {...formik}
        label="Full Name"
        name="name"
        valueInput={formik.values.name}
        errorInput={formik.errors.name}
        touchedInput={formik.touched.name}
      />
      <TextFieldComponent
        {...formik}
        type="text"
        label="Phone"
        name="phone"
        valueInput={formik.values.phone}
        errorInput={formik.errors.phone}
        touchedInput={formik.touched.phone}
      />

      <TextField
        type="date"
        variant="outlined"
        label="Birthday"
        className={classes.form__input}
        InputLabelProps={{
          shrink: true,
        }}
        name="birthday"
        onChange={handleChangeDate}
        onBLur={formik.handleBlur}
      />
      <RadioGroup className={classes.form__radio} onChange={handleChangeGender}>
        <Box display="flex" alignItems="center">
          <FormLabel>Gender : </FormLabel>
          <FormControlLabel
            control={<Radio color="primary" />}
            label="Male"
            name="male"
            value="true"
          />

          <FormControlLabel
            control={<Radio />}
            label="Fermale"
            name="fermale"
            value="false"
          />
        </Box>
      </RadioGroup>
      <TextFieldComponent
        {...formik}
        label="Address"
        name="address"
        valueInput={formik.values.address}
        errorInput={formik.errors.address}
        touchedInput={formik.touched.address}
      />
      <RadioGroup className={classes.form__radio} onChange={handleChangeType}>
        <Box display="flex" alignItems="center">
          <FormLabel>TYPE : </FormLabel>
          <FormControlLabel
            control={<Radio color="primary" />}
            label="CLIENT"
            name="client"
            value="CLIENT"
            checked={formik.values.type === "CLIENT"}
          />
          <FormControlLabel
            control={<Radio />}
            label="ADMIN"
            name="admin"
            value="ADMIN"
            checked={formik.values.type === "ADMIN"}
          />
        </Box>
      </RadioGroup>
      <Box width="30%">
        <ButtonSubmit text="Tiếp tục" />
      </Box>
    </form>
  );
};

export default AddUser;
