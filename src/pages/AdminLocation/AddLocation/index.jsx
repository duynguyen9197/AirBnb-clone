import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import { useFormik } from "formik";
import React, { Fragment, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import * as yup from "yup";
import TextFieldComponent from "../../../components/Login/TextField";
import {
  CreateLocationAction,
  postUploadImageAction,
  deleteLocationAction,
} from "../../../store/action/LocationAction";
import StepperBox from "../../../components/StepperBox";
import useStyles from "./style";
import GetAppIcon from "@material-ui/icons/GetApp";
import { Box } from "@mui/system";
import ButtonSubmit from "../../../components/ButtonSubmit";
import { useSnackbar } from "notistack";
const schema = yup.object().shape({
  name: yup.string().required("*Name is Required"),
  province: yup.string().required("*Province is Required"),
  country: yup.string().required("*Country is Required"),
  valueate: yup
    .number()
    .min(0, "Minimum valueate is 0 ")
    .max(10, "Maximum valueate is 10")
    .required("*Valueate is Required"),
});

export default function AddLocation() {
  const history = useHistory();

  const dispatch = useDispatch();
  const { createLocation } = useSelector((state) => state.LocationReducer);
  const { enqueueSnackbar } = useSnackbar();
  const [image, setImage] = useState(null);
  const [activeStep, setActiveStep] = useState(0);
  const classes = useStyles({ image });
  const formik = useFormik({
    initialValues: {
      name: "",
      province: "",
      country: "",
      valueate: "",
      image: "",
    },
    validationSchema: schema,
    validateOnMount: true,
  });

  const data = {
    name: formik.values.name,
    province: formik.values.province,
    country: formik.values.country,
    valueate: formik.values.valueate,
  };

  const handleChangeFile = (e) => {
    formik.setFieldValue(e.target.name, e.target.files[0]);
    let file = e?.target?.files[0];
    if (
      file.type === "image/jpeg" ||
      file.type === "image/png" ||
      file.type === "image/jpg"
    ) {
      let reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = (e) => {
        setImage(e.target.result);
      };
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formik.isValid) {
      return enqueueSnackbar("Vui lòng nhập đầy đủ thông tin", {
        variant: "error",
      });
    }
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    dispatch(CreateLocationAction(data));
  };
  const handleImage = (e) => {
    e.preventDefault();
    if (!formik.isValid) {
      return enqueueSnackbar("Vui lòng chọn đúng định dạng hình ảnh", {
        variant: "error",
      });
    }
    const formData = new FormData();
    formData.append("location", formik.values.image);

    dispatch(
      postUploadImageAction(formData, createLocation._id, () =>
        setActiveStep((prevActiveStep) => prevActiveStep + 1)
      )
    );
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
    dispatch(deleteLocationAction(createLocation._id));
  };
  const handleReset = () => {
    setActiveStep(0);
  };
  const steps = ["THÊM VỊ TRÍ", "THÊM HÌNH ẢNH", "KẾT QUẢ"];
  return (
    <Container component="main" maxWidth="lg">
      <div className={classes.root}>
        <StepperBox activeStep={activeStep} steps={steps} />
      </div>
      {activeStep === 0 && (
        <div>
          <h1 className={classes.add_title}>Thêm vị trí</h1>
          <div className={classes.paper}>
            <form onSubmit={handleSubmit} className={classes.form} noValidate>
              <TextFieldComponent
                {...formik}
                label="Name"
                name="name"
                valueInput={formik.values.name}
                errorInput={formik.errors.name}
                touchedInput={formik.touched.name}
              />

              <TextFieldComponent
                {...formik}
                label="Province"
                name="province"
                valueInput={formik.values.province}
                errorInput={formik.errors.province}
                touchedInput={formik.touched.province}
              />

              <TextFieldComponent
                {...formik}
                label="Country"
                name="country"
                valueInput={formik.values.country}
                errorInput={formik.errors.country}
                touchedInput={formik.touched.country}
              />

              <TextFieldComponent
                {...formik}
                type="number"
                label="Valueate"
                name="valueate"
                valueInput={formik.values.valueate}
                errorInput={formik.errors.valueate}
                touchedInput={formik.touched.valueate}
              />
              <ButtonSubmit text="Thêm" handleSubmit={handleSubmit} />
            </form>
          </div>
        </div>
      )}
      {activeStep === 1 && (
        <Fragment>
          <div className={classes.upload__card}>
            <div className={classes.upload__card__content}>
              <label htmlFor="contained-button-file">
                <GetAppIcon className={classes.upload__card__icons} />
              </label>
              <input
                accept="image/*"
                id="contained-button-file"
                multiple
                type="file"
                name="image"
                onChange={handleChangeFile}
              />
              <label
                className={classes.upload__card__label}
                htmlFor="contained-button-file"
              >
                {image !== null
                  ? "Click change image"
                  : " Click choose a image"}
              </label>
            </div>
          </div>
          <Box className={classes.upload__card__btnContent}>
            <div>
              <Button
                onClick={handleBack}
                className={classes.upload__card__btnReset}
                color="primary"
              >
                Reset
              </Button>
            </div>
            <div>
              <ButtonSubmit handleSubmit={handleImage} text="Thêm ảnh" />
            </div>
          </Box>
        </Fragment>
      )}
      {activeStep === 2 && (
        <div>
          <div className={classes.completed}>Thêm vị trí thành công</div>

          <div className={classes.completedAdd}>
            <div>
              <Button
                onClick={handleReset}
                className={classes.upload__card__btnReset}
                color="primary"
              >
                Reset
              </Button>
            </div>
            <div>
              <ButtonSubmit
                handleSubmit={() => history.push("/admin/locations")}
                text="Hoàn thành"
              />
            </div>
          </div>
        </div>
      )}
    </Container>
  );
}
