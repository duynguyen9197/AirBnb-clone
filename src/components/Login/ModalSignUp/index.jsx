import {
  Box,
  FormControlLabel,
  FormLabel,
  IconButton,
  Radio,
  RadioGroup,
  Slide,
  TextField,
  Typography,
} from "@material-ui/core";
import Modal from "@material-ui/core/Modal";
import CloseIcon from "@material-ui/icons/Close";
import { useFormik } from "formik";
import * as yup from "yup";
import moment from "moment";
import React, { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { registerAction } from "../../../store/action/Auth";
import { createAction } from "../../../store/action/createAction/createAction";
import {
  HIDE_MODAL_SIGNUP,
  SHOW_MODAL_SIGNIN,
} from "../../../store/types/AuthType";
import ButtonSubmit from "../../ButtonSubmit";
import TextFieldComponent from "../TextField";
import useStyles from "./style";
import { useSnackbar } from "notistack";

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

const ModalSignUp = () => {
  const { modalSignUp } = useSelector((state) => state.AuthReducer);
  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();
  const handleClose = () => {
    dispatch(createAction(HIDE_MODAL_SIGNUP));
  };
  const handleClickToSignIn = () => {
    dispatch(createAction(SHOW_MODAL_SIGNIN));
    handleClose();
  };
  const handleSubmitForm = async (e) => {
    e.preventDefault();
    if (!formik.isValid) return;
    dispatch(
      registerAction(formik.values, (mes) => {
        enqueueSnackbar(mes, { variant: "success" });
      }, (mes) => {
        enqueueSnackbar(mes, { variant: "error" });
      })
    );
    handleClose();
  };
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
  const classes = useStyles();
  return (
    <Fragment>
      <Modal
        open={modalSignUp}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        className={classes.root}
        closeAfterTransition
      >
        <Slide direction="up" in={modalSignUp}>
          <div className={classes.modal__content}>
            <div className={classes.modal__header}>
              <IconButton onClick={handleClose}>
                <CloseIcon />
              </IconButton>
              <Typography variant="body2">
                Chào mừng bạn đến với Airbnb
              </Typography>
              <div></div>
            </div>
            <div className={classes.modal__detail}>
              <Typography variant="h3">Đăng Ký</Typography>
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
                <RadioGroup
                  className={classes.form__radio}
                  onChange={handleChangeGender}
                >
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

                <ButtonSubmit text="Tiếp tục" />

                <Box textAlign="center">
                  <Typography variant="span">
                    Already have an account?
                    <Typography
                      variant="span"
                      className={classes.form__textLogin}
                      onClick={handleClickToSignIn}
                    >
                      Login Here
                    </Typography>
                  </Typography>
                </Box>
              </form>
            </div>
          </div>
        </Slide>
      </Modal>
    </Fragment>
  );
};
export default ModalSignUp;
