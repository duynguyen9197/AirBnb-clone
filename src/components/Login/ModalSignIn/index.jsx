import { IconButton, Slide, Typography } from "@material-ui/core";
import Modal from "@material-ui/core/Modal";
import CloseIcon from "@material-ui/icons/Close";
import { useFormik } from "formik";
import React, { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as yup from "yup";
import { loginAction } from "../../../store/action/Auth";
import { createAction } from "../../../store/action/createAction/createAction";
import {
  HIDE_MODAL_SIGNIN,
  SHOW_MODAL_SIGNUP,
} from "../../../store/types/AuthType";
import ButtonSubmit from "../../ButtonSubmit";
import LoginWithFacebook from "../FacebookLogin";
import LoginWithGoogle from "../GoogleLogin";
import TextFieldComponent from "../TextField";
import useStyles from "./style";
import { useSnackbar } from "notistack";

const schemaValidation = yup.object().shape({
  password: yup.string().required("*Password is required"),
  email: yup.string().required("*Email is required").email("*Email is Invalid"),
});

const ModalSignIn = () => {
  const { modalSignIn } = useSelector((state) => state.AuthReducer);
  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();
  const handleClose = () => {
    dispatch(createAction(HIDE_MODAL_SIGNIN));
  };
  const handleClickToSignUp = () => {
    dispatch(createAction(HIDE_MODAL_SIGNIN));
    dispatch(createAction(SHOW_MODAL_SIGNUP));
  };
  const handleSubmitForm = (e) => {
    e.preventDefault();
    if (!formik.isValid) return;
    dispatch(
      loginAction(
        formik.values,
        (mes) => {
          enqueueSnackbar(mes, { variant: "success" });
        },
        (mes) => {
          enqueueSnackbar(mes, { variant: "error" });
        }
      )
    );
  };
  const formik = useFormik({
    validateOnMount: true,
    validationSchema: schemaValidation,
    initialValues: {
      email: "admin_airbnb@gmail.com",
      password: "123456",
    },
  });

  const classes = useStyles();

  return (
    <Fragment>
      <Modal
        open={modalSignIn}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        className={classes.root}
        closeAfterTransition
      >
        <Slide direction="up" in={modalSignIn}>
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
              <Typography variant="h3">Đăng Nhập</Typography>
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
                <ButtonSubmit text="Tiếp tục" />
              </form>
              <div className={classes.modal__line}>
                <Typography variant="span">hoặc</Typography>
              </div>
              <div className={classes.form__continue__login}>
                <LoginWithFacebook
                  className={classes.form__continue__login__with}
                />
                <LoginWithGoogle
                  className={classes.form__continue__login__with}
                />
              </div>

              <div className={classes.linkToSignUp}>
                <Typography variant="body2">
                  Don't have an account?
                  <Typography variant="span" onClick={handleClickToSignUp}>
                    Sign Up
                  </Typography>
                </Typography>
              </div>
            </div>
          </div>
        </Slide>
      </Modal>
    </Fragment>
  );
};
export default ModalSignIn;
