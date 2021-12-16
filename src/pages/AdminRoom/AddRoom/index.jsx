import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  Typography,
} from "@material-ui/core";
import GetAppIcon from "@material-ui/icons/GetApp";
import { useFormik } from "formik";
import queryString from "query-string";
import React, { Fragment, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useLocation } from "react-router";
import * as yup from "yup";
import ButtonSubmit from "../../../components/ButtonSubmit";
import TextFieldComponent from "../../../components/Login/TextField";
import {
  AddRoomAction,
  UpdateImageRoomAction,
  DeleteRoomAction,
} from "../../../store/action/RentRoomsAction";
import StepperBox from "../../../components/StepperBox";
import useStyles from "./style";
import { useSnackbar } from "notistack";

const schema = yup.object().shape({
  name: yup.string().required("*Name is required"),
  price: yup
    .number()
    .required("*Price is required")
    .min(100000, "Minimum Price is 100000 ")
    .max(1000000, "Maximum Price is 1000000"),
  description: yup.string().required("*Description is required"),
  guests: yup
    .number()
    .required("*Guests is required")
    .min(0, "Minimum Guests is 0 ")
    .max(10, "Maximum Guests is 10"),
  bedRoom: yup
    .number()
    .required("*BedRoom is required")
    .min(0, "Minimum BedRoom is 0 ")
    .max(10, "Maximum BedRoom is 10"),
  bath: yup
    .number()
    .required("*Bath is required")
    .min(0, "Minimum Bath is 0 ")
    .max(10, "Maximum Bath is 10"),
});
const AddRoom = ({ handleToggleRoom }) => {
  const dispatch = useDispatch();
  const [image, setImage] = useState(null);
  const history = useHistory();
  const location = useLocation();
  const params = queryString.parse(location.search);
  const [fileData, setFileData] = useState({ image: null });
  const classes = useStyles({ image });
  const { newRoom } = useSelector((state) => state.RentRoomsReducer);
  const { enqueueSnackbar } = useSnackbar();

  const [checkbox, setCheckBox] = useState({
    elevator: false,
    hotTub: false,
    pool: false,
    indoorFireplace: false,
    dryer: false,
    gym: false,
    kitchen: false,
    wifi: false,
    heating: false,
    cableTV: false,
  });
  const handleChangeCheckBox = (event) => {
    setCheckBox({ ...checkbox, [event.target.name]: event.target.checked });
  };
  const formik = useFormik({
    validateOnMount: true,
    validationSchema: schema,
    initialValues: {
      name: "",
      price: "",
      nadescriptionme: "",
      guests: "",
      bedRoom: "",
      bath: "",
    },
  });
  const handleChangeFile = async (e) => {
    await setFileData({ image: e.target.files[0] });
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

  const handleAddRoom = (e) => {
    e.preventDefault();
    if (!formik.isValid) {
      return enqueueSnackbar("Vui lòng nhập đầy đủ thông tin", {
        variant: "error",
      });
    }
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    dispatch(
      AddRoomAction({
        ...formik.values,
        ...checkbox,
        locationId: params?.locationId,
      })
    );
  };
  const handleAddImage = () => {
    if (fileData.image === null) {
      return enqueueSnackbar("Vui lòng chọn hình ảnh", {
        variant: "error",
      });
    } else {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
      const formData = new FormData();
      formData.append("room", fileData.image);
      dispatch(
        UpdateImageRoomAction(newRoom?._id, formData, params?.locationId)
      );
    }
  };

  const steps = ["THÊM PHÒNG", "THÊM HÌNH ẢNH", "KẾT QUẢ"];

  const [activeStep, setActiveStep] = useState(0);

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
    dispatch(DeleteRoomAction(newRoom?._id, params?.locationId));
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <Fragment>
      <div className={classes.root}>
        <StepperBox steps={steps} activeStep={activeStep} />
      </div>
      {activeStep === 0 && (
        <form onSubmit={handleAddRoom}>
          <Typography variant="h4" align="center" color="primary">
            ADD NEW ROOM
          </Typography>

          <Box width="70%" margin="0 auto">
            <Box display="flex" justifyContent="space-between" mb={3}>
              <div>
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
                  type="number"
                  label="Price"
                  name="price"
                  valueInput={formik.values.price}
                  errorInput={formik.errors.price}
                  touchedInput={formik.touched.price}
                />
                <TextFieldComponent
                  {...formik}
                  label="Description"
                  name="description"
                  valueInput={formik.values.description}
                  errorInput={formik.errors.description}
                  touchedInput={formik.touched.description}
                />
              </div>

              <Box ml={4}>
                <TextFieldComponent
                  {...formik}
                  type="number"
                  label="Guests"
                  name="guests"
                  valueInput={formik.values.guests}
                  errorInput={formik.errors.guests}
                  touchedInput={formik.touched.guests}
                />
                <TextFieldComponent
                  {...formik}
                  type="number"
                  label="Bath Room"
                  name="bath"
                  valueInput={formik.values.bath}
                  errorInput={formik.errors.bath}
                  touchedInput={formik.touched.bath}
                />
                <TextFieldComponent
                  {...formik}
                  type="number"
                  label="Bed Room"
                  name="bedRoom"
                  valueInput={formik.values.bedRoom}
                  errorInput={formik.errors.bedRoom}
                  touchedInput={formik.touched.bedRoom}
                />
              </Box>
            </Box>

            <Box display="flex">
              <div>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={checkbox.elevator}
                      onChange={handleChangeCheckBox}
                      name="elevator"
                      color="primary"
                    />
                  }
                  label="Elevator"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={checkbox.hotTub}
                      onChange={handleChangeCheckBox}
                      name="hotTub"
                      color="primary"
                    />
                  }
                  label="Hot Tub"
                />
              </div>
              <div>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={checkbox.dryer}
                      onChange={handleChangeCheckBox}
                      name="dryer"
                      color="primary"
                    />
                  }
                  label="Dryer"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={checkbox.pool}
                      onChange={handleChangeCheckBox}
                      name="pool"
                      color="primary"
                    />
                  }
                  label="Pool"
                />
              </div>
              <div>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={checkbox.indoorFireplace}
                      onChange={handleChangeCheckBox}
                      name="indoorFireplace"
                      color="primary"
                    />
                  }
                  label="Indoor Fireplace"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={checkbox.gym}
                      onChange={handleChangeCheckBox}
                      name="gym"
                      color="primary"
                    />
                  }
                  label="Gym"
                />
              </div>
              <div>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={checkbox.kitchen}
                      onChange={handleChangeCheckBox}
                      name="kitchen"
                      color="primary"
                    />
                  }
                  label="Kitchen"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={checkbox.wifi}
                      onChange={handleChangeCheckBox}
                      name="wifi"
                      color="primary"
                    />
                  }
                  label="Wifi"
                />
              </div>
              <div>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={checkbox.heating}
                      onChange={handleChangeCheckBox}
                      name="heating"
                      color="primary"
                    />
                  }
                  label="Heating"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={checkbox.cableTV}
                      onChange={handleChangeCheckBox}
                      name="cableTV"
                      color="primary"
                    />
                  }
                  label="CableTV"
                />
              </div>
            </Box>
            <ButtonSubmit text="Tiếp tục" handleSubmit={handleAddRoom} />
          </Box>
        </form>
      )}

      {/* Add Image */}
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
              <ButtonSubmit handleSubmit={handleAddImage} text="Thêm ảnh" />
            </div>
          </Box>
        </Fragment>
      )}
      {activeStep === steps.length - 1 && (
        <div>
          <div className={classes.completed}>Thêm phòng thành công</div>
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
                handleSubmit={(e) => {
                  history.push({
                    pathname: "/admin/rooms/",
                    search: queryString.stringify({
                      locationId: params?.locationId,
                    }),
                  });
                  handleToggleRoom(e, ["9"]);
                }}
                text="Hoàn thành"
              />
            </div>
          </div>
        </div>
      )}
    </Fragment>
  );
};

export default AddRoom;
