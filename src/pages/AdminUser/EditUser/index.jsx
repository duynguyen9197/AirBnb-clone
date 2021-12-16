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
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router";
import * as yup from "yup";
import ButtonSubmit from "../../../components/ButtonSubmit";
import TextFieldComponent from "../../../components/Login/TextField";
import { editUserAction } from "../../../store/action/ManageUserAction";
import useStyles from "./style";
import { useSnackbar } from "notistack";

const schema = yup.object().shape({
  name: yup.string().required("*FulName is required"),
  email: yup.string().required("*Email is required").email("*Email is Invalid"),
  phone: yup.number().required("*Phone is required"),
  address: yup.string().required("*Address is required"),
});
const EditUser = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { userId } = useParams();
  const { enqueueSnackbar } = useSnackbar();
  const { userList } = useSelector((state) => state.ManageUserReducer);
  const infoUser = userList?.filter((user) => user._id === userId);
  const history = useHistory();
  const formik = useFormik({
    validateOnMount: true,
    validationSchema: schema,
    enableReinitialize: true,
    initialValues: {
      email: infoUser[0]?.email,
      name: infoUser[0]?.name,
      phone: infoUser[0]?.phone,
      gender: infoUser[0]?.gender,
      address: infoUser[0]?.address,
      birthday: moment(infoUser[0]?.birthday).format("YYYY-MM-DD"),
      type: infoUser[0]?.type,
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
      editUserAction(
        userId,
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
        defaultValue={formik.values.birthday}
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
        <ButtonSubmit text="Cập nhật" />
      </Box>
    </form>
  );
};

export default EditUser;
